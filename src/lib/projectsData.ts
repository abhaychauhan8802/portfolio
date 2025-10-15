import { StaticImageData } from "next/image";
import devsnapImage from "../assets/project-images/devsnap.png";
import trackexImage from "../assets/project-images/trackex.png";

interface ProjectTypes {
  title: string;
  description: string;
  technologies: string[];
  image: StaticImageData;
  github: string;
  live: string;
}

export const projects: ProjectTypes[] = [
  {
    title: "Devsnap",
    description:
      "Full-stack social medial platform for developers. Where they can share their knowledge and connect with other developers.",
    technologies: ["React", "Tailwind CSS", "Node.js", "MongoDB", "Redis"],
    image: devsnapImage,
    github: "https://github.com/abhaychauhan8802/devsnap",
    live: "https://devsnap.onrender.com/",
  },
  {
    title: "Trackex",
    description:
      "Trackex is a full-featured expense tracking mobile app that helps users manage their daily expenses and incomes.",
    technologies: ["React Native", "Expo", "Redux", "Express", "PostgreSQL"],
    image: trackexImage,
    github: "https://github.com/abhaychauhan8802/trackex-frontend",
    live: "https://github.com/abhaychauhan8802/trackex-frontend/releases/tag/v1.0.0",
  },
];
