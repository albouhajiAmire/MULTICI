import React from "react";


function Count() {
  return (
    <>
      <section id="counts" className="counts mt-5">
        <div className="container">
        <div className="section-header">
            <h2>Ta nouvelle famille</h2>
            <p>
            Au sein de Multici, tu découvriras un cadre attractif et stimulant au quotidien
            </p>
          </div>
          <div className="row">
            <div
              className="image col-xl-5 d-flex align-items-stretch justify-content-center justify-content-xl-start"
              data-aos="fade-right"
              data-aos-delay="150"
            >
              <img src="/img/home.png" alt="" className="img-fluid" />
            </div>
            <div
              className="col-xl-7 d-flex align-items-stretch pt-4 pt-xl-0"
              data-aos="fade-left"
              data-aos-delay="300"
            >
              <div className="content d-flex flex-column justify-content-center">
                <div className="row">
                  <div className="col-md-6 d-md-flex align-items-md-stretch">
                    <div className="count-box">
                      {/* <i class="fa-solid fa-chess-pawn"></i> */}
                      <img src="/img/bien-etre-hover_1.png" alt="" srcSet="" />
                      <span
                        className="purecounter"
                      >
                        <p>
                        <strong>bien étre</strong>
                      </p>
                      </span>
                    
                    </div>
                  </div>

                  <div className="col-md-6 d-md-flex align-items-md-stretch">
                    <div className="count-box">
                      {/* <i class="fa-solid fa-handshake"></i> */}
                      <img src="/img/respect_1.png" alt="" srcSet="" />
                      <span
                        className="purecounter"
                      >
                        <p>
                        <strong> Respect</strong>
                      </p>
                      </span>
                     
                    </div>
                  </div>

                  <div className="col-md-6 d-md-flex align-items-md-stretch">
                    <div className="count-box">
                      {/* <i className="fa fa-users" aria-hidden="true"></i> */}
                      <img src="/img/avantages_0.png" alt="" srcSet="" />
                      <span
                        data-purecounter-start="0"
                        data-purecounter-end="85"
                        data-purecounter-duration="1"
                        className="purecounter"
                      >
                          <p>
                        <strong>Avantages </strong>
                      </p>
                      </span>
                    
                    </div>
                  </div>

                  <div className="col-md-6 d-md-flex align-items-md-stretch">
                    <div className="count-box">
                      {/* <i className="fa fa-user" aria-hidden="true"></i> */}
                      <img src="/img/entraide-hover_0.png" alt="" srcSet="" />
                      <span
                        data-purecounter-start="0"
                        data-purecounter-end="18"
                        data-purecounter-duration="1"
                        className="purecounter"
                      >
                          <p>
                        <strong>Entraide</strong>
                      </p>
                      </span>
                    
                    </div>
                  </div>

                  <div className="col-md-6 d-md-flex align-items-md-stretch">
                    <div className="count-box">
                      {/* <i className="fa fa-thumbs-up" aria-hidden="true"></i> */}
                      <img src="/img/fun-hover_1.png" alt="" srcSet="" />
                      <span
                        data-purecounter-start="0"
                        data-purecounter-end="15"
                        data-purecounter-duration="1"
                        className="purecounter"
                      >
                                   <p>
                        <strong>Fun</strong>
                      </p>
                      </span>
                    </div>
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

export default Count;
