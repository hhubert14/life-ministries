export function MissionVision() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
            Mission & Vision
          </h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="max-w-3xl">
          {/* Tagline */}
          <p className="text-sm uppercase tracking-widest text-text-muted mb-12">
            Reach, Raise, and Repeat
          </p>

          {/* The Mission */}
          <div className="mb-12">
            <h3 className="text-lg font-semibold text-foreground mb-4">The Mission</h3>
            <p className="text-text-muted leading-relaxed mb-4">
              The mission of Life Ministries is the same mission Jesus gave His followers:
            </p>
            <blockquote className="border-l-2 border-foreground pl-6 text-lg text-foreground italic">
              &ldquo;Go therefore and make disciples of all nations, baptizing them in the name of the
              Father and of the Son and of the Holy Spirit.&rdquo;
            </blockquote>
          </div>

          {/* The Vision */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">The Vision</h3>
            <p className="text-text-muted leading-relaxed">
              The vision of Life Ministries is to create a community of authentic believers
              and to witness a city transformed by the life-changing power of the Holy Spirit,
              as people come to know Jesus as their Lord and Savior.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
