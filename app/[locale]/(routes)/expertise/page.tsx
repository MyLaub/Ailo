import Image from "next/image";
import {useTranslations} from "next-intl";
import OurApproach from "../expertise/components/ourapproach"

export default function Expertise() {
  const t = useTranslations("expertise");

  return (
    <main>
    <section className="layout-grid section-space">
      <div className="label-col pt-1">
        <p className="text-sm uppercase tracking-[0.08em] text-darkbrown">
          {t("label")}
        </p>
      </div>

      <div className="content-col min-w-0">
        <div className="grid gap-6 md:gap-8 lg:grid-cols-[minmax(0,1.9fr)_minmax(220px,1fr)] lg:items-start">
          <div className="overflow-hidden">
            <Image
              src="/images/expertise/network.jpg"
              alt={t("imageAltLeft")}
              width={1200}
              height={800}
              className="h-auto w-full object-cover"
            />
          </div>

          <div className="overflow-hidden">
            <Image
              src="/images/expertise/team.jpg"
              alt={t("imageAltRight")}
              width={700}
              height={900}
              className="h-auto w-full object-cover"
            />
          </div>
        </div>

        <div className="mt-8 md:mt-10">
          <p className="max-w-[40ch] text-2xl leading-[1.15] tracking-[-0.02em] text-darkbrown md:text-3xl lg:text-4xl">
            {t("body")}
          </p>
        </div>
      </div>
    </section>
    <OurApproach />
    </main>
  );
}