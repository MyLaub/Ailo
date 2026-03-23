// "use client";

// import { useEffect, useState } from "react";
// import { useTranslations } from "next-intl";
// import { AnimatePresence, motion } from "framer-motion";
// import { testimonialIds } from "@/data/testimonials";

// export default function Testimonials() {
//   const t = useTranslations("Testimonials");
//   const [activeIndex, setActiveIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveIndex((prev) => (prev + 1) % testimonialIds.length);
//     }, 5000);

//     return () => clearInterval(interval);
//   }, []);

//   const activeId = testimonialIds[activeIndex];

//   const goToNext = () => {
//     setActiveIndex((prev) => (prev + 1) % testimonialIds.length);
//   };

//   const goToSlide = (index: number) => {
//     setActiveIndex(index);
//   };

//   return (
//    <section className="section-full bg-(--armygreen) text-white">
//   <div className="layout-grid py-10 md:py-14 lg:py-16">
//     <div className="content-col">
//       <div className="relative h-55 overflow-hidden md:h-60 lg:h-40">
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={activeId}
//             initial={{ opacity: 0, x: 24 }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, x: -24 }}
//             transition={{ duration: 0.9, ease: "easeInOut" }}
//             className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-8"
//           >
//             <div>
//               <p className="text-xl font-normal leading-[1.12]  md:text-xl lg:text-xl">
//                 {t(`items.${activeId}.quote`)}
//               </p>
//             </div>

//             <div className="flex min-w-0 flex-col justify-center self-end lg:items-start">
//               <p className="text-xs tracking-[0.08em] text-white md:text-sm">
//                 {t(`items.${activeId}.name`)}
//               </p>

//               <p className="mt-3 text-sm uppercase tracking-[0.08em] text-white md:text-base">
//                 {t(`items.${activeId}.company`)}
//               </p>
//             </div>
//           </motion.div>
//         </AnimatePresence>
//       </div>
//     </div>
//   </div>
// </section>
// )}

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
              <p className="font-light text-md leading-[1.3] tracking-[-0.01em] text-(--darkbrown) md:text-lg mb-5 ">“{t(`items.${id}.quote`)}”</p>

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
