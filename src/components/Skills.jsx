import React from "react";
import "./Skills.css";
import {
  BiLogoReact, BiLogoNodejs, BiLogoJavascript,
  BiLogoTypescript, BiLogoTailwindCss, BiLogoMongodb,
  BiLogoPostgresql, BiLogoGit, BiLogoAws
} from "react-icons/bi";
import { TbBrandNextjs } from "react-icons/tb";
import { SiExpress, SiJest, SiFirebase, SiRedis, SiSwagger, SiDotnet, SiFramer } from "react-icons/si";
import { FaDocker, FaNetworkWired, FaCodeBranch, FaDatabase, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { MdDesignServices } from "react-icons/md";
import { GiPolarBear } from "react-icons/gi";

const Skills = () => {
  const skillsData = {
    Frontend: [
      { name: "React.js", icon: <BiLogoReact /> },
      //{ name: "Next.js", icon: <TbBrandNextjs /> },
      { name: "JavaScript (ES6+)", icon: <BiLogoJavascript /> },
      { name: "TypeScript", icon: <BiLogoTypescript /> },
      { name: "HTML5 & CSS3", icon: <FaHtml5 /> },
      { name: "Redux & Zustand", icon: <GiPolarBear /> },
      { name: "Tailwind CSS", icon: <BiLogoTailwindCss /> },
      { name: "Material-UI", icon: <MdDesignServices /> },
      { name: "Framer Motion", icon: <SiFramer /> },
      { name: "Responsive Design", icon: <MdDesignServices /> },
    ],
    Backend: [
      { name: "Node.js", icon: <BiLogoNodejs /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: ".NET Core / C#", icon: <SiDotnet /> },
      { name: "RESTful APIs", icon: <FaNetworkWired /> },
      { name: "MongoDB", icon: <BiLogoMongodb /> },
      { name: "MSSQL", icon: <FaDatabase /> },
      { name: "Redis", icon: <SiRedis /> },
      { name: "Firebase", icon: <SiFirebase /> },
    ],
    Tools: [
      { name: "Git", icon: <BiLogoGit /> },
      { name: "Version Control", icon: <FaCodeBranch /> },
      { name: "Docker", icon: <FaDocker /> },
      { name: "Swagger", icon: <SiSwagger /> },
      { name: "Jest (Unit Testing)", icon: <SiJest /> }
    ],
  };

  return (
    <div className="skills-section">
      <h2 className="section-title">Skills</h2>
      <div className="skills-container">
        {Object.entries(skillsData).map(([category, skills]) => (
          <div key={category} className="skill-category">
            <h3 className="category-title">{category}</h3>
            <div className="skill-items">
              {skills.map((skill) => (
                <div key={skill.name} className="skill-item">
                  <span className="skill-icon">{skill.icon}</span>
                  <span className="skill-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
