import Image from "next/image";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-ink text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 md:flex-row md:items-center md:justify-between md:px-8">
        <div className="flex items-center gap-4">
          <div className="relative h-14 w-[200px] shrink-0 md:h-16 md:w-[240px]">
            <Image
              src="/iq-logo-v2.png"
              alt="IQ Truck Center"
              fill
              unoptimized
              className="object-contain object-left"
              sizes="(max-width: 768px) 200px, 240px"
            />
          </div>
          <p className="text-sm text-white/55">
            Arizona · Sales · Service · Parts
          </p>
        </div>
        <p className="text-sm text-white/45">
          © {new Date().getFullYear()} IQ Truck Center. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
