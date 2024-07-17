import PropTypes from "prop-types";
import github from "../assets/images/profile/github.jpg";

function About({ aboutRef }) {
  return (
    <div ref={aboutRef} className="about bg-light py-5">
      <div className="container">
        <div className="text-center">
          <h4 className="text-uppercase fw-bold text-primary">About Me</h4>
          <hr className="w-25 mx-auto my-3" />
          <h2 className="mb-4">Let me introduce myself.</h2>
        </div>
        <div className="about-content d-flex gap-5 align-items-center h-100">
          <img
            src={github}
            alt="Github profile"
            className="about-img img-fluid rounded-circle"
          />
          <p className="lead">
            Originally from Bamako, Mali, I grew up there and currently reside
            in Tomsk, Russia. I pursued my education in Tunisia, where I spent
            five years earning a Master's degree in data science and engineering
            following my undergraduate studies in computer science from 2017 to
            2022. Over the past seven years, I've honed my coding skills,
            beginning with languages like C and Java before transitioning to web
            and AI technologies such as HTML, CSS, JavaScript, PHP, and Python.
            Throughout my academic journey, I completed several professional
            internships and contributed to real-world projects in Tunisia.
            Additionally, I had the opportunity to share my knowledge by
            teaching coding to students at private universities in Mali between
            2022 and 2023 before relocating to Russia in late 2023 to pursue a
            Ph.D.
          </p>
        </div>
      </div>
    </div>
  );
}

About.propTypes = {
  aboutRef: PropTypes.shape({
    current: PropTypes.instanceOf(Element),
  }).isRequired,
};

export default About;
