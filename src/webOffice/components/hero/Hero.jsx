import React from "react";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
function Hero() {
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <FaArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <FaArrowLeft />
      </div>
    );
  };
  const settings = {
    infinite: true,
    lazyLoad: true,
    dots: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    centerPadding: 0,
    autoplay: true,
    autoplatSpeed: 1600,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <>
      <Slider {...settings}>
        <div className="slide activeSlide swiper-slide">
          <section id="hero">
            <div
              id="heroCarousel"
              data-bs-interval={5000}
              className="carousel slide carousel-fade"
              data-bs-ride="carousel"
            >
              <ol
                className="carousel-indicators"
                id="hero-carousel-indicators"
              />
              <div className="carousel-inner" role="listbox">
                <div
                  className="carousel-item active"
                  style={{ backgroundImage: "url(/img/slide/slide-1.jpg)" }}
                >
                  <div className="carousel-container">
                    <div className="container">
                      <h2 className="animate__animated animate__fadeInDown">
                        Bienvenue sur <span>Multici</span>
                      </h2>
                      <p className="animate__animated animate__fadeInUp">
                        Transformez votre expérience client à chaque
                        conversation
                      </p>
                      <a
                        href="#about"
                        className="btn-get-started animate__animated animate__fadeInUp scrollto"
                      >
                        Lire La Suite
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Slider>
    </>
  );
}

export default Hero;
