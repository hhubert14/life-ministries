const sermons = [
  {
    title: "A Life of Prayer",
    date: "Feb 16, 2025",
    speaker: "Pastor Jon",
  },
  {
    title: "What Do I Still Lack?",
    date: "Feb 2, 2025",
    speaker: "Pastor Jon",
  },
  {
    title: "Confronting the Elephant",
    date: "Jan 26, 2025",
    speaker: "Bishop Lynn",
  },
  {
    title: "I'm Not Quitting",
    date: "Jan 19, 2025",
    speaker: "Pastor Jon",
  },
  {
    title: "His Presence is Our Priority",
    date: "Jan 5, 2025",
    speaker: "Pastor Jon",
  },
  {
    title: "Wise Men",
    date: "Dec 29, 2024",
    speaker: "Pastor Jon",
  },
];

const filterTabs = ["Series", "Topics", "Speakers", "Scripture"];

export function MediaLibrary() {
  return (
    <section className="py-16 lg:py-24 bg-surface-alt">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
            Media Library
          </h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {filterTabs.map((tab) => (
            <button
              type="button"
              key={tab}
              className="px-4 py-2 text-sm font-medium text-text-muted border border-border hover:border-foreground hover:text-foreground transition-colors"
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Sermon grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {sermons.map((sermon) => (
            <div key={sermon.title} className="border-l-2 border-border pl-6">
              {/* Placeholder thumbnail */}
              <div className="bg-border aspect-video mb-4" />
              <p className="text-sm text-text-muted mb-1">{sermon.date}</p>
              <h3 className="font-semibold text-foreground mb-1">
                {sermon.title}
              </h3>
              <p className="text-text-muted text-sm">{sermon.speaker}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
