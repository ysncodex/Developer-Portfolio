import React from "react";
import "./about.css";
import Skills from "../../components/Skills";
import Experience from "../../components/Experience";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaDownload,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaUserAlt,
} from "react-icons/fa";
import Profile from "../../assets/home2.png";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container about__container">
        <div className="about__left">
          <div className="about__img-wrapper">
            <img src={Profile} alt="Profile" className="about__img" />
          </div>
          <h1 className="about__name">Md Yeasin</h1>
          <a
            href="/Md_Yeasin_CV.pdf"
            className="about__cv-btn"
            download="Md_Yeasin_CV.pdf"
          >
            Download CV <FaDownload className="download-icon" />
          </a>
        </div>

        <div className="about__right">
          <div className="about__info">
            <div className="info__item">
              <div className="info__icon">
                <FaPhone size={18} /> {/* Further reduced icon size */}
              </div>
              <div className="info__content">
                <span className="info__value">+8801624269321</span>
              </div>
            </div>
            <div className="info__item">
              <div className="info__icon">
                <FaEnvelope size={18} />
              </div>
              <div className="info__content">
                <span className="info__value">yeasin7y@gmail.com</span>
              </div>
            </div>
            <div className="info__item">
              <div className="info__icon">
                <FaMapMarkerAlt size={18} />
              </div>
              <div className="info__content">
                <span className="info__value">Rampura, Dhaka-1217</span>
              </div>
            </div>
            <div className="info__item">
              <div className="info__icon">
                <FaUserAlt size={18} />
              </div>
              <div className="info__content">
                <span className="info__value">25 Years</span>
              </div>
            </div>
          </div>

          <div className="about__description">
            <h2 className="about__subtitle">About Me</h2>
            <p className="about__text">
              I'm a{" "}
              <strong>Full-Stack Engineer specializing in Frontend development</strong>{" "}
              with React.js and modern JavaScript frameworks. With hands-on experience
              in React.js, Node.js, and .NET Core, I build scalable, high-performance
              web applications with a strong emphasis on creating intuitive, responsive
              user interfaces.
              <br />
              <br />
              I've contributed to enterprise ERP systems, focusing on{" "}
              <strong>
                component-based architecture, state management with Redux and Zustand,
                and modern CSS solutions
              </strong>
              . My work includes building reusable React component libraries, implementing
              responsive designs with Tailwind CSS and Material-UI, and optimizing frontend
              performance. My full-stack background enables seamless API integration -
              I've reduced API latency by 40%, resolved 45+ production issues, and
              implemented Redis caching for enhanced UX.
              <br />
              <br />
              Passionate about writing clean, maintainable code and creating pixel-perfect,
              accessible user experiences that solve real business problems.
            </p>
          </div>

          <div className="about__social" role="list" aria-label="Social media links">
            <a
              href="https://github.com/ysncodex"
              className="social__link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Yeasin's GitHub profile"
              role="listitem"
            >
              <FaGithub aria-hidden="true" />
            </a>
            <a
              href="https://www.linkedin.com/in/yeasin7/"
              className="social__link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Yeasin's LinkedIn profile"
              role="listitem"
            >
              <FaLinkedin aria-hidden="true" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100010641914202"
              className="social__link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Yeasin's Facebook profile"
              role="listitem"
            >
              <FaFacebook aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="experience-skills-section">
          <div className="experience-skills-container">
            <div className="experience-wrapper">
              <Experience />
            </div>
            <div className="skills-wrapper">
              <Skills />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
