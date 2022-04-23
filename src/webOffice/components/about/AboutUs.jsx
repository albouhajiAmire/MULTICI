import React from "react";

function AboutUs() {
  return (
    <>
      <section id="aboutus" className="aboutus">
        <div className="container" data-aos="fade-up">
          <div className="row content">
            <div className="col-lg-6">
              <p>
                  <img src="/img/map-monde.png" alt="" srcSet=""/>
              </p>
            </div>
            <div className="col-lg-6 pt-4 pt-lg-0">
              <h1>Qu'est-ce que Multici ?</h1>
              <p>
                Le modèle flexible virtuel est une main-d'œuvre distribuée
                d'agents indépendants hautement motivés qui sont déterminés à
                fournir le meilleur niveau de service possible à chaque appel.
                Notre main-d'œuvre est plus expérimentée et plus évolutive que
                les centres de contact traditionnels, transcendant les limites
                géographiques et les heures de travail typiques. Nous n'avons
                pas seulement fait évoluer le modèle de centre de contact à
                distance, nous l'avons révolutionné.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutUs;
