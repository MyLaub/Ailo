import {useTranslations} from 'next-intl';

export default function WhatWeDo() {
  const t = useTranslations('HomePage.WhatWeDo');

  return (
    <section className="layout-grid section-space lg:items-start">
      <div className="label-col">
        <p className="text-xs uppercase tracking-[0.08em] text-(--darkbrown)">
          {t('label')}
        </p>
      </div>

      <div className="content-col">
        <p className="text-(--darkbrown) text-lg leading-[1.35] md:text-xl">
          {t('body')}
        </p>
      </div>
    </section>
  );
}