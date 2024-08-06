import PropTypes from "prop-types";
import { FaCheck, FaUser, FaUniversity } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { BsFillMortarboardFill } from "react-icons/bs";
import { IoLanguage } from "react-icons/io5";
import "./styles/profile.css";
import { useTranslation } from "react-i18next";
function Profile() {
  const { t } = useTranslation();
  return (
    <div className="profile py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h3 className="text-uppercase fw-bold text-primary">
              {t("profile.title")}
            </h3>
            <p>{t("profile.sub_title")}</p>
            <ul className="list-group list-group-flush">
              <li className="list-group-item mb-3">
                <div className="icon-text">
                  <FaUser size={25} className="icon" />
                  <span className="text">{t("profile.full_name")}</span>
                </div>
                <p className="bold-text">{t("profile.name")}</p>
              </li>
              <li className="list-group-item mb-3">
                <div className="icon-text">
                  <IoLanguage size={25} className="icon" />
                  <span className="text">{t("profile.lang")}</span>
                </div>
                <p className="bold-text">{t("profile.languages")}</p>
              </li>
              <li className="list-group-item mb-3">
                <div className="icon-text">
                  <FaUniversity size={25} className="icon" />
                  <span className="text">{t("profile.univer")}</span>
                </div>
                <p className="bold-text">{t("profile.univer_name")}</p>
              </li>
              <li className="list-group-item mb-3">
                <div className="icon-text">
                  <BsFillMortarboardFill size={25} className="icon" />
                  <span className="text">{t("profile.program")}</span>
                </div>
                <p className="bold-text">{t("profile.program_name")}</p>
              </li>
              <li className="list-group-item mb-3">
                <div className="icon-text">
                  <MdOutlineEmail size={25} className="icon" />
                  <span className="text">{t("profile.email_title")}</span>
                </div>
                <p className="bold-text">{t("profile.email")}</p>
              </li>
            </ul>
          </div>
          <div className="col-md-6">
            <h3 className="text-uppercase fw-bold text-primary">
              {t("skills.title")}
            </h3>
            <p>{t("skills.sub_title")}</p>
            <div className="skill">
              <div className="icon-text">
                <FaCheck className="icon" />
                <span className="text">HTML 5</span>
              </div>
              <div className="progress mb-4">
                <div className="progress-bar" style={{ width: "100%" }}></div>
              </div>
            </div>
            <div className="skill">
              <div className="icon-text">
                <FaCheck className="icon" />
                <span className="text">CSS</span>
              </div>
              <div className="progress mb-4">
                <div className="progress-bar" style={{ width: "100%" }}></div>
              </div>
            </div>
            <div className="skill">
              <div className="icon-text">
                <FaCheck className="icon" />
                <span className="text">JavaScript</span>
              </div>
              <div className="progress mb-4">
                <div className="progress-bar" style={{ width: "100%" }}></div>
              </div>
            </div>
            <div className="skill">
              <div className="icon-text">
                <FaCheck className="icon" />
                <span className="text">PHP</span>
              </div>
              <div className="progress mb-4">
                <div className="progress-bar" style={{ width: "100%" }}></div>
              </div>
            </div>
            <div className="skill">
              <div className="icon-text">
                <FaCheck className="icon" />
                <span className="text">Java</span>
              </div>
              <div className="progress mb-4">
                <div className="progress-bar" style={{ width: "100%" }}></div>
              </div>
            </div>
            <div className="skill">
              <div className="icon-text">
                <FaCheck className="icon" />
                <span className="text">Python</span>
              </div>
              <div className="progress mb-4">
                <div className="progress-bar" style={{ width: "100%" }}></div>
              </div>
            </div>
            <div className="skill">
              <div className="icon-text">
                <FaCheck className="icon" />
                <span className="text">C++</span>
              </div>
              <div className="progress mb-4">
                <div className="progress-bar" style={{ width: "100%" }}></div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5 text-center">
          <div className="col-12">
            <a
              href="mailto:salif.kante.pro@gmail.com"
              className="btn btn-outline-primary btn-lg text-uppercase px-5 mx-3 my-2"
            >
              {t("skills.hire")}
            </a>
            <a
              href="/CV_SalifKante.pdf"
              className="btn btn-primary btn-lg text-uppercase px-5 mx-3 my-2"
              download
            >
              {t("skills.download")}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

Profile.propTypes = {
  aboutRef: PropTypes.shape({
    current: PropTypes.instanceOf(Element),
  }),
};

export default Profile;
