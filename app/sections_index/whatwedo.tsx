// import {useTranslations} from 'next-intl';
// import Image from "next/image";

// export default function WhatWeDo() {
//   const t = useTranslations("WhatWeDo");

//   return (
   
//     //     <section className="layout-grid section-space lg:items-start">
//     //   <div className="label-col">
//     //     <p className="text-sm md:text-base uppercase tracking-[0.08em] text-(--darkbrown)">
//     //       {t('label')}
//     //     </p>
//     //   </div>

//     //   <div className="content-col">
//     //     <div className="content-split">
//     //     <p className="text-2xl leading-[1.15] tracking-[-0.02em] text-(--darkbrown) md:text-3xl lg:text-4xl text-right col-start-2">
//     //       {t('body')}
//     //     </p>
//     //     </div>
//     //   </div>
//     // </section>

//     <section className="layout-grid section-space bg-(--beige) text-(--darkbrown)">
//   <div className="label-col">
//     <p className="text-sm uppercase tracking-[0.08em]">
//       {t("label")}
//     </p>
//   </div>

//   <div className="content-col">
//             <div className="grid grid-cols-1 gap-10 xl:grid-cols-[1fr_2fr] xl:items-start">

//       <div />

//       <div className="flex flex-col items-start">
//         <h2 className="text-2xl leading-[1.15] tracking-[-0.02em] md:text-3xl lg:text-4xl">
//           {t("body")}
//         </h2>

//         <div className="mt-12 w-40">
//           <div className="aspect-4/5 overflow-hidden">
//             <Image
//               src="/images/group-portraits/group-index.webp"
//               alt={t("imageAlt")}
//               width={240}
//               height={300}
//               className="h-full w-full object-cover"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </section>
//   );
// }



import { useTranslations } from "next-intl";
import Image from "next/image";

export default function WhatWeDo() {
  const t = useTranslations("WhatWeDo");

  return (
    <section className="layout-grid section-space bg-(--beige) text-(--darkbrown)">

      {/* label */}
      <div className="label-col">
        <p className="text-sm uppercase tracking-[0.08em] md:text-base">
          {t("label")}
        </p>
      </div>

{/* text + image col */}
      <div className="col-[content-start/content-end]">
        <div className="grid md:grid-cols-2 ">
          <div className="hidden xl:block" />

          <div className="grid justify-items-start gap-12">
            <h2 className="text-2xl leading-[1.15] tracking-[-0.02em] md:text-3xl lg:text-4xl text-right">
              {t("body")}
            </h2>

            <div className="w-32 md:w-36 lg:w-40">
              <div className="aspect-[4/5] overflow-hidden">
                <Image
                  src="/images/group-portraits/group-index.webp"
                  alt={t("imageAlt")}
                  width={240}
                  height={300}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

