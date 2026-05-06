import { motion } from "framer-motion";
import "./TechStack.scss";

const fadeRight = {
  hidden: {
    opacity: 0,
    x: 100,
    filter: "blur(6px)",
  },
  show: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};

function TechStack() {
  return (
    <motion.section
      className=" tech-section"
      id="tech"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      variants={fadeRight}
    >
      <div className="tech-content">
        <span className="section-label">Tech Stack</span>

        <h2>Tecnologie che danno forma alle idee.</h2>
      </div>

      {/* <div className="tech-octagon-wrapper">
        <TechOctagon />
      </div> */}
    </motion.section>
  );
}

export default TechStack;
