import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import "./styles/SocialIcons.css";

const SocialIcons = () => {
  return (
    <div className="social-icons">
      <a
        href="https://github.com/Balishtha1"
        target="_blank"
        rel="noreferrer"
        aria-label="GitHub"
        data-cursor="disable"
      >
        <FaGithub />
      </a>

      <a
        href="https://www.linkedin.com/in/manas-soni-376817319/"
        target="_blank"
        rel="noreferrer"
        aria-label="LinkedIn"
        data-cursor="disable"
      >
        <FaLinkedinIn />
      </a>
    </div>
  );
};

export default SocialIcons;