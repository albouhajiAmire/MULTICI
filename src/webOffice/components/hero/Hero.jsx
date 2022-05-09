import React from "react";
import {Swiper, SwiperSlide} from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination } from 'swiper';

function Hero() {



    return (
        <> 

      <div className="hero-swiper">


            <Swiper
                slidesPerView={1}
                modules={[Navigation, Pagination]}
                pagination={{
                  dynamicBullets: true,
                }}
                loop={true}
                speed={1000}
                navigation={true}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false}} >
                <SwiperSlide >

            <section id = "hero" > <div id="heroCarousel" className="carousel slide carousel-fade">

                    <div className="carousel-inner" role="listbox">
                        <div className="carousel-item active"  style={{backgroundImage: "url(/img/slide/slide-1.jpg)"}}>
                            <div className="carousel-container">
                                <div className="container">
                                    <h2 className="animate__animated animate__fadeInDown">
                                        Bienvenue sur
                                        <span>Multi-c</span>
                                    </h2>
                                    <p className="animate__animated animate__fadeInUp">
                                        Transformez votre expérience client à chaque
                                                                conversation
                                    </p>
                                    <a href="#about" className="btn-get-started animate__animated animate__fadeInUp scrollto">
                                        Lire La Suite
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </section>


                </SwiperSlide>


                <SwiperSlide >

    <section id = "hero" > <div id="heroCarousel" className="carousel slide carousel-fade">

            <div className="carousel-inner" role="listbox">
                <div className="carousel-item active"  style={{backgroundImage: "url(/img/slide/slide-1.jpg)"}}>
                    <div className="carousel-container">
                        <div className="container">
                            <h2 className="animate__animated animate__fadeInDown">
                                Bienvenue sur
                                <span>Multi-c</span>
                            </h2>
                            <p className="animate__animated animate__fadeInUp">
                                Transformez votre expérience client à chaque
                                                        conversation
                            </p>
                            <a href="#about" className="btn-get-started animate__animated animate__fadeInUp scrollto">
                                Lire La Suite
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>


    </SwiperSlide>

            </Swiper>

            </div>

        </>
    );
}

export default Hero;

