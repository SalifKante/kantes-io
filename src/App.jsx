//import github from "./assets/images/profile/github.jpg";
import "./App.css";
import { FaChevronDown } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import Typewriter from "typewriter-effect";

function App() {
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

        <a href="" className="btn btn-outline-light btn-lg mt-3">
          <div className="d-flex">
            <div className="me-3">
              <FaChevronDown />
            </div>
            <div className="text-start">
              <span>More About Me</span>
            </div>
          </div>
        </a>

        <div className="social d-flex gap-3 position-absolute">
          <a
            href="https://github.com/SalifKante?tab=repositories"
            target="_blank"
          >
            <FaGithub className="btn-style" />
          </a>
          <a href="">
            <CiInstagram className="btn-style" />
          </a>
        </div>
      </div>
    </header>
  );
}

export default App;
