import React from 'react';
import "./home.css";
import Profile from "../../assets/home.png";
import { Link } from "react-router-dom";
import { FaArrowRight, FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from 'framer-motion';
import AnimatedSection from '../../components/AnimatedSection';
import { fadeInUp, scaleIn } from '../../animations/motionVariants';

const Home = () => {
  const scrollToAbout = (e) => {
    e.preventDefault();
    const aboutSection = document.querySelector("#about");
    const offset = 80;
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = aboutSection.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  return (
    <section className="home section" id="home">
      <AnimatedSection className="home__container">
        <motion.div
          className="home__content"
          variants={fadeInUp}
          layout
          layoutId="home-content"
        >
          <div className="home__data">
            <motion.div variants={fadeInUp} className="home__subtitle">
              👋 Hello, I'm
            </motion.div>

            <motion.h1 variants={fadeInUp} className="home__title">
              <span className="typing-text">Md. Yeasin</span>
              <div className="title-wrapper">
                <div className="title-role">Full-Stack Software Engineer</div>
              </div>
            </motion.h1>

            <motion.p variants={fadeInUp} className="home__description">
              I specialize in building scalable web applications using .NET and React.js. With over a year of hands-on experience in enterprise ERP development, I bring a strong balance of backend architecture and frontend performance. Currently contributing at Cultive8 Technologies, where I'm slated for promotion to Executive Software Engineer in September 2024.
            </motion.p>

            <motion.div variants={fadeInUp} className="home__btns">
              <a href="#about" className="button button--primary" onClick={scrollToAbout}>
                More About Me
                <span className="button__icon">
                  <FaArrowRight />
                </span>
              </a>

              <motion.div variants={fadeInUp} className="home__socials">
                <a href="https://github.com/ysncodex" target="_blank" rel="noopener noreferrer" className="social__link">
                  <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/yeasin7/" target="_blank" rel="noopener noreferrer" className="social__link">
                  <FaLinkedin />
                </a>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          variants={scaleIn}
          className="home__img-wrapper"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="home__banner">
            <img src={Profile} alt="Md. Yeasin" className="home__img" />
          </div>
        </motion.div>
      </AnimatedSection>
    </section>
  );
};

export default React.memo(Home);  
