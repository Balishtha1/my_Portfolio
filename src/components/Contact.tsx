import { MdArrowOutward, MdCopyright, MdEmail, MdPhone } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>

        <div className="contact-flex">
          {/* Contact Information */}
          <div className="contact-box">
            <h4>Get in touch</h4>

            <a
              href="mailto:manassoni014@gmail.com"
              data-cursor="disable"
              className="contact-social"
            >
              <MdEmail />
              manassoni014@gmail.com
            </a>

            <a
              href="tel:+919098847273"
              data-cursor="disable"
              className="contact-social"
            >
              <MdPhone />
              +91 9098847273
            </a>

            <h4>Education</h4>

            <p>
              MCA, National Institute of Technology Raipur
            </p>

            <p>
              Software Engineering · AI/ML · Full-Stack Development
            </p>
          </div>

          {/* Social Links */}
          <div className="contact-box">
            <h4>Social</h4>

            <a
              href="https://github.com/Balishtha1"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a>

            <a
              href="https://www.linkedin.com/in/manas-soni-376817319/"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
          </div>

          {/* Footer */}
          <div className="contact-box">
            <h2>
              Let's build something <br />
              <span>meaningful.</span>
            </h2>

            <h5>
              <MdCopyright /> 2026 Manas Soni
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;