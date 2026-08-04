"use client";

import { FormEvent, useState } from "react";

export function Location() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="location" className="bg-ink py-16 text-white md:py-20">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-2 md:px-8">
        <div>
          <h2 className="font-[family-name:var(--font-display)] text-4xl font-bold tracking-tight uppercase md:text-5xl">
            Find us in Arizona
          </h2>
          <p className="mt-4 max-w-md text-white/75">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Visit the
            yard or send a request and we&apos;ll follow up during shop hours.
          </p>

          <address className="mt-8 not-italic text-white/90">
            <p className="font-semibold">123 Street Name</p>
            <p>City, AZ 00000</p>
            <p className="mt-4">
              <a
                href="tel:1 (888) 879-5814"
                className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-wide transition-colors hover:text-amber"
              >
                1 (888) 879-5814
              </a>
            </p>
            <p className="mt-2">
              <a
                href="mailto:hello@example.com"
                className="text-white/70 transition-colors hover:text-white"
              >
                hello@example.com
              </a>
            </p>
          </address>

          <ul className="mt-8 space-y-2 text-sm text-white/70">
            <li className="flex max-w-xs justify-between gap-6">
              <span>Sunday - Saturday</span>
              <span className="text-white">9:00 AM – 7:00 PM</span>
            </li>
          </ul>
        </div>

        <div className="bg-white p-6 text-ink md:p-8">
          {submitted ? (
            <div className="flex min-h-[280px] flex-col justify-center">
              <p className="font-[family-name:var(--font-display)] text-3xl font-bold uppercase">
                Request received
              </p>
              <p className="mt-3 text-steel">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. We will
                follow up shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <p className="font-[family-name:var(--font-display)] text-2xl font-bold uppercase">
                Contact us
              </p>
              <label className="block text-xs font-bold tracking-wide text-steel uppercase">
                Name
                <input
                  required
                  name="name"
                  className="mt-1.5 w-full border border-line px-3 py-3 text-sm outline-none focus:border-ink"
                />
              </label>
              <label className="block text-xs font-bold tracking-wide text-steel uppercase">
                Phone
                <input
                  required
                  name="phone"
                  type="tel"
                  className="mt-1.5 w-full border border-line px-3 py-3 text-sm outline-none focus:border-ink"
                />
              </label>
              <label className="block text-xs font-bold tracking-wide text-steel uppercase">
                Message
                <textarea
                  required
                  name="message"
                  rows={4}
                  className="mt-1.5 w-full resize-y border border-line px-3 py-3 text-sm outline-none focus:border-ink"
                />
              </label>
              <button
                type="submit"
                className="bg-amber px-6 py-3 text-sm font-bold tracking-wide text-ink uppercase transition-colors hover:bg-amber-hot"
              >
                Send
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
