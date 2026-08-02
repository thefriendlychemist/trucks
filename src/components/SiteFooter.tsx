export function SiteFooter() {
  return (
    <footer className="border-t border-navy-mid bg-navy text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 md:flex-row md:items-center md:justify-between md:px-8">
        <div>
          <p className="font-[family-name:var(--font-display)] text-lg font-bold tracking-wide uppercase">
            Company Name
          </p>
          <p className="mt-1 text-sm text-white/55">
            Arizona · Sales · Service · Parts
          </p>
        </div>
        <p className="text-sm text-white/45">
          © {new Date().getFullYear()} Company Name. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
