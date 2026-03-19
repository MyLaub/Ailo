import Image from "next/image";
import { useTranslations } from "next-intl";
import OurApproach from "../expertise/components/ourapproach";

// setting the service points of presence as a constant array - not nessarily needed but it makes it easier to maintain and update in the future if needed
const SERVICE_IDS = ["connect", "surface", "predict", "deploy"] as const;

export default function Expertise() {
  const expertiseT = useTranslations("expertise");
  const servicesT = useTranslations("services");

  return (
    <main>
   <section className="layout-grid section-space">
  <div className="label-col pt-1">
    <p className="text-sm uppercase tracking-[0.08em] text-darkbrown">
      {expertiseT("label")}
    </p>
  </div>

  <div className="content-col">
    <div className="grid grid-cols-[5fr_3fr] gap-4 md:gap-6 lg:gap-8">
      <div className="h-55 overflow-hidden md:h-[320px] lg:h-[420px]">
        <Image
          src="/images/expertise/expertise_hero1.webp"
          alt={expertiseT("imageAltLeft")}
          width={1200}
          height={800}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="h-[220px] overflow-hidden md:h-[320px] lg:h-[420px]">
        <Image
          src="/images/expertise/services.webp"
          alt={expertiseT("imageAltRight")}
          width={700}
          height={900}
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  </div>

  <div className="col-[content-middle/content-end] mt-8 md:mt-10">

  {/* RET TEKST HER!!!  */}
    <p className="text-2xl leading-[1.15] tracking-[-0.02em] text-darkbrown md:text-3xl lg:text-4xl">
      {expertiseT("body")}
    </p>
  </div>
</section>

      <OurApproach />

      <section className="section-full">
        <div className="layout-grid section-space">
          <div className="label-col pt-1">
            <p className="text-sm uppercase tracking-[0.08em] text-darkbrown">{servicesT("label")}</p>
          </div>

          <div className="content-col">
            <div className="grid gap-10 md:grid-cols-2 lg:gap-12">
              <div className="md:col-start-1">
                <p className="text-(--darkbrown) text-lg leading-[1.35] md:text-xl">{servicesT("intro")}</p>

                <div className="mt-10 aspect-4/5 w-full overflow-hidden lg:mt-14">
                  <Image src="/images/expertise/services.webp" alt={servicesT("imageAlt")} width={700} height={875} className="h-full w-full object-cover" />
                </div>
              </div>

              <div className="space-y-10 lg:space-y-12 md:col-start-2">
                {SERVICE_IDS.map((id) => (
                  <div key={id}>
                    <h3 className="text-sm uppercase tracking-[0.08em] text-darkbrown">{servicesT(`items.${id}.title`)}</h3>

                    <p className="mt-1.5 text-(--darkbrown) text-lg leading-[1.35] md:text-xl">{servicesT(`items.${id}.body`)}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
