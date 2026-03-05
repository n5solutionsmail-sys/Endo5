import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import Benefits from "@/components/sections/Benefits";
import EndoCoolFAQ from "@/components/sections/EndoCoolFAQ";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";

export default function CoolPage() {
  return (
    <>
      <Hero product="endocool" />
      <div className="section-divider">
        <Problem />
      </div>
      <div className="section-divider">
        <Benefits productId="endocool" />
      </div>
      <div className="section-divider">
        <EndoCoolFAQ />
      </div>
      <div className="section-divider">
        <Testimonials productId="endocool" />
      </div>
      <Contact />
    </>
  );
}
