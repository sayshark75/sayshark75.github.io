import { project1Dark, project1Light, project3Dark, project3Light, project4Dark, project4Light, project5Dark, project5Light, project6Dark, project6Light } from "./Images";
import {
  APrimeGithub,
  APrimeLive,
  GadgetRamboGithub,
  GadgetRamboLive,
  KoovsGithub,
  KoovsLive,
  glamazonGithub,
  glamazonLive,
  indianExpressGithub,
  indianExpressLive,
} from "./Links";

// TStack [react,CHakraUI,JS,HTML,CSS,TS,Redux,FIrebase, Node,Express,Mongo]

export const ProjectsData = [
  {
    live: KoovsLive,
    github: KoovsGithub,
    imgDark: project6Dark,
    imgLight: project6Light,
    heading1: "KOOVS Ecommerce",
    heading2: "(Koovs.com Clone)",
    summary: "koovs is a Ecommerce website which helps you to find the different kinds of Fashion Related Products.",
    TStack: [true, true, true, false, true, false, true, false, true, true, true],
  },
  {
    live: APrimeLive,
    github: APrimeGithub,
    imgDark: project4Dark,
    imgLight: project4Light,
    heading1: "A-Prime",
    heading2: "(Custom Youtube App)",
    summary: "It is A Simple Video Platform to watch Youtube videos, Made using Google Youtube Data API V3. We can Search through various videos, filter, and paginate",
    TStack: [true, true, true, false, false, true, true, false, false, false, false],
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
    TStack: [true, true, true, false, true, true, true, true, false, false, false],
  },
  {
    live: glamazonLive,
    github: glamazonGithub,
    imgDark: project1Dark,
    imgLight: project1Light,
    heading1: `Glamazon.com`,
    heading2: "(BeautyBebo.com Clone)",
    summary: "A Ecommerce Website that sells Products Related to Cosmetics and Beauty. Build on ReactJs for Frontend and Custom Server (Json-server) on Backend.",
    TStack: [true, true, true, false, false, false, false, false, false, false, false],
  },
  // {
  //   live: myTheresaLive,
  //   github: myTheresaGithub,
  //   imgDark: project2Dark,
  //   imgLight: project2Light,
  //   heading1: "MyFashionCart.com",
  //   heading2: "(MyTheresa.com Clone)",
  //   summary:
  //     "A Ecommerce Website that sells Products Related to Cloths and Accessories. Build on HTML and CSS for Frontend and Custom Server (Json-server) with JavaScript on Backend.",
  //   TStack: [false, false, true, true, true, false, false, false, false, false, false],
  // },
  {
    live: indianExpressLive,
    github: indianExpressGithub,
    imgDark: project3Dark,
    imgLight: project3Light,
    heading1: "IndianExpress.com",
    heading2: "",
    summary:
      "It is an Online and Offline News Platform, The Indian Express grew into a multiple-edition paper influencing thought and policy across the country. Packed with a fair mix of news, knowledge and information.",
    TStack: [false, false, true, true, true, false, false, false, false, false, false],
  },
];
