const expectations = [
  {
    title: "Service Length",
    description: "A typical service will last about 90 minutes.",
  },
  {
    title: "Worship Style",
    description: "Contemporary music led by our worship team.",
  },
  {
    title: "Kids & Nursery",
    description:
      "Nursery and childcare available, with activities for all age groups.",
  },
  {
    title: "After Service",
    description:
      "Plan to hang around for fellowship and meeting new people.",
  },
];

export function WhatToExpect() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-6">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
            What to Expect
          </h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="max-w-3xl">
          <div className="space-y-8">
            {expectations.map((item) => (
              <div
                key={item.title}
                className="border-b border-border pb-8 last:border-0"
              >
                <h3 className="font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-text-muted leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
