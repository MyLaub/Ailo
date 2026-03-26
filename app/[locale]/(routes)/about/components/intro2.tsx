import Image from "next/image";
import { useTranslations } from "next-intl";

export default function AboutApproach() {
  const t = useTranslations("about.approach");

  return (
    <section className="layout-grid section-space text-(--darkbrown)">
      <div className="col-[content-start/content-end]">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[3fr_1fr] pb-20">
          <h2 className="text-2xl leading-[1.15] tracking-[-0.02em] text-(--darkbrown) md:text-3xl lg:text-4xl col-start-1">{t("bodyPrimary")}</h2>
        </div>
      </div>

      <div className="label-col">
        <p className="text-sm uppercase tracking-[0.08em] md:text-base">{t("label")}</p>
      </div>

      <div className="content-col ">
        {/* <div>
              <div className="aspect-[4/5] w-full max-w-[190px] overflow-hidden md:max-w-[220px] lg:max-w-[240px]">
                <Image src="/images/group-portraits/group-index.webp" alt={t("imageAlt")} width={480} height={600} className="h-full w-full object-cover" />
              </div>
            </div>

            <div
              className="col-[content-start/content-end] section-space">
                <div className="grid grid-cols-1 gap-10 md:grid-cols-[1fr_1fr_1fr] ">
              <p className="max-w-[24ch] text-xl leading-[1.08] tracking-[-0.02em] md:text-2xl">{t("bodyPrimary")}</p>
              <p className="max-w-[24ch] text-xl leading-[1.08] tracking-[-0.02em] md:text-2xl">{t("bodySecondary")}</p>
              </div> */}

        <div className="aspect-4/5 w-full max-w-47 overflow-hidden md:max-w-55 lg:max-w-60 ">
          <Image src="/images/group-portraits/group-index.webp" alt={t("imageAlt")} width={480} height={600} className="h-full w-full object-cover" />
        </div>

        <div className="col-[content-middle/content-end] pt-20">
          <div className="grid gap-20 grid-cols-1 lg:grid-cols-3">
            <p className="text-md leading-[1.3] tracking-[-0.01em]  md:text-lg">{t("bodyPrimary")}</p>
            <p className="text-md leading-[1.3] tracking-[-0.01em]  md:text-lg">{t("bodySecondary")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
