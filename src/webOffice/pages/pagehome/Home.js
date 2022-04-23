import React from "react";
import Cta from "../../components/cta/Cta";
import AboutUs from "../../components/about/AboutUs";
import Contact from "../../components/contact/Contact";
import Count from "../../components/count/Count";
import Feature from "../../components/features/Feature";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Hero from "../../components/hero/Hero";
import Service from "../../components/service/Service";
import WhatService from "../../components/service/WhatService";
import Testimonials from "../../components/testimonials/Testimonials";
import Whyus from "../../components/whyUs/Whyus";
import TopHeader from "../../components/tobHeader/TopHeader";
import Featured from "../../components/featured/Featured";
import MinHero from "../../components/hero/MinHero";
import Sustainability from "../../components/testimonials/Sustainability";
function Home() {
  return (
    <>
      <TopHeader />
      <Header />
      <Hero />
      <AboutUs />
      <WhatService />
      <Whyus />
      <Cta />
      <MinHero />
      <Feature />
      <Featured />
      <Count />
      <Service />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
