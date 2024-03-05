import github from "./assets/images/profile/github.jpg";
import countdown from "./assets/images/projects/js/countdown-timer.png";
import projet4 from "./assets/images/projects/js/project4.jpg";
import project5 from "./assets/images/projects/js/project5.jpg";
import project6 from "./assets/images/projects/js/project6.jpg";

import "./App.css";
import { useRef, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaUniversity } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { BsFillMortarboardFill } from "react-icons/bs";
import { IoLanguage } from "react-icons/io5";
import { FaCheck } from "react-icons/fa";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

import Typewriter from "typewriter-effect";

function App() {
  const images = [
    { project: countdown },
    { project: projet4 },
    { project: project5 },
    { project: project6 },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  const about = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <>
      <header className="header vh-100 text-center position-relative">
        <div className="text-container position-relative d-flex flex-column justify-content-center align-items-center h-100">
          <h5 className="text-primary fs-3 fw-bold text-uppercase">
            Hello, World
          </h5>
          <h1 id="typingText" className="display-1 fw-bold text-white">
            <div></div>
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
      </header>
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
      <div className="profile py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h3 className="text-uppercase fw-bold">Profile</h3>
              <p>
                Here is some more information about myself to help you get to
                know me better
              </p>
              <ul className="list-group list-group-flush">
                <li className="list-group-item mb-3">
                  <h5
                    style={{
                      display: "flex",
                      textAlign: "center",
                      textWrap: "wrap",
                    }}
                    className="text-transform text-primary"
                  >
                    <FaUser size={25} /> &nbsp; Full Name:
                  </h5>
                  <p>Salif Kante</p>
                </li>
                <li className="list-group-item mb-3">
                  <h5
                    style={{
                      display: "flex",
                      textAlign: "center",
                      textWrap: "wrap",
                    }}
                    className="text-transform text-primary"
                  >
                    <IoLanguage size={25} /> &nbsp; Languages:
                  </h5>
                  <p>English &nbsp; French &nbsp; Russian</p>
                </li>
                <li className="list-group-item mb-3">
                  <h5
                    style={{
                      display: "flex",
                      textAlign: "center",
                      textWrap: "wrap",
                    }}
                    className="text-transform text-primary"
                  >
                    <FaUniversity size={25} /> &nbsp; University
                  </h5>
                  <p>TUSUR</p>
                </li>
                <li className="list-group-item mb-3">
                  <h5
                    style={{
                      display: "flex",
                      textAlign: "center",
                      textWrap: "wrap",
                    }}
                    className="text-transform text-primary"
                  >
                    <BsFillMortarboardFill size={25} /> &nbsp; Studying Program:
                  </h5>
                  <p>Ph.D</p>
                </li>
                <li className="list-group-item mb-3">
                  <h5
                    style={{
                      display: "flex",
                      textAlign: "center",
                      textWrap: "wrap",
                    }}
                    className="text-transform text-primary"
                  >
                    <MdOutlineEmail size={25} /> &nbsp; Email:
                  </h5>
                  <p>salif.kante.pro@gmail.com</p>
                </li>
              </ul>
            </div>
            <div className="col-md-6">
              <h3 className="text-uppercase fw-bold">Skills</h3>
              <p>
                Here are some programming skills listed, excluding any mention
                of libraries and frameworks.
              </p>
              <h5 className="">
                <FaCheck /> HTML 5
              </h5>
              <div
                className="progress mb-4"
                role="progressbar"
                aria-valuenow={100}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                <div className="progress-bar" style={{ width: "100%" }}></div>
              </div>
              <h5 className="">
                <FaCheck /> CSS
              </h5>
              <div
                className="progress mb-4"
                role="progressbar"
                aria-valuenow={100}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                <div className="progress-bar" style={{ width: "100%" }}></div>
              </div>
              <h5 className="">
                <FaCheck /> JavaScript
              </h5>
              <div
                className="progress mb-4"
                role="progressbar"
                aria-valuenow={100}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                <div className="progress-bar" style={{ width: "100%" }}></div>
              </div>
              <h5 className="">
                <FaCheck /> PHP
              </h5>
              <div
                className="progress mb-4"
                role="progressbar"
                aria-valuenow={100}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                <div className="progress-bar" style={{ width: "100%" }}></div>
              </div>
              <h5 className="">
                <FaCheck /> Java
              </h5>
              <div
                className="progress mb-4"
                role="progressbar"
                aria-valuenow={100}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                <div className="progress-bar" style={{ width: "100%" }}></div>
              </div>
              <h5 className="">
                <FaCheck /> Python
              </h5>
              <div
                className="progress mb-4"
                role="progressbar"
                aria-valuenow={100}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                <div className="progress-bar" style={{ width: "100%" }}></div>
              </div>

              {/* <h5 className="">
                <FaCheck /> Solidity
              </h5>
              <div
                className="progress mb-4"
                role="progressbar"
                aria-valuenow={100}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                <div className="progress-bar" style={{ width: "100%" }}></div>
              </div>
            </div> */}
            </div>
          </div>
          <div className="row mt-5 text-center">
            <div className="col-12">
              <a
                href="mailto: salif.kante.pro@gmail.com"
                className="btn btn-outline-primary btn-lg text-uppercase px-5 mx-3 my-2"
              >
                Hire Me Now
              </a>
              <button className="btn btn-primary btn-lg text-uppercase px-5 mx-3 my-2">
                Download CV
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Portfolio */}
      <div className="portfolio py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h4 className="text-uppercase fw-bold text-primary">Portfolio</h4>
            <hr className="mx-auto w-25" />
            <h2 className="mb-4">
              Here's a brief excerpt of the projects I've worked on.
            </h2>
            <p className="lead">HTML-CSS-BOOTSTRAP-JS</p>

            <div className="max-w-[1400px] h-[780px] w-full m-auto py-16 px-14 relative group">
              <div
                style={{
                  backgroundImage: `url(${images[currentIndex].project})`,
                }}
                className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
              ></div>
              {/* Left Arrow */}
              <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 left-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                <BsChevronCompactLeft onClick={prevSlide} size={30} />
              </div>
              {/* Right Arrow */}
              <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 left-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                <BsChevronCompactRight onClick={nextSlide} size={30} />
              </div>
              <div className="flex top-4 justify-center py-2">
                {images.map((slide, slideIndex) => (
                  <div
                    key={slideIndex}
                    onClick={() => goToSlide(slideIndex)}
                    className="text-2xl cursor-pointer"
                  >
                    <RxDotFilled />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
