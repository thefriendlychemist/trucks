"use client";

import Image from "next/image";
import * as React from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

const slides = [
  {
    src: "https://images.unsplash.com/photo-1601584115197-04ecc1da5d9a?auto=format&fit=crop&w=2400&q=80",
  },
  {
    src: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=2400&q=80",
  },
  {
    src: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=2400&q=80",
  },
  {
    src: "https://images.unsplash.com/photo-1601362840469-51e4d8da62bc?auto=format&fit=crop&w=2400&q=80",
  },
  {
    src: "https://images.unsplash.com/photo-1494412685616-a5d310fbb07d?auto=format&fit=crop&w=2400&q=80",
  },
  {
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=2400&q=80",
  },
];

const tabs = [
  {
    id: "buy",
    label: "Buy",
    copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
  },
  {
    id: "service",
    label: "Service",
    copy: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.",
  },
  {
    id: "parts",
    label: "Parts",
    copy: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
  },
  {
    id: "rentals",
    label: "Truck Rentals",
    copy: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet.",
  },
  {
    id: "financing",
    label: "Financing",
    copy: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.",
  },
] as const;

export function Hero() {
  const [current, setCurrent] = React.useState(0);
  const [activeTab, setActiveTab] = React.useState<string>("buy");

  React.useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduceMotion) return;

    const id = window.setInterval(() => {
      setCurrent((value) => (value + 1) % slides.length);
    }, 5500);

    return () => window.clearInterval(id);
  }, []);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  const activeCopy =
    tabs.find((tab) => tab.id === activeTab)?.copy ?? tabs[0].copy;

  return (
    <section className="relative isolate overflow-hidden bg-ink">
      <div className="absolute inset-0 -z-10" aria-hidden>
        {slides.map((slide, i) => (
          <Image
            key={slide.src}
            src={slide.src}
            alt=""
            fill
            priority={i === 0}
            sizes="100vw"
            className={cn(
              "object-cover object-center transition-opacity duration-1000 ease-out",
              i === current ? "opacity-100" : "opacity-0",
            )}
          />
        ))}
        <div className="absolute inset-0 bg-ink/60" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[85vh] max-w-6xl flex-col justify-between px-5 pt-16 pb-10 md:min-h-[90vh] md:px-8 md:pt-24 md:pb-14">
        <div className="max-w-3xl pt-4 md:pt-10">
          <h1 className="fade-up font-[family-name:var(--font-display)] text-5xl font-bold leading-[0.95] tracking-tight text-white uppercase sm:text-6xl md:text-7xl">
            Built to keep you moving
          </h1>
          <p className="fade-up fade-up-delay mt-5 max-w-xl text-lg text-white/85 md:text-xl">
            From buying your first truck to keeping your fleet on the road,
            we&apos;re your full-service partner in Arizona.
          </p>
        </div>

        <div className="mt-16 w-full md:mt-20">
          <div className="mb-4 flex justify-center gap-2">
            {slides.map((slide, i) => (
              <button
                key={slide.src}
                type="button"
                aria-label={`Show slide ${i + 1}`}
                aria-current={i === current}
                onClick={() => setCurrent(i)}
                className={cn(
                  "size-2.5 rounded-full transition-colors",
                  i === current
                    ? "bg-white"
                    : "bg-white/40 hover:bg-white/70",
                )}
              />
            ))}
          </div>

          <Card
            id="inventory"
            className="gap-0 py-0 shadow-[0_12px_40px_rgba(12,35,64,0.18)] ring-foreground/5"
          >
            <CardContent className="px-4 pt-1 pb-6 sm:px-6 md:px-8 md:pb-8">
              <Tabs
                defaultValue="buy"
                className="gap-0"
                onValueChange={(value) => {
                  if (typeof value === "string") setActiveTab(value);
                }}
              >
                <TabsList
                  variant="line"
                  className="h-auto w-full justify-start gap-0 overflow-x-auto rounded-none border-b border-border bg-transparent p-0"
                >
                  {tabs.map((tab) => (
                    <TabsTrigger
                      key={tab.id}
                      value={tab.id}
                      className="rounded-none px-3 py-3.5 text-sm font-semibold text-steel after:bg-amber data-active:text-ink md:px-4 md:text-base"
                    >
                      {tab.label}
                    </TabsTrigger>
                  ))}
                </TabsList>

                <div className="pt-6">
                  <p className="mx-auto h-16 max-w-4xl overflow-hidden text-center text-sm leading-relaxed text-steel md:h-14 md:text-[15px]">
                    {activeCopy}
                  </p>

                  <form
                    onSubmit={handleSubmit}
                    className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_1fr_auto]"
                  >
                    <Select>
                      <SelectTrigger className="h-10 w-full rounded-md">
                        <SelectValue placeholder="Condition" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="new">New</SelectItem>
                        <SelectItem value="used">Used</SelectItem>
                      </SelectContent>
                    </Select>

                    <Select>
                      <SelectTrigger className="h-10 w-full rounded-md">
                        <SelectValue placeholder="Make" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="a">Make A</SelectItem>
                        <SelectItem value="b">Make B</SelectItem>
                        <SelectItem value="c">Make C</SelectItem>
                      </SelectContent>
                    </Select>

                    <Select>
                      <SelectTrigger className="h-10 w-full rounded-md">
                        <SelectValue placeholder="Model" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">Model 1</SelectItem>
                        <SelectItem value="2">Model 2</SelectItem>
                        <SelectItem value="3">Model 3</SelectItem>
                      </SelectContent>
                    </Select>

                    <Input
                      name="zip"
                      inputMode="numeric"
                      placeholder="Zip Code"
                      className="h-10 rounded-md md:text-sm"
                    />

                    <Button
                      type="submit"
                      size="lg"
                      className="h-10 rounded-md px-8 text-sm font-bold tracking-wide uppercase sm:col-span-2 lg:col-span-1"
                    >
                      Search
                    </Button>
                  </form>
                </div>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
