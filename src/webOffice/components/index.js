import React from "react";
import Cta from "./cta/Cta";
import AboutUs from "./about/AboutUs";
import Contact from "./contact/Contact";
import Count from "./count/Count";
import Feature from "./features/Feature";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import Hero from "./hero/Hero";
import Service from "./service/Service";
import WhatService from "./service/WhatService";
import Testimonials from "./testimonials/Testimonials";
import Whyus from "./whyUs/Whyus";

function Index() {
  return (
    <>
      <Header />
      <Hero />
      <AboutUs />
      <WhatService />
      <Whyus />
      <Cta />
      <Feature />
      <Count />
      <Service />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default Index;
