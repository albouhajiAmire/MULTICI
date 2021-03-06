import React from "react";
import Cta from "../../components/cta/Cta";
import AboutUs from "../../components/about/AboutUs";
import Contact from "../../components/contact/Contact";
import Count from "../../components/count/Count";
import Feature from "../../components/features/Feature";
import Footer from "../../components/footer/Footer";
import Hero from "../../components/hero/Hero";
import Service from "../../components/service/Service";
import WhatService from "../../components/service/WhatService";
import Testimonials from "../../components/testimonials/Testimonials";
import Whyus from "../../components/whyUs/Whyus";
import Featured from "../../components/featured/Featured";
import MinHero from "../../components/hero/MinHero";
import Navbar from "../../components/header/Navbar";
import WhoAre from "../../components/who-are/WhoAre";
function Home(props) {
  const socket = props.socket
  return (
    <>
    
      <Navbar/>
      <Hero />
      <div className="home-container">
        <AboutUs />
        <WhatService />
        <Whyus />
        <Cta />
        <MinHero />
        <Feature />
        <Featured />
        <WhoAre/>
        {/* <Count /> */}
        <Service />
        <Testimonials />
        <Contact />
      </div>
      <Footer socket={socket}/>
    </>
  );
}

export default Home;
