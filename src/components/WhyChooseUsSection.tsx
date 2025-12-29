import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Pill, 
  Award, 
  UserCheck, 
  Sparkles, 
  Users,
  CheckCircle2
} from "lucide-react";

const reasons = [
  {
    icon: Pill,
    title: "Medicine-Free Healing",
    description: "Natural treatments that work with your body, not against it",
    highlight: "No Side Effects",
  },
  {
    icon: Award,
    title: "Experienced Approach",
    description: "Proven therapeutic techniques refined through practice",
    highlight: "Expert Care",
  },
  {
    icon: UserCheck,
    title: "Personalized Treatment",
    description: "Every treatment plan is customized to your unique needs",
    highlight: "Just For You",
  },
  {
    icon: Sparkles,
    title: "Clean & Hygienic",
    description: "A calm, sanitized environment for your peace of mind",
    highlight: "Safe Space",
  },
  {
    icon: Users,
    title: "Community Trust",
    description: "Trusted by families in Mettupalayam and surrounding areas",
    highlight: "Local Favorite",
  },
];

const WhyChooseUsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="why-us" className="py-16 md:py-24 bg-healing-mint relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-healing-sage/10 rounded-full blur-3xl" />
      </div>

      <div className="container px-4 md:px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-12 md:mb-16"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
          >
            Why Choose Us
          </motion.span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
            Your Health,{" "}
            <span className="text-gradient">Our Priority</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            We're committed to providing the best natural healing experience
          </p>
        </motion.div>

        {/* Reasons List */}
        <div className="max-w-3xl mx-auto space-y-4">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
              className="group"
            >
              <div className="flex items-start gap-4 p-5 md:p-6 rounded-2xl bg-card/80 backdrop-blur-sm border border-border/50 shadow-card hover:shadow-healing-lg transition-all duration-300 hover:-translate-y-0.5">
                {/* Icon */}
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-healing-gradient flex items-center justify-center shadow-healing">
                  <reason.icon className="w-6 h-6 text-primary-foreground" />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h3 className="font-semibold text-foreground">{reason.title}</h3>
                    <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-accent/20 text-accent-foreground">
                      {reason.highlight}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">{reason.description}</p>
                </div>

                {/* Check Icon */}
                <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-card border border-primary/20 shadow-healing">
            <div className="flex -space-x-2">
              {[...Array(4)].map((_, i) => (
                <div 
                  key={i}
                  className="w-8 h-8 rounded-full bg-healing-gradient border-2 border-card flex items-center justify-center text-xs font-semibold text-primary-foreground"
                >
                  {["A", "R", "S", "M"][i]}
                </div>
              ))}
            </div>
            <div className="text-left">
              <div className="text-sm font-semibold text-foreground">Trusted by 100+ patients</div>
              <div className="text-xs text-muted-foreground">in Mettupalayam area</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
