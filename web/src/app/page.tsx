import { Hero } from "./_components/hero";
import { Mission } from "./_components/mission";
import { FeaturedSermon } from "./_components/featured-sermon";
import { ServiceTimes } from "./_components/service-times";
import { CtaBanner } from "./_components/cta-banner";

export default function Home() {
  return (
    <>
      <Hero />
      <Mission />
      <FeaturedSermon />
      <ServiceTimes />
      <CtaBanner />
    </>
  );
}
