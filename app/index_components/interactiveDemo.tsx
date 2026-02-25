"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";

type Step = {
  id: string;
  prompt: string;
  lines: string[];
  img: string;
  cta?: boolean;
};

const STEPS: Step[] = [
  {
    id: "1",
    prompt: "Where does all the data actually come from?",
    lines: [
      "We connect directly to your systems (Google, Meta, webshop, etc.)",
      "All data is pulled automatically via secure APIs",
      "Nothing is changed or filtered at this stage",
      "We store everything exactly as it comes in",
      "This creates a complete and reliable foundation",
    ],
    img: "/demo/demo1.png",
  },
  {
    id: "2",
    prompt: "How do you make data from different systems work together?",
    lines: [
      "We clean up inconsistent data",
      "We make sure dates and time zones match",
      "We align naming and formats across platforms",
      "We connect marketing data with sales data",
      "Now everything speaks the same language",
    ],
    img: "/demo/demo2.png",
  },
  {
    id: "3",
    prompt: "How do we ensure everyone sees the same numbers?",
    lines: [
      "We define exactly how each KPI is calculated",
      "Important metrics are pre-calculated centrally",
      "There is one agreed definition of each number",
      "Reports always use the same logic",
      "Your dashboards connect directly to this layer",
      "",
      "Imagine having this foundation in your own organisation.",
    ],
    img: "/demo/demo3.png",
    cta: true,
  },
];

type Msg =
  | { id: string; kind: "prompt"; text: string }
  | { id: string; kind: "line"; text: string }
  | { id: string; kind: "image"; src: string }
  | { id: string; kind: "cta" };

function uid(prefix = "m") {
  return `${prefix}_${Math.random().toString(16).slice(2)}_${Date.now()}`;
}

function useTypewriter(text: string, speed = 18, delay = 250) {
  const [value, setValue] = useState("");
  const [done, setDone] = useState(false);
  const target = useMemo(() => text ?? "", [text]);

  useEffect(() => {
    setValue("");
    setDone(false);

    const start = setTimeout(() => {
      let i = 0;
      const tick = setInterval(() => {
        i += 1;
        setValue(target.slice(0, i));
        if (i >= target.length) {
          clearInterval(tick);
          setDone(true);
        }
      }, speed);

      return () => clearInterval(tick);
    }, delay);

    return () => clearTimeout(start);
  }, [target, speed, delay]);

  return { value, done };
}

type Phase = "typing" | "idle" | "running";

