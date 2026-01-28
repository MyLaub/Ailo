import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="col-[full-start/full-end] sticky bg-white">
      <div className="mx-auto flex h-24  items-center justify-between px-6">
        {/* Left side/colunm: Logo */}
        <Link href="/" aria-label="Ailo Data Solutions">
          <Image src="/assets/logo/ailo_logo_black.svg" alt="Ailo Data Solutions" width={260} height={60} priority />
        </Link>

        {/* Middle: Navigation/menu line */}
        <nav aria-label="menu" className="hidden items-center gap-10 md:flex">
          <Link href="/" className="text-md font-medium text-neutral-500 hover:text-black hover:underline decoration-2 underline-offset-12 transition">
            Home
          </Link>

          <Link href="/about" className="text-md font-medium text-neutral-500 hover:text-black hover:underline decoration-2 underline-offset-12 transition">
            About
          </Link>

          <Link href="/expertise" className="text-md font-medium text-neutral-500 hover:text-black hover:underline decoration-2 underline-offset-12 transition">
            Expertise
          </Link>

          <Link href="/contact" className="text-md font-medium text-neutral-500 hover:text-black hover:underline decoration-2 underline-offset-12 transition">
            Contact
          </Link>

          <button type="button" aria-label="Change language" className="flex items-center gap-2 text-md font-medium text-neutral-500 hover:text-black transition">
            EN <span className="text-xs -translate-y-1px">⌄</span>
          </button>
        </nav>

        {/* Right: CTA button */}
        <div>
          <Link href="/kontakt" className="inline-flex h-11 items-center justify-center rounded-3xl bg-lime-400 px-6 text-md font-semibold  text-black hover:brightness-95 transition">
            Get in touch!{" "}
          </Link>
        </div>
      </div>
    </header>
  );
}
