import { project1Dark, project1Light, project2Dark, project2Light, project3Dark, project3Light, project4Dark, project4Light, project5Dark, project5Light } from "./Images";
import {
  APrimeGithub,
  APrimeLive,
  GadgetRamboGithub,
  GadgetRamboLive,
  glamazonGithub,
  glamazonLive,
  indianExpressGithub,
  indianExpressLive,
  myTheresaGithub,
  myTheresaLive,
} from "./Links";

export const ProjectsData = [
  {
    live: APrimeLive,
    github: APrimeGithub,
    imgDark: project4Dark,
    imgLight: project4Light,
    heading1: "A-Prime",
    heading2: "(Custom Youtube App)",
    summary: "It is A Simple Video Platform to watch Youtube videos, Made using Google Youtube Data API V3. We can Search through various videos, filter, and paginate",
    TStack: [true, true, true, true, true, true, true, false],
  },
  {
    live: GadgetRamboLive,
    github: GadgetRamboGithub,
    imgDark: project5Dark,
    imgLight: project5Light,
    heading1: "GadgetRambo",
    heading2: "(Gadget360.com Clone)",
    summary:
      "This website had been created to target tech-geeks to explore tech gadgets and tech related news. Sells Tech Gadgets and Stores Knowledge of Specifications of those Gadgets",
    TStack: [true, true, true, true, true, true, true, true],
  },
  {
    live: glamazonLive,
    github: glamazonGithub,
    imgDark: project1Dark,
    imgLight: project1Light,
    heading1: `Glamazon.com`,
    heading2: "(BeautyBebo.com Clone)",
    summary: "A Ecommerce Website that sells Products Related to Cosmetics and Beauty. Build on ReactJs for Frontend and Custom Server (Json-server) on Backend.",
    TStack: [true, true, true, true, true, false, false, false],
  },
  {
    live: myTheresaLive,
    github: myTheresaGithub,
    imgDark: project2Dark,
    imgLight: project2Light,
    heading1: "MyFashionCart.com",
    heading2: "(MyTheresa.com Clone)",
    summary:
      "A Ecommerce Website that sells Products Related to Cloths and Accessories. Build on HTML and CSS for Frontend and Custom Server (Json-server) with JavaScript on Backend.",
    TStack: [false, false, true, true, true, false, false, false],
  },
  {
    live: indianExpressLive,
    github: indianExpressGithub,
    imgDark: project3Dark,
    imgLight: project3Light,
    heading1: "Indian",
    heading2: "Express.com",
    summary:
      "It is an Online and Offline News Platform, The Indian Express grew into a multiple-edition paper influencing thought and policy across the country. Packed with a fair mix of news, knowledge and information.",
    TStack: [false, false, true, true, true, false, false, false],
  },
];
