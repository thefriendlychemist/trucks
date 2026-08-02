const services = [
  {
    title: "Buy",
    copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Find new and used commercial trucks for your vocation.",
  },
  {
    title: "Service",
    copy: "Sed ut perspiciatis unde omnis iste natus error. Maintenance, diagnostics, and heavy repair to protect uptime.",
  },
  {
    title: "Parts",
    copy: "Nemo enim ipsam voluptatem quia voluptas. OEM and aftermarket parts with knowledgeable counter staff.",
  },
];

export function Services() {
  return (
    <section id="services" className="bg-mist py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <h2 className="font-[family-name:var(--font-display)] text-4xl font-bold tracking-tight text-ink uppercase md:text-5xl">
          Sales, service & parts
        </h2>
        <p className="mt-3 max-w-2xl text-steel">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. One place for
          the work that keeps commercial trucks moving.
        </p>

        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <li key={service.title} className="bg-white p-7">
              <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold tracking-wide text-ink uppercase">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-steel">
                {service.copy}
              </p>
              <a
                href="#location"
                className="mt-6 inline-block text-sm font-bold tracking-wide text-amber uppercase transition-colors hover:text-amber-hot"
              >
                Learn more
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
