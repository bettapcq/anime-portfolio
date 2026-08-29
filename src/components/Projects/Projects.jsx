import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { projects } from "./ProjectsData";
import ProjectCard from "./ProjectCard";
import "./Projects.scss";
import DecorLayer from "../DecorLayer/DecorLayer";
import ProjectImg from "../../assets/images/betta-full.png";
import { useTranslation } from "react-i18next";

const fadeLeft = {
  hidden: {
    opacity: 0,
    x: -100,
  },
  show: {
    opacity: 1,
    x: 0,

    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};

function shuffle([...array]) {
  return array.sort(() => Math.random() - 0.5);
}

const spring = {
  type: "spring",
  damping: 28,
  stiffness: 120,
};

function Projects() {
  const { t } = useTranslation();

  const [orderedProjects, setOrderedProjects] = useState(projects);

  return (
    <motion.section
      className="glass-section projects-section"
      id="projects"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      variants={fadeLeft}
    >
      <motion.div
        className="project-image-wrap"
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <img src={ProjectImg} alt="Anime avatar Betta" />
      </motion.div>
      <div className="projects-content">
        <span className="section-label">{t("projects.label")}</span>
        <h2>{t("projects.title")}</h2>
      </div>

      <div className="projects-grid">
        {orderedProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </motion.section>
  );
}

export default Projects;
