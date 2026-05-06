import { Html } from "@react-three/drei";

function TechCard({ tech }) {
  return (
    <Html transform center distanceFactor={3.5}>
      <article className="tech-card">
        <div className="tech-card-icon">{tech.icon}</div>
        <p>{tech.name}</p>
      </article>
    </Html>
  );
}

export default TechCard;
