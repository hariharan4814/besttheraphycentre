import { motion } from "framer-motion";
import { Phone, MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import ParticlesBackground from "@/components/ParticlesBackground";

const HeroSection = () => {
  const handleCall = () => {
    window.location.href = "tel:+919080183701";
  };

  const handleDirections = () => {
    window.open("https://maps.google.com/?q=KK+Nagar+Mettupalayam+Coimbatore", "_blank");
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/919994907341", "_blank");
  };

  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
      {/* Background - Lightweight Gradient */}
      <div className="absolute inset-0 bg-healing-mint/5 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />

      {/* Animated Glow Elements */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-healing-sage/20 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Content */}
      <div className="relative z-10 container px-4 md:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">Natural Healing Centre</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-4"
            style={{ fontFamily: '"Times New Roman", Times, serif' }}
          >
            THE BEST THERAPY &{" "}
            <span style={{ color: 'hsl(142, 70%, 45%)' }}>HEALING CENTRE</span>
          </motion.h1>

          {/* Animated Subheading */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mb-6"
          >
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground font-medium">
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                Save Your Life{" "}
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="text-primary font-semibold"
              >
                Without Medicines
              </motion.span>
            </p>
          </motion.div>

          {/* Highlighted Services */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.5 }}
            className="mb-10 text-sm md:text-base font-medium text-foreground/80 bg-background/50 backdrop-blur-sm border border-primary/10 py-2 px-4 rounded-lg inline-block shadow-sm"
          >
            Treatment will be provided at your home. <span className="mx-2 text-primary">•</span> Online counseling facilities are also available.
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              variant="hero"
              size="mobile"
              onClick={handleCall}
              className="w-full sm:w-auto"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </Button>
            <Button
              variant="heroOutline"
              size="mobile"
              onClick={handleDirections}
              className="w-full sm:w-auto"
            >
              <MapPin className="w-5 h-5" />
              Get Directions
            </Button>
            <Button
              variant="whatsapp"
              size="mobile"
              onClick={handleWhatsApp}
              className="w-full sm:w-auto"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.6 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground"
          >
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-healing-sage" />
              <span>Medicine-Free</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span>Professional Care</span>
            </div>

          </motion.div>
        </motion.div>
      </div>


    </section>
  );
};

export default HeroSection;
