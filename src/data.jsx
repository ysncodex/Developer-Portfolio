import Work1 from "./assets/project-1.png";
import Work2 from "./assets/project-2.png";
import Work3 from "./assets/project-3.jpg";
import Work4 from "./assets/project-4.png";
import Work5 from "./assets/project-5.png";

export const portfolio = [
  {
    id: 1,
    title: "Multivendor E-commerce Platform",
    teamSize: "Team of 3",
    description: "A scalable and robust multivendor e-commerce platform designed to support multiple vendors with individual dashboards. The platform includes advanced features such as product and inventory management, secure payment gateway integration (SSLCommerz), and user authentication. Built using the MERN stack, it ensures efficient data handling, responsive UI/UX, and seamless vendor-customer interactions.",
    img: Work1,
    technologies: ["React", "Redux", "Node.js", "Express", "MongoDB", "JWT", "Stripe"],
    tags: ["E-commerce", "Fullstack", "MERN", "Dashboard"],
    demo: "https://github.com/ysncodex/Bengaldeli-Fullstack-Multivendor"
  },
  {
    id: 2,
    title: "Instagram Clone - Social Media App",
    teamSize: "Team of 3",
    description: "A feature-rich social media platform inspired by Instagram, enabling users to create accounts, upload photos, like posts, comment, and manage personal profiles. Integrated with Firebase for authentication and real-time database handling. Tailwind CSS was used for a modern and fully responsive UI experience.",
    img: Work2,
    technologies: ["React", "Firebase", "Tailwind CSS"],
    tags: ["Social Media", "Frontend", "Firebase"],
    demo: "https://social-media-clone-created-by-yeasin.vercel.app/auth"
  },
  {
    id: 3,
    title: "Responsive Fashion E-commerce Website",
    teamSize: "Team of 3",
    description: "A stylish and fully responsive fashion e-commerce website that showcases product listings with category-based filtering, search functionality, and a clean UI. Designed using vanilla HTML, CSS, and JavaScript to ensure fast performance and smooth responsiveness across all devices.",
    img: Work3,
    technologies: ["HTML5", "CSS3", "JavaScript"],
    tags: ["E-commerce", "Responsive", "Vanilla JS"],
    demo: "https://github.com/ysncodex/Responsive-Fashion-Shop"
  },
  {
    id: 4,
    title: "Travel Management System App",
    teamSize: "Team of 3",
    description: "A desktop-based application designed to manage travel agency operations including tour package listings, customer records, bookings, and payment tracking. Built using JavaFX for the UI and MySQL for backend data persistence. Emphasizes data integrity and ease of navigation for administrative users.",
    img: Work4,
    technologies: ["Java", "Firebase", "Android"],
    tags: ["Mobile App", "Java"],
    demo: "https://github.com/ysncodex/Travel-Tourism-Management"
  },
  {
    id: 5,
    title: "Religious Partner App",
    teamSize: "Team of 3",
    description: "An Android mobile application designed to connect religious communities with local service providers. Features include user registration, location-based partner discovery, and direct communication options. Built using Java for Android with a focus on community engagement and service accessibility.",
    img: Work5,
    technologies: ["Java", "Android"],
    tags: ["Mobile App", "Android"],
    demo: "https://github.com/ysncodex/Reigious-Partner-App"
  }
];
