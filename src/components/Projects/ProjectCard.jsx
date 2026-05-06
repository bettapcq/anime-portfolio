import { motion, useMotionValue, useSpring } from "motion/react";
import "./Projects.scss";
import { FiArrowUpRight } from "react-icons/fi";

const ProjectCard = ({ project }) => {
  const ref = useRef(null);
  const rotateX = useSpring(0);
  const rotateY = useSpring(0);

  function handleMouseMove(e) {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const rotateYValue = (mouseX / width - 0.5) * 16;

    const rotateXValue = (mouseY / height - 0.5) * -16;

    rotateX.set(rotateXValue);
    rotateY.set(rotateYValue);
  }

  function handleMouseLeave() {
    rotateX.set(0);
    rotateY.set(0);
  }

  return (
    <motion.article
      className="project-card"
      whileHover={{
        y: -8,
        scale: 1.03,
      }}
      transition={{
        type: "spring",
        damping: 24,
        stiffness: 120,
      }}
    >
      <div className="project-image">
        <img src={project.image} alt={project.title} />
      </div>

      <div className="project-card-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-tech">
          {project.tech.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>{" "}
        <a
          href={project.link}
          target="_blank"
          rel="noreferrer"
          className="project-link"
        >
          <FiArrowUpRight />
        </a>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
