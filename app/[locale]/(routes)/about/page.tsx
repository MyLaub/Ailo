import Image from "next/image";
import { useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations();

  const valuesBody = t.raw("values.body") as string[];

  return (
    <main>
      <section className="layout-grid section-space">
        <div className="label-col pt-1">
          <p className="text-sm uppercase tracking-[0.08em] text-darkbrown">{t("label")}</p>
        </div>

        <div className="content-col">
          <div className="gap-4 md:gap-6 lg:gap-8">
            <div className="aspect-3/2 h-55 overflow-hidden md:h-[320px] lg:h-[420px]">
              <Image src="/images/group-portraits/group-expertise1.webp" alt={t("imageAltLeft")} width={1200} height={800} className="h-full w-full object-cover" />
            </div>
          </div>
        </div>

        <div className="col-[content-middle/content-end] mt-8 md:mt-10">
          <p className="text-2xl leading-[1.15] tracking-[-0.02em] text-darkbrown md:text-3xl lg:text-4xl">{/* Der findes IKKE en "body" i din JSON endnu */}</p>
        </div>
      </section>

      <section className="bg-(--darkred) text-background section-space">
  <div className="layout-grid lg:items-start">
    {/* Mission */}
    <div className="label-col">
      <p className="text-sm md:text-base uppercase tracking-[0.08em]">
        {t("mission.label")}
      </p>
    </div>

    <div className="content-col">
      <p className="text-lg leading-[1.35] md:text-xl">
        {t("mission.body")}
      </p>
    </div>

    {/* Values */}
    <div className="label-col mt-16 md:mt-20">
      <p className="text-sm md:text-base uppercase tracking-[0.08em]">
        {t("values.label")}
      </p>
    </div>

    <div className="content-col mt-16 md:mt-20">
      <div className="space-y-5 md:space-y-6">
        {valuesBody.map((paragraph, index) => (
          <p key={index} className="text-lg leading-[1.35] md:text-xl">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  </div>
</section>
    </main>
  );
}
