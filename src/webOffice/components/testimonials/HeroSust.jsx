import React from "react";

function HeroSust() {
  return (
    <>
      <section
        id="heroSust"
        className="d-flex justify-cntent-center align-items-center"
        style={{ backgroundImage: "url(/img/cs-2-main.jpg)"}}
      >
        <div
          id="heroCarousel"
          className="container carousel carousel-fade"
          data-bs-ride="carousel"
          data-bs-interval={5000}
        >
          {/* Slide 1 */}
          <div className="carousel-item active">
            <div className="carousel-container">
              <h2 className="animate__animated animate__fadeInDown">
                SOUTENIR UN IMPACT DURABLE,
                <span>UNE INTERACTION BIENVEILLANTE À LA FOIS</span>
              </h2>
              <p className="animate__animated animate__fadeInUp">
                Les valeurs et les initiatives qui ont amené MULTI-CI au premier
                plan du service à la clientèle façonnent notre parcours pour
                créer et soutenir un avenir équitable et durable pour notre
                environnement, notre société, nos communautés et nos parties
                prenantes.
              </p>
              <a
                href
                className="btn-get-started animate__animated animate__fadeInUp"
              >
                Read More
              </a>
            </div>
          </div>
          {/* Slide 2 */}
          <div className="carousel-item">
            <div className="carousel-container">
              <h2 className="animate__animated animate__fadeInDown">
              Communications
              </h2>
              <p className="animate__animated animate__fadeInUp">
                Nous aidons à soutenir vos clients quand, où et comment ils en
                ont besoin en fournissant des solutions d'engagement client qui
                produisent des résultats significatifs
              </p>
              <a
                href
                className="btn-get-started animate__animated animate__fadeInUp"
              >
                Read More
              </a>
            </div>
          </div>
          {/* Slide 3 */}
          {/* <div className="carousel-item">
            <div className="carousel-container">
              <h2 className="animate__animated animate__fadeInDown">
                Sequi ea ut et est quaerat
              </h2>
              <p className="animate__animated animate__fadeInUp">
                Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et
                est quaerat sequi nihil ut aliquam. Occaecati alias dolorem
                mollitia ut. Similique ea voluptatem. Esse doloremque accusamus
                repellendus deleniti vel. Minus et tempore modi architecto.
              </p>
              <a
                href
                className="btn-get-started animate__animated animate__fadeInUp"
              >
                Read More
              </a>
            </div>
          </div> */}
          <a
            className="carousel-control-prev"
            href="#heroCarousel"
            role="button"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon bx bx-chevron-left"
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
              className="carousel-control-next-icon bx bx-chevron-right"
              aria-hidden="true"
            />
          </a>
        </div>
      </section>

    </>
  );
}

export default HeroSust;
