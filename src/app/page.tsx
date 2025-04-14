import BlogSection from "@/components/section/BlogSection";
import CallToActionSection from "@/components/section/CallToActionSection";
import ContactSection from "@/components/section/ContactSection";
import HeroSection from "@/components/section/HeroSection";
import IntroSection from "@/components/section/IntroSection";
import ResponsiveHighlightSection from "@/components/section/ResponsiveHighlight";
import SecondarySection from "@/components/section/SecondaryCTA";
import ServicesSection from "@/components/section/ServicesSection";
import TeamSection from "@/components/section/TeamSection";
import TestimonialSection from "@/components/section/TestimonialsSection";
import WhyChooseUsSection from "@/components/section/WhyChooseUsSection";

export default function Home() {
  return (
    <>
      <HeroSection/>
      <IntroSection />
      <TeamSection />
      <ServicesSection />
      <CallToActionSection />
      <WhyChooseUsSection />
      <ResponsiveHighlightSection />
      <TestimonialSection />
      <BlogSection />
      <SecondarySection />
      <ContactSection />
    </>
  );
}
