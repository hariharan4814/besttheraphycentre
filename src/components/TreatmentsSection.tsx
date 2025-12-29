import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  ChevronDown,
  X,
  ArrowRight
} from "lucide-react";
import { treatments, Treatment } from "@/data/treatments";
import { Button } from "@/components/ui/button";

const TreatmentCard = ({ treatment, index, isInView }: {
  treatment: Treatment;
  index: number;
  isInView: boolean;
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.1 + index * 0.08, duration: 0.5 }}
      className="group"
    >
      <div
        onClick={() => setIsExpanded(!isExpanded)}
        className={`relative p-5 md:p-6 rounded-2xl bg-card border border-border/50 shadow-card cursor-pointer transition-all duration-300 ${isExpanded ? "shadow-healing-lg ring-2 ring-primary/20" : "hover:shadow-healing hover:-translate-y-1"
          }`}
      >
        {/* Gradient Background */}
        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${treatment.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

        <div className="relative z-10">
          <div className="flex items-start justify-between mb-4">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
              <treatment.icon className="w-6 h-6 text-primary" />
            </div>
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="w-8 h-8 rounded-full bg-muted flex items-center justify-center"
            >
              {isExpanded ? (
                <X className="w-4 h-4 text-muted-foreground" />
              ) : (
                <ChevronDown className="w-4 h-4 text-muted-foreground" />
              )}
            </motion.div>
          </div>

          <h3 className="font-semibold text-lg text-foreground mb-2">{treatment.title}</h3>
          <p className="text-sm text-muted-foreground line-clamp-2">{treatment.shortDesc}</p>

          <motion.div
            initial={false}
            animate={{
              height: isExpanded ? "auto" : 0,
              opacity: isExpanded ? 1 : 0,
              marginTop: isExpanded ? 16 : 0,
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pt-4 border-t border-border/50">
              <p className="text-sm text-foreground/80 leading-relaxed mb-4">
                {treatment.fullDesc}
              </p>
              <Link to={`/treatment/${treatment.id}`} onClick={(e) => e.stopPropagation()}>
                <Button variant="link" className="p-0 h-auto text-primary font-semibold hover:no-underline group/btn">
                  View Full Details
                  <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Pulse Animation on Hover */}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute inset-0 rounded-2xl animate-glow-pulse" style={{ animationDelay: `${index * 0.2}s` }} />
        </div>
      </div>
    </motion.div>
  );
};

const TreatmentsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="treatments" className="py-16 md:py-24 bg-background relative">
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
            Our Treatments
          </motion.span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
            Comprehensive{" "}
            <span className="text-gradient">Healing Solutions</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            Discover our range of natural therapies designed to restore your health and vitality
          </p>
        </motion.div>

        {/* Treatment Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {treatments.map((treatment, index) => (
            <TreatmentCard
              key={treatment.id}
              treatment={treatment}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground mb-4">
            Not sure which treatment is right for you?
          </p>
          <a
            href="tel:+919994907341"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
          >
            Call us for a free consultation
            <span className="text-xl">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default TreatmentsSection;
