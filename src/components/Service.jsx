import { FaGlobe, FaCode, FaChartBar } from "react-icons/fa";
import "./styles/service.css";

const Service = () => {
  return (
    <section className="services py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h4 className="text-uppercase fw-bold text-primary">Services</h4>
          <hr className="w-25 mx-auto my-3" />
          <h2 className="mb-4">What Can I Do For You?</h2>
          <p className="lead">
            Here are some of the services that I offer when it comes to web
            development and business.
          </p>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="service-item text-center">
              <FaGlobe className="service-icon text-primary mb-3" size={48} />
              <h3 className="service-title">Web Design</h3>
              <p className="service-description">
                Transforming ideas into visually appealing and user-friendly
                digital experiences. I craft interfaces that blend creativity
                with usability, ensuring your brand shines online.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="service-item text-center">
              <FaCode className="service-icon text-primary mb-3" size={48} />
              <h3 className="service-title">Web Development</h3>
              <p className="service-description">
                Bringing concepts to life through robust and scalable web
                solutions. From front-end interactions to back-end
                functionalities, I build websites that are secure, efficient,
                and tailored to your needs.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="service-item text-center">
              <FaChartBar
                className="service-icon text-primary mb-3"
                size={48}
              />
              <h3 className="service-title">Data Analysis</h3>
              <p className="service-description">
                Leveraging data to uncover insights and drive informed
                decision-making. We analyze complex datasets, extract meaningful
                patterns, and present actionable recommendations to optimize
                performance and strategy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
