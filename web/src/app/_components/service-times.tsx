import Link from "next/link";
import Image from "next/image";

export function ServiceTimes() {
  return (
    <section className="py-12 lg:py-16 bg-surface-alt">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-2xl font-bold text-foreground">Visit Us</h2>
        </div>
        <div className="h-px bg-border mb-10" />

        {/* Location Card - Free Chapel campus card style */}
        <div className="max-w-md">
          <Link href="https://maps.google.com/?q=2213+Cobbs+St+Lynchburg+VA+24501" target="_blank" className="group block">
            {/* Image */}
            <div className="relative aspect-4/3 rounded-xl overflow-hidden mb-4 bg-foreground">
              <Image
                src="/visit-us.png"
                alt="Church building"
                fill
                className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
              />
            </div>

            {/* Info */}
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-semibold text-foreground text-lg mb-1">Lynchburg, VA</h3>
                <p className="text-sm text-text-muted mb-2">
                  Sundays at 10:30 AM
                </p>
                <p className="text-sm text-text-muted">
                  Wednesdays at 6:30 PM
                </p>
              </div>
              <svg
                className="h-5 w-5 text-text-muted group-hover:text-foreground group-hover:translate-x-1 transition-all mt-1"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </div>
          </Link>

          {/* Address */}
          <div className="mt-6 pt-6 border-t border-border">
            <address className="not-italic text-sm text-text-muted">
              2213 Cobbs St.<br />
              Lynchburg, VA 24501
            </address>
          </div>
        </div>
      </div>
    </section>
  );
}
