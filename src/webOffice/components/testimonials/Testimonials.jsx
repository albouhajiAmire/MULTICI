import React from "react";
import {Swiper, SwiperSlide} from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {Navigation, Pagination} from 'swiper';


function Testimonials() {
    return (
        <> {/* CAPITAL HUMAIN */}
            <section id="testimonials" className="testimonials section-bg">
                <div className="container" data-aos="fade-up">
                    <div className="section-title">
                        <h2>Prix et reconnaissances</h2>
                        <p>PRIX ET RECONNAISSANCE</p>
                    </div>

                    <Swiper 
                        modules={
                            [Navigation, Pagination]
                        }
                        pagination={
                            {dynamicBullets: true}
                        }
                        loop={true}
                        speed={1000}
                        navigation={true}
                        autoplay={
                            {
                                delay: 3000,
                                disableOnInteraction: false
                            }}

                            breakpoints={{
                                  640: {
                                    width: 640,
                                    slidesPerView: 1,
                                  },    1400: {
                                    width: 1400,
                                    slidesPerView: 2,
                                  },
                           }}
                    >
                        <SwiperSlide>

                            <div className="testimonials-slider swiper" data-aos="fade-up">
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide">
                                        <div className="testimonial-wrap">
                                            <div className="testimonial-item">
                                                <img src="/img/team/team-1.jpg" className="testimonial-img" alt=""/>
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
                                                    <i className="bx bxs-quote-alt-right quote-icon-right"/>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>


                        <SwiperSlide>

                            <div className="testimonials-slider swiper" data-aos="fade-up">
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide">
                                        <div className="testimonial-wrap">
                                            <div className="testimonial-item">
                                                <img src="/img/team/team-1.jpg" className="testimonial-img" alt=""/>
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
                                                    <i className="bx bxs-quote-alt-right quote-icon-right"/>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>


                        <SwiperSlide>

                            <div className="testimonials-slider swiper" data-aos="fade-up">
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide">
                                        <div className="testimonial-wrap">
                                            <div className="testimonial-item">
                                                <img src="/img/team/team-1.jpg" className="testimonial-img" alt=""/>
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
                                                    <i className="bx bxs-quote-alt-right quote-icon-right"/>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                    </Swiper>


                </div>
            </section>
        </>
    );
}

export default Testimonials;
