import PCPal from "../../assets/images/popcornpal.png";
import Portfolio from "../../assets/images/portfolio.png";
import AppleMusic from "../../assets/images/applemusic.png";
import ViaggiAziendali from "../../assets/images/viaggiaziendali.png";

export const projects = [
  {
    title: "PopcornPal",
    description: "Movie social platform",
    tech: ["React", "Spring Boot", "PostgreSQL", "Swagger", "External APIs"],
    image: PCPal,
    link: "https://github.com/bettapcq/PopCornPal_fe",
    demo: "https://popcornpal-ep.vercel.app",
  },

  {
    title: "Portfolio",
    description: "Portfolio stile anime",
    tech: ["React", "Bootstrap", "Three.js", "Framer Motion", "Sass"],
    image: Portfolio,
    link: "https://github.com/bettapcq/anime-portfolio",
  },
  {
    title: "Fake Apple Music",
    description: "Clone di Apple Music web app",
    tech: ["React", "Redux", "Css", "Deezer API"],
    image: AppleMusic,
    link: "https://github.com/bettapcq/project_u3_w3_d5",
  },

  {
    title: "Viaggi Aziendali",
    description: "Backend per gestione viaggi aziendali",
    tech: ["Spring Boot", "PostgreSQL", "Postman", "REST APIs"],
    image: ViaggiAziendali,
    link: "https://github.com/bettapcq/project_BE_u2_w2_d5",
  },
];
