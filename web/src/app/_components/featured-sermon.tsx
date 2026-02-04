import Link from "next/link";
import Image from "next/image";

const featuredSermon = {
  title: "A Life of Prayer",
  speaker: "Pastor Jon",
  date: "January 26, 2025",
  description: "Discover how prayer transforms not just our circumstances, but our hearts.",
};

export function FeaturedSermon() {
  return (
    <section className="py-12 lg:py-16 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header - Free Chapel style */}
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-2xl font-bold text-foreground">Latest Message</h2>
          <Link
            href="/media"
            className="inline-flex items-center text-sm font-medium text-foreground hover:text-text-muted transition-colors"
          >
            See All
            <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </Link>
        </div>
        <div className="h-px bg-border mb-10" />

        {/* Featured Message Card */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Thumbnail */}
          <Link href="/media" className="lg:w-1/2 group">
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-foreground">
              <Image
                src="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=800&q=80"
                alt="Sermon thumbnail"
                fill
                className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
              />
              {/* Play button overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                  <svg className="w-7 h-7 text-foreground ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>

          {/* Content */}
          <div className="lg:w-1/2 flex flex-col justify-center">
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
              {featuredSermon.title}
            </h3>
            <p className="text-text-muted mb-4">
              {featuredSermon.speaker}
            </p>
            <p className="text-text-muted mb-6">
              {featuredSermon.description}
            </p>
            <div>
              <Link
                href="/media"
                className="inline-flex items-center rounded-full border border-foreground px-6 py-2.5 text-sm font-semibold text-foreground hover:bg-foreground hover:text-white transition-colors"
              >
                Watch
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
