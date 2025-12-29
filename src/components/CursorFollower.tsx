import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

const CursorFollower = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  const springConfig = { damping: 25, stiffness: 200 };
  const trailSpringConfig = { damping: 40, stiffness: 150 };

  const x = useSpring(0, springConfig);
  const y = useSpring(0, springConfig);

  const trailX = useSpring(0, trailSpringConfig);
  const trailY = useSpring(0, trailSpringConfig);

  useEffect(() => {
    // Check for touch device once
    if (typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0)) {
      setIsTouch(true);
      return;
    }

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      x.set(e.clientX);
      y.set(e.clientY);
      trailX.set(e.clientX);
      trailY.set(e.clientY);
      setIsVisible(true);
    };

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a, button, [role="button"]')) {
        setIsHovering(true);
      }
    };

    const handleMouseLeave = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a, button, [role="button"]')) {
        setIsHovering(false);
      }
    };

    const handleMouseOut = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseout", handleMouseOut);
    document.addEventListener("mouseover", handleMouseEnter);
    document.addEventListener("mouseout", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseout", handleMouseOut);
      document.removeEventListener("mouseover", handleMouseEnter);
      document.removeEventListener("mouseout", handleMouseLeave);
    };
  }, [x, y, trailX, trailY]);

  if (isTouch) {
    return null;
  }

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] hidden md:block"
        style={{ x, y }}
        animate={{
          scale: isHovering ? 1.5 : 1,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ duration: 0.15 }}
      >
        <div
          className="relative -translate-x-1/2 -translate-y-1/2"
          style={{
            width: isHovering ? "40px" : "24px",
            height: isHovering ? "40px" : "24px",
          }}
        >
          {/* Outer ring */}
          <div
            className={`absolute inset-0 rounded-full border-2 border-primary/40 transition-all duration-200 ${isHovering ? "scale-100" : "scale-75"
              }`}
          />
          {/* Inner glow */}
          <div
            className={`absolute inset-2 rounded-full bg-primary/20 blur-sm transition-all duration-200 ${isHovering ? "opacity-100" : "opacity-60"
              }`}
          />
          {/* Center dot */}
          <div
            className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary transition-all duration-200 ${isHovering ? "w-2 h-2" : "w-1.5 h-1.5"
              }`}
          />
        </div>
      </motion.div>

      {/* Trail effect */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] hidden md:block"
        style={{
          x: trailX,
          y: trailY
        }}
        animate={{ opacity: isVisible ? 0.3 : 0 }}
      >
        <div className="w-8 h-8 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-primary/20 to-healing-sage/20 blur-md" />
      </motion.div>
    </>
  );
};

export default CursorFollower;
