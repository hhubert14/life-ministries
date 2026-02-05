import Image from "next/image";
import Link from "next/link";

const ministries: {
  name: string;
  slug: string;
  description: string;
  image?: string;
}[] = [
  {
    name: "Youth Ministry",
    slug: "youth",
    description:
      "For students in grades 6-12. A place to build friendships, grow in faith, and have fun together.",
  },
  {
    name: "Children's Ministry",
    slug: "children",
    description:
      "Helping kids discover faith through engaging Bible lessons, worship, and activities in a safe environment.",
  },
  {
    name: "Women's Ministry",
    slug: "women",
    description:
      "Opportunities for women to connect, study Scripture together, and support one another through life's seasons.",
  },
  {
    name: "Men's Ministry",
    slug: "men",
    description:
      "Equipping men to follow Christ and lead well at home, work, and in the community.",
    image: "/mens-ministry.jpeg",
  },
  {
    name: "Worship Ministry",
    slug: "worship",
    description:
      "Using our gifts of worship and praise to glorify God and lead the congregation in heartfelt worship.",
  },
  {
    name: "Outreach Ministry",
    slug: "outreach",
    description:
      "Serve our community through local missions, service projects, and meeting practical needs.",
  },
];

export function MinistryList() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-6">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
            Ministries at Life
          </h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        <p className="text-text-muted leading-relaxed mb-12 max-w-2xl">
          We believe everyone has a place to belong and a way to serve. Our
          ministries are designed to help you grow in faith, build meaningful
          relationships, and make a difference.
        </p>

        {/* Ministries grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {ministries.map((ministry) => (
            <Link
              key={ministry.slug}
              href={`/ministries/${ministry.slug}`}
              className="block border-l-2 border-border pl-6 transition-colors hover:border-foreground"
            >
              {ministry.image ? (
                <div className="relative h-40 mb-4">
                  <Image
                    src={ministry.image}
                    alt={ministry.name}
                    fill
                    className="object-cover"
                  />
                </div>
              ) : (
                <div className="bg-border h-40 mb-4" />
              )}
              <h3 className="font-semibold text-foreground mb-2">
                {ministry.name}
              </h3>
              <p className="text-text-muted text-sm leading-relaxed">
                {ministry.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
