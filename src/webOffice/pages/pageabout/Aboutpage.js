import React from "react";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/header/Navbar";
import AbooutMultici from "../../components/hero/AbooutMultici";
import AboutHero from "../../components/hero/AboutHero";

function Aboutpage(props) {
  const socket = props.socket
  return (
    <>
      <Navbar />
      <AboutHero />
      <AbooutMultici />
      <Footer  socket={socket}/>
    </>
  );
}

export default Aboutpage;
