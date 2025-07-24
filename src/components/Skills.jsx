import React from "react";
import "./Skills.css";
import {
  BiLogoReact, BiLogoNodejs, BiLogoJavascript,
  BiLogoTypescript, BiLogoTailwindCss, BiLogoMongodb,
  BiLogoPostgresql, BiLogoGit, BiLogoAws
} from "react-icons/bi";
import { TbBrandNextjs } from "react-icons/tb";
import { SiExpress, SiJest, SiFirebase, SiRedis, SiSwagger, SiDotnet, } from "react-icons/si";
import { FaDocker, FaNetworkWired, FaCodeBranch, FaDatabase } from "react-icons/fa";
import { MdDesignServices } from "react-icons/md";
import { GiPolarBear } from "react-icons/gi";

const Skills = () => {
  const skillsData = {
    Frontend: [
      { name: "React.js", icon: <BiLogoReact /> },
      { name: "JavaScript", icon: <BiLogoJavascript /> },
      { name: "Tailwind CSS", icon: <BiLogoTailwindCss /> },
      { name: "Material-UI", icon: <MdDesignServices /> },
      { name: "Zustand", icon: <GiPolarBear /> },

    ],
    Backend: [
      { name: ".NET Core / C#", icon: <SiDotnet /> },
      { name: "MSSQL", icon: <FaDatabase /> },
      { name: "RESTful APIs", icon: <FaNetworkWired /> },
      { name: "Redis", icon: <SiRedis /> },
      { name: "Node.js", icon: <BiLogoNodejs /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "MongoDB", icon: <BiLogoMongodb /> },
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
