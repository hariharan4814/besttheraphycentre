import { motion } from "framer-motion";
import { Phone, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#" },
    { label: "About", href: "#about" },
    { label: "Treatments", href: "#treatments" },
    { label: "Why Us", href: "#why-us" },
    { label: "Contact", href: "#contact" },
  ];

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "glass-card-strong shadow-sm" : "bg-transparent"
          }`}
      >
        <div className="container px-4 md:px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo Placeholder */}
            <Link to="/" className="flex items-center gap-3">
              {/* Replace this div with your logo image */}
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-healing-gradient flex items-center justify-center shadow-healing overflow-hidden">
                {/* Add your logo here: <img src={yourLogo} alt="Logo" className="w-full h-full object-contain" /> */}
                <span className="text-primary-foreground font-bold text-lg md:text-xl">B</span>
              </div>
              <div className="hidden sm:block">
                <div className="font-bold text-foreground text-sm leading-tight">The Best Therapy</div>
                <div className="text-xs text-muted-foreground">& Healing Centre</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-3">
              <ThemeToggle />
              <Button
                variant="healing"
                size="sm"
                onClick={() => window.location.href = "tel:+919994907341"}
                className="hidden sm:flex touch-bounce"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </Button>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 rounded-lg glass-button tap-highlight-none touch-bounce"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6 text-foreground" /> : <Menu className="w-6 h-6 text-foreground" />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{ height: isMobileMenuOpen ? "auto" : 0, opacity: isMobileMenuOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="fixed top-16 left-0 right-0 z-40 glass-card-strong overflow-hidden md:hidden"
      >
        <nav className="container px-4 py-4 space-y-2">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              className="block w-full text-left px-4 py-3 rounded-xl text-foreground hover:bg-muted transition-colors tap-highlight-none touch-bounce"
            >
              {link.label}
            </button>
          ))}
          <Button variant="healing" size="lg" onClick={() => window.location.href = "tel:+919994907341"} className="w-full mt-4 touch-bounce">
            <Phone className="w-4 h-4" />
            Call Now
          </Button>
        </nav>
      </motion.div>
    </>
  );
};

export default Header;
