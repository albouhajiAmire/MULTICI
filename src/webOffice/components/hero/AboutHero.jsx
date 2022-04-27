import React from "react";
function AboutHero() {
  return (
    <>
      <section
        id="abouthero"
        className="d-flex flex-column align-items-center justify-content-center"
        style={{ backgroundImage: "url(/img/slide/slide-2.jpg)" }}
      >
        <h1>VRAIS GENS.</h1>
        <h2>SOLUTIONS RÉELLES.®</h2>
        <span>En savoir plus sur Multi-c.</span>
        <a href="#about" className="btn-get-started scrollto">
        <i className="fa-solid fa-angles-down"></i>
        </a>
      </section>
    </>
  );
}

export default AboutHero;
