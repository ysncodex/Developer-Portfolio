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
            href="/src/assets/CV_Yeasin.pdf"
            className="about__cv-btn"
            download
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
              I'm a dedicated and performance-driven Full-Stack Software Engineer with a strong foundation in both frontend and backend development. I hold a Bachelor of Science in Computer Science & Engineering from Green University of Bangladesh and have over one year of professional experience delivering scalable, maintainable solutions.
              Currently, I’m working at Cultive8 Technologies, where I contribute to complex ERP modules using a modern tech stack that includes .NET (C#), React.js, and SQL Server. My role involves designing and optimizing full-stack solutions that serve enterprise-level operations—streamlining performance, enhancing user experiences, and aligning with business goals.
              I'm passionate about writing clean, efficient code and continuously evolving with the latest industry practices. Outside of development, I enjoy exploring UI/UX innovations, improving workflows, and mentoring junior developers.

            </p>
          </div>

          <div className="about__social">
            <a
              href="https://github.com/ysncodex"
              className="social__link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/yeasin7/"
              className="social__link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://facebook.com/yourusername"
              className="social__link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
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
