import github from "./assets/images/profile/github.jpg";
import "./App.css";
import { useRef } from "react";
import { FaChevronDown } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import Typewriter from "typewriter-effect";

function App() {
  const about = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <div className="header vh-100 text-center position-relative">
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
          <p className="roles text-white text-uppercase fs-4">
            <span>
              <Typewriter
                options={{
                  strings: ["Full Stack Web Developer | Data Scientist"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </p>

          <button
            onClick={() => scrollToSection(about)}
            href=""
            className="btn btn-outline-light btn-lg mt-3 link"
          >
            <div className="d-flex">
              <div className="me-3">
                <FaChevronDown />
              </div>
              <div className="text-start ">
                <span>More About Me</span>
              </div>
            </div>
          </button>

          <div className="social d-flex gap-3 position-absolute">
            <a
              href="https://github.com/SalifKante?tab=repositories"
              target="_blank"
            >
              <FaGithub className="btn-style" />
            </a>
            <a
              href="https://discord.com/users/695396084280852511"
              target="_blank"
            >
              <FaDiscord className="btn-style" />
            </a>
          </div>
        </div>
      </div>
      {/* About */}
      <div ref={about} className="about bg-light py-5">
        <div className="container">
          <div className="text-center">
            <h4 className="text-uppercase fw-bold text-primary">About Me</h4>
            <hr className="w-25 mx-auto" />
            <h2 className="mb-4">Let me introduce myself.</h2>
          </div>
          <div className="about-content d-flex gap-5 align-items-center h-100">
            <img
              src={github}
              alt=""
              className="about-img img-fluid rounded-circle"
            />
            <p className="lead">
              Originally from Bamako, Mali, I grew up there and currently reside
              in Tomsk, Russia. I pursued my education in Tunisia, where I spent
              five years earning a Master's degree in data science and
              engineering following my undergraduate studies in computer science
              from 2017 to 2022. Over the past seven years, I've honed my coding
              skills, beginning with languages like C and Java before
              transitioning to web and AI technologies such as HTML, CSS,
              JavaScript, PHP, and Python. Throughout my academic journey, I
              completed several professional internships and contributed to
              real-world projects in Tunisia. Additionally, I had the
              opportunity to share my knowledge by teaching coding to students
              at private universities in Mali between 2022 and 2023 before
              relocating to Russia in late 2023 to pursue a Ph.D.
            </p>
          </div>
        </div>
      </div>
      {/* Profile and Skills */}
    </div>
  );
}

export default App;
