import { useRef } from "react";
import { createContext } from "react";
const ScrollContext = createContext(null);

const ScrollContextProvider = ({ children }) => {
  const HomeRef = useRef(null);
  const AboutRef = useRef(null);
  const SkillsRef = useRef(null);
  const ProjectsRef = useRef(null);
  const ContactRef = useRef(null);

  const handleHomeRef = () => {
    HomeRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
  };
  
  const handleAboutRef = () => {
    AboutRef.current?.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
  };

  const handleSkillsRef = () => {
    SkillsRef.current?.scrollIntoView({ behavior: "smooth", block: "start", inline: "start" });
  };

  const handleProjectsRef = () => {
    ProjectsRef.current?.scrollIntoView({ behavior: "smooth", block: "start", inline: "start" });
  };

  const handleContactRef = () => {
    ContactRef.current?.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
  };

  return (
    <ScrollContext.Provider value={{ HomeRef, AboutRef, SkillsRef, ProjectsRef, ContactRef, handleHomeRef, handleAboutRef, handleSkillsRef, handleProjectsRef, handleContactRef }}>
      {children}
    </ScrollContext.Provider>
  );
};

export default ScrollContextProvider;
export { ScrollContext };
