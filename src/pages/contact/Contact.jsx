import {
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";
import { FiSend } from "react-icons/fi";

import "./contact.css";

const contact = () => {
  return (
    <section className="contact section">
      <h2 className="section__title">
        Get In <span>Touch</span>
      </h2>

      <div className="contact__container container grid">
        <div className="contact__data">
          <h3 className="contact__title">Don&apos;t be Shy !</h3>

          <p className="contact__description">
            Feel free to get in touch with me. I am always open to discussing
            new projects, creative ideas, or opportunities to be part of your
            visions.
          </p>

          <div className="contact__info">
            <div className="info__item">
              <FaEnvelopeOpen className="info__icon" />
              <div>
                <span className="info__title">Mail me</span>
                <h4 className="info__desc">yeasin7y@gmail.com</h4>
              </div>
            </div>

            <div className="info__item">
              <FaPhoneSquareAlt className="info__icon" />
              <div>
                <span className="info__title">Contact me</span>
                <h4 className="info__desc">+8801624269321</h4>
              </div>
            </div>
          </div>
          <div className="contact__socials">
            <a
              href="https://www.facebook.com/profile.php?id=100010641914202"
              className="contact__social-link"
            >
              <FaFacebookF />
            </a>

            {/* <a href="https://twitter.com" className="contact__social-link">
              <FaTwitter />
            </a> */}

            <a
              href="https://github.com/mdyeasin07?tab=repositories"
              className="contact__social-link"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/md-yeasin-5494a9231/"
              className="contact__social-link"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        <form className="contact__form">
          <div className="form__input-group">
            <div className="form__input-div">
              <input
                type="text"
                placeholder="Your Name"
                className="form__control"
              />
            </div>

            <div className="form__input-div">
              <input
                type="email"
                placeholder="Your Email"
                className="form__control"
              />
            </div>

            <div className="form__input-div">
              <input
                type="text"
                placeholder="Your Subject"
                className="form__control"
              />
            </div>
          </div>

          <div className="form__input-div">
            <textarea
              placeholder="Your Message"
              className="form__control textarea"
            ></textarea>
          </div>

          <button className="button">
            Send Message
            <span className="button__icon contact__buttopn-icon">
              <FiSend />
            </span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default contact;
