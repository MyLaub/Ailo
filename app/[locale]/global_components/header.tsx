import Image from "next/image";

type HeaderProps = {
  variant?: "light" | "dark";
};

export function Header({ variant = "dark" }: HeaderProps) {
  const isLight = variant === "light";

  const color = isLight ? "text-white" : "text-(--darkbrown)";

  const brandmark = isLight ? "/images/logos/ailo/brandmark-white.svg" : "/images/logos/ailo/brandmark-brown.svg";

  const logo = isLight ? "/images/logos/ailo/logo-white.svg" : "/images/logos/ailo/logo-brown.svg";

  return (
    <header className="layout-grid py-8">
      {/* brandmark */}
      <div className="label-col">
        <div className={`flex items-center justify-between ${color}`}>
          <div className="w-14 h-auto">
            <Image src={brandmark} alt="Ailo brandmark" width={42} height={42} className="w-full h-auto" />
          </div>
        </div>
      </div>

      {/* nav bar */}
      <div className="content-col">
        <nav className={`flex justify-between text-sm  uppercase tracking-[0.04em] text-(--darkbrown)${color}`}>
          {/* Ailo logo */}
          <div className="w-16">
            <Image src={logo} alt="Ailo logo" width={64} height={24} className="w-full h-auto" />
          </div>

          <a href="#">About</a>
          <a href="#">Cases</a>
          <a href="#">Expertise</a>
          <a href="#">Contact</a>
        </nav>
      </div>
    </header>
  );
}
