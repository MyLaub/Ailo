import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/intl/navigation";

export default function WhoWeAre() {
  const t = useTranslations("WhoWeAre");

  return (
    <section className="section-full  bg-(--beige) text-(--darkbrown)">
      <div className="layout-grid section-space">
        <div className="label-col pt-1">
          <p className="text-sm uppercase tracking-[0.08em] ">{t("label")}</p>
        </div>

        <div className="content-col">
          <h2 className="text-2xl leading-[1.15] tracking-[-0.02em] text-(--darkbrown) md:text-3xl lg:text-4xl">{t("title")}</h2>
        </div>

        <div className="content-col mt-10">
          <div className="grid gap-10 md:grid-cols-2 lg:gap-12">
            <div>
              <div className="aspect-4/5 lg:aspect-3/2 w-full  overflow-hidden">
                <Image src="/images/group-portraits/group-index.webp" alt={t("imageAlt")} width={480} height={600} className="h-full w-full object-cover" />
              </div>
            </div>

            <div>
              <div className="space-y-8 md:space-y-10">
                {t.raw("body").map((p: string, i: number) => (
                  <p key={i} className=" text-lg leading-[1.35] md:text-xl">
                    {p}
                  </p>
                ))}
              </div>

              <Link href="/about" className="mt-10 inline-block text-xs uppercase tracking-[0.08em] md:text-sm  underline underline-offset-6 transition-transform duration-500 hover:scale-[1.02]">
                {t("readMore")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
