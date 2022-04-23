import React from "react";

function MinHero() {
  return (
    <>
      <section id="minhero">
        <div
          id="heroCarousel"
          data-bs-interval={5000}
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
        >
          <ol className="carousel-indicators" id="hero-carousel-indicators" />
          <div className="carousel-inner" role="listbox">
            {/* Slide 1 */}
            <div
              className="carousel-item active"
              style={{ backgroundImage: "url(/img/slide/slide-2.jpg)" }}
            >
              <div className="carousel-container">
                <div className="container">
                  <h2 className="animate__animated animate__fadeInDown">
                    Diriger des connexions <br />{" "}
                    <span>client transformationnelles</span>
                  </h2>
                  <p className="animate__animated animate__fadeInUp">
                    Votre expérience client est fonction de votre expérience
                    employé. Chez Multi-ci Group®, nous améliorons les deux avec
                    nos premières solutions numériques alimentées par la touche
                    humaine.
                  </p>
                  <a
                    href="#about"
                    className="btn-get-started animate__animated animate__fadeInUp scrollto"
                  >
                    Lire la suite
                  </a>
                </div>
              </div>
            </div>
            {/* Slide 2 */}
            <div
              className="carousel-item"
              style={{ backgroundImage: "url(/img/slide/slide-2.jpg)" }}
            >
              <div className="carousel-container">
                <div className="container">
                  <h2 className="animate__animated animate__fadeInDown">
                    Aider nos partenaires <br /> <span>à montrer la voie</span>
                  </h2>
                  <p className="animate__animated animate__fadeInUp">
                    Nous avons délibérément concentré notre innovation et notre
                    expertise numérique sur les besoins des clients
                    d'aujourd'hui.vous pouvez être à
                    la pointe des principaux moteurs de l'industrie.
                  </p>
                  {/* <a
                    href="#about"
                    className="btn-get-started animate__animated animate__fadeInUp scrollto"
                  >
                    Read More
                  </a> */}
                </div>
              </div>
            </div>
            {/* Slide 3 */}
            <div
              className="carousel-item"
              style={{ backgroundImage: "url(/img/slide/slide-3.jpg)" }}
            >
              <div className="carousel-container">
                <div className="container">
                  <h2 className="animate__animated animate__fadeInDown">
                    Sequi ea ut et est quaerat
                  </h2>
                  <p className="animate__animated animate__fadeInUp">
                    Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea
                    ut et est quaerat sequi nihil ut aliquam. Occaecati alias
                    dolorem mollitia ut. Similique ea voluptatem. Esse
                    doloremque accusamus repellendus deleniti vel. Minus et
                    tempore modi architecto.
                  </p>
                  <a
                    href="#about"
                    className="btn-get-started animate__animated animate__fadeInUp scrollto"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#heroCarousel"
            role="button"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon bi bi-chevron-left"
              aria-hidden="true"
            />
          </a>
          <a
            className="carousel-control-next"
            href="#heroCarousel"
            role="button"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon bi bi-chevron-right"
              aria-hidden="true"
            />
          </a>
        </div>
      </section>
    </>
  );
}

export default MinHero;
