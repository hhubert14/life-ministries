const ministries = [
  {
    name: "Youth Ministry",
    description:
      "For students in grades 6-12. A place to build friendships, grow in faith, and have fun together.",
  },
  {
    name: "Children's Ministry",
    description:
      "Helping kids discover faith through engaging Bible lessons, worship, and activities in a safe environment.",
  },
  {
    name: "Women's Ministry",
    description:
      "Opportunities for women to connect, study Scripture together, and support one another through life's seasons.",
  },
  {
    name: "Men's Ministry",
    description:
      "Equipping men to follow Christ and lead well at home, work, and in the community.",
  },
  {
    name: "Worship Ministry",
    description:
      "Using our gifts of worship and praise to glorify God and lead the congregation in heartfelt worship.",
  },
  {
    name: "Outreach Ministry",
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
            <div key={ministry.name} className="border-l-2 border-border pl-6">
              {/* Placeholder image */}
              <div className="bg-border h-40 mb-4" />
              <h3 className="font-semibold text-foreground mb-2">
                {ministry.name}
              </h3>
              <p className="text-text-muted text-sm leading-relaxed">
                {ministry.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
