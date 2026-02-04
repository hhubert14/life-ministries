import Link from "next/link";

export function Mission() {
  return (
    <section className="py-12 lg:py-16 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* Section header */}
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
              Welcome Home
            </h2>
            <div className="h-px flex-1 bg-border" />
          </div>

          <p className="text-lg text-text-muted leading-relaxed mb-6">
            Life Ministries is a place where people can meet Jesus, engage in
            life-giving community, and discover their purpose. We believe in creating
            a Spirit-filled atmosphere where everyone is welcome.
          </p>

          <p className="text-lg text-text-muted leading-relaxed mb-8">
            Whether you&apos;re taking your first steps in faith or have walked with
            Christ for years, there&apos;s a place for you here.
          </p>

          <Link
            href="/about"
            className="inline-flex items-center text-sm font-semibold text-foreground hover:text-text-muted transition-colors group"
          >
            Learn more about us
            <svg
              className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
