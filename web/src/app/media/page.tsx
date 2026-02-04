import { MediaHero } from "./_components/media-hero";
import { FeaturedMessage } from "./_components/featured-message";
import { MediaLibrary } from "./_components/media-library";
import { MediaCta } from "./_components/media-cta";

export default function MediaPage() {
  return (
    <>
      <MediaHero />
      <FeaturedMessage />
      <MediaLibrary />
      <MediaCta />
    </>
  );
}
