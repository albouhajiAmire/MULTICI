import React from "react";

function Hero() {

  return (
    <>
       
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
    
    </>
  );
}

export default Hero;
