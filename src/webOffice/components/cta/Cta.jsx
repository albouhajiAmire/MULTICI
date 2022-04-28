import React from "react";

function Cta() {
  return (
    <>
      <section id="cta" className="cta">
        <div className="container" data-aos="zoom-out">
          <div className="row g-5">
            <div className="col-lg-8 col-md-6 content d-flex flex-column justify-content-center order-last order-md-first">
              <h3>
                <em>Êtes-vous intéressé,</em> n'hésitez pas à nous contacter
              </h3>
              <p>
                Les médias souhaitant s'engager avec MULTI-C sont encouragés à
                contacter :
              </p>
              <a
                className="cta-btn align-self-start"
                href="tel:+212 688727657"
                target="_blank"
              >
                Appel à l'action
              </a>
            </div>
            <div className="col-lg-4 col-md-6 order-first order-md-last d-flex align-items-center">
              <div className="img">
                <img src="/img/cta.jpg" alt="" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Cta;
