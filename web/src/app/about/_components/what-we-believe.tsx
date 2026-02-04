const beliefs = [
  {
    title: "The Holy Trinity",
    description:
      "We believe in one God, eternally existing in Three Persons: Father, Son, and Holy Spirit.",
  },
  {
    title: "Jesus Christ",
    description:
      "We believe in Jesus Christ, true God and true man, born of the virgin Mary, who died for our sins, rose again, and will return in glory.",
  },
  {
    title: "The Holy Spirit",
    description:
      "We believe in the Holy Spirit, the Lord and giver of life, who empowers believers for service and fills us with His presence.",
  },
  {
    title: "Salvation by Grace",
    description:
      "We believe salvation is the gift of God by grace alone, received through personal faith in the Lord Jesus Christ.",
  },
  {
    title: "The Bible",
    description:
      "We believe the Bible—both Old and New Testaments—is the inspired Word of God, our guide in all matters of faith and practice.",
  },
  {
    title: "The Church",
    description:
      "We believe in one holy, universal Church, composed of all true believers in Jesus Christ, calling all people to fellowship and service.",
  },
];

export function WhatWeBelieve() {
  return (
    <section className="py-16 lg:py-24 bg-surface-alt">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-6">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
            What We Believe
          </h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="max-w-3xl">
          {/* Quote */}
          <blockquote className="border-l-2 border-foreground pl-6 mb-12">
            <p className="text-lg text-text-muted italic">
              &ldquo;What comes into our minds when we think about God is the most important thing about us.&rdquo;
            </p>
            <cite className="block mt-2 text-sm not-italic text-text-muted/60">— A.W. Tozer</cite>
          </blockquote>

          {/* Intro */}
          <p className="text-text-muted leading-relaxed mb-12">
            From its beginnings, Life Ministries has based its beliefs on &ldquo;the whole Bible rightly
            divided.&rdquo; We accept the Bible as God&apos;s Holy Word, inspired, inerrant, and infallible—our
            highest authority for doctrine, practice, and daily life.
          </p>

          {/* Beliefs list */}
          <div className="space-y-8">
            {beliefs.map((belief) => (
              <div key={belief.title} className="border-b border-border pb-8 last:border-0">
                <h3 className="font-semibold text-foreground mb-2">{belief.title}</h3>
                <p className="text-text-muted leading-relaxed">{belief.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
