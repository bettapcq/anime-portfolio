import PCPal from "../../assets/images/popcornpal.png";
import Portfolio from "../../assets/images/portfolio.png";
import AppleMusic from "../../assets/images/applemusic.png";
import ViaggiAziendali from "../../assets/images/viaggiaziendali.png";
import GranoEGusto from "../../assets/images/granoegusto.png";
import BloodyGlyph from "../../assets/images/bloodyglyph.png";

export const projects = [
  {
    id: "BloodyGlyph",
    title: "BloodyGlyph",
    descriptionKey: "projects.items.bloodyGlyph.description",
    tech: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "Motion",
      "ZXing",
    ],
    image: BloodyGlyph,
    link: "https://github.com/bettapcq/bloody-glyph",
    demo: "https://bloodyglyph.vercel.app",
  },
  {
    id: "granoEGusto",
    title: "Grano e Gusto Pizzeria Ristorante",
    descriptionKey: "projects.items.granoEGusto.description",
    tech: ["React", "Vite", "Tailwind CSS", "i18next", "Motion"],
    image: GranoEGusto,
    link: "https://github.com/bettapcq/grano-e-gusto",
    demo: "https://www.granoegustopizzeria.it",
  },
  {
    id: "animePortfolio",
    title: "Anime Portfolio",
    descriptionKey: "projects.items.animePortfolio.description",
    tech: ["React", "Bootstrap", "Three.js", "Framer Motion", "Sass"],
    image: Portfolio,
    link: "https://github.com/bettapcq/anime-portfolio",
  },
  {
    id: "popcornpal",
    title: "PopcornPal",
    descriptionKey: "projects.items.popcornpal.description",
    tech: ["React", "Spring Boot", "PostgreSQL", "Swagger", "External APIs"],
    image: PCPal,
    link: "https://github.com/bettapcq/PopCornPal_fe",
    demo: "https://popcornpal-ep.vercel.app",
  },
  {
    id: "fakeAppleMusic",
    title: "Fake Apple Music",
    descriptionKey: "projects.items.fakeAppleMusic.description",
    tech: ["React", "Redux", "Css", "Deezer API"],
    image: AppleMusic,
    link: "https://github.com/bettapcq/project_u3_w3_d5",
  },

  {
    id: "viaggiAziendali",
    title: "Viaggi Aziendali",
    descriptionKey: "projects.items.viaggiAziendali.description",
    tech: ["Spring Boot", "PostgreSQL", "Postman", "REST APIs"],
    image: ViaggiAziendali,
    link: "https://github.com/bettapcq/project_BE_u2_w2_d5",
  },
];
