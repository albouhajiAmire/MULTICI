import React from "react";

function WhatService() {
  return (
    <>
      <section id="countsus" className="countsus">
        <div className="container" data-aos="fade-up">
          <div className="row no-gutters">
            <div className="col-lg-4 col-md-6 d-md-flex align-items-md-stretch  mt-2 mb-3">
              <div className="count-box">
              <i className="fa-brands fa-cloudscale"></i>
                <span className="purecounter">
                  FLEXIBILITÉ À GRANDE ÉCHELLE
                </span>
                <p>
                  <strong>
                    Notre réseau s'adapte de manière transparente à la demande,
                    des différents horaires de travail aux pics saisonniers
                  </strong>
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 d-md-flex align-items-md-stretch mt-2 mb-3">
              <div className="count-box">
              <i className="fa-solid fa-briefcase"></i>
                <span className="purecounter">QUALITÉ ÉPROUVÉE</span>
                <p>
                  <strong>
                    les antécédents des agents dans le secteur et leurs
                    compétences plus approfondies offrent de meilleures
                    expériences client.
                  </strong>
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 d-md-flex align-items-md-stretch mt-2 mb-3">
              <div className="count-box">
              <i className="fa-brands fa-expeditedssl"></i>
                <span className="purecounter">SÉCURISÉ et PROTÉGÉ </span>
                <p>
                  <strong>
                    Protégez les informations des clients et de l'entreprise
                    avec une sécurité et un cryptage de session de premier
                    ordre.
                  </strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default WhatService;
