import PropTypes from "prop-types";
import { FaChevronDown, FaGithub, FaDiscord } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect, useRef } from "react";
import { changeLanguage } from "i18next";
import "bootstrap/dist/css/bootstrap.min.css";
import Typewriter from "typewriter-effect";
import "./styles/header.css";
import { useTranslation } from "react-i18next";

function Header({ scrollToSection, aboutRef }) {
  const { t } = useTranslation();
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowLanguageDropdown(false); // Change this back to false to close the dropdown when clicking outside
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <header className="header vh-100 text-center position-relative">
      <div className="top-right" ref={dropdownRef}>
        <button
          className="btn btn-circle text-white"
          onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
        >
          <FontAwesomeIcon icon={faGlobe} className="fa-2x" />
        </button>
        {showLanguageDropdown && (
          <div className="dropdown-menu show">
            <button
              onClick={() => changeLanguage("en")}
              className="dropdown-item d-flex align-items-center"
            >
              <span className="flag-icon flag-icon-us me-2"></span> English
            </button>
            <button
              onClick={() => changeLanguage("fr")}
              className="dropdown-item d-flex align-items-center"
            >
              <span className="flag-icon flag-icon-fr me-2"></span> Français
            </button>
            <button
              onClick={() => changeLanguage("ru")}
              className="dropdown-item d-flex align-items-center"
            >
              <span className="flag-icon flag-icon-ru me-2"></span> Русский
            </button>
          </div>
        )}
      </div>

      <div className="text-container position-relative d-flex flex-column justify-content-center align-items-center h-100">
        <h5 className="text-primary fs-3 fw-bold text-uppercase">
          {t("header.hello")}
        </h5>
        <h1 id="typingText" className="display-1 fw-bold text-white">
          <Typewriter
            options={{
              strings: [t("header.name")],
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
              <span>{t("header.more_about_me")}</span>
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
