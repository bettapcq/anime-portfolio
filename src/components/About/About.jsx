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
          Sono una Junior Full Stack Developer con una forte curiosità per tutto
          ciò che accade <strong>dietro le quinte</strong>. Questa passione
          nasce da lontano, dal cinema e dai backstage: mi ha sempre affascinato
          osservare come venissero costruite le cose, il lavoro nascosto dietro
          ogni scena e le figure che si occupavano di tecnologia e codice nei
          film e nelle serie TV.
        </motion.p>
        <motion.p
          initial="hidden"
          variants={fadeRight}
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          Con il tempo quella curiosità si è spostata anche verso il mondo
          digitale e verso ciò che succede dietro le quinte di un’applicazione
          web. Da lì ho iniziato a studiare{" "}
          <strong>Python da autodidatta</strong> e ho capito che la
          programmazione poteva davvero essere la mia strada.
        </motion.p>
        <motion.p
          initial="hidden"
          variants={fadeRight}
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          Successivamente ho scelto di formarmi attraverso un percorso intensivo
          Full Stack, lavorando su <strong>progetti completi</strong> e
          sviluppando competenze sia frontend che backend. Oggi utilizzo
          tecnologie come React, Java, Spring e PostgreSQL per creare
          applicazioni web complete e moderne.
        </motion.p>
        <motion.p
          initial="hidden"
          variants={fadeRight}
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          Arrivo inoltre da oltre <strong>10 anni</strong> di esperienza in
          contesti a contatto con il pubblico, un percorso che mi ha permesso di
          sviluppare capacità di problem solving, attenzione al dettaglio,
          gestione dello stress e lavoro in team.
        </motion.p>
      </motion.div>
    </motion.section>
  );
}

export default About;
