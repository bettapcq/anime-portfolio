import "./BeyondCode.scss";
import { motion } from "motion/react";
import byeImg from "../../assets/images/betta-bye.png";
import DecorLayer from "../DecorLayer/DecorLayer";

const hobbies = [
  "Cinema",
  "SFX Makeup",
  "Pipistrelli",
  "Festival musicali",
  "Krav Maga",
  "Amigurumi",
];

const fadeLeft = {
  hidden: {
    opacity: 0,
    x: -100,
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

function ImageSection() {
  return (
    <section className="image-section">
      <motion.section
        className="image-box"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.01 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        variants={fadeLeft}
      >
        <DecorLayer text={"Bye bye!"} />
        <img src={byeImg} alt="Anime avatar Betta" />
      </motion.section>
    </section>
  );
}

export default ImageSection;
