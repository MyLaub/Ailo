import {useTranslations} from 'next-intl';
import Image from "next/image";


export default function Hero() {
    const t = useTranslations("Hero");

  return (
    <section className="layout-grid section-space">
      <div className="col-[full-start/full-end] row-start-1">
        <div className="relative min-h-screen">
          <Image
            src="/images/hero/dots-fireworks.jpg"
            alt="fireworks"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      <div className="label-col row-start-1 self-start pt-32">
        <p className="text-sm md:text-base uppercase tracking-[0.08em] text-[color:var(--darkbrown)]">
          {t("label")}
        </p>
      </div>

      <div className="content-col row-start-1 self-start pt-32">
        {/* content */}
      </div>
    </section>
  );
}