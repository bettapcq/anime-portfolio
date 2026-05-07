import { motion } from "framer-motion";
import "./Collabs.scss";
import collabsImg from "../../assets/images/collabs.png";
import { collabs } from "./CollabsData.js";
import { useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { FaCode } from "react-icons/fa";

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
              key={item.title}
              variants={fadeRight}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <motion.div className="collab-number">0{index + 1}</motion.div>
              <motion.div>
                <h3>{item.title}</h3>
                <span>{item.role}</span>
                <p>{item.text}</p>
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
          <span className="section-label">Collaborazioni</span>
          <h2>Dove le idee si incontrano.</h2>
          <p className="collabs-intro">
            Progetti, esperienze e lavori condivisi in cui ho potuto crescere,
            confrontarmi e trasformare idee in interfacce concrete.
          </p>{" "}
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
