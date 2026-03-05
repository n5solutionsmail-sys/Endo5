import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import Solution from "@/components/sections/Solution";
import Benefits from "@/components/sections/Benefits";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import LogoScroller from "@/components/ui/LogoScroller";

export default function Home() {
  return (
    <>
      <Hero product="endotherm" />
      <div className="section-divider">
        <Problem />
      </div>
      <div className="section-divider">
        <Benefits productId="endotherm" />
      </div>
      <div className="section-divider">
        <Solution productId="endotherm" />
      </div>
      <div className="section-divider py-4 bg-slate-50">
        <LogoScroller />
      </div>
      <div className="section-divider">
        <Testimonials productId="endotherm" />
      </div>
      <Contact />
    </>
  );
}
