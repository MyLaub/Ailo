

import { useTranslations } from "next-intl";

const TESTIMONIAL_IDS = ["emma", "oliver", "morten"] as const;

export default function TestimonialsGrid() {
  const t = useTranslations("Testimonials");

  return (
    <section className="layout-grid section-space mb-10">
      {/* <div className="col-[content-middle/content-end] grid md:grid-cols-2 xl:grid-cols-2"> */}
         <div className="label-col pt-1">
          <p className="text-sm uppercase tracking-[0.08em] ">testimonials</p>
        </div>
      <div className="col-[content-middle/content-end]">
        <div className="grid gap-20 md:grid-cols-2 xl:grid-cols-3 ">
          {TESTIMONIAL_IDS.map((id) => (
            <article className="flex h-full flex-col">
              <p className="text-md leading-[1.3] tracking-[-0.01em] text-(--darkbrown) md:text-lg mb-5 ">“{t(`items.${id}.quote`)}”</p>

              <div className="mt-auto pt-8">
                <p className="text-sm text-(--darkbrown)">{t(`items.${id}.name`)}</p>

                <p className="text-sm uppercase tracking-[0.08em] text-(--darkbrown)/60">{t(`items.${id}.company`)}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
