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
      <Hero />
      <div className="section-divider">
        <Problem />
      </div>
      <div className="section-divider">
        <Benefits />
      </div>
      <div className="section-divider">
        <Solution />
      </div>
      <div className="section-divider py-4 space-y-2 bg-slate-50">
        <h2 className="text-xs font-medium text-center text-muted-foreground">EndoTherm® ist mehrfach ausgezeichnet</h2>
        <LogoScroller />
      </div>
      <div className="section-divider">
        <Testimonials />
      </div>
      <Contact />
    </>
  );
}

