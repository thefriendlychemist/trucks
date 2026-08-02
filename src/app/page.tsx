import { Hero } from "@/components/Hero";
import { Location } from "@/components/Location";
import { Services } from "@/components/Services";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { WhyUs } from "@/components/WhyUs";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <WhyUs />
        <Services />
        <Location />
      </main>
      <SiteFooter />
    </>
  );
}
