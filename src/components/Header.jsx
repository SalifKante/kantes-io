import PropTypes from "prop-types";
import { FaChevronDown, FaGithub, FaDiscord } from "react-icons/fa";
import Typewriter from "typewriter-effect";

function Header({ scrollToSection, aboutRef }) {
  return (
    <header className="header vh-100 text-center position-relative">
      <div className="text-container position-relative d-flex flex-column justify-content-center align-items-center h-100">
        <h5 className="text-primary fs-3 fw-bold text-uppercase">
          Hello, World
        </h5>
        <h1 id="typingText" className="display-1 fw-bold text-white">
          <Typewriter
            options={{
              strings: ["I am Salif Kante."],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>
        <div className="roles text-white text-uppercase fs-4">
          <span>
            <Typewriter
              options={{
                strings: ["Full Stack Web Developer | Data Scientist"],
                autoStart: true,
                loop: true,
              }}
            />
          </span>
        </div>

        <button
          onClick={() => scrollToSection(aboutRef)}
          className="btn btn-outline-light btn-lg mt-3 link"
        >
          <div className="d-flex align-items-center">
            <div className="me-3">
              <FaChevronDown />
            </div>
            <div className="text-start">
              <span>More About Me</span>
            </div>
          </div>
        </button>

        <div className="social d-flex gap-3 position-absolute">
          <a
            href="https://github.com/SalifKante?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#0366d6" }} // Set GitHub icon color to blue
          >
            <FaGithub className="btn-style" />
          </a>
          <a
            href="https://discord.com/users/695396084280852511"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#7289da" }} // Set Discord icon color to blue
          >
            <FaDiscord className="btn-style" />
          </a>
        </div>
      </div>
    </header>
  );
}

Header.propTypes = {
  scrollToSection: PropTypes.func.isRequired,
  aboutRef: PropTypes.shape({
    current: PropTypes.instanceOf(Element),
  }).isRequired,
};

export default Header;
