import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, MapPin, Clock, CalendarCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import WhatsAppForm from "./WhatsAppForm";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleCall = (number: string) => {
    window.location.href = `tel:${number}`;
  };

  const handleDirections = () => {
    window.open("https://maps.app.goo.gl/Gz9mR5SVjhMLKqzs8", "_blank");
  };

  const handleGoogleForm = () => {
    // Placeholder link as none was provided, user instructed to add button.
    // In a real scenario, this would be the actual form URL.
    window.open("https://docs.google.com/forms", "_blank");
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-background relative">
      {/* Decorative Line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="container px-4 md:px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
          >
            Contact Us
          </motion.span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready to Start{" "}
            <span className="text-gradient">Your Healing Journey?</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            Get in touch with us today for a consultation
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="space-y-6"
          >
            {/* Phone Numbers */}
            <div className="p-6 rounded-2xl bg-card border border-border/50 shadow-card">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">Call Us Now</h3>
              </div>
              <div className="space-y-3">
                <button
                  onClick={() => handleCall("+919994907341")}
                  className="w-full flex items-center justify-between p-4 rounded-xl bg-muted/50 hover:bg-primary/10 transition-colors duration-200 group"
                >
                  <span className="font-medium text-foreground">+91 99949 07341</span>
                  <span className="text-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    Tap to call →
                  </span>
                </button>
                <button
                  onClick={() => handleCall("+919952476950")}
                  className="w-full flex items-center justify-between p-4 rounded-xl bg-muted/50 hover:bg-primary/10 transition-colors duration-200 group"
                >
                  <span className="font-medium text-foreground">+91 99524 76950</span>
                  <span className="text-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    Tap to call →
                  </span>
                </button>
              </div>
            </div>

            {/* Visit & Consultation */}
            <div className="grid sm:grid-cols-2 gap-6">
              {/* Location */}
              <div className="p-6 rounded-2xl bg-card border border-border/50 shadow-card">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-healing-sage/20 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-healing-sage" />
                  </div>
                  <h3 className="font-semibold text-foreground">Visit Us</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4 text-sm">
                  3rd Cross, Muthu Complex,<br />
                  KK Nagar, Mettupalayam,<br />
                  Coimbatore District – 641301
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleDirections}
                  className="w-full"
                >
                  <MapPin className="w-4 h-4 mr-2" />
                  Get Directions
                </Button>
              </div>

              {/* Consultation */}
              <div className="p-6 rounded-2xl bg-card border border-border/50 shadow-card">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-healing-gold/20 flex items-center justify-center">
                    <CalendarCheck className="w-5 h-5 text-healing-gold" />
                  </div>
                  <h3 className="font-semibold text-foreground">Schedule</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4 text-sm">
                  Prefer a scheduled appointment? Book a slot online.
                </p>
                <Button
                  variant="default"
                  size="sm"
                  onClick={handleGoogleForm}
                  className="w-full"
                >
                  <CalendarCheck className="w-4 h-4 mr-2" />
                  Book Appointment
                </Button>
              </div>
            </div>

            {/* Hours */}
            <div className="p-6 rounded-2xl bg-card border border-border/50 shadow-card">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">Working Hours</h3>
              </div>
              <p className="text-muted-foreground">
                Monday - Sunday: 9:00 AM - 8:00 PM
              </p>
            </div>
          </motion.div>

          {/* WhatsApp Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <WhatsAppForm />
          </motion.div>
        </div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="rounded-2xl overflow-hidden shadow-card border border-border/50 h-[300px] md:h-[400px]"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3912.6212903800297!2d76.9364028750494!3d11.28922448889244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTHCsDE3JzIxLjIiTiA3NsKwNTYnMjAuMyJF!5e0!3m2!1sen!2sin!4v1766975448034!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="The Best Therapy & Healing Centre Location"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
