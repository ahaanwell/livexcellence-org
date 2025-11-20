import FAQSection from "@/components/FAQSection";
import FeaturesSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import PricingSection from "@/components/PricingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <Header/>
    <HeroSection/>
    <FeaturesSection/>
    <HowItWorksSection/>
    <PricingSection/>
    <TestimonialsSection/>
    <FAQSection/>
    <Footer/>
    </>
  );
}
