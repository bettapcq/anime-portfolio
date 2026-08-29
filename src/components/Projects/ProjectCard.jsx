import "./Projects.scss";
import TiltedCard from "./TiltedCard";
import { FaCode, FaPlay } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const ProjectCard = ({ project }) => {
  const { t } = useTranslation();

  const handleProjectClick = (destination) => {
    window.gtag?.("event", "project_click", {
      project_name: project.title,
      destination,
    });
  };

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
                {project.statusKey && (
                  <span className="project-status">{t(project.statusKey)}</span>
                )}
                <p>{t(project.descriptionKey)}</p>
              </div>
            </div>
            <div className="project-tech">
              {project.tech.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>{" "}
            <div className="project-actions">
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="project-link-btn"
                onClick={() => handleProjectClick("github")}
              >
                <FaCode className="project-link" />
              </a>{" "}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link-btn"
                  onClick={() => handleProjectClick("live_demo")}
                >
                  <FaPlay className="project-link" />
                </a>
              )}
            </div>
          </div>
        </article>
      }
    />
  );
};

export default ProjectCard;
