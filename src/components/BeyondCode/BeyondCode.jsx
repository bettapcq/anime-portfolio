import { FiArrowUp } from "react-icons/fi";
import "./BeyondCode.scss";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { Col } from "react-bootstrap";

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

function BeyondCode() {
  const { t } = useTranslation();
  return (
    <section className="beyond-section">
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.01 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        id="about"
        variants={fadeRight}
      >
        <motion.div
          className="glass-section beyond-content"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
        >
          <motion.div
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
              {t("beyondCode.label")}
            </motion.span>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1, delay: 0.15, ease: "easeOut" }}
          >
            <motion.h2>{t("beyondCode.title")}</motion.h2>
          </motion.div>
          <motion.div
            className="beyond-content"
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
              {t("beyondCode.paragraph1Before")}{" "}
              <strong>{t("beyondCode.paragraph1Strong")}</strong>{" "}
              {t("beyondCode.paragraph1After")}
            </motion.p>
            <motion.p
              initial="hidden"
              variants={fadeRight}
              whileInView="show"
              viewport={{ once: true, amount: 0.1 }}
            >
              {t("beyondCode.paragraph2Before")}{" "}
              <strong>{t("beyondCode.paragraph2Strong")}</strong>{" "}
              {t("beyondCode.paragraph2After")}
            </motion.p>
            <motion.p
              initial="hidden"
              variants={fadeRight}
              whileInView="show"
              viewport={{ once: true, amount: 0.1 }}
            >
              {t("beyondCode.paragraph3Before")}{" "}
              <strong>{t("beyondCode.paragraph3Strong")}</strong>{" "}
              {t("beyondCode.paragraph3After")}
            </motion.p>
            <motion.p
              initial="hidden"
              variants={fadeRight}
              whileInView="show"
              viewport={{ once: true, amount: 0.1 }}
            >
              {t("beyondCode.paragraph4Before")}{" "}
              <strong>{t("beyondCode.paragraph4Strong")}</strong>{" "}
              {t("beyondCode.paragraph4After")}
            </motion.p>
          </motion.div>
          <motion.p>
            {t("beyondCode.contactBefore")}{" "}
            <strong>
              <a href="#">
                {t("beyondCode.contactStrong")} <FiArrowUp />
              </a>
            </strong>
            {t("beyondCode.contactAfter")}
          </motion.p>
        </motion.div>
        <div className="cookie-preferences">
          <button onClick={() => setShowCookiePreferences(true)}>
            {t("cookieBanner.preferences")}
          </button>
        </div>
      </motion.section>
    </section>
  );
}

export default BeyondCode;
