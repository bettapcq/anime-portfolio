import { Col, Row } from "react-bootstrap";
import { motion } from "motion/react";
import aboutImg from "../../assets/images/about-betta.png";
import DecorLayer from "../DecorLayer/DecorLayer";
import "./About.scss";
import { useTranslation } from "react-i18next";

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

function About() {
  const { t } = useTranslation();

  return (
    <motion.section
      className="glass-section"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.01 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      id="about"
      variants={fadeRight}
    >
      <motion.div
        className="about-content"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
      >
        <motion.span
          className="section-label"
          variants={fadeRight}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {t("about.label")}
        </motion.span>

        <motion.h2
          initial="hidden"
          variants={fadeRight}
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {t("about.title")}
        </motion.h2>
      </motion.div>
      <motion.div
        className="about-content"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 1, delay: 0.15, ease: "easeOut" }}
      >
        <motion.p
          initial="hidden"
          variants={fadeRight}
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {t("about.paragraph1Before")}{" "}
          <strong>{t("about.paragraph1Strong")}</strong>{" "}
          {t("about.paragraph1After")}
        </motion.p>
        <motion.p
          initial="hidden"
          variants={fadeRight}
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {t("about.paragraph2Before")}{" "}
          <strong>{t("about.paragraph2Strong")}</strong>{" "}
          {t("about.paragraph2After")}
        </motion.p>
        <motion.p
          initial="hidden"
          variants={fadeRight}
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {t("about.paragraph3Before")}{" "}
          <strong>{t("about.paragraph3Strong")}</strong>{" "}
          {t("about.paragraph3After")}
        </motion.p>
        <motion.p
          initial="hidden"
          variants={fadeRight}
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {t("about.paragraph4Before")}{" "}
          <strong>{t("about.paragraph4Strong")}</strong>{" "}
          {t("about.paragraph4After")}
        </motion.p>
      </motion.div>
    </motion.section>
  );
}

export default About;
