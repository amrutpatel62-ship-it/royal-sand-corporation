import Hero from "./components/home/Hero";
import ValueProposition from "./components/home/ValueProposition";
import FeaturedOfferings from "./components/home/FeaturedOfferings";
import WhyChooseUs from "./components/home/WhyChooseUs";
import CTA from "./components/home/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <ValueProposition />
      <FeaturedOfferings />
      <WhyChooseUs />
      <CTA />
    </>
  );
}
