import Image from "next/image";
import WhatWeDo from "./sections_index/whatwedo";
import WhoWeAre from "./sections_index/whoweare";


export default function Home() {
  return (
    <main>
      <WhatWeDo />
      <WhoWeAre />
    </main>
  );
}
