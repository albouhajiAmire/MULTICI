import React from "react";
import Contact from "../../components/contact/Contact";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/header/Navbar";
import TopHeader from "../../components/tobHeader/TopHeader";

function ContactPage() {
  return (
    <>
      <TopHeader />
      <Navbar />
      <section
        id="abouthero"
        className="d-flex flex-column align-items-center justify-content-center"
        style={{ backgroundImage: "url(/img/talking.jpg)" }}
      >
        <h1>CONTACTEZ</h1>
        <h2>Parlons</h2>
        <span>Sélectionnez la raison de votre contact</span>
        <a href="#about" className="btn-get-started scrollto">
          <i className="fa-solid fa-angles-down"></i>
        </a>
      </section>
      {/* <section>
        <p>
          Sitel Group s'engage à protéger et à respecter votre vie privée, et
          nous n'utiliserons vos informations personnelles que pour administrer
          votre compte et fournir les produits et services que vous nous avez
          demandés. De temps en temps, nous aimerions vous contacter au sujet de
          nos produits et services, ainsi que d'autres contenus susceptibles de
          vous intéresser.
        </p>
      </section> */}
      <Contact />
      <Footer />
    </>
  );
}

export default ContactPage;
