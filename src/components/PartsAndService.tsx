import Image from "next/image";

const offerings = [
  {
    title: "Tire repair",
    copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Punctures, section repairs, and roadside call-ins for commercial rubber.",
  },
  {
    title: "Tire replacement",
    copy: "Sed do eiusmod tempor incididunt ut labore. Steer, drive, and trailer tires stocked for common fleet sizes.",
  },
  {
    title: "Alignment & balancing",
    copy: "Ut enim ad minim veniam, quis nostrud. Keep wear even and miles consistent across Arizona heat and grades.",
  },
  {
    title: "Parts counter",
    copy: "Duis aute irure dolor in reprehenderit. Fast movers on the shelf—filters, brakes, lighting, and tire-related hardware.",
  },
];

export function PartsAndService() {
  return (
    <section id="parts-service" className="bg-white">
      <div className="grid lg:grid-cols-2">
        <div className="relative min-h-[360px] lg:min-h-full">
          <Image
            src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=1600&q=80"
            alt="Technician working on a commercial vehicle in a service bay"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        <div className="flex flex-col justify-center px-5 py-16 md:px-10 md:py-20 lg:px-14">
          <p className="text-sm font-bold tracking-[0.2em] text-amber uppercase">
            Parts &amp; service
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl font-bold tracking-tight text-ink uppercase md:text-5xl">
            Tire repairs that keep you rolling
          </h2>
          <p className="mt-4 max-w-xl text-steel">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. From
            flat fixes to full changeovers, our shop and parts counter are
            built around commercial uptime.
          </p>

          <ul className="mt-10 grid gap-8 sm:grid-cols-2">
            {offerings.map((item) => (
              <li key={item.title} className="border-t border-line pt-5">
                <h3 className="font-[family-name:var(--font-display)] text-xl font-bold tracking-wide text-ink uppercase">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-steel">
                  {item.copy}
                </p>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#location"
              className="bg-amber px-6 py-3 text-sm font-bold tracking-wide text-ink uppercase transition-colors hover:bg-amber-hot"
            >
              Schedule tire service
            </a>
            <a
              href="tel:+1(888)879-5814"
              className="border border-ink px-6 py-3 text-sm font-bold tracking-wide text-ink uppercase transition-colors hover:bg-mist"
            >
              Call the shop
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
