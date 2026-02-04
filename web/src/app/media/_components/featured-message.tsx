const featuredSermon = {
  title: "A Life of Prayer",
  speaker: "Pastor Jon",
  date: "February 16, 2025",
  description:
    "Discover how prayer transforms not just our circumstances, but our hearts. Learn practical ways to deepen your prayer life and draw closer to God.",
};

export function FeaturedMessage() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-10">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
            Most Recent
          </h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        {/* Featured content */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Video placeholder */}
          <div className="lg:w-1/2">
            <div className="relative aspect-video bg-border">
              {/* Play button overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-foreground flex items-center justify-center">
                  <svg
                    className="w-7 h-7 text-text-light ml-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:w-1/2 flex flex-col justify-center">
            <p className="text-sm text-text-muted mb-2">{featuredSermon.date}</p>
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
              {featuredSermon.title}
            </h3>
            <p className="text-text-muted mb-2">{featuredSermon.speaker}</p>
            <p className="text-text-muted leading-relaxed mb-6">
              {featuredSermon.description}
            </p>
            <div>
              <button className="inline-flex items-center border border-foreground px-6 py-2.5 text-sm font-semibold text-foreground hover:bg-foreground hover:text-text-light transition-colors">
                Watch Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
