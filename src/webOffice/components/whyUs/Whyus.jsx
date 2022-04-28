import React from "react";

function Whyus() {
  return (
    <>
      <section id="why-us" className="why-us section-bg">
        <div className="container-fluid" data-aos="fade-up">
          <div className="row">
            <div
              className="col-lg-5 align-items-stretch video-box"
              style={{ backgroundImage: 'url("/img/why-us.jpg")' }}
              data-aos="zoom-in"
              data-aos-delay={100}
            >
              <a
                href="https://www.youtube.com/watch?v=jDDaplaOz7Q"
                className="venobox play-btn mb-4"
                data-vbtype="video"
                data-autoplay="true"
              />
            </div>
            <div className="col-lg-7 d-flex flex-column justify-content-center align-items-stretch">
              <div className="content">
                <h3>Qu'est-ce qui nous anime chez Multi-c ?</h3>
              </div>
              <div className="accordion-list">
                <ul>
                  <li>
                    <a className="collapse">
                      <span>
                        <i className="fa-solid fa-check-double"></i>
                      </span>
                      Améliorer la vie des gens. Nous sommes une entreprise axée
                      sur les personnes, travaillant sans relâche au nom de nos
                      agents entrepreneuriaux, de nos entreprises clientes
                      dynamiques et de nos employés dévoués.
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Whyus;
