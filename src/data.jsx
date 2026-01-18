import Work1 from "./assets/project-1.png";
import Work2 from "./assets/project-2.png";
import Work3 from "./assets/project-3.jpg";
import Work4 from "./assets/project-4.png";
import Work5 from "./assets/project-5.png";

export const portfolio = [
  {
    id: 1,
    title: "Instagram Clone - Social Media Platform",
    teamSize: "Solo",
    description: "A modern social media application built with React.js and Firebase, featuring real-time data synchronization and responsive design. Implemented component-based architecture with React Hooks, user authentication, photo upload functionality, interactive like/comment systems, and profile management. Styled with Tailwind CSS for a polished, mobile-first UI that delivers seamless user experience across all devices.",
    img: Work2,
    technologies: ["React", "Firebase", "Tailwind CSS", "React Hooks", "Real-time Database"],
    tags: ["Social Media", "Frontend", "Real-time", "Responsive"],
    demo: "https://social-media-clone-created-by-yeasin.vercel.app/auth"
  },
  {
    id: 2,
    title: "Multivendor E-commerce Platform",
    teamSize: "Team of 3",
    description: "A full-stack MERN application featuring multiple vendor dashboards, product management, and secure payment processing. Built scalable React components with Redux for complex state management across vendor and customer workflows. Designed responsive admin panels with intuitive UI/UX, integrated SSLCommerz payment gateway, and implemented JWT-based authentication with RESTful API architecture.",
    img: Work1,
    technologies: ["React", "Redux", "Node.js", "Express", "MongoDB", "JWT"],
    tags: ["E-commerce", "Full-Stack", "MERN", "Dashboard"],
    demo: "https://github.com/ysncodex/Bengaldeli-Fullstack-Multivendor"
  },
  {
    id: 3,
    title: "Fashion E-commerce Website",
    teamSize: "Team of 2",
    description: "A fully responsive e-commerce website showcasing product listings with dynamic filtering and search functionality. Built from scratch using vanilla JavaScript, HTML5, and CSS3 to demonstrate strong fundamentals in DOM manipulation, event handling, and responsive design principles. Optimized for fast performance and smooth user interactions across all devices without framework dependencies.",
    img: Work3,
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    tags: ["E-commerce", "Frontend Fundamentals", "Vanilla JS"],
    demo: "https://github.com/ysncodex/Responsive-Fashion-Shop"
  },
  {
    id: 4,
    title: "Travel Management System",
    teamSize: "Team of 2",
    description: "A comprehensive desktop application for managing travel agency operations including tour packages, customer records, and bookings. Built user-friendly interfaces with JavaFX, focusing on intuitive navigation and data visualization. Implemented MySQL database integration for reliable data persistence and complex query operations, demonstrating full-stack development capabilities beyond web technologies.",
    img: Work4,
    technologies: ["Java", "JavaFX", "MySQL", "UI Design"],
    tags: ["Desktop App", "Java", "Database"],
    demo: "https://github.com/ysncodex/Travel-Tourism-Management"
  },
  {
    id: 5,
    title: "Religious Partner Mobile App",
    teamSize: "Solo",
    description: "An Android mobile application connecting religious communities with local service providers. Developed native Android UI components, implemented location-based discovery features, and built user registration flows. Showcases mobile development experience with Java for Android, focusing on user engagement, intuitive navigation, and service accessibility for community-driven platforms.",
    img: Work5,
    technologies: ["Java", "Android", "Firebase", "Location Services"],
    tags: ["Mobile App", "Android", "Community"],
    demo: "https://github.com/ysncodex/Reigious-Partner-App"
  }
];
