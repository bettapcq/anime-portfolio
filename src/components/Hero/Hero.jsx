import { Button, Col, Row } from "react-bootstrap";
import * as motion from "motion/react-client";
import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import heroImg from "../../assets/images/hero-betta.png";
import cvFile from "../../assets/files/cv_elisabetta_piacquadio_g.pdf";
import "./Hero.scss";
import DecorLayer from "../DecorLayer/DecorLayer";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 28,
    filter: "blur(6px)",
  },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const imageVariants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
    y: 40,
    rotate: -2,
  },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    rotate: 0,
    transition: {
      duration: 0.9,
      ease: "easeOut",
    },
  },
};

const socialVariants = {
  rest: {
    scale: 1,
    rotate: 0,
    borderRadius: "0%",
  },
  hover: {
    scale: [1, 1.4, 1],
    rotate: [0, 360],
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
  tap: {
    scale: 0.85,
  },
};

function Hero() {
  return (
    <motion.section
      className="hero-section"
      className="hero-section"
      initial="hidden"
      animate="show"
      variants={containerVariants}
    >
      <Row className="align-items-center g-4">
        <Col lg={6} className="hero-content-col justify-content-center">
          <motion.div variants={containerVariants}>
            <motion.span className="eyebrow" variants={fadeUp}>
              Ciao! Sono
            </motion.span>

            <motion.h1 variants={fadeUp}>
              Elisabetta<span>.</span>
            </motion.h1>

            <motion.h2 variants={fadeUp}>Junior Full Stack Developer</motion.h2>

            <motion.p variants={fadeUp}>
              Sto costruendo il mio percorso nel mondo dello sviluppo web,
              unendo creatività, curiosità e voglia di imparare.
            </motion.p>

            <div className="hero-actions">
              <motion.a
                whileHover={{
                  boxShadow: " 0 24px 60px rgba(122, 46, 58, 0.3)",
                  scale: 1.2,
                }}
                whileTap={{ scale: 0.8 }}
                transition={{
                  scale: {
                    type: "spring",
                    stiffness: 300,
                    damping: 15,
                  },
                  boxShadow: {
                    duration: 0,
                  },
                }}
                className="btn-main"
                href={cvFile}
                download
              >
                Scarica il CV
              </motion.a>
            </div>

            <div className="social-links">
              <motion.div
                initial="rest"
                animate="rest"
                whileHover="hover"
                whileTap="tap"
                variants={socialVariants}
              >
                <a href="https://github.com/bettapcq" target="_blank">
                  <FaGithub />
                </a>
              </motion.div>
              <motion.div
                initial="rest"
                animate="rest"
                whileHover="hover"
                whileTap="tap"
                variants={socialVariants}
              >
                <a
                  href="www.linkedin.com/in/elisabettapiacquadio"
                  target="_blank"
                >
                  <FaLinkedinIn />
                </a>
              </motion.div>
              <motion.div
                initial="rest"
                animate="rest"
                whileHover="hover"
                whileTap="tap"
                variants={socialVariants}
              >
                <a href="mailto:betta.pcq@gmail.com" target="_blank">
                  <FaEnvelope />
                </a>
              </motion.div>
            </div>
          </motion.div>
        </Col>

        <Col lg={6}>
          <motion.div
            className="hero-image-wrap"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <DecorLayer text={"Let’s create something amazing!"} />
            <img src={heroImg} alt="Anime avatar Betta" />
          </motion.div>
        </Col>
      </Row>
    </motion.section>
  );
}

export default Hero;
