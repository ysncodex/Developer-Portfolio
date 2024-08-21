import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from "react-icons/fa";
import { FiFileText, FiUser, FiExternalLink } from "react-icons/fi";
// eslint-disable-next-line no-unused-vars
import { Link } from "react-router-dom";

import Work1 from "./assets/project-1.png";
import Work2 from "./assets/project-2.png";
import Work3 from "./assets/project-3.jpg";
import Work4 from "./assets/project-4.png";
import Work5 from "./assets/project-5.png";

import Theme1 from "./assets/purple.png";
import Theme2 from "./assets/red.png";
import Theme3 from "./assets/blueviolet.png";
import Theme4 from "./assets/blue.png";
import Theme5 from "./assets/goldenrod.png";
import Theme6 from "./assets/magenta.png";
import Theme7 from "./assets/yellowgreen.png";
import Theme8 from "./assets/orange.png";
import Theme9 from "./assets/green.png";
import Theme10 from "./assets/yellow.png";

export const links = [
  {
    id: 1,
    name: "Home",
    icon: <FaHome className="nav__icon" />,
    path: "/",
  },

  {
    id: 2,
    name: "About",
    icon: <FaUser className="nav__icon" />,
    path: "/about",
  },

  {
    id: 3,
    name: "Projects",
    icon: <FaFolderOpen className="nav__icon" />,
    path: "/portfolio",
  },

  {
    id: 4,
    name: "Contact",
    icon: <FaEnvelopeOpen className="nav__icon" />,
    path: "/contact",
  },
];

export const personalInfo = [
  {
    id: 1,
    title: "First Name : ",
    description: "Md. ",
  },

  {
    id: 2,
    title: "Last Name : ",
    description: "Yeasin",
  },

  {
    id: 3,
    title: "Age : ",
    description: "24 Years",
  },

  {
    id: 4,
    title: "Nationality : ",
    description: "Bangladeshi",
  },

  {
    id: 5,
    title: "Freelance : ",
    description: "Available",
  },

  {
    id: 6,
    title: "Address : ",
    description: "Demra, Dhaka",
  },

  {
    id: 7,
    title: "Phone : ",
    description: "+8801624269321",
  },

  {
    id: 8,
    title: "Email : ",
    description: "yeasin7y@mail.com",
  },

  {
    id: 9,
    title: "LinkedIn : ",
    description: "Md. Yeasin",
  },

  {
    id: 10,
    title: "Languages : ",
    description: "Bangla, English",
  },
];

export const stats = [
  {
    id: 1,
    no: "0.4+",
    title: "Years of <br /> Experience",
  },

  {
    id: 2,
    no: "2+",
    title: "Completed <br /> Projects",
  },

  {
    id: 3,
    no: "2+",
    title: "Happy <br /> Customers",
  },

  {
    id: 4,
    no: "0+",
    title: " Awards <br /> Won",
  },
];

export const resume = [
  {
    id: 1,
    category: "experience",
    icon: <FaBriefcase />,
    year: "May 2023 - Aug 2023",
    title: "Wordpress Developer <span> DataXpie </span>",
    desc: "Developed and managed numerous WordPress projects, adhering to best practices in front-end and back-end development. Improved functionality and user experience (UX) by resolving plugin bugs and optimizing website performance. Utilized HTML, CSS, JavaScript, PHP, MySQL, and WordPress for developing custom themes and plugins.",
  },

  {
    id: 2,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2024",
    title: "B.Sc in CSE <span> Green University of Bangladesh </span>",
    desc: "Graduated with a Bachelor of Science in Computer Science and Engineering from Green University of Bangladesh in 2024 and completed a comprehensive curriculum in computer science, covering programming languages, algorithms, and software engineering principles.",
  },

  {
    id: 3,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2019",
    title: "HSC <span> Kabi Nazrul Govt. College </span>",
    desc: "Completed Higher Secondary Certificate (HSC) in Science from Kabi Nazrul Govt. College in 2019.",
  },

  {
    id: 4,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2017",
    title: "SSC <span> Hazi Moazzem Ali Adarsha High School </span>",
    desc: "Completed Secondary School Certificate (SSC) in Science from Hazi Moazzem Ali Adarsha High School in 2017.",
  },
];

