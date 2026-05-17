import { motion } from "framer-motion";
import { fadeInUp } from "./variants";

/**
 * Reusable scroll-triggered animation wrapper.
 * Replaces the old FadeInSection component with Framer Motion.
 */
export default function MotionWrapper({
  children,
  className = "",
  variants = fadeInUp,
  delay = 0,
  once = true,
  amount = 0.15,
  as = "div",
}) {
  const Component = motion[as] || motion.div;

  return (
    <Component
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      transition={delay ? { delay } : undefined}
      className={className}
    >
      {children}
    </Component>
  );
}
