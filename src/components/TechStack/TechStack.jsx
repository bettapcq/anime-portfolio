import { motion } from "framer-motion";
import "./TechStack.scss";
import TechOctagon from "./TechOctagon";
import { useTranslation } from "react-i18next";

const fadeLeft = {
  hidden: {
    opacity: 0,
    x: -100,
  },
  show: {
    opacity: 1,
    x: 0,

    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};

function TechStack() {
  const { t } = useTranslation();

  return (
    <motion.section
      className="tech-section"
      id="tech"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      variants={fadeLeft}
    >
      <div className="tech-content">
        <span className="section-label">{t("techStack.title")}</span>

        <h2>{t("techStack.description")}</h2>
      </div>

      <div className="tech-octagon-wrapper">
        <TechOctagon />
      </div>
    </motion.section>
  );
}

export default TechStack;
