import { motion } from "motion/react";
import "./DecorLayer.scss";

function DecorLayer() {
  return (
    <div className="decor-layer" aria-hidden="true">
      <motion.div
        className="decor-glow"
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.span
        className="decor-star"
        animate={{ rotate: [0, 12, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        ✦
      </motion.span>

      <div className="decor-dots" />

      <motion.div
        className="decor-circle"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <p>Let’s create something amazing!</p>
      </motion.div>
    </div>
  );
}

export default DecorLayer;