export const skills = [
  {
    id: 1,
    title: "",
    percentage: "HTML5",
  },

  {
    id: 2,
    title: "",
    percentage: "CSS3",
  },

  {
    id: 3,
    title: "",
    percentage: "JS",
  },

  {
    id: 4,
    title: "",
    percentage: "ReactJS",
  },

  {
    id: 5,
    title: "",
    percentage: "NodeJS",
  },

  {
    id: 6,
    title: "",
    percentage: "Express",
  },

  {
    id: 7,
    title: "",
    percentage: "Mongodb",
  },
  {
    id: 8,
    title: "",
    percentage: "Jquery",
  },
  {
    id: 9,
    title: "",
    percentage: "JWT",
  },
  {
    id: 9,
    title: "",
    percentage: "APIs",
  },
  {
    id: 10,
    title: "",
    percentage: "Firebase",
  },
  {
    id: 11,
    title: "",
    percentage: "GitHub",
  },
  {
    id: 12,
    title: "",
    percentage: "APIs",
  },
  {
    id: 12,
    title: "",
    percentage: "Zustand",
  },
];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: "Multivendor E-commerce Website",
    details: [
      {
        icon: <FiFileText />,
        title: "Project: ",
        desc: "Photo",
      },
      {
        icon: <FiUser />,
        title: "My Project: ",
        desc: "Capstone Project",
      },
      {
        icon: <FaCode />,
        title: "Language: ",
        desc: "MERN Stack",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview: ",
        desc: (
          <a
            href="https://github.com/mdyeasin07/bengaldeli-multivendor"
            style={{ color: "red" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            Go to Project
          </a>
        ),
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: "Instagram Clone",
    details: [
      {
        icon: <FiFileText />,
        title: "Project: ",
        desc: "Photo",
      },
      {
        icon: <FiUser />,
        title: "My Project: ",
        desc: "Self learn Project",
      },
      {
        icon: <FaCode />,
        title: "Language: ",
        desc: "React JS",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview: ",
        desc: (
          <a
            href="https://social-media-clone-created-by-yeasin.vercel.app/auth"
            style={{ color: "red" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            Go to Project
          </a>
        ),
      },
    ],
  },

  {
    id: 3,
    img: Work3,
    title: "Responsive Fashion Shop Website",
    details: [
      {
        icon: <FiFileText />,
        title: "Project: ",
        desc: "Website",
      },
      {
        icon: <FiUser />,
        title: "My Project: ",
        desc: "Academic Project",
      },
      {
        icon: <FaCode />,
        title: "Language: ",
        desc: "HTML5, CSS3",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview: ",
        desc: (
          <a
            href="https://github.com/mdyeasin07/Responsive-Fashion-Shop-E-Commerce-Website"
            style={{ color: "red" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            Go to Project
          </a>
        ),
      },
    ],
  },

  {
    id: 4,
    img: Work4,
    title: "Travel & Tourism Management System",
    details: [
      {
        icon: <FiFileText />,
        title: "Project: ",
        desc: "Website",
      },
      {
        icon: <FiUser />,
        title: "My Project: ",
        desc: "Academic Project",
      },
      {
        icon: <FaCode />,
        title: "Language: ",
        desc: "JAVA",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview: ",
        desc: (
          <a
            href="https://github.com/mdyeasin07/travel_and_tourism_management_system/tree/main"
            style={{ color: "red" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            Go to Project
          </a>
        ),
      },
    ],
  },

  {
    id: 5,
    img: Work5,
    title: "Religious-Partner",
    details: [
      {
        icon: <FiFileText />,
        title: "Project: ",
        desc: "Website",
      },
      {
        icon: <FiUser />,
        title: "My Project: ",
        desc: "Academic Project",
      },
      {
        icon: <FaCode />,
        title: "Language: ",
        desc: "JAVA",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview: ",
        desc: (
          <a
            href="https://github.com/mdyeasin07/Reigious-Partner-App"
            style={{ color: "red" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            Go to Project
          </a>
        ),
      },
    ],
  },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: "hsl(252, 35%, 51%)",
  },

  {
    id: 2,
    img: Theme2,
    color: "hsl(4, 93%, 54%)",
  },

  {
    id: 3,
    img: Theme3,
    color: "hsl(271, 76%, 53%)",
  },

  {
    id: 4,
    img: Theme4,
    color: "hsl(225, 73%, 57%)",
  },

  {
    id: 5,
    img: Theme5,
    color: "hsl(43, 74%, 49%)",
  },

  {
    id: 6,
    img: Theme6,
    color: "hsl(339, 81%, 66%)",
  },

  {
    id: 7,
    img: Theme7,
    color: "hsl(80, 61%, 50%)",
  },

  {
    id: 8,
    img: Theme8,
    color: "hsl(19, 96%, 52%)",
  },

  {
    id: 9,
    img: Theme9,
    color: "hsl(88, 65%, 43%)",
  },

  {
    id: 10,
    img: Theme10,
    color: "hsl(42, 100%, 50%)",
  },
];
