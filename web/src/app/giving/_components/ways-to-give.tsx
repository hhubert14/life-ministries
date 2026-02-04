export function WaysToGive() {
  const givingMethods = [
    {
      title: "Give Online",
      description:
        "Simple and secure giving. Give one-time or schedule recurring giving.",
      link: "https://engage.suran.com/lynchcogop/s/give/new-gift?slug=giving-set-1",
      linkText: "Give Now",
    },
    {
      title: "Give In Person",
      description:
        "Giving station located in church during Sunday services. You can also place your gift in the offering during worship.",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-surface-alt">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
            Ways To Give
          </h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="max-w-3xl space-y-8">
          {givingMethods.map((method, index) => (
            <div
              key={method.title}
              className={index < givingMethods.length - 1 ? "pb-8 border-b border-border" : ""}
            >
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {method.title}
              </h3>
              <p className="text-text-muted leading-relaxed mb-4">
                {method.description}
              </p>
              {method.link && (
                <a
                  href={method.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-foreground px-6 py-3 text-sm font-semibold text-text-light hover:bg-foreground/90 transition-colors"
                >
                  {method.linkText}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
