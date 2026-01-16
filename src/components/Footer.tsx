import { Phone, MapPin, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground dark:bg-card py-10 md:py-12">
      <div className="container px-4 md:px-6">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Logo & Brand */}
          <div className="flex flex-col items-center md:items-start">
            <Link to="/" className="inline-block mb-3">
              <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center overflow-hidden shadow-lg border-2 border-primary/20 hover:scale-105 transition-transform duration-300">
                <img src={logo} alt="The Best Therapy & Healing Centre Logo" className="w-full h-full object-cover" />
              </div>
            </Link>
            <h3 className="text-lg font-bold text-background dark:text-foreground mb-2">
              The Best Therapy & Healing Centre
            </h3>
            <p className="text-muted dark:text-muted-foreground text-sm">Natural healing since September 2024</p>
          </div>

          {/* Contact */}
          <div className="space-y-2">
            <div className="flex items-center justify-center md:justify-start gap-2 text-muted dark:text-muted-foreground">
              <Phone className="w-4 h-4" />
              <span className="text-sm text-center md:text-left">
                +91 90801 83701 / +91 99524 76950 (Call)
                <br className="md:hidden" />
                <span className="hidden md:inline"> / </span>
                +91 99949 07341 (WhatsApp)
              </span>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-2 text-muted dark:text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">KK Nagar, Mettupalayam - 641301</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center md:justify-end gap-4 text-sm">
            <a href="#about" className="text-muted dark:text-muted-foreground hover:text-background dark:hover:text-primary transition-colors">About</a>
            <a href="#treatments" className="text-muted dark:text-muted-foreground hover:text-background dark:hover:text-primary transition-colors">Treatments</a>
            <a href="#why-us" className="text-muted dark:text-muted-foreground hover:text-background dark:hover:text-primary transition-colors">Why Us</a>
            <a href="#contact" className="text-muted dark:text-muted-foreground hover:text-background dark:hover:text-primary transition-colors">Contact</a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-background/10 dark:border-border text-center">
          <p className="text-muted/60 dark:text-muted-foreground/60 text-sm">
            &copy; {new Date().getFullYear()} The Best Therapy & Healing Centre. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
