import Hero from "./sections/Hero";
import Comparison from "./sections/Comparison";
import Architecture from "./sections/Architecture";
import Products from "./sections/Products";
import AiEngine from "./sections/AiEngine";
import ExploreSection from "./sections/ExploreSection";
import Metrics from "./sections/Metrics";
import Security from "./sections/Security";
import Pricing from "./sections/Pricing";
import Faq from "./sections/Faq";
import Testimonials from "./sections/Testimonials";
export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <Comparison />
      <Architecture />
      <Products />
      <AiEngine />
      <ExploreSection />
      <Metrics />
      <Security />
      <Pricing />
      <Faq />
      <Testimonials />
    </div>
  );
}


