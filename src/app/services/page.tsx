"use client";

import Hero from "../components/services/Hero";
import ProductDetail from "../components/services/ProductDetail";
import ImpuritiesShowcase from "../components/services/ImpuritiesShowcase";
import ProductApplicationMatrix from "../components/services/ProductApplicationMatrix";
import PackagingLogistics from "../components/services/PackagingLogistics";
import CTA from "../components/about/CTA";

export default function services() {
  return (
    <>
      <Hero />
      <ProductDetail />
      <ImpuritiesShowcase />
      <ProductApplicationMatrix />
      <PackagingLogistics />
      <CTA />
    </>
  );
}
