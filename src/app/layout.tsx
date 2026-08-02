import type { Metadata } from "next";
import { Barlow, Barlow_Condensed, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const display = Barlow_Condensed({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600", "700"],
});

const body = Barlow({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Company Name | Truck Center — Arizona",
  description:
    "Lorem ipsum dolor sit amet. Placeholder site for an Arizona commercial truck center — sales, service, and parts.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("h-full", display.variable, body.variable, "font-sans", geist.variable)}>
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
