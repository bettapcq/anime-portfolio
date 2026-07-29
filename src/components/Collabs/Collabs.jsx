import { motion } from "framer-motion";
import "./Collabs.scss";
import collabsImg from "../../assets/images/collabs.png";
import { collabs } from "./CollabsData.js";
import { useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { FaCode } from "react-icons/fa";
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

const Collabs = () => {
  const { t } = useTranslation();
  const [orderedCollabs, setOrderedCollabs] = useState(collabs);

  return (
    <motion.section className="collabs-section glass-section" id="collabs">
      <motion.div
        className="collabs-layout"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.01 }}
        variants={fadeRight}
      >
        <motion.div className="collabs-grid">
          {orderedCollabs.map((item, index) => (
            <motion.article
              className="collab-card"
              key={item.id}
              variants={fadeRight}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <motion.div className="collab-number">0{index + 1}</motion.div>
              <motion.div>
                <h3>{item.title}</h3>
                <span>{item.role}</span>
                <p>{t(item.textKey)}</p>
              </motion.div>

              <a
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="collabs-link"
              >
                <FaCode />
              </a>
            </motion.article>
          ))}
        </motion.div>

        <motion.div className="collabs-side" variants={fadeRight}>
          <span className="section-label">{t("collabs.label")}</span>
          <h2>{t("collabs.title")}</h2>
          <p className="collabs-intro">{t("collabs.intro")}</p>{" "}
        </motion.div>
        <motion.div
          className="collabs-image-wrap"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={collabsImg}
            alt="Illustrazione collaborazioni"
            className="collabs-img"
          />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Collabs;
