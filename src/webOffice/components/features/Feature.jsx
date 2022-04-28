import React from "react";
import { NavLink } from "react-router-dom";

function Feature() {
  return (
    <>
      <section id="features" className="features">
        <div className="container" data-aos="fade-up">
          <ul className="nav nav-tabs row gy-4 d-flex">
            <li className="nav-item col-6 col-md-4 col-lg-3">
              <a
                className="nav-link active show"
                data-bs-toggle="tab"
                data-bs-target="#tab-1"
              >
                <i className="fa-solid fa-binoculars iconfeatures"></i>
                <h4>Emplacements</h4>
              </a>
            </li>
            {/* End Tab 1 Nav */}
            <li className="nav-item col-6 col-md-4 col-lg-3">
              <a
                className="nav-link"
                data-bs-toggle="tab"
                data-bs-target="#tab-2"
              >
                <i className="fa-solid fa-question iconfeatures"></i>
                <h4>Comment postuler chez Multi-c ?</h4>
              </a>
            </li>
            {/* End Tab 2 Nav */}
            <li className="nav-item col-6 col-md-4 col-lg-3">
              <a
                className="nav-link"
                data-bs-toggle="tab"
                data-bs-target="#tab-3"
              >
                <i className="fa-regular fa-handshake iconfeatures"></i>
                <h4>L'intégration</h4>
              </a>
            </li>
            {/* End Tab 3 Nav */}
            <li className="nav-item col-6 col-md-4 col-lg-3">
              <a
                className="nav-link"
                data-bs-toggle="tab"
                data-bs-target="#tab-4"
              >
                <i className="fa-solid fa-person-circle-question iconfeatures"></i>
                <h4>Notre mission</h4>
              </a>
            </li>
          </ul>
          <div className="tab-content">
            <div className="tab-pane active show" id="tab-1">
              <div className="row gy-4">
                <div
                  className="col-lg-8 order-2 order-lg-1"
                  data-aos="fade-up"
                  data-aos-delay={100}
                >
                  <h3>
                    Emplacements dans le monde permettant plus de 8 millions
                    d'interactions avec les clients par jour
                  </h3>
                  <p className="fst-italic">
                    Avec plus de 160 000 personnes travaillant à travers le
                    monde - à domicile, en centre ou dans un modèle - Multici
                    Group est prêt à soutenir la stratégie de votre marque avec
                    notre approche Work from Anywhere. Sur tous les canaux, nous
                    connectons les marques à leurs clients de manière
                    transparente et sécurisée plus de 8 millions de fois par
                    jour dans plus de 50 langues.
                  </p>
                  <p>
                    Notre empreinte mondiale fait de nous l'un des rares
                    véritables acteurs mondiaux capables de faire avancer les
                    stratégies d'expérience client numérique de nos clients.
                  </p>
                </div>
                <div
                  className="col-lg-4 order-1 order-lg-2 text-center"
                  data-aos="fade-up"
                  data-aos-delay={200}
                >
                  <img src="/img/emplacement.svg" alt="emplacement" className="img-fluid" />
                </div>
              </div>
            </div>
            {/* End Tab Content 1 */}
            <div className="tab-pane" id="tab-2">
              <div className="row gy-4">
                <div className="col-lg-8 order-2 order-lg-1">
                  <h3>Comment postuler chez Webhelp ?</h3>
                  <p>
                    <strong>
                      Venir directement dans nos espaces carrière :
                    </strong>{" "}
                    Tu déposes ton CV, tu es reçu en entretien sur le champ et
                    tu as une réponse sous 1h30. L’espace carrière chez Multici
                    est un lieu de proximité, alliant modernité et rapidité, et
                    offrant une expérience de qualité à nos candidats.
                  </p>
                  <p className="fst-italic">
                    Les Proximité : tu peux poser en direct toutes tes questions
                    à nos chargés de recrutement. Rapidité : tu as une réponse
                    immédiate dans la foulée.
                  </p>
                  <ul>
                    <li>
                      <i className="fa-solid fa-circle online"></i>
                      <strong className="strongonline">ONLINE :</strong>
                    </li>
                  </ul>
                  <p>
                    <strong>Postuler online en 2mn avec un simple clic </strong>{" "}
                    Tu sélectionnes ton offre, et tu joins ton CV. Tu peux même
                    postuler sans CV si tu ne l’as pas sous la main : c’est la
                    candidature express :{" "}
                    <strong className="clique">
                      <i className="fa-solid fa-hand-point-right"></i>{" "}
                      <NavLink to={"/login"}> clique ici . </NavLink>
                    </strong>
                    <br /> <span>Astuce:</span> tu peux demander sur le site à
                    être appelé immédiatement, ou à un créneau horaire que tu
                    auras choisi, pour un premier entretien téléphonique.
                  </p>
                  <ul>
                    <li>
                      <i className="bi bi-check-circle-fill" />
                      Comment se passe la suite ?
                    </li>
                  </ul>
                  <div className="row">
                    <div className="col-md-4">
                      <i className="fa-solid fa-user-tag icononline"></i>
                      <br />
                      <p>Présentation de l'entreprise</p>
                    </div>
                    <div className="col-md-4">
                      <i className="fa-solid fa-person-chalkboard icononline"></i>
                      <br />
                      <p>Entretien individuel</p>
                    </div>
                    <div className="col-md-4">
                      <i className="fa-solid fa-file-signature icononline"></i>
                      <br />
                      <p>Signature du contrat</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 order-1 order-lg-2 text-center">
                  <img src="/img/comment.svg" alt="comment" className="img-fluid" />
                </div>
              </div>
            </div>
            {/* End Tab Content 2 */}
            <div className="tab-pane" id="tab-3">
              <div className="row gy-4">
                <div className="col-lg-8 order-2 order-lg-1">
                  <h3>L'intégration</h3>
                  <p>
                    C’est parceque les premiers jours dans une entreprise sont
                    un moment crucial que nous avons mis en place une
                    intégration efficace et chaleureuse.
                  </p>
                  <img src="/img/integration.png" alt="integration" />
                </div>
                <div className="col-lg-4 order-1 order-lg-2 text-center">
                  <img src="/img/lintegration.svg" alt="l'integration" className="img-fluid" />
                </div>
              </div>
            </div>
            {/* End Tab Content 3 */}
            <div className="tab-pane" id="tab-4">
              <div className="row gy-4">
                <div className="col-lg-8 order-2 order-lg-1">
                  <h3>Notre mission</h3>
                  <p>
                    Nous pensons que chaque organisation peut renforcer
                    l'engagement envers la marque et stimuler la croissance
                    commerciale à long terme en libérant la puissance de
                    l'expérience client . Notre mission est de donner aux
                    marques les moyens d'établir des relations plus solides avec
                    leurs clients en créant des liens significatifs qui
                    renforcent la valeur de la marque.
                  </p>
                </div>
                <div className="col-lg-4 order-1 order-lg-2 text-center">
                  <img src="/img/nosmission.svg" alt="nos mission" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Feature;
