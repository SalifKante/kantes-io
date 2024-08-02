import { FaGlobe, FaCode, FaChartBar } from "react-icons/fa";
import "./styles/service.css";
import { useTranslation } from "react-i18next";

const Service = () => {
  const { t } = useTranslation();
  return (
    <section className="services py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h4 className="text-uppercase fw-bold text-primary">
            {t("services.title")}
          </h4>
          <hr className="w-25 mx-auto my-3" />
          <h2 className="mb-4">{t("services.question")}</h2>
          <p className="lead">{t("services.description")}</p>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="service-item text-center">
              <FaGlobe className="service-icon text-primary mb-3" size={48} />
              <h3 className="service-title">
                {t("services.web_design_title")}
              </h3>
              <p className="service-description">
                {t("services.web_design_des")}
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="service-item text-center">
              <FaCode className="service-icon text-primary mb-3" size={48} />
              <h3 className="service-title">
                {t("services.web_development_title")}
              </h3>
              <p className="service-description">
                {t("services.web_development_des")}
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="service-item text-center">
              <FaChartBar
                className="service-icon text-primary mb-3"
                size={48}
              />
              <h3 className="service-title">
                {t("services.data_analysis_title")}
              </h3>
              <p className="service-description">
                {t("services.data_analysis_des")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
