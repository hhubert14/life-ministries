import { LocationMap } from "./location-map";

const serviceTimes = [
  { day: "Sunday Morning", time: "10:30 AM" },
  { day: "Wednesday Evening", time: "6:30 PM" },
  { day: "Sunday Prayer Service", time: "6:00 PM" },
];

export function ServiceLocation() {
  return (
    <section className="py-16 lg:py-24 bg-surface-alt">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
            Service Times & Location
          </h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Service Times */}
          <div>
            <h3 className="font-semibold text-foreground mb-6">
              Service Times
            </h3>
            <div className="space-y-4">
              {serviceTimes.map((service, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center border-b border-border pb-4 last:border-0"
                >
                  <p className="text-foreground">{service.day}</p>
                  <p className="text-foreground">{service.time}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Location */}
          <div>
            <h3 className="font-semibold text-foreground mb-6">Location</h3>
            <address className="not-italic text-text-muted mb-6">
              <p>2213 Cobbs St</p>
              <p>Lynchburg, VA 24501</p>
            </address>

            <LocationMap />
          </div>
        </div>
      </div>
    </section>
  );
}
