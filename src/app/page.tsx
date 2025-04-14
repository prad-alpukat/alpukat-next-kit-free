import BlogSection from "@/components/BlogSection";
import CallToActionSection from "@/components/CallToActionSection";
import ContactSection from "@/components/ContactSection";
import Hero from "@/components/Hero";
import IntroSection from "@/components/IntroSection";
import ResponsiveHighlightSection from "@/components/ResponsiveHighlight";
import SecondarySection from "@/components/SecondaryCTA";
import ServicesSection from "@/components/ServicesSection";
import TeamSection from "@/components/TeamSection";
import TestimonialSection from "@/components/TestimonialsSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";

export default function Home() {
  return (
    <>
      <Hero/>
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
