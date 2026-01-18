import { useState, useEffect } from "react";
import "./navbar.css";
import { FaHome, FaUser, FaFolderOpen, FaEnvelopeOpen } from "react-icons/fa";

const Navbar = () => {
  const [activeNav, setActiveNav] = useState("#home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      const scrollY = window.scrollY;

      sections.forEach((section) => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = `#${section.getAttribute("id")}`;

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          setActiveNav(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const section = document.querySelector(href);
    const offset = 80;
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = section.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });

    setActiveNav(href);
  };

  return (
    <nav className="nav" role="navigation" aria-label="Main navigation">
      <div className="nav__menu" role="menubar">
        {[
          { href: "#home", icon: <FaHome />, text: "Home" },
          { href: "#about", icon: <FaUser />, text: "About" },
          { href: "#portfolio", icon: <FaFolderOpen />, text: "Portfolio" },
          { href: "#contact", icon: <FaEnvelopeOpen />, text: "Contact" },
        ].map(({ href, icon, text }) => (
          <a
            key={href}
            href={href}
            className={`nav__link ${activeNav === href ? "active" : ""}`}
            onClick={(e) => scrollToSection(e, href)}
            aria-label={`Navigate to ${text} section`}
            aria-current={activeNav === href ? "page" : undefined}
            role="menuitem"
          >
            <span className="icon__wrapper" aria-hidden="true">{icon}</span>
            <span className="nav__text">{text}</span>
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
