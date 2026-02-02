import Link from "next/link";

const services = [
  {
    name: "Sunday Morning Worship",
    time: "10:30 AM",
    description: "Join us for praise, worship, and the Word",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ),
  },
  {
    name: "Sunday Evening Prayer",
    time: "6:00 PM",
    description: "A time of prayer and intercession",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
      </svg>
    ),
  },
  {
    name: "Wednesday Bible Study",
    time: "6:30 PM",
    description: "Grow deeper in your understanding",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
  },
];

export function ServiceTimes() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Service Times */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-[#e07940]" />
              <span className="text-sm font-semibold uppercase tracking-wider text-[#e07940]">
                Join Us
              </span>
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-[#1a1a1a] sm:text-4xl mb-8">
              Service Times
            </h2>

            <div className="space-y-6">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="flex items-start gap-5 p-6 bg-[#f5f5f5] rounded-2xl hover:bg-[#eee] transition-colors"
                >
                  <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-[#2d3a8c] text-white flex items-center justify-center">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1a1a1a] text-lg">{service.name}</h3>
                    <p className="text-2xl font-bold text-[#2d3a8c] my-1">{service.time}</p>
                    <p className="text-sm text-[#6b7280]">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Location */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-[#2d3a8c]" />
              <span className="text-sm font-semibold uppercase tracking-wider text-[#2d3a8c]">
                Location
              </span>
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-[#1a1a1a] sm:text-4xl mb-8">
              Visit Us
            </h2>

            {/* Map Placeholder */}
            <div className="bg-[#f5f5f5] rounded-2xl overflow-hidden mb-6">
              <div className="aspect-[4/3] bg-gradient-to-br from-[#e5e5e5] to-[#d5d5d5] flex items-center justify-center">
                <div className="text-center text-[#6b7280]">
                  <svg className="w-12 h-12 mx-auto mb-3 opacity-50" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  <p className="text-sm font-medium">Map coming soon</p>
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="bg-[#1a2057] rounded-2xl p-6 text-white">
              <div className="flex items-start gap-4">
                <svg className="w-6 h-6 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Life Ministries</h3>
                  <address className="not-italic text-white/80">
                    2213 Cobbs St.<br />
                    Lynchburg, VA 24501
                  </address>
                </div>
              </div>
              <Link
                href="https://maps.google.com/?q=2213+Cobbs+St+Lynchburg+VA+24501"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center text-sm font-semibold text-[#e07940] hover:text-[#f59b6a] transition-colors"
              >
                Get Directions
                <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
