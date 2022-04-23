import React from "react";

function Testimonials() {
  return (
    <>
    {/* CAPITAL HUMAIN */}
      <section id="testimonials" className="testimonials section-bg">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Prix et reconnaissances</h2>
            <p>PRIX ET RECONNAISSANCE</p>
          </div>
          <div
            className="testimonials-slider swiper"
            data-aos="fade-up"
            data-aos-delay={100}
          >
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="testimonial-wrap">
                  <div className="testimonial-item">
                    <img
                      src="/img/team/team-1.jpg"
                      className="testimonial-img"
                      alt=""
                    />
                    <h3>PRIX ET RECONNAISSANCE</h3>
                    <h4>PRIX ET &amp; RECONNAISSANCE</h4>
                    <p>
                      Nous sommes régulièrement reconnus comme des leaders dans
                      l'industrie. Nous recevons également des reconnaissances
                      et des récompenses pour notre performance globale en tant
                      qu'entreprise, notre culture de travail dynamique, nos
                      contributions à la communauté et notre défense des
                      intérêts des clients. Voici quelques-unes de nos plus
                      récentes réalisations.{" "}
                      <i className="bx bxs-quote-alt-right quote-icon-right" />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Testimonials;
