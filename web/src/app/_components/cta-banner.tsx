import Link from "next/link";

export function CtaBanner() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-[#1a2057] via-[#2d3a8c] to-[#4a5bc7] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#e07940]/10 blur-3xl translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-white/5 blur-3xl -translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl mb-6 text-balance">
          Ready to Take the Next Step?
        </h2>
        <p className="mx-auto max-w-2xl text-lg text-white/80 mb-10">
          Whether you&apos;re looking for a church home, wanting to grow in your faith,
          or just curious about Jesus, we&apos;d love to connect with you.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/new"
            className="inline-flex items-center justify-center rounded-full bg-[#e07940] px-8 py-4 text-base font-semibold text-white shadow-lg hover:bg-[#c5612a] transition-all hover:scale-105"
          >
            Plan Your Visit
            <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
          <Link
            href="/giving"
            className="inline-flex items-center justify-center rounded-full border-2 border-white/30 px-8 py-4 text-base font-semibold text-white hover:bg-white/10 transition-all"
          >
            Give Online
          </Link>
        </div>
      </div>
    </section>
  );
}
