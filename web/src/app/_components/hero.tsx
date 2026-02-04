import Link from "next/link";

const quickLinks = [
  { href: "/about", label: "About Us" },
  { href: "/new", label: "I'm New" },
  { href: "/ministries", label: "Ministries" },
  { href: "/media", label: "Media" },
  { href: "/giving", label: "Give" },
];

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen bg-#0a0a12">
      {/* Background image placeholder - dark worship scene */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(10, 10, 18, 0.4), rgba(10, 10, 18, 0.7)),
            url('https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1920&q=80')`,
        }}
      />

      {/* Content container */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-32 pb-20 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-start lg:gap-16">

          {/* Main content - left side */}
          <div className="flex-1 lg:pt-16">
            {/* Label */}
            <div className="flex items-center gap-3 mb-4">
              <span className="text-sm text-white/60">Welcome to Life Ministries</span>
              <span className="h-px flex-1 max-w-100px bg-white/20" />
            </div>

            {/* Main headline */}
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl mb-6">
              Reconciling the World to Christ
            </h1>

            {/* Subtitle */}
            <p className="text-lg text-white/70 mb-8 max-w-xl">
              A ministry of the Church of God of Prophecy in Lynchburg, Virginia.
              Join us as we worship, grow, and serve together.
            </p>

            {/* CTA */}
            <Link
              href="/new"
              className="inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#1a1a1a] hover:bg-white/90 transition-colors"
            >
              Plan Your Visit
            </Link>
          </div>

          {/* Quick links sidebar - right side */}
          <div className="mt-12 lg:mt-0 lg:w-72">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <h2 className="text-xl font-semibold text-white mb-6">
                Get Involved
              </h2>
              <nav className="space-y-1">
                {quickLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex items-center justify-between py-3 px-1 text-white/80 hover:text-white border-b border-white/10 last:border-0 transition-colors group"
                  >
                    <span>{link.label}</span>
                    <svg
                      className="h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute -bottom-px left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" preserveAspectRatio="none" className="w-full h-60px block">
          <path d="M0 60V30C240 10 480 0 720 0C960 0 1200 10 1440 30V60H0Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
