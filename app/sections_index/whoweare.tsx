import Image from "next/image";

export default function WhoWeAre() {
  return (
    <section className="layout-grid section-space">
      <div className="label-col pt-1">
        <p className="text-sm uppercase tracking-[0.08em] text-darkbrown">Who we are</p>
      </div>

      <div className="content-col min-w-0">
        <h2 className="text-2xl  text-darkbrown md:text-3xl lg:text-4xl font-normal">AILO is run by a team of four female founders, combining a unique blend of business and technical expertise.</h2>

        <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-8">
          <div className="min-w-0">
            <Image src="/images/who-we-are.jpg" alt="Ailo founders" width={860} height={1100} className="h-auto w-full object-cover" />
          </div>

          <div className="flex min-w-0 flex-col justify-between">
            <p className=" text-lg md:text-xl leading-[1.18] tracking-[-0.01em] text-darkbrown">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue,
              euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit ame…
            </p>

            <a href="/about" className="mt-10 inline-block text-[12px] uppercase tracking-[0.04em] text-darkbrown underline underline-offset-4">
              Read more
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
