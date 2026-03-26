"use client";

import {useEffect, useRef} from "react";
import {useTranslations} from "next-intl";
import CaseCard from "./casecard";
import {cases} from "@/data/casedata"
import { Link } from "@/intl/navigation";

export default function CaseExample() {
  const t = useTranslations("cases");
  const itemsT = useTranslations("cases.items");
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
          <div className="label-col">
        <h2 className="text-2xl leading-[0.85] tracking-[-0.02em] text-(--darkbrown) md:text-3xl lg:text-6xl whitespace-pre-line">
          {t('label')}
        </h2>
      </div>
      <div className="content-col flex items-end justify-start pt-6 lg:justify-end lg:pt-0">
        <Link
          href="/cases"
          className="text-sm text-(--darkbrown)"
        >
          {t("allCases")} <span aria-hidden="true">→</span>
        </Link>
      </div>
      <div className="case-strip pt-4">
        <div
          ref={trackRef}
          onMouseEnter={() => {
            pausedRef.current = true;
          }}
          onMouseLeave={() => {
            pausedRef.current = false;
          }}
           style={{ touchAction: "pan-x" }}
          className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto overflow-y-hidden pr-4 md:gap-6 md:pr-8"
        >
          {cases.map((item) => (
            <div key={item.id} data-case-slide className="shrink-0 snap-start">
              <CaseCard

                title={itemsT(`${item.id}.title`)}
                subtitle={itemsT(`${item.id}.subtitle`)}
                tags={itemsT.raw(`${item.id}.tags`) as string[]}
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