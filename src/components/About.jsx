import PropTypes from "prop-types";
import github from "../assets/images/profile/github.jpg";
import { useTranslation } from "react-i18next";

function About({ aboutRef }) {
  const { t } = useTranslation();
  return (
    <div ref={aboutRef} className="about bg-light py-5">
      <div className="container">
        <div className="text-center">
          <h4 className="text-uppercase fw-bold text-primary">
            {t("about.title")}
          </h4>
          <hr className="w-25 mx-auto my-3" />
          <h2 className="mb-4">{t("about.sub_title")}</h2>
        </div>
        <div className="about-content d-flex gap-5 align-items-center h-100">
          <img
            src={github}
            alt="Github profile"
            className="about-img img-fluid rounded-circle"
          />
          <p className="lead">{t("about.description")}</p>
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
