import Image from "next/image";
import {useTranslations} from "next-intl";
import {Link} from "@/intl/navigation";

export default function WhoWeAre() {
  const t = useTranslations("WhoWeAre");

  return (
    <section className="layout-grid section-space">
      <div className="label-col pt-1">
        <p className="text-sm uppercase tracking-[0.08em] text-darkbrown">
          {t("label")}
        </p>
      </div>

      <div className="content-col min-w-0">
        <h2 className="text-2xl text-darkbrown md:text-3xl lg:text-4xl font-normal">
          {t("title")}
        </h2>

        <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-8">
          <div className="min-w-0">
            <Image
              src="/images/who-we-are.jpg"
              alt={t("imageAlt")}
              width={860}
              height={1100}
              className="h-auto w-full object-cover"
            />
          </div>

          <div className="flex min-w-0 flex-col justify-between">
            <p className="text-lg md:text-xl leading-[1.18] tracking-[-0.01em] text-darkbrown">
              {t("body")}
            </p>

            <Link
              href="/about"
              className="mt-10 inline-block text-[12px] uppercase tracking-[0.04em] text-darkbrown underline underline-offset-4"
            >
              {t("readMore")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}