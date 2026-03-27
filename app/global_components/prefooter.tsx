import Link from "next/link";

export default function Prefooter() {
  const brandLetter = "text-[clamp(4rem,15vw,10rem)] leading-none tracking-[-0.06em]";
  return (
    <section className="layout-grid bg-background text-(--darkbrown)">
      <div className="col-[content-start/content-end] section-space">
        <div className="grid gap-12 lg:gap-16">
          <div className="flex items-end justify-between">
            <span className={brandLetter}>A</span>
            <span className={brandLetter}>I</span>
            <span className={brandLetter}>L</span>
            <span className={brandLetter}>O</span>
          </div>

          <div className="grid grid-cols-2 gap-6 text-md leading-[1.3] tracking-[-0.01em]  md:text-lg lg:grid-cols-4 lg:gap-8">
            <p >Connect with us to <br/> explore your opportunities.</p>

            <Link href="/contact" className="w-fit justify-self-end transition-transform duration-300 hover:scale-[1.02] lg:col-start-2">
              Book a free consultation →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
