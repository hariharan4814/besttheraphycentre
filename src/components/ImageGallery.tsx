import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import therapyAcupuncture from "@/assets/therapy-acupuncture.jpg";
import therapyHydrafacial from "@/assets/therapy-hydrafacial.jpg";
import therapyEnergy from "@/assets/therapy-energy.jpg";
import gallery1 from "@/assets/image-gallery-1.jpg";
import gallery2 from "@/assets/image-gallery-2.jpg";
import gallery3 from "@/assets/image-gallery-3.jpg";
import therapyBeauty from "@/assets/therapy-beauty.jpg";
import therapyWellness from "@/assets/therapy-wellness.jpg";
import therapyCounseling from "@/assets/therapy-counseling.jpg";

const images = [
  { src: gallery1, alt: "Warm Welcome", desc: "Expert practitioners ready to help" },
  { src: gallery2, alt: "Get Treatment", desc: "Effective natural therapies" },
  { src: gallery3, alt: "Feel Rejuvenated", desc: "Experience total wellness" },
  { src: therapyAcupuncture, alt: "Acupuncture", desc: "Precise healing touch" },
  { src: therapyHydrafacial, alt: "Hydra Facial", desc: "Deep cleansing facial" },
  { src: therapyEnergy, alt: "Energy Healing", desc: "Restore your balance" },
  { src: therapyBeauty, alt: "Beauty Spa", desc: "Radiate confidence" },
  { src: therapyWellness, alt: "Wellness Care", desc: "Holistic health plans" },
  { src: therapyCounseling, alt: "Counseling", desc: "Mental & emotional support" },
];

const ImageGallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="py-16 md:py-24 bg-background relative overflow-hidden">
      <div className="container px-4 md:px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
          >
            Gallery
          </motion.span>
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Our Healing <span className="text-gradient">Environment</span>
          </h3>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Experience professional care in a calm, hygienic, and welcoming setting designed for your relaxation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative aspect-[3/4] sm:aspect-[4/3] rounded-2xl overflow-hidden shadow-card hover:shadow-healing-lg transition-all duration-300 cursor-pointer"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />

              {/* Overlay Gradient - Hidden by default, visible on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Text Content - Slides up on hover */}
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                <h4 className="text-xl font-bold text-white mb-2">{image.alt}</h4>
                <p className="text-sm font-medium text-white/90">{image.desc}</p>
                <div className="w-12 h-1 bg-primary mt-4 rounded-full" />
              </div>

              {/* Default Label (Optional - creates the 'snippet' look from reference) */}
              <div className="absolute bottom-4 left-4 right-4 bg-background/90 backdrop-blur-md p-3 rounded-xl shadow-sm group-hover:opacity-0 transition-opacity duration-300 text-center">
                <span className="font-semibold text-foreground">{image.alt}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageGallery;
