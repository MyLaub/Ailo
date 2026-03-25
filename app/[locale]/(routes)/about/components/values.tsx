// import { useTranslations } from "next-intl";

// export default function Values() {
//   const t = useTranslations("about");

//   return (
//     <section className="section-space bg-(--darkred) text-background">
//       <div className="layout-grid">
//         <div className="label-col">
//           <p className="text-sm uppercase tracking-[0.08em]">{t("care.label")}</p>
//         </div>

//         <div className="content-col">
//           <p className="text-lg leading-snug md:text-xl">{t("care.body")}</p>
//         </div>

//         <div className="label-col pt-16 md:pt-20">
//           <p className="text-sm uppercase tracking-[0.08em]">{t("craft.label")}</p>
//         </div>

//         <div className="content-col pt-16 md:pt-20">
//           <p className="text-lg leading-snug md:text-xl">{t("craft.body")}</p>
//         </div>

//         <div className="label-col pt-16 md:pt-20">
//           <p className="text-sm uppercase tracking-[0.08em]">{t("clarity.label")}</p>
//         </div>

//         <div className="content-col pt-16 md:pt-20">
//           <p className="text-lg leading-snug md:text-xl">{t("clarity.body")}</p>
//         </div>
//       </div>
//     </section>
//   );
// }

import { useTranslations } from "next-intl";

const VALUE_IDS = ["care", "craft", "clarity"] as const;

export default function Values() {
  const t = useTranslations("about");

  return (
    <section className="layout-grid section-space bg-(--beige) text-(--darkbrown)">
      <div className="label-col pt-1">
        <p className="text-sm uppercase tracking-[0.08em] ">{t("values.label")}</p>
      </div>

      <div className="col-[content-middle/content-end]">
        <div className="grid gap-20 md:grid-cols-2 xl:grid-cols-3">
          {VALUE_IDS.map((id) => (
            <article key={id} className="flex h-full flex-col">
              <p className="mb-5 text-sm uppercase tracking-[0.08em] ">{t(`${id}.label`)}</p>

              <p className="text-md leading-[1.3] tracking-[-0.01em]  md:text-lg">{t(`${id}.body`)}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
