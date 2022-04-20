import React from "react";

function Service() {
  return (
    <>
      <section id="services" className="services">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>service</h2>
            <p>service nous</p>
          </div>
          <div className="row gy-5">
            <div
              className="col-xl-4 col-md-6"
              data-aos="zoom-in"
              data-aos-delay={200}
            >
              <div className="service-item">
                <div className="img">
                  <img src="/img/services-1.jpg" className="img-fluid" alt="" />
                </div>
                <div className="details position-relative">
                  <div className="icon">
                    <i className="bi bi-activity" />
                  </div>
                  <a href="#" className="stretched-link">
                    <h3>Faire de chaque interaction plus rapide |</h3>
                  </a>
                  <p>
                    Combinez les technologies numériques avancées avec les
                    meilleures personnes pour offrir une compréhension et une
                    empathie humaines au moment le plus important.
                  </p>
                </div>
              </div>
            </div>
            {/* End Service Item */}
            <div
              className="col-xl-4 col-md-6"
              data-aos="zoom-in"
              data-aos-delay={300}
            >
              <div className="service-item">
                <div className="img">
                  <img src="/img/services-2.jpg" className="img-fluid" alt="" />
                </div>
                <div className="details position-relative">
                  <div className="icon">
                    <i className="bi bi-broadcast" />
                  </div>
                  <a href="#" className="stretched-link">
                    <h3>Ambassadeurs de la marque ou détracteurs ?</h3>
                  </a>
                  <p>
                    Chaque jour, des milliers de personnes à travers le monde
                    interagissent avec votre marque, invoquant des expériences,
                    des émotions et des perceptions réelles. Qu'ils soient bons
                    ou mauvais, ils associent ces souvenirs à votre marque,
                    influençant les futures décisions d'achat.
                  </p>
                </div>
              </div>
            </div>
            {/* End Service Item */}
            <div
              className="col-xl-4 col-md-6"
              data-aos="zoom-in"
              data-aos-delay={400}
            >
              <div className="service-item">
                <div className="img">
                  <img src="/img/services-3.jpg" className="img-fluid" alt="" />
                </div>
                <div className="details position-relative">
                  <div className="icon">
                    <i className="bi bi-easel" />
                  </div>
                  <a href="#" className="stretched-link">
                    <h3>Gérez de vraies affaires impacter</h3>
                  </a>
                  <p>
                    Lorsque vos connexions clients sont alimentées par des
                    services robustes et intégrés numériquement, vous obtenez un
                    avantage concurrentiel qui produit de vrais résultats. Mais
                    ne nous croyez pas sur parole.
                  </p>
                </div>
              </div>
            </div>
            {/* End Service Item */}
            <div
              className="col-xl-4 col-md-6"
            >
              <div className="service-item">
                <div className="img">
                  <img src="/img/services-4.jpg" className="img-fluid" alt="" />
                </div>
                <div className="details position-relative">
                  <div className="icon">
                    <i className="bi bi-bounding-box-circles" />
                  </div>
                  <a href="#" className="stretched-link">
                    <h3>Protégez votre marque et votre les clients</h3>
                  </a>
                  <p>
                    Un tweet négatif généré par l'utilisateur ou un commentaire
                    public abusif peut changer la façon dont les clients
                    perçoivent votre marque. Préservez la réputation de
                    l'entreprise et protégez les utilisateurs grâce à une
                    approche high-tech et tactile complète de la confiance et de
                    la sécurité en ligne.
                  </p>
                  <a href="#" className="stretched-link" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Service;
