import { Col, Row } from "react-bootstrap";
import { motion } from "motion/react";
import aboutImg from "../../assets/images/about-betta.png";
import DecorLayer from "../DecorLayer/DecorLayer";
import "./About.scss";

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
          Su di me
        </motion.span>

        <motion.h2
          initial="hidden"
          variants={fadeRight}
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          Tra creatività, logica e crescita.
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
          Sono una Junior Full Stack Developer e il mio percorso nel mondo tech
          è iniziato studiando Python da autodidatta. Da lì ho scelto di
          formarmi in modo strutturato, lavorando su progetti completi e
          sviluppando una visione a 360° delle applicazioni web.
        </motion.p>
        <motion.p
          initial="hidden"
          variants={fadeRight}
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          Ho lavorato su progetti end-to-end con React, Java, Spring e
          PostgreSQL, sviluppando applicazioni complete e consolidando
          competenze sia frontend che backend.
        </motion.p>

        <motion.p
          initial="hidden"
          variants={fadeRight}
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          Arrivo da oltre 10 anni di esperienza in contesti a contatto con il
          pubblico, che mi hanno insegnato a gestire situazioni complesse,
          lavorare in team e mantenere attenzione al dettaglio anche sotto
          pressione.
        </motion.p>
      </motion.div>
    </motion.section>
  );
}

export default About;
