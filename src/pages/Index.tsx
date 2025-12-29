import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ImageGallery from "@/components/ImageGallery";
import TreatmentsSection from "@/components/TreatmentsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import MobileNavigation from "@/components/MobileNavigation";
import StickyCallButton from "@/components/StickyCallButton";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>The Best Therapy & Healing Centre | Natural Healing in Mettupalayam</title>
        <meta name="description" content="Experience natural healing without medicines at The Best Therapy & Healing Centre in Mettupalayam. Offering Tera Care, Acupuncture, Beauty Therapy, Hydra Facial & more. Call +91 99949 07341" />
        <meta name="keywords" content="healing centre, therapy centre, acupuncture, natural healing, Mettupalayam, Coimbatore, medicine-free treatment, wellness" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#0d9488" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://thebesthealing.com/" />
        <meta property="og:title" content="The Best Therapy & Healing Centre | Natural Healing" />
        <meta property="og:description" content="Experience natural healing without medicines at The Best Therapy & Healing Centre in Mettupalayam." />
        <meta property="og:image" content="/og-image.jpg" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalClinic",
            "name": "The Best Therapy & Healing Centre",
            "description": "Natural healing and therapy centre offering medicine-free treatments",
            "address": { "@type": "PostalAddress", "streetAddress": "3rd Cross, Muthu Complex, KK Nagar", "addressLocality": "Mettupalayam", "addressRegion": "Tamil Nadu", "postalCode": "641301", "addressCountry": "IN" },
            "telephone": ["+91-99949-07341", "+91-99524-76950"],
            "foundingDate": "2024-09-01",
            "priceRange": "$$",
            "openingHours": "Mo-Su 09:00-20:00"
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <HeroSection />
          <AboutSection />
          <ImageGallery />
          <TreatmentsSection />
          <TestimonialsSection />
          <WhyChooseUsSection />
          <ContactSection />
        </main>
        <Footer />
        <MobileNavigation />
        <StickyCallButton />
      </div>
    </>
  );
};

export default Index;
