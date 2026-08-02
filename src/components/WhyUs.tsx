const reasons = [
  {
    title: "Certified service",
    copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Factory-trained techs and warranty-safe repairs.",
  },
  {
    title: "Trucks in stock",
    copy: "Sed do eiusmod tempor incididunt ut labore. New and used inventory ready for Arizona routes.",
  },
  {
    title: "Parts when you need them",
    copy: "Ut enim ad minim veniam, quis nostrud. Counter support and fast movers kept on the shelf.",
  },
  {
    title: "Financing options",
    copy: "Duis aute irure dolor in reprehenderit. Flexible plans to help you move from lot to road.",
  },
];

export function WhyUs() {
  return (
    <section id="why" className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <h2 className="font-[family-name:var(--font-display)] text-4xl font-bold tracking-tight text-ink uppercase md:text-5xl">
          Why choose us?
        </h2>
        <p className="mt-3 max-w-2xl text-steel">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. A simpler
          partner for sales, service, and parts across Arizona.
        </p>

        <ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason) => (
            <li key={reason.title} className="border-t-2 border-amber pt-5">
              <h3 className="font-[family-name:var(--font-display)] text-xl font-bold tracking-wide text-ink uppercase">
                {reason.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-steel">
                {reason.copy}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
