import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 px-6 py-14 md:grid-cols-2 md:py-20">
      {/* Left */}
      <div>
        <h1 className="max-w-xl text-[44px] font-bold leading-[1.08] tracking-[-0.02em] text-black md:text-[56px]">
          Har din virksomhed
          <br />
          opdaget sit fulde
          <br />
          datapotentiale
          <br />
          endnu?
        </h1>

        <p className="mt-8 max-w-md text-[14px] leading-7 text-neutral-600">
          Har din virksomhed masser af data, men mangler retning og ekspertise for optimal udnyttelse? Værdien i dataene er der, men hvor skal i starte? Hos AILO omsætter vi data til klarhed og værdi.
        </p>

        <div className="mt-10">
          <Link href="/kontakt" className="inline-flex h-12 items-center justify-center rounded-full border border-black px-6 text-[14px] font-semibold text-black hover:bg-black hover:text-white transition">
            Book en gratis konsultation
          </Link>
        </div>
      </div>

      {/* Right */}
      <div className="relative w-full">
        <div className="relative  w-full overflow-hidden rounded-none">
          <Image src="/assets/portraits/ailo_group.webp" alt="Teamfoto" fill className="object-cover" priority />
        </div>
      </div>
    </section>
  );
}
