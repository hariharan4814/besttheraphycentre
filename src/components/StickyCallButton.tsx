import { motion, AnimatePresence } from "framer-motion";
import { Phone } from "lucide-react";
import { useState, useEffect } from "react";

const StickyCallButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling 300px
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCall = () => {
    window.location.href = "tel:+919080183701";
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
          onClick={handleCall}
          className="fixed bottom-24 right-4 z-40 hidden md:flex w-14 h-14 rounded-full bg-healing-gradient text-primary-foreground shadow-glow items-center justify-center hover:scale-110 transition-transform duration-200 animate-glow-pulse tap-highlight-none"
          aria-label="Call Now"
        >
          <Phone className="w-6 h-6" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default StickyCallButton;
