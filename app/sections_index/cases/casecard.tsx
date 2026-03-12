import Image from "next/image";
import Link from "next/link";

type CaseCardProps = {
  title: string;
  subtitle: string;
  backgroundImage: string;
  foregroundImage: string;
  tags: string[];
  href: string;
};

export default function CaseCard({ title, subtitle, backgroundImage, foregroundImage, tags, href }: CaseCardProps) {
  return (
    <Link href={href}       className="group relative block aspect-4/5 w-[85vw] max-w-sm shrink-0 snap-start overflow-hidden transition-transform duration-500 hover:scale-[1.02] md:max-w-md lg:max-w-lg"
>
      <Image src={backgroundImage} alt="" fill className="object-cover transition-transform duration-600 " />

      <div className="absolute inset-0 bg-black/10 transition-colors duration-500 group-hover:bg-black/30" />

      <div className="relative z-10 flex h-full flex-col justify-between p-6 text-white md:p-8">
        <div>
          <h3 className="text-sm uppercase tracking-[0.08em] md:text-base">{title}</h3>
          <p className="mt-2 text-xs md:text-sm">{subtitle}</p>
        </div>

        <div className="w-[74%]">
          <div className="relative aspect-4/5 w-full overflow-hidden">
            <Image src={foregroundImage} alt={title} fill className="object-cover" />
          </div>
        </div>

        <div className="flex justify-between gap-4 text-xs uppercase tracking-[0.08em] md:text-sm">
          {tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
    </Link>
  );
}
