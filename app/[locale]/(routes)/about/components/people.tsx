import Image from "next/image";
import { useTranslations } from "next-intl";

const people = [
  {
    key: "mathilde",
    image: "/images/portraits/mathilde/mathilde-1.webp",
    email: "Mathilde@ailodata.dk",
    phone: "+45 42 80 92 40"
  },
  {
    key: "marie",
    image: "/images/portraits/marie/marie-1.webp",
    email: "Marie@ailodata.dk",
    phone: "+45 60 51 31 31"
  },
  {
    key: "sara",
    image: "/images/portraits/sara/sara-full.webp",
    email: "Sara@ailodata.dk",
    phone: "+358 50 354 8985"
  },
  {
    key: "theresa",
    image: "/images/portraits/theresa/theresa-1.webp",
    email: "Theresa@ailodata.dk",
    phone: "+49 177 2602651"
  }
] as const;

export default function People() {
  const t = useTranslations("about");

  return (
    <section className="layout-grid section-space">
      <div className="label-col">
        <p className="text-sm uppercase tracking-[0.08em] text-(--darkbrown)">{t("people.label")}</p>
      </div>

      <div className="col-[content-start/content-end]">
        <div className="grid gap-8 grid-cols-2 md:grid-cols-4">
          {people.map((person) => {
            const languages = t.raw(`people.${person.key}.languages`) as string[];

            return (
              <article key={person.key} className="flex flex-col">
                <div className="aspect-4/5 overflow-hidden">
                  <Image
                    src={person.image}
                    alt={t(`people.${person.key}.alt`)}
                    width={900}
                    height={1125}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="pt-4">
  <p className="text-sm text-(--darkbrown)">
    {t(`people.${person.key}.role`)}
  </p>

  <p className="pt-2 text-sm uppercase tracking-[0.08em] text-(--darkbrown)">
    {t(`people.${person.key}.name`)}
  </p>

  <details className="pt-4 group">
    <summary className="flex cursor-pointer list-none items-center gap-3 text-sm text-(--darkbrown)">
      <span className="text-base leading-none transition-transform group-open:rotate-45">
        +
      </span>
      <span>{t("people.contactLabel")}</span>
    </summary>

    <div className="pt-4">
      <p className="text-sm text-(--darkbrown)">
        {languages.join(", ")}
      </p>

      <a
        href={`mailto:${person.email}`}
        className="block pt-2 text-sm text-(--darkbrown)"
      >
        {person.email}
      </a>

      <a
        href={`tel:${person.phone.replace(/\s+/g, "")}`}
        className="block pt-2 text-sm text-(--darkbrown)"
      >
        {person.phone}
      </a>
    </div>
  </details>
</div>
{/* 
                <div className="pt-4">
                  <p className="text-sm text-(--darkbrown)">
                    {t(`people.${person.key}.role`)}
                  </p>

                  <p className="pt-2 text-sm uppercase tracking-[0.08em] text-(--darkbrown)">
                    {t(`people.${person.key}.name`)}
                  </p>

                  <p className="pt-4 text-sm text-(--darkbrown)">
                    {languages.join(", ")}
                  </p>

                  <a
                    href={`mailto:${person.email}`}
                    className="block pt-2 text-sm text-(--darkbrown)"
                  >
                    {person.email}
                  </a>

                  <a
                    href={`tel:${person.phone}`}
                    className="block pt-2 text-sm text-(--darkbrown)"
                  >
                    {person.phone}
                  </a>
                </div> */}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}