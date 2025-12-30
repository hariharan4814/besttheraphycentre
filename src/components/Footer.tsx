import { Phone, MapPin, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-foreground dark:bg-card py-10 md:py-12">
      <div className="container px-4 md:px-6">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Logo & Brand */}
          <div className="flex flex-col items-center md:items-start">
            {/* Logo Placeholder - Replace with your logo */}
            <div className="w-12 h-12 rounded-xl bg-background dark:bg-primary/10 flex items-center justify-center mb-3">
              <span className="text-primary font-bold text-xl">B</span>
            </div>
            <h3 className="text-lg font-bold text-background dark:text-foreground mb-2">
              The Best Therapy & Healing Centre
            </h3>
            <p className="text-muted dark:text-muted-foreground text-sm">Natural healing since September 2024</p>
          </div>

          {/* Contact */}
          <div className="space-y-2">
            <div className="flex items-center justify-center md:justify-start gap-2 text-muted dark:text-muted-foreground">
              <Phone className="w-4 h-4" />
              <span className="text-sm">+91 99949 07341 (WhatsApp) / +91 99524 76950 (Call)</span>
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
          <p className="text-muted/60 dark:text-muted-foreground/60 text-xs mt-2">
            Website created by <a href="https://rendertech.dev" target="_blank" rel="noopener noreferrer" className="hover:text-background dark:hover:text-primary transition-colors underline-offset-4 hover:underline">RenderTech</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
