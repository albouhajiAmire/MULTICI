import React from "react";

function Featured() {
  return (
    <>
      <section id="featured-services" className="featured-services ">
        <div className="container">
          <div className="row">
            <div className="title-featured">
              <h1>
                Un réseau mondial de personnes, de données et de technologies
                travaillant ensemble pour offrir des expériences client
                exceptionnelles
              </h1>
            </div>
          </div>
          <div className="row no-gutters">
            <div className="col-lg-3 col-md-6">
              <div className="icon-box">
                <div className="icon">
                  {" "}
                  <img
                    src="/img/2-world-short.gif"
                    alt=""
                    srcSet=""
                    style={{ width: "70%", textAlign: "center" }}
                  />{" "}
                  <h4 className="title">
                    <strong>5</strong>
                  </h4>
                  <p className="description">Pays dans le monde</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="icon-box">
                <div className="icon">
                  {" "}
                  <img
                    src="/img/7-associates-short.gif"
                    alt=""
                    srcSet=""
                    style={{ width: "70%" }}
                  />{" "}
                </div>
                <h4 className="title">
                  <strong>88,000+</strong>
                </h4>
                <p className="description">Associés</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="icon-box">
                <div className="icon">
                  <img
                    src="/img/3-home-short.gif"
                    alt=""
                    srcSet=""
                    style={{ width: "70%" }}
                  />
                </div>
                <h4 className="title">
                  <strong>35%</strong>
                </h4>
                <p className="description">Personnes travaillant à domicile</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="icon-box">
                <div className="icon">
                  <img
                    src="/img/6-customer-short.gif"
                    alt=""
                    srcSet=""
                    style={{ width: "70%" }}
                  />
                </div>
                <h4 className="title">
                  <strong>500+</strong>
                </h4>
                <p className="description">Marques clientes</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Featured;
