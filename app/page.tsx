import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import Solution from "@/components/sections/Solution";
import HowItWorks from "@/components/sections/HowItWorks";
import Benefits from "@/components/sections/Benefits";

import Testimonials from "@/components/sections/Testimonials";
import Pricing from "@/components/sections/Pricing";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="section-divider">
        <Problem />
      </div>
      <div className="section-divider">
        <Solution />
      </div>
      <div className="section-divider">
        <HowItWorks />
      </div>
      <div className="section-divider">
        <Benefits />
      </div>

      <div className="section-divider">
        <Testimonials />
      </div>
      <div className="section-divider">
        <Pricing />
      </div>
      <div className="section-divider">
        <FAQ />
      </div>
      <Contact />
    </>
  );
}

