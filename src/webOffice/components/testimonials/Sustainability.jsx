import React from "react";

function Sustainability() {
  return (
    <>
      <section
        id="testimonialsSustainability"
        className="testimonialsSustainability section-bg"
      >
        <div className="container">
          <div className="section-title">
            <h2>Durabilité</h2>
            <p className="paragraph-sustain">
              Lorsque nous organisons des programmes selon nos piliers
              environnementaux, sociaux et de gouvernance - impact, soin et
              prospérité - nous reconnaissons plus de 40 initiatives qui aident
              les employés et les communautés de SYKES à travers le monde.
              Chaque région MULTI-CI a mis en œuvre des programmes qui
              soutiennent activement les objectifs de développement durable.
              MULTI-CI redonne :
            </p>
          </div>
        </div>
      </section>
      <section className="servicesSust">
        <div className="container">
          <div className="row">
            <div
              className="col-md-6 col-lg-4 d-flex align-items-stretch"
              data-aos="fade-up"
            >
              <div className="icon-box icon-box-pink">
                <div className="icon">
                <i className="fa-solid fa-face-smile"></i>
                </div>
                <h4 className="title">
                  <a href>IMPACTER</a>
                </h4>
                <p className="description">
                  MULTIC s'efforce de laisser un impact positif et durable au
                  sein de chaque communauté dans laquelle nous opérons. Grâce à
                  des initiatives axées sur l'économie, l'éducation, les
                  infrastructures et le développement professionnel dans des
                  domaines tels que la langue et la technologie, MULTIC est en
                  mesure d'aider à élever les régions et les communautés en
                  développement d'une manière qui persistera pendant des années.
                </p>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4 d-flex align-items-stretch"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              <div className="icon-box icon-box-cyan">
                <div className="icon">
                <i className="fa-solid fa-hand-holding-medical"></i>
                </div>
                <h4 className="title">
                  <a href>SE SOUCIER</a>
                </h4>
                <p className="description">
                  MULTIC se passionne pour assurer un environnement de travail
                  inclusif et bienveillant pour tous. Notre mission de soutenir
                  notre culture d'appartenance est soutenue par les programmes
                  MULTIC sur des sujets tels que la diversité, l'équité et
                  l'inclusion ; santé physique et mentale; le développement du
                  leadership; campagnes pour les droits de l'homme; et redonner
                  à nos gens et à nos communautés.
                </p>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4 d-flex align-items-stretch"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              <div className="icon-box icon-box-green">
                <div className="icon">
                <i className="fa-solid fa-hand-spock"></i>
                </div>
                <h4 className="title">
                  <a href>PROSPÉRER</a>
                </h4>
                <p className="description">
                  Prospérer et prospérer en tant qu'organisation tout en
                  promouvant simultanément le développement environnemental et
                  économique est au cœur des valeurs de MULTIC. En mettant en
                  œuvre des politiques d'approvisionnement durables, en
                  promouvant nos nombreuses initiatives environnementales et en
                  appliquant nos programmes de confidentialité et de sécurité
                  des données, MULTIC s'efforce d'assurer la prospérité à
                  plusieurs niveaux.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Sustainability;
