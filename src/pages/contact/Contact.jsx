import {
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaMapMarkerAlt
} from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { useRef, useState, useEffect } from "react";
import emailjs from '@emailjs/browser';
import "./contact.css";

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ message: '', isError: false });
  const [emailConfigured, setEmailConfigured] = useState(true);

  useEffect(() => {
    const envVars = {
      publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
      templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    };

    const missingVars = Object.entries(envVars).filter(([_, value]) => !value);
    
    if (missingVars.length > 0) {
      // Missing environment variables detected
      setEmailConfigured(false);
    } else {
      emailjs.init(envVars.publicKey);
    }
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    if (!emailConfigured) {
      setSubmitStatus({
        message: 'Email service is not properly configured. Please check environment variables.',
        isError: true
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ message: '', isError: false });

    const userName = form.current.user_name.value;
    const userEmail = form.current.user_email.value;
    const userMessage = form.current.message.value;

    const fullMessage = `
    ${userMessage}

    ---
    Best regards,
    ${userName}
    ${userEmail}
      `;

    const templateParams = {
      from_name: userName,
      to_name: "Yeasin",
      from_email: userEmail,
      message: fullMessage,
      reply_to: userEmail
    };

    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      templateParams
    )
      .then((result) => {
        // Email sent successfully
        setSubmitStatus({ message: 'Message sent successfully!', isError: false });
        form.current.reset();
      })
      .catch((error) => {
        // Email send failed
        setSubmitStatus({
          message: `Failed to send message: ${error.message}. Please try again.`,
          isError: true
        });
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section className="contact section" id="contact">
      <div className="section__header">
        <h2 className="section__title">Get In Touch</h2>
        <p className="section__subtitle">Available for frontend development opportunities and collaborations</p>
      </div>

      <div className="contact__container container">
        <div className="contact__content">
          <div className="contact__info">
            <div className="info__item">
              <div className="info__icon-wrapper">
                <FaEnvelopeOpen className="info__icon" />
              </div>
              <div className="info__content">
                <span className="info__title">Email</span>
                <a href="mailto:yeasin7y@gmail.com" className="info__desc">yeasin7y@gmail.com</a>
              </div>
            </div>

            <div className="info__item">
              <div className="info__icon-wrapper">
                <FaPhoneSquareAlt className="info__icon" />
              </div>
              <div className="info__content">
                <span className="info__title">Phone</span>
                <a href="tel:+8801624269321" className="info__desc">+880 162 426 9321 | +880 177 818 5137</a>
              </div>
            </div>

            <div className="info__item">
              <div className="info__icon-wrapper">
                <FaMapMarkerAlt className="info__icon" />
              </div>
              <div className="info__content">
                <span className="info__title">Location</span>
                <p className="info__desc">Rampura, Dhaka – 1217, Bangladesh</p>
              </div>
            </div>
          </div>

          <div className="contact__social-section">
            <h4 className="social__title">Connect With Me</h4>
            <div className="contact__socials">
              <a
                href="https://www.facebook.com/profile.php?id=100010641914202"
                className="contact__social-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://github.com/ysncodex"
                className="contact__social-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/yeasin7/"
                className="contact__social-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>

        <div className="contact__form-wrapper">
          <div className="form__card">
            <div className="form__header">
              <h3 className="form__title">Send a Message</h3>
              <p className="form__subtitle">I typically respond within 24 hours</p>
            </div>

            <form ref={form} onSubmit={sendEmail} className="contact__form" aria-label="Contact form">
              <div className="form__group">
                <div className="form__input-div">
                  <label htmlFor="user_name" className="visually-hidden">Your name</label>
                  <input
                    id="user_name"
                    name="user_name"
                    type="text"
                    className="form__control"
                    placeholder="Your name"
                    required
                    aria-required="true"
                  />
                </div>

                <div className="form__input-div">
                  <label htmlFor="user_email" className="visually-hidden">Your email</label>
                  <input
                    id="user_email"
                    name="user_email"
                    type="email"
                    className="form__control"
                    placeholder="Your email"
                    required
                    aria-required="true"
                  />
                </div>
              </div>

              <div className="form__input-div">
                <label htmlFor="message" className="visually-hidden">Your message</label>
                <textarea
                  id="message"
                  name="message"
                  className="form__control textarea"
                  placeholder="How can I help you?"
                  required
                  aria-required="true"
                ></textarea>
              </div>

              {submitStatus.message && (
                <div 
                  className={`submit-status ${submitStatus.isError ? 'error' : 'success'}`}
                  role="alert"
                  aria-live="polite"
                >
                  {submitStatus.message}
                </div>
              )}

              {!emailConfigured && (
                <div className="submit-status error" role="alert" aria-live="assertive">
                  Email service is not configured. Please check environment variables.
                </div>
              )}

              <button type="submit" className="button form__button" disabled={isSubmitting || !emailConfigured}>
                {isSubmitting ? 'Sending...' : 'Send message'}
                <span className="button__icon">
                  <FiSend />
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;