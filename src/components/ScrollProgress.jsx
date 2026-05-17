import { motion } from "framer-motion";
import useScrollProgress from "../hooks/useScrollProgress";

export default function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] z-[60] origin-left bg-gradient-to-r from-cyan-500 via-teal-400 to-blue-500"
      style={{ scaleX: progress }}
    />
  );
}
