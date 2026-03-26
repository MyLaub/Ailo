// "use client";

// import { useEffect, useMemo, useRef } from "react";
// import { logos } from "@/data/logos";

// export default function LogoBanner() {
//   const sectionRef = useRef<HTMLElement | null>(null);
//   const trackRef = useRef<HTMLDivElement | null>(null);
//   const inViewRef = useRef(false);
//   const indexRef = useRef(0);

//   const repeatedLogos = useMemo(() => [...logos, ...logos], []);

//   useEffect(() => {
//     const section = sectionRef.current;
//     if (!section) return;

//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         inViewRef.current = entry.isIntersecting;
//       },
//       { threshold: 0.35 },
//     );

//     observer.observe(section);
//     return () => observer.disconnect();
//   }, []);

//   useEffect(() => {
//     const track = trackRef.current;
//     if (!track) return;

//     const interval = setInterval(() => {
//       if (!inViewRef.current || document.hidden) return;

//       const items = Array.from(track.querySelectorAll<HTMLElement>("[data-logo-slide]"));

//       if (!items.length) return;

//       indexRef.current += 1;

//       track.scrollTo({
//         left: items[indexRef.current].offsetLeft,
//         behavior: "smooth",
//       });

//       if (indexRef.current >= logos.length) {
//         window.setTimeout(() => {
//           indexRef.current = 0;
//           track.scrollTo({
//             left: items[0].offsetLeft,
//             behavior: "auto",
//           });
//         }, 700);
//       }
//     }, 5000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section ref={sectionRef} className="section-full overflow-hidden bg-(--darkred) py-6 md:py-6">
//       <div className="overflow-hidden">
//         <div ref={trackRef} className="overflow-hidden">
//           <div className="flex gap-14">
//             {repeatedLogos.map((logo, index) => (

//               <div data-logo-slide className="flex shrink-0 items-center justify-center">
//                 <div className="flex h-8 w-22.5 items-center justify-center md:h-10 md:w-27.5">
//                   <img src={logo.src} alt={logo.alt} className="max-h-full max-w-full object-contain" />
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// import Image from "next/image";
// import { logos } from "@/data/logos";

// export default function LogoBanner() {
//   const repeatedLogos = [...logos, ...logos];

//   return (
//     <section className="layout-grid py-10">
//       <div className="col-[full-start/full-end] overflow-hidden">
//         <div className="logo-marquee">
//           <div className="logo-marquee-track">
//             {repeatedLogos.map((logo, index) => (
//               <div
//                 key={`${logo.alt}-${index}`}
//                 className="flex shrink-0 items-center justify-center px-8 md:px-12"
//               >
//                 <div className="flex h-4 items-center justify-center md:h-4">
//                   <Image
//                     src={logo.src}
//                     alt={logo.alt}
//                     width={180}
//                     height={60}
//                     className="h-full w-auto object-contain"
//                   />
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// import Image from "next/image";
// import { logos } from "@/data/logos";

// export default function LogoBanner() {
//   const repeatedLogos = [...logos, ...logos];

//   return (
//     <section className="layout-grid py-10 lg:py-12">
//       <div className="col-[full-start/full-end] overflow-hidden">
//         <div className="overflow-hidden">
//           <div className="logo-marquee-track flex w-max">
//             {repeatedLogos.map((logo, index) => (
//               <div className="flex h-12 items-center gap-20">
//                 <Image src={logo.src} alt={logo.alt} width={180} height={80} className="max-h-full w-auto object-contain" />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import Image from "next/image";
import { logos } from "@/data/logos";

export default function LogoBanner() {
  const repeatedLogos = [...logos, ...logos];

  return (
    <section className="layout-grid py-12 lg:py-16">
      <div className="col-[full-start/full-end] overflow-hidden">
        <div className="overflow-hidden">
          <div className="logo-marquee-track flex w-max items-center">
            {repeatedLogos.map((logo, index) => (
              <div
                key={`${logo.name}-${index}`}
                className="flex shrink-0 items-center justify-center px-12 md:px-16 lg:px-20"
              >
                <div className="flex h-auto items-center justify-center">
                  <div
                    className="flex items-center justify-center"
                    style={{
                      width: `${logo.width}px`,
                      height: `${logo.height}px`,
                      transform: `translateY(${logo.offsetY ?? 0}px)`,
                    }}
                  >
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={logo.width}
                      height={logo.height}
                      className="h-full w-full object-contain"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}