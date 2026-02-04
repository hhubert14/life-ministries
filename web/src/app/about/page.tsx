import { AboutHero } from "./_components/about-hero";
import { MissionVision } from "./_components/mission-vision";
import { WhatWeBelieve } from "./_components/what-we-believe";
import { Leadership } from "./_components/leadership";
import { AboutCta } from "./_components/about-cta";

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <MissionVision />
      <WhatWeBelieve />
      <Leadership />
      <AboutCta />
    </>
  );
}
