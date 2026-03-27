import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/intl/navigation";

export default function WhoWeAre() {
  const t = useTranslations("WhoWeAre");

  return (
 
    <section className="layout-grid section-space bg-(--beige) text-(--darkbrown)">
      {/* image + text 2 col */}

          <div className="col-[content-start/content-end]">
        <div className="grid md:grid-cols-2 ">
          {/* IMAGE */}
          
            <div className="aspect-4/5 overflow-hidden max-w-105">
              <Image src="/images/group-portraits/group-index.webp" alt={t("imageAlt")} width={600} height={750} className="w-full h-full object-cover" />
            </div>
          

          {/* TEXT */}
          <div className="flex flex-col h-full">
            <div className="space-y-8 text-2xl leading-[1.15] tracking-[-0.02em] md:text-3xl lg:text-4xl">
           
              {t("body") }
            </div>

           <Link
  href="/about"
  className="mt-auto self-end text-xs uppercase tracking-[0.08em] transition-transform duration-500 hover:scale-[1.02] md:text-sm"
>
  {t("readMore")} →
</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
