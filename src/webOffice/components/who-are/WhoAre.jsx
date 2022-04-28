import React from "react";

function WhoAre() {
  return (
    <>
      <section id="who-are" className="who-are">
        <div className="container-fluid" data-aos="fade-up">
          <div className="row">
            <div className="col-lg-6" data-aos="zoom-in" data-aos-delay={100}>
              <div className="why-us-img">
                <img src="/img/whoare.jpg" alt="" className="img-fluid" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="who-are-content">
                <p>
                  Nous pensons que chacun de nous devrait concentrer toute son
                  énergie pour avoir un impact réel et positif sur la vie des
                  autres, et créer ainsi les conditions d'un succès collectif.
                </p>
                <p>
                  Nous combinons talents, technologies et processus pour offrir
                  un service sur-mesure et des compétences aux normes
                  internationales. En tant qu'acteur global de
                  l'externalisation, nous accompagnons nos clients dans
                  l'externalisation de leurs opérations et les aidons à rester
                  concentrés sur leurs enjeux et cœur de métier.
                </p>
                <div
                  className="features clearfix"
                  data-aos="fade-up"
                  data-aos-delay={100}
                >
                  <i
                    className="fa-brands fa-playstation"
                    style={{ color: "#f058dc" }}
                  ></i>

                  <h4>NOS VALEURS</h4>
                  <p>
                    Ce qui nous rend uniques, ce qui nous unit, ce sont les
                    valeurs auxquelles nous croyons. Ces principes fondateurs
                    sur lesquels nous basons nos décisions, nos actions, nos
                    comportements.
                  </p>
                </div>
                <div
                  className="features clearfix"
                  data-aos="fade-up"
                  data-aos-delay={200}
                >
                  <i
                    className="fa-solid fa-universal-access"
                    style={{ color: "#ffb774" }}
                  ></i>
                  <h4>EQUIPE DE DIRECTION</h4>
                  <p>
                    Les performances de notre Groupe reposent sur une
                    organisation managériale adaptée à notre déploiement à
                    l'international et à la diversité de nos équipes.
                  </p>
                </div>
                <div
                  className="features clearfix"
                  data-aos="fade-up"
                  data-aos-delay={300}
                >
                  <i
                    className="fa-solid fa-group-arrows-rotate"
                    style={{ color: "#589af1" }}
                  ></i>
                  <h4>NOS ENGAGEMENTS</h4>
                  <p>
                    Notre quête permanente de l’excellence s’assortit d’un
                    devoir de responsabilité sociale, sociétale et
                    environnementale. Chaque jour, plus de 35 000 collaborateurs
                    prennent à bras le corps les engagements du groupe qui
                    s’articulent autour de cinq grands piliers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default WhoAre;
