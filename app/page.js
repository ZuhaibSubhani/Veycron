import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhatWeDo from "@/components/WhatWeDo";
import Howwebuild from "@/components/Howwebuilt";
import Process from "@/components/Process";
export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhatWeDo />
        <Howwebuild />
        <Process />
      </main>
    </>
  );
}