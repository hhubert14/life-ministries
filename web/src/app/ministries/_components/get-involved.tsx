export function GetInvolved() {
  return (
    <section className="py-16 lg:py-24 bg-surface-alt">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          {/* Section header */}
          <div className="flex items-center gap-4 mb-6">
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
              Get Involved
            </h2>
            <div className="h-px flex-1 bg-border" />
          </div>

          <p className="text-text-muted leading-relaxed mb-8">
            Ready to take the next step? We&apos;d love to help you find the
            right ministry for you. Whether you want to serve, join a group, or
            learn more about what we offer, reach out and we&apos;ll connect you
            with a ministry leader.
          </p>

          <div className="space-y-4">
            <div className="border-b border-border pb-4">
              <p className="text-sm text-text-muted mb-1">Email</p>
              <a
                href="mailto:ministries@lifeministriesva.com"
                className="text-foreground hover:underline"
              >
                ministries@lifeministriesva.com
              </a>
            </div>
            <div>
              <p className="text-sm text-text-muted mb-1">Phone</p>
              <a
                href="tel:+14345551234"
                className="text-foreground hover:underline"
              >
                (434) 555-1234
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
