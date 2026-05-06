import { motion } from "framer-motion";
import "./Collabs.scss";

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

const collaborations = [
  {
    title: "aaa aaa",
    role: "aaaaDev",
    text: "blablab labl ablablab lablabl ablablab lablablabl ablablabla blablablabl ablablabla blablab lablabla",
  },
  {
    title: "bbbb bbbb",
    role: "bbb dev",
    text: "blablab labl ablablab lablabl ablablab lablablabl ablablabla blablablabl lablabla",
  },
  {
    title: "ccc ccc",
    role: "ccc dev",
    text: "blablab labl ablablab lablabl ablablab lablablabl blablab lablabla",
  },
];

const Collabs = () => {
  return (
    <motion.section className="collabs-section glass-section">
      <motion.div
        className="collabs-content"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.01 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        variants={fadeRight}
        id="collabs"
      >
        <motion.span
          className="section-label"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.01 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          variants={fadeRight}
        >
          Collaborazioni
        </motion.span>

        <motion.h2>Dove le idee si incontrano.</motion.h2>

        <motion.p className="collabs-intro">
          Progetti, esperienze e lavori condivisi in cui ho potuto crescere,
          confrontarmi e trasformare idee in interfacce concrete.
        </motion.p>

        <motion.div className="collabs-grid">
          {collaborations.map((item, index) => (
            <motion.article
              className="collab-card"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.01 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              variants={fadeRight}
            >
              <motion.div
                className="collab-number"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.01 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                variants={fadeRight}
              >
                0{index + 1}
              </motion.div>

              <h3>{item.title}</h3>
              <span>{item.role}</span>
              <p>{item.text}</p>
            </motion.article>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Collabs;
