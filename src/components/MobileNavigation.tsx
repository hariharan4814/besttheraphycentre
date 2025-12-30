import { motion, AnimatePresence } from "framer-motion";
import { Home, Stethoscope, Phone, MapPin } from "lucide-react";
import { useState, useEffect } from "react";

const navItems = [
  { icon: Home, label: "Home", href: "#" },
  { icon: Stethoscope, label: "Treatments", href: "#treatments" },
  { icon: Phone, label: "Call", href: "tel:+919952476950", isAction: true },
  { icon: MapPin, label: "Location", href: "#contact" },
];

const MobileNavigation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      // Show nav after scrolling 100px
      setIsVisible(window.scrollY > 100);

      // Determine active section
      const sections = ["contact", "why-us", "treatments", "about"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 200) {
            setActiveSection(section);
            return;
          }
        }
      }
      setActiveSection("home");
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (href: string, isAction?: boolean) => {
    if (isAction || href.startsWith("tel:")) {
      window.location.href = href;
    } else if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
        >
          <div className="mx-4 mb-4">
            <div className="flex items-center justify-around bg-card/95 backdrop-blur-lg border border-border/50 rounded-2xl shadow-lg p-2">
              {navItems.map((item) => {
                const isActive =
                  (item.href === "#" && activeSection === "home") ||
                  (item.href === "#treatments" && activeSection === "treatments") ||
                  (item.href === "#contact" && (activeSection === "contact" || activeSection === "why-us"));

                const isCallButton = item.isAction;

                return (
                  <button
                    key={item.label}
                    onClick={() => handleClick(item.href, item.isAction)}
                    className={`flex flex-col items-center gap-1 p-3 rounded-xl transition-all duration-200 min-w-[70px] tap-highlight-none ${isCallButton
                      ? "bg-healing-gradient text-primary-foreground shadow-healing animate-glow-pulse"
                      : isActive
                        ? "bg-primary/10 text-primary"
                        : "text-muted-foreground hover:text-foreground"
                      }`}
                  >
                    <item.icon className={`w-5 h-5 ${isCallButton ? "text-primary-foreground" : ""}`} />
                    <span className={`text-xs font-medium ${isCallButton ? "text-primary-foreground" : ""}`}>
                      {item.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export default MobileNavigation;
