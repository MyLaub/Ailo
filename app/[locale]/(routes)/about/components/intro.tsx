// import Image from "next/image";
// import { useTranslations } from "next-intl";

// export default function Intro() {
//   const t = useTranslations("about");

//   return (
//     <section className="layout-grid section-space">
//       <div className="label-col">
//         <p className="text-sm uppercase tracking-[0.08em] text-(--darkbrown)">{t("label")}</p>
//       </div>

//       <div className="content-col">
//         <div className="aspect-3/2 overflow-hidden">
//           <Image
//             src="/images/group-portraits/group-expertise1.webp"
//             alt={t("imageAltLeft")}
//             width={1200}
//             height={800}
//             className="h-full w-full object-cover"
//           />
//         </div>
//       </div>

//       <div className="col-[content-middle/content-end] pt-8 md:pt-10">
//         <p className="text-2xl leading-tight text-darkbrown md:text-3xl lg:text-4xl">
//           {t("intro")}
//         </p>
//       </div>
//     </section>
//   );
// }

import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Intro() {
  const t = useTranslations("about");

  return (
    <section className="layout-grid section-space">
      <div className="label-col">
        <p className="text-sm uppercase tracking-[0.08em] text-(--darkbrown)">{t("approach.label")}</p>
      </div>

      <div className="content-col content-split lg:items-end">
        <div className="order-2 lg:order-1">
          <div className="w-32 md:w-40 lg:w-48">
            <div className="aspect-4/5 overflow-hidden">
              <Image
                src="/images/group-portraits/group-index.webp"
                alt={t("approach.imageAlt")}
                width={800}
                height={1000}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="order-1 text-left lg:order-2 lg:text-right">
          <h2 className="text-2xl leading-[1.15] tracking-[-0.02em] text-(--darkbrown) md:text-3xl lg:text-4xl">
            {t("approach.bodyPrimary")}
          </h2>
        </div>
      </div>

      <div className="content-col content-split lg:items-end pt-8">
        <p className="text-(--darkbrown) text-lg leading-[1.35] md:text-xl">
          {t("approach.bodySecondary")}
        </p>
      </div>
    </section>
  );
}
