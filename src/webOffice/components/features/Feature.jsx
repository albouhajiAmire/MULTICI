import React from "react";

function Feature() {
  return (
    <>
      {/* ======= Features Section ======= */}
      <section id="features" className="features">
        <div className="container" data-aos="fade-up">
          <ul className="nav nav-tabs row gy-4 d-flex">
            <li className="nav-item col-6 col-md-4 col-lg-2">
              <a
                className="nav-link active show"
                data-bs-toggle="tab"
                data-bs-target="#tab-1"
              >
                <i className="bi bi-binoculars color-cyan" />
                <h4>Modinest</h4>
              </a>
            </li>
            {/* End Tab 1 Nav */}
            <li className="nav-item col-6 col-md-4 col-lg-2">
              <a
                className="nav-link"
                data-bs-toggle="tab"
                data-bs-target="#tab-2"
              >
                <i className="bi bi-box-seam color-indigo" />
                <h4>Comment postuler chez Webhelp ?</h4>
              </a>
            </li>
            {/* End Tab 2 Nav */}
            <li className="nav-item col-6 col-md-4 col-lg-2">
              <a
                className="nav-link"
                data-bs-toggle="tab"
                data-bs-target="#tab-3"
              >
                <i className="bi bi-brightness-high color-teal" />
                <h4>Pariatur</h4>
              </a>
            </li>
            {/* End Tab 3 Nav */}
            <li className="nav-item col-6 col-md-4 col-lg-2">
              <a
                className="nav-link"
                data-bs-toggle="tab"
                data-bs-target="#tab-4"
              >
                <i className="bi bi-command color-red" />
                <h4>Nostrum</h4>
              </a>
            </li>
            {/* End Tab 4 Nav */}
            <li className="nav-item col-6 col-md-4 col-lg-2">
              <a
                className="nav-link"
                data-bs-toggle="tab"
                data-bs-target="#tab-5"
              >
                <i className="bi bi-easel color-blue" />
                <h4>Adipiscing</h4>
              </a>
            </li>
            {/* End Tab 5 Nav */}
            <li className="nav-item col-6 col-md-4 col-lg-2">
              <a
                className="nav-link"
                data-bs-toggle="tab"
                data-bs-target="#tab-6"
              >
                <i className="bi bi-map color-orange" />
                <h4>Reprehit</h4>
              </a>
            </li>
            {/* End Tab 6 Nav */}
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
                    monde - à domicile, en centre ou dans un modèle hybride
                    MAXhub - Sitel Group est prêt à soutenir la stratégie CX de
                    votre marque avec notre approche Work from Anywhere. Sur
                    tous les canaux, nous connectons les marques à leurs clients
                    de manière transparente et sécurisée plus de 8 millions de
                    fois par jour dans plus de 50 langues.
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
                  <img src="/img/features-1.svg" alt="" className="img-fluid" />
                </div>
              </div>
            </div>
            {/* End Tab Content 1 */}
            <div className="tab-pane" id="tab-2">
              <div className="row gy-4">
                <div className="col-lg-8 order-2 order-lg-1">
                  <h3>Comment postuler chez Webhelp ?</h3>
                  <p>
                    Venir directement dans nos espaces carrière : Tu déposes ton
                    CV, tu es reçu en entretien sur le champ et tu as une
                    réponse sous 1h30. L’espace carrière chez Multici est un
                    lieu de proximité, alliant modernité et rapidité, et offrant
                    une expérience de qualité à nos candidats.
                  </p>
                  <p className="fst-italic">
                    Les Proximité : tu peux poser en direct toutes tes questions
                    à nos chargés de recrutement. Rapidité : tu as une réponse
                    immédiate dans la foulée.
                  </p>
                  <ul>
                    <li>
                      <i className="bi bi-check-circle-fill" /> 
                     icona ONLINE
                    </li>
                  </ul>
                  <p>
                    Postuler online en 2mn avec un simple clic Tu sélectionnes
                    ton offre, et tu joins ton CV. Tu peux même postuler sans CV
                    si tu ne l’as pas sous la main : c’est la candidature
                    express : clique ici. Astuce: tu peux demander sur le site à
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
                    <div className="col-md-4">bb</div>
                    <div className="col-md-4">bb</div>
                    <div className="col-md-4">bb</div>
                  </div>
                </div>
                <div className="col-lg-4 order-1 order-lg-2 text-center">
                  <img src="/img/features-2.svg" alt="" className="img-fluid" />
                </div>
              </div>
            </div>
            {/* End Tab Content 2 */}
            <div className="tab-pane" id="tab-3">
              <div className="row gy-4">
                <div className="col-lg-8 order-2 order-lg-1">
                  <h3>Pariatur</h3>
                  <p>
                    Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum
                  </p>
                  <ul>
                    <li>
                      <i className="bi bi-check-circle-fill" /> Ullamco laboris
                      nisi ut aliquip ex ea commodo consequat.
                    </li>
                    <li>
                      <i className="bi bi-check-circle-fill" /> Duis aute irure
                      dolor in reprehenderit in voluptate velit.
                    </li>
                    <li>
                      <i className="bi bi-check-circle-fill" /> Provident
                      mollitia neque rerum asperiores dolores quos qui a. Ipsum
                      neque dolor voluptate nisi sed.
                    </li>
                  </ul>
                  <p className="fst-italic">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
                <div className="col-lg-4 order-1 order-lg-2 text-center">
                  <img src="/img/features-3.svg" alt="" className="img-fluid" />
                </div>
              </div>
            </div>
            {/* End Tab Content 3 */}
            <div className="tab-pane" id="tab-4">
              <div className="row gy-4">
                <div className="col-lg-8 order-2 order-lg-1">
                  <h3>Nostrum</h3>
                  <p>
                    Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum
                  </p>
                  <p className="fst-italic">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <ul>
                    <li>
                      <i className="bi bi-check-circle-fill" /> Ullamco laboris
                      nisi ut aliquip ex ea commodo consequat.
                    </li>
                    <li>
                      <i className="bi bi-check-circle-fill" /> Duis aute irure
                      dolor in reprehenderit in voluptate velit.
                    </li>
                    <li>
                      <i className="bi bi-check-circle-fill" /> Ullamco laboris
                      nisi ut aliquip ex ea commodo consequat. Duis aute irure
                      dolor in reprehenderit in voluptate trideta storacalaperda
                      mastiro dolore eu fugiat nulla pariatur.
                    </li>
                  </ul>
                </div>
                <div className="col-lg-4 order-1 order-lg-2 text-center">
                  <img src="/img/features-4.svg" alt="" className="img-fluid" />
                </div>
              </div>
            </div>
            {/* End Tab Content 4 */}
            <div className="tab-pane" id="tab-5">
              <div className="row gy-4">
                <div className="col-lg-8 order-2 order-lg-1">
                  <h3>Adipiscing</h3>
                  <p>
                    Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum
                  </p>
                  <p className="fst-italic">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <ul>
                    <li>
                      <i className="bi bi-check-circle-fill" /> Ullamco laboris
                      nisi ut aliquip ex ea commodo consequat.
                    </li>
                    <li>
                      <i className="bi bi-check-circle-fill" /> Duis aute irure
                      dolor in reprehenderit in voluptate velit.
                    </li>
                    <li>
                      <i className="bi bi-check-circle-fill" /> Ullamco laboris
                      nisi ut aliquip ex ea commodo consequat. Duis aute irure
                      dolor in reprehenderit in voluptate trideta storacalaperda
                      mastiro dolore eu fugiat nulla pariatur.
                    </li>
                  </ul>
                </div>
                <div className="col-lg-4 order-1 order-lg-2 text-center">
                  <img src="/img/features-5.svg" alt="" className="img-fluid" />
                </div>
              </div>
            </div>
            {/* End Tab Content 5 */}
            <div className="tab-pane" id="tab-6">
              <div className="row gy-4">
                <div className="col-lg-8 order-2 order-lg-1">
                  <h3>Reprehit</h3>
                  <p>
                    Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum
                  </p>
                  <p className="fst-italic">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <ul>
                    <li>
                      <i className="bi bi-check-circle-fill" /> Ullamco laboris
                      nisi ut aliquip ex ea commodo consequat.
                    </li>
                    <li>
                      <i className="bi bi-check-circle-fill" /> Duis aute irure
                      dolor in reprehenderit in voluptate velit.
                    </li>
                    <li>
                      <i className="bi bi-check-circle-fill" /> Ullamco laboris
                      nisi ut aliquip ex ea commodo consequat. Duis aute irure
                      dolor in reprehenderit in voluptate trideta storacalaperda
                      mastiro dolore eu fugiat nulla pariatur.
                    </li>
                  </ul>
                </div>
                <div className="col-lg-4 order-1 order-lg-2 text-center">
                  <img src="/img/features-6.svg" alt="" className="img-fluid" />
                </div>
              </div>
            </div>
            {/* End Tab Content 6 */}
          </div>
        </div>
      </section>
      {/* End Features Section */}
    </>
  );
}

export default Feature;
