export function AboutHero() {
  return (
    <section className="relative bg-[#0a0a12] pt-32 pb-20">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(10, 10, 18, 0.6), rgba(10, 10, 18, 0.85)),
            url('https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=1920&q=80')`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* Label */}
          <div className="flex items-center gap-3 mb-4">
            <span className="text-sm text-white/60">Get to know us</span>
            <span className="h-px flex-1 max-w-[100px] bg-white/20" />
          </div>

          {/* Main headline */}
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl mb-6">
            About Life Ministries
          </h1>

          {/* Subtitle */}
          <p className="text-lg text-white/70 max-w-xl">
            A community of authentic believers, reaching and raising disciples for Christ
            in Lynchburg, Virginia.
          </p>
        </div>
      </div>

      {/* Wave transition */}
      <div className="absolute -bottom-px left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" preserveAspectRatio="none" className="w-full h-[60px] block">
          <path d="M0 60V30C240 10 480 0 720 0C960 0 1200 10 1440 30V60H0Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
