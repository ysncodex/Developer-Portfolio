import "./home.css";
import Profile from "../../assets/home.png";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const home = () => {
  return (
    <section className="home section grid">
      <img src={Profile} alt="" className="home__img" />

      <div className="home__content">
        <div className="home__data">
          <h1 className="home__title">
            <span>Md. Yeasin 🖐️ </span>
            Web Developer
          </h1>

          <p className="home__description">
            {" "}
            As a dedicated web developer, I am highly motivated and meticulous,
            with a strong foundation in HTML, CSS, JavaScript, and modern
            frameworks like React JS. Specializing in the MERN Stack (MongoDB,
            Express.js, React.js, Node.js), I excel in creating responsive,
            user-centric websites and web applications that deliver seamless
            functionality across all devices. My commitment to delivering
            innovative solutions enhances user experience and drives
            organizational growth.
          </p>
          <Link to="/about" className="button">
            More about me{" "}
            <span className="button__icon">
              <FaArrowRight />
            </span>
          </Link>
        </div>
      </div>
      <div className="color__block"></div>
    </section>
  );
};

export default home;
