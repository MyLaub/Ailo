
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/intl/navigation";
import { useLocale } from "next-intl";

export function Footer() {
  const t = useTranslations("footer");
  const locale = useLocale();

  return (
    <footer className="bg-(--darkred) text-white">
      <section className="layout-grid">
        {/* <div className="full-bleed px-4 py-10 md:px-6 lg:px-8 lg:py-14 xl:px-10"> */}
        <div className="col-[content-start/content-end] section-space">
         <div className="grid gap-14 lg:grid-cols-2 lg:gap-12">
  <div className="order-2 grid gap-10  md:grid-cols-2 md:gap-12 lg:order-none lg:grid-cols-3 lg:gap-10">
    <section className="space-y-3">
      <h2 className="text-sm uppercase tracking-[0.08em]">
        {t("contact.title")}
      </h2>

      <address className="space-y-4 text-sm leading-[1.15] not-italic md:text-base">
        <div className="space-y-1">
          <p>{t("contact.phone")}</p>
          <p>{t("contact.email")}</p>
        </div>

        <div className="space-y-1">
          <p>{t("contact.company")}</p>
          <p>{t("contact.cvr")}</p>
          <p>{t("contact.street")}</p>
          <p>{t("contact.city")}</p>
          <p>{t("contact.country")}</p>
        </div>
      </address>
    </section>

    <nav aria-label={t("sitemap.title")} className="space-y-3">
      <h2 className="text-sm uppercase tracking-[0.08em]">
        {t("sitemap.title")}
      </h2>

      <ul className="space-y-1 text-sm leading-[1.15] md:text-base">
        <li><Link href="/">{t("sitemap.home")}</Link></li>
        <li><Link href="/expertise">{t("sitemap.expertise")}</Link></li>
        <li><Link href="/about">{t("sitemap.about")}</Link></li>
        <li><Link href="/cases">{t("sitemap.cases")}</Link></li>
        <li><Link href="/contact">{t("sitemap.contact")}</Link></li>
      </ul>
       

  <span className="text-sm uppercase tracking-[0.08em]">
<Link
  href="/"
  locale="da"
  className={locale === "da" ? "underline underline-offset-4" : ""}
>
  DA
</Link>
 / 
<Link
  href="/"
  locale="en"
  className={locale === "en" ? "underline underline-offset-4" : ""}
>
  EN
</Link>
  </span>

    </nav>

    <section className="space-y-3">
      <h2 className="text-sm uppercase tracking-[0.08em]">
        {t("socials.title")}
      </h2>

      <ul className="space-y-1 text-sm leading-[1.15] md:text-base">
        <li>
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
            {t("socials.linkedin")}
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
            {t("socials.instagram")}
          </a>
        </li>
      </ul>
    </section>
  </div>

  <div className="order-1 justify-self-start self-start lg:order-0 lg:justify-self-end">
    <Image
      src="/images/logos/ailo/logo-white.svg"
      alt={t("logoAlt")}
      width={112}
      height={48}
      className="h-auto w-20 md:w-24 lg:w-28"
    />
  </div>
</div>

          {/* <div className="mt-16 grid gap-8 text-sm leading-none lg:mt-24 lg:grid-cols-2 lg:gap-12"> */}
            <div className="section-space grid gap-8 text-sm leading-none lg:grid-cols-2 lg:gap-12">
            <div className="grid gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-10">
              <p>{t("bottom.copyright")}</p>

              <Link href="/privacy-policy" className="w-fit">
                {t("bottom.privacy")}
              </Link>

              <div className="hidden lg:block" />
            </div>

            <div className="flex lg:justify-end">
              <a href="#top" className="w-fit">
                {t("bottom.backToTop")}
              </a>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}