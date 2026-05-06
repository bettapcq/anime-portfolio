import { motion, useMotionValue, useSpring } from "framer-motion";
import "./Projects.scss";
import { FiArrowUpRight } from "react-icons/fi";
import { useRef } from "react";
import TiltedCard from "./TiltedCard";

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
    <TiltedCard
      imageSrc={project.image}
      altText={project.title}
      captionText={project.title}
      containerHeight="360px"
      containerWidth="100%"
      imageHeight="360px"
      imageWidth="280px"
      rotateAmplitude={10}
      scaleOnHover={1.05}
      showTooltip={false}
      displayOverlayContent={true}
      overlayContent={
        <article className="project-card">
          <div className="project-image-spacer" />

          <div className="project-card-content">
            <div className="project-header">
              <div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </div>
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
        </article>
      }
    />
  );
};

export default ProjectCard;
