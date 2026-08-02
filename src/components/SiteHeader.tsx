import Link from "next/link";

const links = [
  { href: "#inventory", label: "Inventory" },
  { href: "#why", label: "Why Us" },
  { href: "#services", label: "Service" },
  { href: "#location", label: "Locations" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-line bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3.5 md:px-8">
        <Link
          href="/"
          className="font-[family-name:var(--font-display)] text-2xl font-bold tracking-wide text-navy uppercase"
        >
          Company Name
        </Link>
        <nav className="hidden items-center gap-7 text-sm font-semibold text-navy md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-red"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:+10000000000"
            className="bg-red px-4 py-2 text-white transition-colors hover:bg-red-hot"
          >
            (000) 000-0000
          </a>
        </nav>
        <a
          href="tel:+10000000000"
          className="bg-red px-3 py-2 text-sm font-semibold text-white md:hidden"
        >
          Call
        </a>
      </div>
    </header>
  );
}
