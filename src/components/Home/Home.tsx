import React from "react";
import Hero from "./Hero";
import MenuSection from "./MenuSection";
import InfoSection from "./InfoSection";
// import InfoSectionOld from "./InfoSection-old";
import Contact from "./Contact";

// !WATERMARK!
// import WaterMarkBanner from "./WaterMarkBanner";

const Home: React.FC = () => {
  return (
    <main className="flex flex-col w-full min-h-screen">
      <Hero />
      <InfoSection />
      {/* <InfoSectionOld /> */}
      <MenuSection />
      <FAQ />
      <Contact />

      {/* !WATERMARK! */}
      {/* <WaterMarkBanner /> */}
    </main>
  );
};

import FAQ from "./FAQ";
export default Home;
