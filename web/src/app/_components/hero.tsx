import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 gradient-hero" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30" />

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] rounded-full bg-[#4a5bc7]/20 blur-3xl" />
        <div className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] rounded-full bg-[#e07940]/10 blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-32 text-center lg:px-8">
        <div className="mx-auto max-w-4xl">
          {/* Tagline */}
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-white/70 mb-6">
            Impacting Virginia for Christ
          </p>

          {/* Main headline */}
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl xl:text-8xl text-balance">
            Reconciling the World to Christ
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-lg leading-8 text-white/80 sm:text-xl max-w-2xl mx-auto">
            A ministry of the Church of God of Prophecy
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/new"
              className="inline-flex items-center justify-center rounded-full bg-[#e07940] px-8 py-4 text-base font-semibold text-white shadow-lg hover:bg-[#c5612a] transition-all hover:scale-105 hover:shadow-xl"
            >
              I&apos;m New Here
              <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center rounded-full border-2 border-white/30 px-8 py-4 text-base font-semibold text-white hover:bg-white/10 transition-all"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="h-8 w-8 text-white/50" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </div>
      </div>

      {/* Rounded bottom corners overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-white rounded-t-[2rem]" />
    </section>
  );
}
