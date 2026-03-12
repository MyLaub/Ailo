"use client";

import {useEffect, useRef} from "react";
import {useTranslations} from "next-intl";
import CaseCard from "./casecard";
import {cases} from "@/data/casedata"

export default function CaseExample() {
  const t = useTranslations("cases.items");
  const sectionRef = useRef<HTMLElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const pausedRef = useRef(false);
  const inViewRef = useRef(false);
  const indexRef = useRef(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        inViewRef.current = entry.isIntersecting;
      },
      {
        threshold: 0.35,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const interval = setInterval(() => {
      if (pausedRef.current || !inViewRef.current) return;
      if (document.hidden) return;

      const cards = Array.from(
        track.querySelectorAll<HTMLElement>("[data-case-slide]")
      );

      if (!cards.length) return;

      indexRef.current = (indexRef.current + 1) % cards.length;

      track.scrollTo({
        left: cards[indexRef.current].offsetLeft,
        behavior: "smooth",
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={sectionRef} className="layout-grid section-space">
      <div className="case-strip">
        <div
          ref={trackRef}
          onMouseEnter={() => {
            pausedRef.current = true;
          }}
          onMouseLeave={() => {
            pausedRef.current = false;
          }}
          className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto pr-4 md:gap-6 md:pr-8"
        >
          {cases.map((item) => (
            <div key={item.id} data-case-slide className="shrink-0 snap-start">
              <CaseCard

                title={t(`${item.id}.title`)}
                subtitle={t(`${item.id}.subtitle`)}
                tags={t.raw(`${item.id}.tags`) as string[]}
                backgroundImage={item.backgroundImage}
                foregroundImage={item.foregroundImage}
                href={item.href}
                
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}