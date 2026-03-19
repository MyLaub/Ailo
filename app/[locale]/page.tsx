import Image from "next/image";
import WhatWeDo from "../sections_index/whatwedo";
import WhoWeAre from "../sections_index/whoweare";
import CaseExample from "../sections_index/cases/caseexample";
import LogoBanner from "../sections_index/cases/logobanner";
import Testimonials from "../sections_index/testimonials";

export default function Home() {
  return (
    <main>
      <WhatWeDo />
      <CaseExample />
      <Testimonials />
      <WhoWeAre />
    </main>
  );
}
