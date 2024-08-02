import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/portofolio.css";
import "react-awesome-lightbox/build/style.css";
import Lightbox from "react-awesome-lightbox";
import { useTranslation } from "react-i18next";
const images = [
  { src: "images/nodejs/salifcom_1.png", title: "Ecommerce Website - 1" },
  { src: "images/nodejs/salifcom_2.png", title: "Ecommerce Website - 2" },
];

const PortfolioNR = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const handleImageClick = (index) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  const { t } = useTranslation();
  return (
    <section className="portfolio py-5 bg-light">
      <div className="container mt-5 mt-md-5 mt-lg-5">
        <div className="text-center mb-5">
          <h4 className="text-uppercase fw-bold text-primary">
            {t("project_node.title")}
          </h4>
          <hr className="w-25 mx-auto my-3" />
          <h2 className="mb-4">Mongo Express React Node - MERN</h2>
          <p className="lead">{t("project_node.name")}</p>
        </div>
        <div className="row">
          {images.map((image, index) => (
            <div className="col-md-6 mb-4" key={index}>
              <div className="project shadow-lg rounded-5">
                <img
                  src={image.src}
                  alt={image.title}
                  className="img-fluid rounded-3"
                  onClick={() => handleImageClick(index)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      {isOpen && (
        <Lightbox
          images={images.map((image) => ({
            url: image.src,
            title: image.title,
          }))}
          onClose={() => setIsOpen(false)}
          startIndex={photoIndex}
        />
      )}
    </section>
  );
};

export default PortfolioNR;
