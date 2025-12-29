import { Zap, Hand, Sparkles, Droplets, MessageSquareHeart, Footprints, Leaf, LucideIcon } from "lucide-react";

export interface Treatment {
  id: string;
  icon: LucideIcon;
  title: string;
  shortDesc: string;
  fullDesc: string;
  benefits: string[];
  facts: string[];
  advantages: string[];
  duration: string;
  image: string;
  color: string;
}

export const treatments: Treatment[] = [
  {
    id: "acu-touch",
    icon: Hand,
    title: "Acu Touch Therapy (Acupuncher)",
    shortDesc: "Precise healing through touch and points",
    fullDesc: "Acu Touch Therapy combines the principles of acupuncture with specialized touch techniques. By targeting specific acupoints, we help restore the natural flow of energy (Qi) through your body. This effective practice provides relief from pain, stress, and various physical ailments, promoting balance and natural healing.",
    benefits: [
      "Effective chronic pain management",
      "Reduces stress and anxiety naturally",
      "Improves sleep quality",
      "Helps with digestive disorders",
      "Boosts energy and vitality",
      "Supports hormonal balance"
    ],
    facts: [
      "Based on Traditional Chinese Medicine (TCM)",
      "Focuses on 12 major meridians",
      "Stimulates the central nervous system",
      "Recognized by WHO for various conditions"
    ],
    advantages: [
      "Drug-free pain relief",
      "Holistic approach to wellness",
      "Minimal side effects",
      "Addresses the root cause of issues"
    ],
    duration: "45-60 minutes per session",
    image: "therapy-acupuncture.jpg",
    color: "from-healing-sage/20 to-primary/20",
  },
  {
    id: "foot-reflexology",
    icon: Footprints,
    title: "Foot Reflexology",
    shortDesc: "Healing from the ground up",
    fullDesc: "Foot Reflexology is a therapeutic massage technique that applies pressure to specific points on the feet. These points correspond to different organs and systems in the body. By stimulating them, we can promote health in the corresponding areas, induce deep relaxation, and improve overall circulation.",
    benefits: [
      "Improves nerve function",
      "Boosts blood circulation throughout the body",
      "Induces deep state of relaxation",
      "Eliminates toxins from the body",
      "Stimulates the central nervous system",
      "Prevents migraines and headaches"
    ],
    facts: [
      "Roots trace back to ancient Egypt and China",
      "Feet contain over 7,000 nerve endings",
      "Maps the entire body on the feet",
      "Can detect imbalances before symptoms appear"
    ],
    advantages: [
      "Non-invasive and relaxing",
      "Can be done for all ages",
      "Complements other medical treatments",
      "Improves sleep patterns"
    ],
    duration: "30-45 minutes per session",
    image: "therapy-reflexology.jpg",
    color: "from-healing-gold/20 to-primary/20",
  },
  {
    id: "tera-care",
    icon: Zap,
    title: "Terahertz Care Therapy",
    shortDesc: "Advanced energy healing therapy",
    fullDesc: "Terahertz Care Therapy is an advanced frequency-based healing technology that works at the cellular level. Using terahertz wave technology, this non-invasive treatment stimulates your body's natural self-healing mechanisms. The therapy helps improve blood circulation, boost metabolism, and activate dormant cells, promoting overall wellness and vitality without any side effects.",
    benefits: [
      "Improves blood circulation and microcirculation",
      "Reduces chronic pain and inflammation",
      "Enhances cellular regeneration",
      "Boosts immune system function",
      "Non-invasive and completely painless",
      "No side effects or recovery time needed"
    ],
    facts: [
      "Utilizes electromagnetic waves aimed at cellular frequencies",
      "Penetrates 20-30 centimeters into the body",
      "Resonates with healthy human cells",
      "Often referred to as the 'Wave of Life'"
    ],
    advantages: [
      "Activates dormant stem cells",
      "Eliminates unhealthy cells",
      "Clears blocked meridians and lymphatics",
      "Safe for all age groups"
    ],
    duration: "30-60 minutes per session",
    image: "therapy-energy.jpg",
    color: "from-primary/20 to-healing-sage/20",
  },
  {
    id: "sujok-therapy",
    icon: Hand,
    title: "Sujok Therapy",
    shortDesc: "Hand and foot energy healing",
    fullDesc: "Sujok Therapy is a brilliant discovery that proves the hands and feet represent the entire body. 'Su' means hand and 'Jok' means foot. This therapy employs a localized treatment system on hands and feet to treat illnesses affecting any part of the body, offering a simple yet highly effective healing method.",
    benefits: [
      "Instant pain relief",
      "Effective for spinal cord issues",
      "Treats joints and inflammation",
      "Helps with psychological disorders",
      "Boosts immunity",
      "Harmonizes body energy"
    ],
    facts: [
      "Developed by Prof. Park Jae Woo",
      "Uses seeds, magnets, and colors",
      "Correspondence system mirrors the body",
      "Combines acupuncture and reflexology principles"
    ],
    advantages: [
      "Simple and safe",
      "Fast acting results",
      "Cost-effective treatment",
      "No medication required"
    ],
    duration: "30-45 minutes per session",
    image: "therapy-sujok.jpg",
    color: "from-primary/20 to-healing-mint/30",
  },
  {
    id: "beauty-therapy",
    icon: Sparkles,
    title: "Beauty Therapy",
    shortDesc: "Natural skin rejuvenation",
    fullDesc: "Experience the transformation of natural beauty enhancement through our specialized beauty therapy treatments. Using a combination of therapeutic techniques and high-quality natural products, we help rejuvenate your skin, reduce signs of aging, and restore your natural radiance. Our approach focuses on long-term skin health rather than temporary fixes.",
    benefits: [
      "Natural skin rejuvenation and tightening",
      "Reduces fine lines and wrinkles",
      "Improves skin texture and tone",
      "Deep pore cleansing and detoxification",
      "Enhances natural glow and radiance",
      "Safe for all skin types"
    ],
    facts: [
      "Uses premium organic ingredients",
      "Personalized for skin type",
      "Combines massage and treatment",
      "Focuses on dermal health"
    ],
    advantages: [
      "Boosts self-confidence",
      "Protects against environmental damage",
      "Prevents premature aging",
      "Relaxing and therapeutic"
    ],
    duration: "45-90 minutes per session",
    image: "therapy-beauty.jpg",
    color: "from-healing-gold/20 to-primary/20",
  },
  {
    id: "hydra-facial",
    icon: Droplets,
    title: "Hydra Facial Therapy",
    shortDesc: "Deep cleansing & hydration",
    fullDesc: "Our Hydra Facial treatment is a multi-step facial therapy that deeply cleanses, exfoliates, and hydrates your skin. Using advanced technology, we remove impurities and dead skin cells while simultaneously infusing your skin with nourishing serums. The result is clearer, more hydrated, and visibly radiant skin from the very first session.",
    benefits: [
      "Deep cleansing of pores and blackheads",
      "Intense hydration for dry skin",
      "Immediate visible results",
      "Reduces acne and blemishes",
      "Evens out skin tone",
      "No downtime required"
    ],
    facts: [
      "Medical-grade resurfacing treatment",
      "Uses patented Vortex-Fusion technology",
      "Extracts impurities painlessly",
      "Saturates skin with antioxidants"
    ],
    advantages: [
      "Suitable for all skin types",
      "Consistent results",
      "Instant gratification",
      "Customizable boosters"
    ],
    duration: "60 minutes per session",
    image: "therapy-hydrafacial.jpg",
    color: "from-primary/20 to-healing-mint/30",
  },
  {
    id: "counseling",
    icon: MessageSquareHeart,
    title: "Counseling",
    shortDesc: "Mental & emotional wellness",
    fullDesc: "Our counseling services address the crucial mind-body connection in healing. Our trained counselors provide a safe, confidential space for you to work through stress, anxiety, emotional challenges, and life transitions. We believe mental and emotional wellness is fundamental to physical health, and our holistic approach supports your complete well-being.",
    benefits: [
      "Confidential one-on-one sessions",
      "Stress and anxiety management",
      "Emotional healing support",
      "Relationship and family counseling",
      "Coping strategies development",
      "Mind-body wellness integration"
    ],
    facts: [
      "Evidence-based therapeutic approaches",
      "Strict confidentiality maintained",
      "Qualified and empathetic professionals",
      "Supports holistic recovery"
    ],
    advantages: [
      "Improved mental clarity",
      "Better emotional regulation",
      "Enhanced relationships",
      "Online counseling facilities are also available"
    ],
    duration: "45-60 minutes per session",
    image: "therapy-counseling.jpg",
    color: "from-primary/20 to-healing-sage/20",
  },
  {
    id: "nutrition-wellness",
    icon: Leaf,
    title: "Nutrition & Wellness",
    shortDesc: "Holistic health optimization",
    fullDesc: "Our Nutrition & Wellness program combines expert nutritional guidance with comprehensive wellness strategies. We treat food as medicine and work with you to create personalized plans that address your specific health goals, dietary habits, and lifestyle. This integrated approach ensures you build a sustainable foundation for long-term health and vitality.",
    benefits: [
      "Personalized dietary assessment",
      "Customized meal & wellness plans",
      "Natural supplement recommendations",
      "Weight management support",
      "Digestive health improvement",
      "Energy and vitality boost"
    ],
    facts: [
      "Based on functional nutrition principles",
      "Considers bio-individuality",
      "integrates lifestyle factors",
      "Focuses on root cause resolution"
    ],
    advantages: [
      "Sustainable lifestyle changes",
      "Disease prevention and management",
      "Enhanced physical performance",
      "Mental clarity and focus"
    ],
    duration: "Initial consultation: 45-60 minutes",
    image: "therapy-wellness.jpg",
    color: "from-healing-gold/20 to-healing-sage/20",
  },
];

export const getTreatmentById = (id: string): Treatment | undefined => {
  return treatments.find(t => t.id === id);
};
