
import { Hero } from "@/components/Hero";
import { ProductFeatures } from "@/components/ProductFeatures";
import { TechnicalHighlights } from "@/components/TechnicalHighlights";
import { IndustryApplications } from "@/components/IndustryApplications";
import { WhyChooseRholux } from "@/components/WhyChooseRholux";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900">
      <Hero />
      <ProductFeatures />
      <TechnicalHighlights />
      <IndustryApplications />
      <WhyChooseRholux />
      <Footer />
    </div>
  );
};

export default Index;
