import React from 'react';
// import { FaPlay } from 'react-icons/fa';
import { Fade } from 'react-reveal';
import { Link } from 'react-router-dom';

const HomeHeroSingleSlide = ({ setOpen }) => {
    return (
        <>
            <div className="tp-single-slider tp-slider-height d-flex align-items-center swiper-slide" data-swiper-autoplay="5000">
                <div className="slide-bg" data-background="assets/img/slider/slider-bg-1.jpg"></div>
                <div className="slider-img">
                    <img src="assets/img/slider/slider-img-1.jpg" className="img-fluid" alt="img not found" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="tp-slider-wrapper mt-60 position-relative">
                                {/* <div className="tp-slider-video-btn play_btn">
                                    <button onClick={() => setOpen(true)} className="venobox" data-autoplay="true" data-vbtype="video" href="https://youtu.be/o4GuSJYSzrY">
                                        <i > <FaPlay className="text-white" /> </i>
                                    </button>
                                </div> */}
                                <div className="tp-slider z-index">

                                    <Fade left>
                                        <h5 className="tp-slider-subtitle section__sm__title common-yellow-shape w-80 mb-35">Fast and efficient service</h5>
                                    </Fade>

                                    <h1 className="tp-slider-title mb-45">
                                        <Fade right>Chennai's</Fade>
                                        <Fade top>Trusted Cleaning</Fade>
                                        <Fade top>Guaranteed!</Fade>
                                    </h1>

                                    <div className="tp-slider-btn">
                                        <Fade bottom>
                                            <Link to="/about" className="theme-btn text-white">
                                                <i className="flaticon-enter"></i> Learn More</Link>
                                        </Fade>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomeHeroSingleSlide;