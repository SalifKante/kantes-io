import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/portofolio.css";
import "react-awesome-lightbox/build/style.css";
import Lightbox from "react-awesome-lightbox";
import { useTranslation } from "react-i18next";

const images = [
  { src: "images/js/calculator.png", title: "Mini calculator" },
  { src: "images/js/color_flipper.png", title: "Color Flipper" },
  { src: "images/js/countdown.png", title: "Count Down Timer" },
  { src: "images/js/counter.png", title: "Counter" },
  { src: "images/js/guess_number.png", title: "Guess My Number" },
  { src: "images/js/modal_1.png", title: "Modal Part 1" },
  { src: "images/js/modal_2.png", title: "Modal Part 2" },
  { src: "images/js/piggame.png", title: "Pig Game" },
  { src: "images/js/quizapp_1.png", title: "Quiz App" },
  { src: "images/js/quizapp_2.png", title: "Quiz App With Background Change" },
  {
    src: "images/js/corso_wesite.png",
    title: "Corso Web Site",
  },
  {
    src: "images/js/ebook_website.png",
    title: "EBook Web Site",
  },
  {
    src: "images/js/vera_website.png",
    title: "Vera Web Site",
  },
  {
    src: "images/js/yavin_website.png",
    title: "Yavin Web Site",
  },
];

const PortfolioJS = () => {
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
            {t("project_js.title")}
          </h4>
          <hr className="w-25 mx-auto my-3" />
          <h2 className="mb-4">
            HTML - CSS - Bootstrap - JS(Vanilla) - JQuery - React
          </h2>
          <p className="lead">{t("project_js.name")}</p>
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

export default PortfolioJS;
