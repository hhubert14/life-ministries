import { NewHero } from "./_components/new-hero";
import { WhatToExpect } from "./_components/what-to-expect";
import { ServiceLocation } from "./_components/service-location";
import { ConnectCard } from "./_components/connect-card";
import { NewCta } from "./_components/new-cta";

export default function NewPage() {
  return (
    <main>
      <NewHero />
      <WhatToExpect />
      <ServiceLocation />
      <ConnectCard />
      <NewCta />
    </main>
  );
}
