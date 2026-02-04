export function GivingHero() {
  return (
    <section id="hero" className="relative bg-hero-dark pt-32 pb-20">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(10, 10, 18, 0.6), rgba(10, 10, 18, 0.85)),
            url('https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=1920&q=80')`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* Label */}
          <div className="flex items-center gap-3 mb-4">
            <span className="text-sm text-text-light/60">Support Our Mission</span>
            <span className="h-px flex-1 max-w-25 bg-text-light/20" />
          </div>

          {/* Main headline */}
          <h1 className="text-4xl font-bold tracking-tight text-text-light sm:text-5xl lg:text-6xl mb-6">
            Giving
          </h1>

          {/* Scripture quote */}
          <p className="text-lg text-text-light/70 max-w-xl italic">
            &ldquo;For where your treasure is, there your heart will be also.&rdquo;
            <span className="block mt-2 not-italic text-base">— Matthew 6:21</span>
          </p>
        </div>
      </div>

      {/* Wave transition */}
      <div className="absolute -bottom-px left-0 right-0">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          preserveAspectRatio="none"
          className="w-full h-15 block"
        >
          <path
            d="M0 60V30C240 10 480 0 720 0C960 0 1200 10 1440 30V60H0Z"
            className="fill-background"
          />
        </svg>
      </div>
    </section>
  );
}
