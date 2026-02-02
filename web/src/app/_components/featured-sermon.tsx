import Link from "next/link";

const featuredSermon = {
  title: "A Life of Prayer",
  speaker: "Pastor John",
  date: "January 26, 2025",
  series: "Walking in the Spirit",
  description: "Discover how prayer transforms not just our circumstances, but our hearts. Learn practical ways to deepen your prayer life and experience God's presence daily.",
};

const recentSermons = [
  {
    title: "Walking in Faith",
    speaker: "Pastor John",
    date: "January 19, 2025",
  },
  {
    title: "The Heart of Worship",
    speaker: "Pastor John",
    date: "January 12, 2025",
  },
  {
    title: "Finding Peace in Uncertainty",
    speaker: "Guest Speaker",
    date: "January 5, 2025",
  },
];

export function FeaturedSermon() {
  return (
    <section className="py-20 lg:py-28 bg-[#f5f5f5]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px w-12 bg-[#2d3a8c]" />
          <span className="text-sm font-semibold uppercase tracking-wider text-[#2d3a8c]">
            Latest Messages
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Featured Sermon Card */}
          <div className="lg:col-span-2">
            <div className="relative bg-white rounded-3xl overflow-hidden shadow-lg group hover:shadow-xl transition-shadow">
              {/* Placeholder for video/image */}
              <div className="aspect-video bg-gradient-to-br from-[#1a2057] to-[#2d3a8c] relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform cursor-pointer">
                    <svg className="w-10 h-10 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                {/* Series Badge */}
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center rounded-full bg-[#e07940] px-3 py-1 text-xs font-medium text-white">
                    {featuredSermon.series}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-[#1a1a1a] mb-3 group-hover:text-[#2d3a8c] transition-colors">
                  {featuredSermon.title}
                </h3>
                <p className="text-[#6b7280] mb-4 line-clamp-2">
                  {featuredSermon.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-[#6b7280]">
                    <span className="font-medium text-[#1a1a1a]">{featuredSermon.speaker}</span>
                    <span className="mx-2">&bull;</span>
                    <span>{featuredSermon.date}</span>
                  </div>
                  <Link
                    href="/media"
                    className="inline-flex items-center text-sm font-semibold text-[#2d3a8c] hover:text-[#1a2057] transition-colors"
                  >
                    Watch Now
                    <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Sermons List */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-[#1a1a1a] mb-6">Recent Messages</h4>
            {recentSermons.map((sermon, index) => (
              <Link
                key={index}
                href="/media"
                className="block bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-all group"
              >
                <h5 className="font-semibold text-[#1a1a1a] group-hover:text-[#2d3a8c] transition-colors mb-2">
                  {sermon.title}
                </h5>
                <div className="text-sm text-[#6b7280]">
                  <span>{sermon.speaker}</span>
                  <span className="mx-2">&bull;</span>
                  <span>{sermon.date}</span>
                </div>
              </Link>
            ))}

            <Link
              href="/media"
              className="block text-center py-4 text-sm font-semibold text-[#2d3a8c] hover:text-[#1a2057] transition-colors"
            >
              View All Messages
              <svg className="inline-block ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
