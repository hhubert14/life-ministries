const connectionOptions = ["Baptism", "Volunteering", "Membership", "Life Groups"];

export function ConnectCard() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-6">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
            Get Connected
          </h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="max-w-3xl">
          <p className="text-text-muted leading-relaxed mb-8">
            We&apos;re glad you&apos;re here. Our team would love to serve you
            and help you get connected.
          </p>

          <p className="text-text-muted leading-relaxed mb-8">
            Fill out a Connect Card to let us know you visited and tell us how
            we can help you take your next step:
          </p>

          <ul className="space-y-3 mb-12">
            {connectionOptions.map((option) => (
              <li
                key={option}
                className="flex items-center gap-3 text-foreground"
              >
                <span className="w-1.5 h-1.5 bg-foreground" />
                {option}
              </li>
            ))}
          </ul>

          <div className="border-l-2 border-foreground pl-6">
            <p className="text-text-muted">
              Have questions? Reach out to us at{" "}
              <a
                href="mailto:info@lifeministriesva.com"
                className="text-foreground underline hover:no-underline"
              >
                info@lifeministriesva.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
