"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslations } from "next-intl";

// setting the steps anchor menu as a constant array
const STEPS_MENU = ["explore", "build", "sustain"] as const;

export default function Approach() {
  // fetch translations from expertise.json, using the "approach" namespace
  const t = useTranslations("approach");
  const [activeIndex, setActiveIndex] = useState(0);

  const steps = useMemo(
    () =>
      STEPS_MENU.map((id, index) => ({
        // using the id from the step menu
        id,

        //   formatting the step number as (01), (02), etc.
        number: `(${String(index + 1).padStart(2, "0")})`,

        //   title from json
        title: t(`items.${id}.title`),

        //   body from json. Body is an array of paragraphs, so we use t.raw to get the raw value and assert it as string[]
        body: t.raw(`items.${id}.body`) as string[],
      })),
    [t],
  );

  // using useEffect bc we want to set up an interval that changes the active step every XYZ seconds
  useEffect(() => {
    // setInterval runs funcition every 10 seconds (example) + stepgs.legth to ensure it loops
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % steps.length);
    }, 10000);

    // clearInterval is important when using useEffect! do not remove.
    return () => clearInterval(interval);
  }, [steps.length]);
  // creating a const for activeStep which is the step object from the steps array at the activeIndex position. If activeIndex=0, it will be "explore" and so on...
  const activeStep = steps[activeIndex];

  //   const for next step button, which adds +1 to activeIndex, and loops back to 0 when reaching the end of the array
  const nextStep = () => {
    setActiveIndex((prev) => (prev + 1) % steps.length);
  };

  return (
  <section
    className="section-full"
    style={{ backgroundColor: "var(--beige)" }}
  >
    <div className="section-space flex min-h-[720px] flex-col lg:min-h-[820px]">
      <div className="layout-grid">
        <div className="label-col flex flex-col gap-10 lg:gap-16">
          <p className="text-sm uppercase tracking-[0.08em] text-darkbrown">
            {t("label")}
          </p>

          <nav aria-label={t("label")} className="flex flex-col gap-5 lg:gap-6">
            {steps.map((step, index) => {
              const isActive = index === activeIndex;

              return (
                <button
                  key={step.id}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className="group flex items-baseline gap-4 text-left"
                >
                  <div className="flex flex-col items-start text-xs uppercase tracking-[0.08em] text-darkbrown">
                    <span
                      className={`leading-none ${
                        isActive ? "font-semibold" : "font-normal"
                      }`}
                    >
                      {step.number}
                    </span>

                    {index !== steps.length - 1 && (
                      <span className="mt-4 h-12 w-px bg-black" />
                    )}
                  </div>

                  <span
                    className={`text-xs uppercase tracking-[0.08em] text-darkbrown leading-none ${
                      isActive ? "font-semibold" : "font-normal"
                    }`}
                  >
                    {step.title}
                  </span>
                </button>
              );
            })}
          </nav>
        </div>

        <div className="content-col">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep.id}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 }}
              transition={{ duration: 0.9, ease: "easeInOut" }}
            >
              <p className="text-2xl font-light text-darkbrown md:text-3xl lg:text-4xl">
                {activeStep.number}
              </p>

              <h3 className="mt-6 text-sm uppercase tracking-[0.08em] text-darkbrown">
                {activeStep.title}
              </h3>

              <div className="mt-10 space-y-8">
                {activeStep.body.map((paragraph: string, i: number) => (
                  <p
                    key={i}
                    className="text-(--darkbrown) text-lg leading-[1.35] md:text-xl"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="layout-grid mt-auto pt-12 lg:pt-20">
        <div className="col-[content-start/content-end] grid grid-cols-[1fr_auto_1fr] items-center">
          <div></div>

          <div className="flex justify-center gap-3">
            {steps.map((step, index) => {
              const isActive = index === activeIndex;

              return (
                <button
                  key={step.id}
                  type="button"
                  aria-label={`${t("goTo")} ${step.title}`}
                  onClick={() => setActiveIndex(index)}
                  className={`h-1.5 w-1.5 rounded-full bg-(--darkbrown) transition-opacity duration-300 ${
                    isActive ? "opacity-100" : "opacity-30"
                  }`}
                />
              );
            })}
          </div>

          <div className="flex justify-end">
            <button
              type="button"
              onClick={nextStep}
              aria-label={t("next")}
              className="text-xl text-darkbrown"
            >
              <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
);}

//   return (
//     <section
//       className="section-full"
//       //   setting background color for the section
//       style={{ backgroundColor: "var(--beige)" }}
//     >
//       {/* layout-grid (grid layout) is a custom class in globals.css + same w. section-space (this is to ensure vertical padding is aligned) */}
//       <div className="layout-grid section-space">
//         {/* label-col class bc. i want the label in the left side of my grid system ALWAYS, rest is flex for obvious reasons */}
//         <div className="label-col flex flex-col gap-10 lg:gap-16">
//           {/* LABEL - always same styling */}
//           <p className="text-sm uppercase tracking-[0.08em] text-darkbrown">{t("label")}</p>

//           {/* NAVIGATION (menu) for our anchor menu in the left side of the grid system (in label-col) */}
//           <nav aria-label={t("label")} className="flex flex-col gap-5 lg:gap-6">
//             {steps.map((step, index) => {
//               // isActive is a boolean that checks if the current index in the map function is the same as the activeIndex state. This is used to apply different styles to the active step in the menu.
//               const isActive = index === activeIndex;

//               return (
//                 <button key={step.id} type="button" onClick={() => setActiveIndex(index)} className="group flex items-baseline gap-4 text-left">
//                   <div className="flex flex-col items-start text-xs uppercase tracking-[0.08em] text-darkbrown">
//                     <span className={`text-xs uppercase tracking-[0.08em] text-darkbrown leading-none ${isActive ? "font-semibold" : "font-normal"}`}>{step.number}</span>

//                     {index !== steps.length - 1 && <span className="mt-4 h-12 w-px bg-black transition-opacity duration-300" />}
//                   </div>

//                   <span className={`text-xs uppercase tracking-[0.08em] text-darkbrown leading-none transition-opacity duration-300 ${isActive ? "font-semibold" : "font-normal"}`}>{step.title}</span>
//                 </button>
//               );
//             })}
//           </nav>
//         </div>

//      <div className="content-col">
//   <div className="flex flex-col">
//     <AnimatePresence mode="wait">
//       <motion.div
//         key={activeStep.id}
//         initial={{ opacity: 0, x: 24 }}
//         animate={{ opacity: 1, x: 0 }}
//         exit={{ opacity: 0, x: -24 }}
//         transition={{ duration: 0.9, ease: "easeInOut" }}
//       >
//         <p className="text-2xl font-light text-darkbrown md:text-3xl lg:text-4xl">
//           {activeStep.number}
//         </p>

//         <h3 className="mt-6 text-sm uppercase tracking-[0.08em] text-darkbrown">
//           {activeStep.title}
//         </h3>

//         <div className="mt-10 space-y-8">
//           {activeStep.body.map((paragraph: string, i: number) => (
//             <p
//               key={i}
//               className="text-lg leading-[1.18] tracking-[-0.01em] text-darkbrown md:text-xl"
//             >
//               {paragraph}
//             </p>
//           ))}
//         </div>
//       </motion.div>
//     </AnimatePresence>
//   </div>
// </div>

// <div className="col-[content-start/full-end] mt-12 grid grid-cols-[1fr_auto_1fr] items-center lg:mt-20">
//   <div></div>

//   <div className="flex justify-center gap-3">
//     {steps.map((step, index) => {
//       const isActive = index === activeIndex;

//       return (
//         <button
//           key={step.id}
//           type="button"
//           aria-label={`${t("goTo")} ${step.title}`}
//           onClick={() => setActiveIndex(index)}
//           className={`h-2.5 w-2.5 rounded-full bg-black transition-opacity duration-300 ${
//             isActive ? "opacity-100" : "opacity-30"
//           }`}
//         />
//       );
//     })}
//   </div>

//   <div className="flex justify-end">
//     <button
//       type="button"
//       onClick={nextStep}
//       aria-label={t("next")}
//       className="text-xl text-darkbrown"
//     >
//       <span aria-hidden="true">→</span>
//     </button>
//   </div>
// </div>
// </div>
//     </section>
//   );
// }
