import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { ArrowLeft, Phone, Clock, CheckCircle, MapPin, Lightbulb, Star, Home, Laptop } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileNavigation from "@/components/MobileNavigation";
import StickyCallButton from "@/components/StickyCallButton";
import { getTreatmentById, treatments } from "@/data/treatments";

import therapyHydrafacial from "@/assets/therapy-hydrafacial.jpg";
import therapyBeauty from "@/assets/therapy-beauty.jpg";
import mensWelcome from "@/assets/mens-welcome.png";
import mensTreatment from "@/assets/mens-treatment.png";
import mensRejuvenated from "@/assets/mens-rejuvenated.png";

const imageMap: Record<string, string> = {
  "therapy-energy.jpg": mensRejuvenated,
  "therapy-acupuncture.jpg": mensTreatment,
  "therapy-beauty.jpg": therapyBeauty,
  "therapy-hydrafacial.jpg": therapyHydrafacial,
  "therapy-wellness.jpg": mensWelcome,
  "therapy-counseling.jpg": mensWelcome,
  "therapy-reflexology.jpg": mensTreatment,
  "therapy-sujok.jpg": mensTreatment,
  "mens-treatment.png": mensTreatment,
  "mens-rejuvenated.png": mensRejuvenated,
  "mens-welcome.png": mensWelcome,
};

const TreatmentPage = () => {
  const { treatmentId } = useParams<{ treatmentId: string }>();
  const treatment = getTreatmentById(treatmentId || "");

  if (!treatment) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Treatment Not Found</h1>
          <Link to="/" className="text-primary hover:underline">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  const Icon = treatment.icon;
  const imageSrc = imageMap[treatment.image] || mensRejuvenated;

  // Get related treatments
  const relatedTreatments = treatments
    .filter(t => t.id !== treatment.id)
    .slice(0, 3);

  return (
    <>
      <Helmet>
        <title>{treatment.title} | The Best Therapy & Healing Centre</title>
        <meta
          name="description"
          content={`${treatment.fullDesc.slice(0, 155)}...`}
        />
        <link rel="canonical" href={`https://thebesthealing.com/treatment/${treatment.id}`} />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        <main className="pt-20">
          {/* Hero Section */}
          <section className="relative py-12 md:py-20 overflow-hidden">
            <div className="absolute inset-0">
              <img
                src={imageSrc}
                alt={treatment.title}
                className="w-full h-full object-cover opacity-20"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/90 to-background" />
            </div>

            <div className="container px-4 md:px-6 relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Link
                  to="/#treatments"
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-6"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to All Treatments
                </Link>

                <div className="flex flex-col md:flex-row gap-8 md:gap-12">
                  {/* Image */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="md:w-1/2"
                  >
                    <div className="relative rounded-2xl overflow-hidden glass-card aspect-[4/3]">
                      <img
                        src={imageSrc}
                        alt={treatment.title}
                        className="w-full h-full object-cover"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t ${treatment.color} opacity-30`} />
                    </div>
                  </motion.div>

                  {/* Content */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="md:w-1/2"
                  >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 mb-4">
                      <Icon className="w-5 h-5 text-primary" />
                      <span className="text-sm font-medium text-primary">Natural Therapy</span>
                    </div>

                    <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                      {treatment.title}
                    </h1>

                    <p className="text-lg text-muted-foreground mb-6">
                      {treatment.fullDesc}
                    </p>

                    <div className="flex flex-col gap-2 mb-6">
                      <div className="flex items-center gap-2 text-primary font-medium p-3 bg-primary/5 rounded-lg border border-primary/10">
                        <Home className="w-5 h-5" />
                        <span>Treatment will be provided at your home.</span>
                      </div>

                      {treatment.title.toLowerCase().includes("counseling") && (
                        <div className="flex items-center gap-2 text-healing-mint font-medium p-3 bg-healing-mint/5 rounded-lg border border-healing-mint/10">
                          <Laptop className="w-5 h-5" />
                          <span>Online counseling facilities are also available.</span>
                        </div>
                      )}

                      <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2">
                        <Clock className="w-4 h-4 text-primary" />
                        <span>{treatment.duration}</span>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button
                        variant="hero"
                        size="mobile"
                        onClick={() => window.location.href = "tel:+919080183701"}
                      >
                        <Phone className="w-5 h-5" />
                        Book Now
                      </Button>
                      <Button
                        variant="heroOutline"
                        size="mobile"
                        onClick={() => window.open("https://maps.google.com/?q=KK+Nagar+Mettupalayam+Coimbatore", "_blank")}
                      >
                        <MapPin className="w-5 h-5" />
                        Get Directions
                      </Button>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="py-12 md:py-16 bg-muted/30">
            <div className="container px-4 md:px-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
                  Key Benefits
                </h2>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {treatment.benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.4 }}
                      className="glass-card p-4 rounded-xl flex items-start gap-3"
                    >
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground/90">{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>

          {/* Facts Section */}
          <section className="py-12 md:py-16 bg-background">
            <div className="container px-4 md:px-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
                  Why Choose This Therapy?
                </h2>

                <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
                  {treatment.facts?.map((fact, index) => (
                    <motion.div
                      key={`fact-${index}`}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.4 }}
                      className="glass-card p-6 rounded-xl flex items-start gap-4 border-l-4 border-primary"
                    >
                      <Lightbulb className="w-6 h-6 text-primary flex-shrink-0" />
                      <div>
                        <p className="text-muted-foreground">{fact}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>

          {/* Advantages Section */}
          <section className="py-12 md:py-16 bg-muted/30">
            <div className="container px-4 md:px-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
                  Advantages
                </h2>

                <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-4 max-w-4xl mx-auto">
                  {treatment.advantages?.map((advantage, index) => (
                    <motion.div
                      key={`adv-${index}`}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.4 }}
                      className="flex items-center gap-3 p-4 bg-background rounded-lg shadow-sm"
                    >
                      <div className="w-8 h-8 rounded-full bg-healing-gold/20 flex items-center justify-center shrink-0">
                        <Star className="w-4 h-4 text-healing-gold" />
                      </div>
                      <span className="text-foreground font-medium">{advantage}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>

          {/* Related Treatments */}
          <section className="py-12 md:py-16 bg-background">
            <div className="container px-4 md:px-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
                  Other Treatments
                </h2>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {relatedTreatments.map((related, index) => {
                    const RelatedIcon = related.icon;
                    return (
                      <motion.div
                        key={related.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.4 }}
                      >
                        <Link
                          to={`/treatment/${related.id}`}
                          className="block glass-card p-5 rounded-xl hover:shadow-healing transition-all duration-300 group"
                        >
                          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                            <RelatedIcon className="w-6 h-6 text-primary" />
                          </div>
                          <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                            {related.title}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {related.shortDesc}
                          </p>
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-12 md:py-16 bg-healing-gradient">
            <div className="container px-4 md:px-6 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
                  Ready to Start Your Healing Journey?
                </h2>
                <p className="text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
                  Contact us today to schedule a consultation and learn how {treatment.title} can help you.
                </p>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => window.location.href = "tel:+919080183701"}
                  className="bg-background text-primary hover:bg-background/90"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call: +91 90801 83701
                </Button>
              </motion.div>
            </div>
          </section>
        </main>

        <Footer />
        <MobileNavigation />
        <StickyCallButton />
      </div>
    </>
  );
};

export default TreatmentPage;
