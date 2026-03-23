import {useTranslations} from 'next-intl';

export default function WhatWeDo() {
  const t = useTranslations("WhatWeDo");

  return (
    // <section className="layout-grid section-space lg:items-start">
    //   <div className="label-col">
    //     <p className="text-sm md:text-base uppercase tracking-[0.08em] text-(--darkbrown)">
    //       {t('label')}
    //     </p>
    //   </div>

    //   <div className="content-col">
    //     
    //     <p className="text-(--darkbrown) text-lg leading-[1.35] md:text-xl">
    //       {t('body')}
    //     </p>
    //     
    //   </div>
    // </section>

        <section className="layout-grid section-space lg:items-start">
      <div className="label-col">
        <p className="text-sm md:text-base uppercase tracking-[0.08em] text-(--darkbrown)">
          {t('label')}
        </p>
      </div>

      <div className="content-col">
        <div className="content-split">
        <p className="text-2xl leading-[1.15] tracking-[-0.02em] text-(--darkbrown) md:text-3xl lg:text-4xl text-right col-start-2">
          {t('body')}
        </p>
        </div>
      </div>
    </section>
  );
}