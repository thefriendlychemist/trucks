import Image from "next/image";
import Link from "next/link";

const links = [
  { href: "#inventory", label: "Inventory" },
  { href: "#why", label: "Why Us" },
  { href: "#services", label: "Service" },
  { href: "#parts-service", label: "Tires" },
  { href: "#location", label: "Locations" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-ink">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3.5 md:px-8">
        <Link
          href="/"
          className="relative block h-14 w-[200px] shrink-0 sm:h-16 sm:w-[240px] md:h-[4.5rem] md:w-[280px]"
        >
          <Image
            src="/iq-logo-v2.png"
            alt="IQ Truck Center"
            fill
            priority
            unoptimized
            className="object-contain object-left"
            sizes="(max-width: 640px) 200px, (max-width: 768px) 240px, 280px"
          />
        </Link>
        <nav className="hidden items-center gap-7 text-sm font-semibold text-white md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-amber"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:+10000000000"
            className="bg-amber px-4 py-2 text-ink transition-colors hover:bg-amber-hot"
          >
            (000) 000-0000
          </a>
        </nav>
        <a
          href="tel:+10000000000"
          className="bg-amber px-3 py-2 text-sm font-semibold text-ink md:hidden"
        >
          Call
        </a>
      </div>
    </header>
  );
}
