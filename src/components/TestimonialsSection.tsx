import { motion, useInView } from "framer-motion";
import { useRef, useState, useCallback, useEffect } from "react";
import { Quote, Star } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const testimonials = [
  {
    name: "Durga Sivakumar",
    location: "Mettupalayam",
    rating: 5,
    text: "After just 3 sessions of Tera Care therapy, my chronic back pain reduced significantly. The staff is very caring and professional.",
    treatment: "Tera Care Therapy",
  },
  {
    name: "Prabhu V",
    location: "Ooty",
    rating: 5,
    text: "I was skeptical about acupuncture, but The Best Therapy & Healing Centre changed my mind. My migraine frequency has dropped dramatically.",
    treatment: "Acupuncture",
  },
  {
    name: "Rajalakshmi G",
    location: "Ooty",
    rating: 5,
    text: "The Hydra Facial treatment gave me the best skin I've had in years. Very hygienic environment and skilled therapists.",
    treatment: "Hydra Facial",
  },
  {
    name: "Premalatha B",
    location: "Coimbatore",
    rating: 5,
    text: "Their nutrition guidance helped me manage my diabetes naturally. I've reduced my medicine dosage under doctor supervision.",
    treatment: "Nutrition Guidance",
  },
  {
    name: "Sanjeev B",
    location: "Coimbatore",
    rating: 5,
    text: "The counseling sessions helped me through a very difficult time. Compassionate and understanding approach to mental wellness.",
    treatment: "Counseling",
  },
  {
    name: "Sundar G",
    location: "Karur",
    rating: 5,
    text: "Best wellness centre in the region! The personalized care and attention to detail is exceptional. Highly recommended.",
    treatment: "Wellness Program",
  },
];

import { EmblaCarouselType } from "embla-carousel";

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", slidesToScroll: 1 },
    [Autoplay({ delay: 3500, stopOnInteraction: false, stopOnMouseEnter: true })]
  );

  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on("reInit", onInit);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onInit, onSelect]);

  return (
    <section className="py-16 md:py-24 bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-healing-sage/5 rounded-full blur-3xl" />
      </div>

      <div className="container px-4 md:px-6 relative z-10" ref={ref}>
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
            Testimonials
          </motion.span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our{" "}
            <span className="text-gradient">Patients Say</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            Real experiences from people who found healing with us
          </p>
        </motion.div>

        {/* Embla Carousel */}
        <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
          <div className="flex -ml-5 py-4">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex-[0_0_100%] pl-5 min-w-0 flex justify-center"
              >
                <div className="glass-card p-6 md:p-10 h-full rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-300 group hover:shadow-healing max-w-3xl w-full mx-auto">
                  <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6 mb-6">
                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-healing-gradient flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Quote className="w-6 h-6 md:w-7 md:h-7 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg md:text-xl text-foreground">{testimonial.name}</h4>
                      <p className="text-sm md:text-base text-muted-foreground">{testimonial.location}</p>
                      <div className="flex gap-1 mt-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 md:w-5 md:h-5 fill-healing-gold text-healing-gold" />
                        ))}
                      </div>
                    </div>
                  </div>

                  <p className="text-base md:text-xl text-foreground/90 leading-relaxed mb-6 italic">
                    "{testimonial.text}"
                  </p>

                  <div className="flex justify-end">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
                      {testimonial.treatment}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${index === selectedIndex
                ? "bg-primary scale-125 shadow-md ring-2 ring-primary/30"
                : "bg-muted-foreground/30 hover:bg-primary/50"
                }`}
              onClick={() => emblaApi && emblaApi.scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Google Reviews Link */}
        <div className="text-center mt-8 md:mt-12">
          <a
            href="https://www.google.com/search?q=The+Best+Therapy+%26+Healing+Centre+Mettupalayam#lrd=0x3ba8f4fd7c5c5e8d:0x8f0d0e0a0a0a0a0a,1,,,"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors border-b border-primary/30 hover:border-primary pb-0.5"
          >
            <Star className="w-4 h-4 fill-primary" />
            View reviews in Google
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