export default function InteractiveDemoRunOnlyWithLog() {
  const [stepIndex, setStepIndex] = useState(0);

  // persistent log
  const [log, setLog] = useState<Msg[]>([]);
  const [phase, setPhase] = useState<Phase>("typing");

  // how many processing lines have we revealed for current run
  const [visibleLines, setVisibleLines] = useState(0);

  const timerRef = useRef<number | null>(null);
  const bottomRef = useRef<HTMLDivElement | null>(null);

  const step = STEPS[stepIndex];

  // Typewriter for CURRENT input prompt (not the log)
  const { value: inputText, done: inputDone } = useTypewriter(step.prompt, 18, 300);

  const clearTimer = () => {
    if (timerRef.current) window.clearTimeout(timerRef.current);
    timerRef.current = null;
  };

  const scrollToBottom = () => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  };

  // When prompt finishes typing, allow Run
  useEffect(() => {
    if (phase === "typing" && inputDone) setPhase("idle");
  }, [phase, inputDone]);

  // Auto-scroll when log grows or lines reveal
  useEffect(() => {
    scrollToBottom();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [log, visibleLines]);

  // Cleanup on unmount
  useEffect(() => () => clearTimer(), []);

  const startRun = () => {
    if (phase !== "idle") return;

    setPhase("running");
    setVisibleLines(0);

    // 1) append the prompt bubble to the log (once per run)
    setLog((prev) => [...prev, { id: uid("p"), kind: "prompt", text: step.prompt }]);

    // 2) reveal processing lines one by one (and append to log)
    const revealLine = (i: number) => {
      setVisibleLines(i);

      if (i <= step.lines.length) {
        const lineText = step.lines[i - 1];
        setLog((prev) => [...prev, { id: uid("l"), kind: "line", text: lineText }]);
      }

      if (i < step.lines.length) {
        timerRef.current = window.setTimeout(() => revealLine(i + 1), 550);
      } else {
        // 3) show result image, then auto-advance to next prompt (NO Next click)
        timerRef.current = window.setTimeout(() => {
          setLog((prev) => {
            const next = [...prev, { id: uid("img"), kind: "image", src: step.img }];

            // ✅ Add CTA at the end if this step has cta: true
            if (step.cta) next.push({ id: uid("cta"), kind: "cta" });

            return next;
          });

          // ✅ If CTA step: stop here (no auto-next)
          if (step.cta) {
            setPhase("idle");
            setVisibleLines(0);
            return;
          }

          // after image appears, wait a bit, then move to next step and start typing
          timerRef.current = window.setTimeout(() => {
            setStepIndex((n) => (n + 1) % STEPS.length);
            setPhase("typing");
            setVisibleLines(0);
          }, 900);
        }, 450);
      }
    };

    timerRef.current = window.setTimeout(() => revealLine(1), 350);
  };

  return (
    <section className="w-full py-24">
      <div className="mx-auto w-300 max-w-full px-6">
        <div className="overflow-hidden rounded-[28px] border bg-[#f7f6f4] shadow-sm">
          <div className="h-140 w-full">
            <div className="flex h-full flex-col">
              {/* Scrollable "screen" with persistent log */}
              <div className="flex-1 overflow-y-auto px-10 pt-10">
                <div className="space-y-4">
                  <AnimatePresence initial={false}>
                    {log.map((m) => {
                      if (m.kind === "prompt") {
                        return (
                          <motion.div
                            key={m.id}
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="flex justify-end"
                          >
                            <div className="max-w-130 rounded-2xl bg-lime-400 px-5 py-4 text-sm text-black/90">
                              {m.text}
                            </div>
                          </motion.div>
                        );
                      }

                      if (m.kind === "line") {
                        return (
                          <motion.div
                            key={m.id}
                            initial={{ opacity: 0, y: 6 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="flex items-center gap-2 text-sm text-black/60"
                          >
                            <span className="inline-block h-2 w-2 rounded-full bg-lime-400" />
                            <span>{m.text}</span>
                          </motion.div>
                        );
                      }

                      if (m.kind === "cta") {
                        return (
                          <motion.div
                            key={m.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="overflow-hidden rounded-2xl border bg-white"
                          >
                            <div className="p-6">
                              <div className="text-lg font-semibold text-black">
                                Want to see this set up for your business?
                              </div>
                              <div className="mt-2 text-sm text-black/60">
                                Book a consultation and we’ll map out the process together.
                              </div>

                              <a
                                href="/contact"
                                className="mt-4 inline-flex items-center justify-center rounded-full bg-lime-400 px-6 py-3 text-sm font-medium text-black hover:opacity-90"
                              >
                                Book a consultation
                              </a>
                            </div>
                          </motion.div>
                        );
                      }

                      // image
                      return (
                        <motion.div
                          key={m.id}
                          initial={{ opacity: 0, y: 10, filter: "blur(2px)" }}
                          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.35 }}
                          className="overflow-hidden rounded-2xl border bg-white"
                        >
                          <div className="relative aspect-video w-full">
                            <Image
                              src={m.src}
                              alt=""
                              fill
                              className="object-cover"
                              sizes="(max-width: 1200px) 100vw, 1200px"
                              draggable={false}
                            />
                          </div>
                        </motion.div>
                      );
                    })}
                  </AnimatePresence>

                  <div ref={bottomRef} className="h-8" />
                </div>
              </div>

              {/* Fixed input bar (only shows current prompt being typed) */}
              <div className="border-t border-black/10 bg-white/60 p-4 backdrop-blur">
                <div className="mx-auto flex w-full max-w-4xl items-center gap-4">
                  <div className="flex-1 rounded-2xl bg-white px-5 py-4 text-sm text-black/80 shadow-inner">
                    {inputText}
                    {phase === "typing" && <span className="ml-1 animate-pulse">▍</span>}
                  </div>

                  <button
                    type="button"
                    onClick={startRun}
                    disabled={phase !== "idle"}
                    className="rounded-full bg-lime-400 px-7 py-4 text-sm font-medium text-black disabled:opacity-40"
                  >
                    Run
                  </button>
                </div>

                {phase === "idle" && (
                  <div className="mt-2 text-right text-xs text-black/40">
                    Click Run to see the result
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
