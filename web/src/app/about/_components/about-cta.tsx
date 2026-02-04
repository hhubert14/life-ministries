import Link from "next/link";

export function AboutCta() {
  return (
    <section className="py-16 lg:py-20 bg-[#1a1a1a]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <h2 className="text-2xl font-bold text-white sm:text-3xl mb-4">
          Want to learn more?
        </h2>
        <p className="text-white/70 mb-8 max-w-lg mx-auto">
          We&apos;d love to connect with you. Visit us this Sunday or reach out to learn more about Life Ministries.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/new"
            className="inline-flex items-center justify-center bg-white px-6 py-3 text-sm font-semibold text-[#1a1a1a] hover:bg-white/90 transition-colors"
          >
            Plan Your Visit
          </Link>
          <a
            href="mailto:info@lifeministriesva.com"
            className="inline-flex items-center justify-center border border-white/30 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
