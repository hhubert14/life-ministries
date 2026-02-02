import Link from "next/link";

export function CtaBanner() {
  return (
    <section className="py-12 lg:py-16 bg-[#1a1a1a]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <h2 className="text-2xl font-bold text-white sm:text-3xl mb-4">
          Join us this Sunday
        </h2>
        <p className="text-white/70 mb-8 max-w-lg mx-auto">
          We&apos;d love to meet you. Service starts at 10:30 AM.
        </p>
        <Link
          href="/new"
          className="inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#1a1a1a] hover:bg-white/90 transition-colors"
        >
          Plan Your Visit
        </Link>
      </div>
    </section>
  );
}
