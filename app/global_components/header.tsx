// import Image from "next/image";

// type HeaderProps = {
//   variant?: "light" | "dark";
// };

// export function Header({ variant = "dark" }: HeaderProps) {
//   const isLight = variant === "light";

//   const color = isLight ? "text-white" : "text-(--darkbrown)";

//   const brandmark = isLight ? "/images/logos/ailo/brandmark-white.svg" : "/images/logos/ailo/brandmark-brown.svg";

//   const logo = isLight ? "/images/logos/ailo/logo-white.svg" : "/images/logos/ailo/logo-brown.svg";

//   return (
//     <header className="layout-grid py-8">
//       {/* brandmark */}
//       <div className="label-col">
//         <div className={`flex items-center justify-between ${color}`}>
//           <div className="w-14 h-auto">
//             <Image src={brandmark} alt="Ailo brandmark" width={42} height={42} className="w-full h-auto" />
//           </div>
//         </div>
//       </div>

//       {/* nav bar */}
//       <div className="content-col">
//         <nav className={`flex justify-between text-sm  uppercase tracking-[0.04em] text-(--darkbrown)${color}`}>
//           {/* Ailo logo */}
//           <div className="w-16">
//             <Image src={logo} alt="Ailo logo" width={64} height={24} className="w-full h-auto" />
//           </div>

//           <a href="#">About</a>
//           <a href="#">Cases</a>
//           <a href="#">Expertise</a>
//           <a href="#">Contact</a>
//         </nav>
//       </div>
//     </header>
//   );
// }

"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";

type HeaderProps = {
  variant?: "light" | "dark";
};

export function Header({ variant = "dark" }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setScrolled(currentScrollY > 20);

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      lastScrollY = currentScrollY;
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isLightAtTop = variant === "light" && !scrolled;

  const color = isLightAtTop ? "text-white" : "text-[color:var(--darkbrown)]";

  const background = scrolled ? "bg-[color:var(--background)]" : "bg-transparent";

  const brandmark = isLightAtTop ? "/images/logos/ailo/brandmark-white.svg" : "/images/logos/ailo/brandmark-brown.svg";

  const logo = isLightAtTop ? "/images/logos/ailo/logo-white.svg" : "/images/logos/ailo/logo-brown.svg";

  return (
    <header className={`layout-grid fixed inset-x-0 top-0 z-50 py-8 transition-all duration-300 ${background} ${hidden ? "-translate-y-full" : "translate-y-0"}`}>
      <div className="label-col">
        <div className="flex items-center">
          <div className="w-14">
            <Link href="/">
              <Image src={brandmark} alt="Ailo brandmark" width={58} height={27} className="w-full h-auto" />
            </Link>
          </div>
        </div>
      </div>

      <div className="content-col">
        <nav className={`flex items-center justify-between text-sm uppercase tracking-[0.04em] ${color}`}>
          <div className="w-16">
            <Link href="/">
              <Image src={logo} alt="Ailo logo" width={64} height={24} className="w-full h-auto" />
            </Link>
          </div>

          <a href="/about">About</a>
          <a href="/cases">Cases</a>
          <a href="/expertise">Expertise</a>
          <a href="/contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}
