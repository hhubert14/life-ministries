const leaders = [
  {
    name: "Pastor Name",
    role: "Lead Pastor",
  },
  {
    name: "Staff Name",
    role: "Associate Pastor",
  },
  {
    name: "Staff Name",
    role: "Worship Director",
  },
  {
    name: "Staff Name",
    role: "Youth Director",
  },
  {
    name: "Staff Name",
    role: "Children's Director",
  },
];

export function Leadership() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-6">
          <h2 className="text-2xl font-bold text-[#1a1a1a] sm:text-3xl">
            Leadership
          </h2>
          <div className="h-px flex-1 bg-[#e5e5e5]" />
        </div>

        <p className="text-[#4b5563] mb-12 max-w-2xl">
          Meet the pastors and staff who lead and serve our church family.
        </p>

        {/* Leaders grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {leaders.map((leader, index) => (
            <div key={index}>
              {/* Photo placeholder */}
              <div className="aspect-[4/5] mb-4 bg-[#e5e5e5]" />

              {/* Info */}
              <h3 className="font-semibold text-[#1a1a1a]">{leader.name}</h3>
              <p className="text-sm text-[#6b7280]">{leader.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
