import React from 'react';
import "./home.css";
import Profile from "../../assets/home.jpg";
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
                <div className="title-role">
                  <span className="role-highlight">Frontend-Focused</span>
                  <span className="role-text"> Full-Stack Engineer</span>
                </div>
              </div>
            </motion.h1>

            <motion.p variants={fadeInUp} className="home__description">
              Frontend-focused Full-Stack Engineer specializing in React.js, with proven 
              experience in modern web architecture (MERN Stack & .NET Core). I build responsive, 
              high-performance user interfaces while leveraging my backend knowledge to create 
              seamless full-stack solutions.
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
