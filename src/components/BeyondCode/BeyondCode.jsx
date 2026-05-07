import { FiArrowUp } from "react-icons/fi";
import "./BeyondCode.scss";
import { motion } from "motion/react";

const hobbies = [
  "Cinema",
  "SFX Makeup",
  "Pipistrelli",
  "Festival musicali",
  "Krav Maga",
  "Amigurumi",
];

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
              Oltre il codice
            </motion.span>

            <motion.h2
              initial="hidden"
              variants={fadeRight}
              whileInView="show"
              viewport={{ once: true, amount: 0.1 }}
            >
              Il mio piccolo mondo insolito.
            </motion.h2>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1, delay: 0.15, ease: "easeOut" }}
          >
            Il mio piccolo mondo insolito.
          </motion.h2>
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
            Cinema, musica e dettagli <strong>stravaganti</strong> influenzano
            molto anche il mio modo di vedere le cose.
          </motion.p>
          <motion.p
            initial="hidden"
            variants={fadeRight}
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
          >
            Sono appassionata di effetti speciali makeup, amo il cinema, i manga
            e i festival musicali, e sono affascinata dai{" "}
            <strong>pipistrelli</strong>: mi piace tutto ciò che ha delle
            caratteristiche un po’ fuori dall’ordinario.
          </motion.p>
          <motion.p
            initial="hidden"
            variants={fadeRight}
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
          >
            Per alcuni anni ho praticato <strong>Krav Maga</strong>,
            un’esperienza che mi ha insegnato disciplina, concentrazione e
            determinazione.
          </motion.p>
          <motion.p
            initial="hidden"
            variants={fadeRight}
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
          >
            Nei momenti più tranquilli, invece, mi rilasso creando{" "}
            <strong>amigurumi</strong>: un modo semplice per rallentare e
            lasciare spazio alla creatività.
          </motion.p>
        </motion.div>
        <motion.p>
          Se ti va di conoscermi meglio, trovi tutti i miei contatti tornando
          all’
          <strong>
            <a href="#">
              inizio della pagina <FiArrowUp />
            </a>
          </strong>
          .
        </motion.p>
      </motion.div>
    </motion.section>
  );
}

export default BeyondCode;
