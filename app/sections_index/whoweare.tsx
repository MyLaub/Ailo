import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/intl/navigation";

export default function WhoWeAre() {
  const t = useTranslations("WhoWeAre");

  return (
    <section className="layout-grid section-space bg-(--beige) text-(--darkbrown)">
      {/* FULL WIDTH CONTENT */}
      <div className="col-[content-middle/content-end]">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20 items-start">
          {/* IMAGE */}
          
            <div className="aspect-4/5 overflow-hidden max-w-105">
              <Image src="/images/group-portraits/group-index.webp" alt={t("imageAlt")} width={600} height={750} className="w-full h-full object-cover" />
            </div>
          

          {/* TEXT */}
          <div className="flex flex-col h-full">
            <div className="space-y-8">
              {t.raw("body").map((p: string, i: number) => (
                <p key={i} className="text-2xl leading-[1.15] tracking-[-0.02em] md:text-3xl lg:text-4xl">
                  {p}
                </p>
              ))}
            </div>

            <Link href="/about" className="mt-10 self-end text-xs uppercase tracking-[0.08em] underline underline-offset-6 transition-transform duration-500 hover:scale-[1.02] md:text-sm">
              {t("readMore")} →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
