import Link from "next/link";
import { notFound } from "next/navigation";
import { MenHero } from "./_components/men-hero";
import { MenVerse } from "./_components/men-verse";
import { MenContact } from "./_components/men-contact";

const validSlugs = ["youth", "children", "women", "men", "worship", "outreach"];

const ministryNames: Record<string, string> = {
  youth: "Youth Ministry",
  children: "Children's Ministry",
  women: "Women's Ministry",
  men: "Men's Ministry",
  worship: "Worship Ministry",
  outreach: "Outreach Ministry",
};

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
  return validSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Params }) {
  const { slug } = await params;
  const name = ministryNames[slug];
  if (!name) return { title: "Ministry Not Found" };
  return { title: `${name} | Life Ministries` };
}

export default async function MinistryPage({ params }: { params: Params }) {
  const { slug } = await params;

  if (!validSlugs.includes(slug)) {
    notFound();
  }

  // Men's Ministry has a full page
  if (slug === "men") {
    return (
      <main>
        <MenHero />
        <MenVerse />
        <MenContact />
      </main>
    );
  }

  // Other ministries show Coming Soon
  const name = ministryNames[slug];

  return (
    <main className="min-h-[60vh] flex items-center justify-center bg-background">
      <div className="text-center px-6">
        <h1 className="text-3xl font-bold text-foreground mb-4">{name}</h1>
        <p className="text-text-muted mb-8">
          This page is coming soon. Check back later for more information.
        </p>
        <Link
          href="/ministries"
          className="inline-block border border-foreground text-foreground px-6 py-3 font-medium hover:bg-foreground hover:text-text-light transition-colors"
        >
          Back to Ministries
        </Link>
      </div>
    </main>
  );
}
