import Image from "next/image";
import { useTranslations } from "next-intl";

export default function AboutHero() {
  const t = useTranslations("about");

  return (
    <section className="layout-grid">
      
      {/* image div for fullbleed */}
        <div className="col-[full-start/full-end] row-start-1 grid">
        
        {/* image */}
        <div className="row-start-1 col-start-1">
          <div className="aspect-video  overflow-hidden">
            <Image
              src="/images/group-portraits/group-index.webp"
              alt={t("imageAlt")}
              width={2000}
              height={1200}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </div>

        {/* overlay for image hero */}
        <div className="row-start-1 col-start-1 bg-(--darkbrown)/20" />
      </div>

      {/* label */}
      <div className="label-col row-start-1 self-center pt-32">
        <p className="text-sm uppercase tracking-[0.08em] text-white">
          {t("label")}
        </p>
      </div>

      {/* h1 */}
      <div className="label-col row-start-1 self-end pb-16">
        <h1 className="text-5xl md:text-6xl lg:text-7xl text-white">
          {t("title")}
        </h1>
      </div>

    </section>
  );
}