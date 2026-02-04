export function WhyWeGive() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
            Why we give.
          </h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="max-w-3xl">
          <p className="text-text-muted leading-relaxed mb-6">
            God is generous and so He calls us to be as well. What we do with what
            God has given us shows the world where our hearts are and helps proclaim
            the gospel. We want to glorify God with every area of our lives, including
            what we do with our finances.
          </p>

          <p className="text-text-muted leading-relaxed mb-8">
            The word &ldquo;tithe&rdquo; literally means a tenth or 10% of our increase. Tithing
            isn&apos;t merely giving something to God—it&apos;s giving back what was His to
            begin with. All that we have, or hope to have, comes from God.
          </p>

          <blockquote className="border-l-2 border-foreground pl-6 mb-8">
            <p className="text-lg text-foreground italic mb-2">
              &ldquo;Bring the whole tithe into the storehouse... Test me in this,&rdquo; says the
              Lord Almighty, &ldquo;and see if I will not throw open the floodgates of heaven
              and pour out so much blessing that there will not be room enough to store it.&rdquo;
            </p>
            <cite className="text-text-muted not-italic">— Malachi 3:10</cite>
          </blockquote>

          <p className="text-text-muted leading-relaxed">
            Beyond the tithe, we are called to give generously as the Lord leads.
            Every gift, no matter the size, makes an impact and helps advance the
            mission of Life Ministries.
          </p>
        </div>
      </div>
    </section>
  );
}
