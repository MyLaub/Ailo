import Image from "next/image";
import Hero from "../sections_index/hero";
import WhatWeDo from "../sections_index/whatwedo";
import WhoWeAre from "../sections_index/whoweare";
import CaseExample from "../sections_index/cases/caseexample";
import LogoBanner from "../sections_index/cases/logobanner";
import Testimonials from "../sections_index/testimonials";
import Prefooter from "../global_components/prefooter";

export default function Home() {
  return (
    <main>
      <Hero />
      <WhatWeDo />
      <CaseExample />
      <LogoBanner />
      <Testimonials />
      <WhoWeAre />
          <Prefooter />
    </main>
  );
}
