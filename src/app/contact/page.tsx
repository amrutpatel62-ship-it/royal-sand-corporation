"use client";

import Hero from "../components/contact/Hero";
import Contact from "../components/contact/Contact";
import LocationLogistics from "../components/contact/LocationLogistics";
import PartnerWithUs from "../components/contact/PartnerWithUs";
import CTA from "../components/contact/CTA";

export default function contact() {
  return (
    <>
      <Hero />
      <Contact />
      <LocationLogistics />
      <PartnerWithUs />
      <CTA />
    </>
  );
}
