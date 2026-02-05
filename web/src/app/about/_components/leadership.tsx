import Image from "next/image";

const leaders = [
  {
    name: "Jonathan Gillette",
    role: "Lead Pastor",
    image: "/lead-pastor.jpeg",
    email: "Jonathan.Gillette@lifeministriesva.com",
    phone: "(434) 237-4474",
  },
  {
    name: "Gary Vernon",
    role: "Associate Pastor",
    image: "/associate-pastor.jpeg",
    email: "Gary.Vernon@lifeministriesva.com",
  },
  {
    name: "Kazdyn Waldron",
    role: "Worship Director",
    image: "/placeholder-person.png",
    email: "Kazdyn.Waldron@lifeministriesva.com",
  },
  {
    name: "Justin Waldron",
    role: "Youth Director",
    image: "/placeholder-person.png",
    email: "Justin.Waldron@lifeministriesva.com",
  },
  {
    name: "Debbie Stowers",
    role: "Children's Director",
    image: "/childrens-director.jpeg",
    email: "Debbie.Stower@lifeministriesva.com",
  },
];

export function Leadership() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-6">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
            Leadership
          </h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        <p className="text-text-muted mb-12 max-w-2xl">
          Meet the pastors and staff who lead and serve our church family.
        </p>

        {/* Leaders grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {leaders.map((leader) => (
            <div key={leader.name}>
              {/* Photo */}
              <div className="relative aspect-4/5 mb-4 bg-border overflow-hidden">
                <Image
                  src={leader.image}
                  alt={leader.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Info */}
              <h3 className="font-semibold text-foreground">{leader.name}</h3>
              <p className="text-sm text-text-muted">{leader.role}</p>
              <a
                href={`mailto:${leader.email}`}
                className="text-sm text-text-muted underline underline-offset-2 hover:text-foreground transition-colors"
              >
                {leader.email}
              </a>
              {leader.phone && (
                <p className="text-sm text-text-muted">{leader.phone}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
