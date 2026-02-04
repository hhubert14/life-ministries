import { MinistriesHero } from "./_components/ministries-hero";
import { MinistryList } from "./_components/ministry-list";
import { GetInvolved } from "./_components/get-involved";
import { MinistriesCta } from "./_components/ministries-cta";

export default function MinistriesPage() {
  return (
    <>
      <MinistriesHero />
      <MinistryList />
      <GetInvolved />
      <MinistriesCta />
    </>
  );
}
