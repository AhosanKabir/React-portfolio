import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


// import required modules
import { Pagination, Keyboard, Autoplay} from "swiper";
import { Col, Container, Row } from "react-bootstrap";

//image import:
import himel from "../images/himel.jpeg"
import fa from "../images/fa.jpg"
import fahad from "../images/fahad.jpg"
import jame from "../images/jame.jpg"
import z from "../images/z.jpg"
export default function ReviewMe() {

  return (
    <>
      <section className="testimonial-section ">
        <Container>
            <Row className='text-center'>
                <Col sm="12">
                    <h1 className="about-row" style={{ textTransform: "uppercase" , paddingBottom: "50px"}}>
                        References
                    </h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Swiper
                      navigation={false} 
                      spaceBetween={30}
                      speed= {2000}
                      loop= {true}
                      centeredSlides={true}
                      pagination={false}
                      autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                      }}
                      modules={[Pagination, Keyboard, Autoplay]} 
                      className="mySwiper"
                    >
                        <SwiperSlide>
                            <Row className="align-items-center">
                                <Col xl="6" md='6' sm="12">
                                    <div className="sliders-img">
                                        <img src={himel} alt=""/>
                                    </div>
                                </Col>
                                <Col xl="6" md="6" sm="12">
                                    <div className="slider-text text-start">
                                        <div className="quotes">
                                            <i className="fa-solid fa-quote-left q-icon"></i>
                                            <p className="q-text"> 
                                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero laudantium molestias esse distinctio, quaerat inventore voluptatem quam iste pariatur perspiciatis.
                                            </p>
                                            <span>
                                                <span>lorem</span>
                                                <span> - Lorem ipsum.</span>
                                            </span>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Row className="align-items-center">
                                <Col xl="6" md='6' sm="12">
                                    <div className="sliders-img">
                                        <img src={fa} alt=""/>
                                    </div>
                                </Col>
                                <Col xl="6" md="6" sm="12">
                                    <div className="slider-text text-start">
                                        <div className="quotes">
                                            <i className="fa-solid fa-quote-left q-icon"></i>
                                            <p className="q-text"> 
                                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero laudantium molestias esse distinctio, quaerat inventore voluptatem quam iste pariatur perspiciatis.
                                            </p>
                                            <span>
                                                <span>lorem</span>
                                                <span> - Lorem ipsum.</span>
                                            </span>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Row className="align-items-center">
                                <Col xl="6" md='6' sm="12">
                                    <div className="sliders-img">
                                        <img src={jame} alt=""/>
                                    </div>
                                </Col>
                                <Col xl="6" md="6" sm="12">
                                    <div className="slider-text text-start">
                                        <div className="quotes">
                                            <i className="fa-solid fa-quote-left q-icon"></i>
                                            <p className="q-text"> 
                                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero laudantium molestias esse distinctio, quaerat inventore voluptatem quam iste pariatur perspiciatis.
                                            </p>
                                            <span>
                                                <span>lorem</span>
                                                <span> - Lorem ipsum.</span>
                                            </span>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Row className="align-items-center">
                                <Col xl="6" md='6' sm="12">
                                    <div className="sliders-img">
                                        <img src={fahad} alt=""/>
                                    </div>
                                </Col>
                                <Col xl="6" md="6" sm="12">
                                    <div className="slider-text text-start">
                                        <div className="quotes">
                                            <i className="fa-solid fa-quote-left q-icon"></i>
                                            <p className="q-text"> 
                                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero laudantium molestias esse distinctio, quaerat inventore voluptatem quam iste pariatur perspiciatis.
                                            </p>
                                            <span>
                                                <span>lorem</span>
                                                <span> - Lorem ipsum.</span>
                                            </span>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Row className="align-items-center">
                                <Col xl="6" md='6' sm="12">
                                    <div className="sliders-img">
                                        <img src={z} alt=""/>
                                    </div>
                                </Col>
                                <Col xl="6" md="6" sm="12">
                                    <div className="slider-text text-start">
                                        <div className="quotes">
                                            <i className="fa-solid fa-quote-left q-icon"></i>
                                            <p className="q-text"> 
                                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero laudantium molestias esse distinctio, quaerat inventore voluptatem quam iste pariatur perspiciatis.
                                            </p>
                                            <span>
                                                <span>lorem</span>
                                                <span> - Lorem ipsum.</span>
                                            </span>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </SwiperSlide>
                    </Swiper>
                </Col>
            </Row>
        </Container>
      </section>
    </>
  );
}