import React, { Fragment, useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import style from "./whatclientssay.module.scss";
import staricon from "../../assets/staricon.png";
// import required modules
import { FreeMode, Pagination } from "swiper/modules";

export default function App() {
  const [slideNumber, setSlideNumber] = useState(3);

  const [readMore1, setReadMore1] = useState(false);
  const [readMore2, setReadMore2] = useState(false);
  const [readMore3, setReadMore3] = useState(false);
  const [readMore4, setReadMore4] = useState(false);
  const [readMore5, setReadMore5] = useState(false);
  const [readMore6, setReadMore6] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", function () {
      if (500 <= window.innerWidth <= 800) {
        setSlideNumber(2);
      }
      if (window.innerWidth <= 499) {
        setSlideNumber(1);
      }
      if (window.innerWidth > 800) {
        setSlideNumber(3);
      }
    });
  }, [slideNumber]);

  return (
    <div className={style.swiperBody}>
      <div className={style.whatclientContainer}>
        <h1>What Clients Say</h1>
      </div>
      <Swiper
        slidesPerView={slideNumber}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className={style.mySwiper}
      >
        <SwiperSlide className={style.swiperslide}>
          <section className={style.carousel}>
            <div className={style.starContainer}>
              <img className={style.star} src={staricon} alt="" />
              <img className={style.star} src={staricon} alt="" />
              <img className={style.star} src={staricon} alt="" />
              <img className={style.star} src={staricon} alt="" />
              <img className={style.star} src={staricon} alt="" />
            </div>
            <p>
              Since signing up with Solace, our offices have been running
              smoother than ever before. The virtual back office has been a
              lifesaver, allowing us to focus on what we do best:{" "}
              {!readMore1 && (
                <span onClick={() => setReadMore1(true)}>.... Read more</span>
              )}
              {readMore1 && (
                <span className={style.morePara}>
                  selling property. The added services they provide, such as
                  handling rent payments and maintenance requests, have made our
                  lives so much easier. Highly recommend!{" "}
                  <span onClick={() => setReadMore1(false)}>Read less</span>
                </span>
              )}
            </p>
            <h2>- Euros Estate, Canary Wharf</h2>
          </section>
        </SwiperSlide>
        <SwiperSlide className={style.swiperslide}>
          <section className={style.carousel}>
            <div className={style.starContainer}>
              <img className={style.star} src={staricon} alt="" />
              <img className={style.star} src={staricon} alt="" />
              <img className={style.star} src={staricon} alt="" />
              <img className={style.star} src={staricon} alt="" />
              <img className={style.star} src={staricon} alt="" />
            </div>
            <p>
              As a private landlord, it can be tough to compete with the big
              players in the industry. But thanks to Solace, I’ve been able to
              level the playing field. Their services have given me both{" "}
              {!readMore2 && (
                <span onClick={() => setReadMore2(true)}>.... Read more</span>
              )}
              {readMore2 && (
                <span className={style.morePara}>
                  the freedom and time to focus on my business, without the
                  added overhead costs.{" "}
                  <span onClick={() => setReadMore2(false)}>Read less</span>
                </span>
              )}
            </p>
            <h2>- Anastasia, Wimbledon</h2>
          </section>
        </SwiperSlide>
        <SwiperSlide className={style.swiperslide}>
          <section className={style.carousel}>
            <div className={style.starContainer}>
              <img className={style.star} src={staricon} alt="" />
              <img className={style.star} src={staricon} alt="" />
              <img className={style.star} src={staricon} alt="" />
              <img className={style.star} src={staricon} alt="" />
              <img className={style.star} src={staricon} alt="" />
            </div>
            <p>
              Switching to a virtual back office was a big decision for my
              business, but I am so glad I made the move. Solace has been a
              fantastic partner, taking over all of my administrative{" "}
              {!readMore3 && (
                <span onClick={() => setReadMore3(true)}>.... Read more</span>
              )}
              {readMore3 && (
                <span className={style.morePara}>
                  tasks tenant requests.{" "}
                  <span onClick={() => setReadMore3(false)}>Read less</span>
                </span>
              )}
            </p>
            <h2>- Raj, Walthamstow</h2>
          </section>
        </SwiperSlide>
        <SwiperSlide className={style.swiperslide}>
          <section className={style.carousel}>
            <div className={style.starContainer}>
              <img className={style.star} src={staricon} alt="" />
              <img className={style.star} src={staricon} alt="" />
              <img className={style.star} src={staricon} alt="" />
              <img className={style.star} src={staricon} alt="" />
              <img className={style.star} src={staricon} alt="" />
            </div>
            <p>
              As a busy estate agent, it's essential to have a team of
              professionals handling the administrative tasks. That's where
              Solace comes in. Their services have been fantastic{" "}
              {!readMore4 && (
                <span onClick={() => setReadMore4(true)}>.... Read more</span>
              )}
              {readMore4 && (
                <span className={style.morePara}>
                  and allow us to focus on providing excellent service to our
                  clients. Highly recommend their services to anyone in the
                  industry.{" "}
                  <span onClick={() => setReadMore4(false)}>Read less</span>
                </span>
              )}
            </p>

            <h2>- Century 21, Elephant and Castle</h2>
          </section>
        </SwiperSlide>
        <SwiperSlide className={style.swiperslide}>
          <section className={style.carousel}>
            <div className={style.starContainer}>
              <img className={style.star} src={staricon} alt="" />
              <img className={style.star} src={staricon} alt="" />
              <img className={style.star} src={staricon} alt="" />
              <img className={style.star} src={staricon} alt="" />
              <img className={style.star} src={staricon} alt="" />
            </div>
            <p>
              Solace has been a breath of fresh air for our business. We no
              longer have to worry about the tedious administrative tasks that
              used to bog us down. Plus, their customer service is top-notch.{" "}
              {!readMore5 && (
                <span onClick={() => setReadMore5(true)}>.... Read more</span>
              )}
              {readMore5 && (
                <span className={style.morePara}>
                  Would definitely recommend .
                  <span onClick={() => setReadMore5(false)}>Read less</span>
                </span>
              )}
            </p>

            <h2>- Stonehenge Management, East Ham</h2>
          </section>
        </SwiperSlide>
        <SwiperSlide className={style.swiperslide}>
          <section className={style.carousel}>
            <div className={style.starContainer}>
              <img className={style.star} src={staricon} alt="" />
              <img className={style.star} src={staricon} alt="" />
              <img className={style.star} src={staricon} alt="" />
              <img className={style.star} src={staricon} alt="" />
              <img className={style.star} src={staricon} alt="" />
            </div>
            <p>
              We were hesitant to switch to a virtual back office, but Solace
              have gone above and beyond to meet our needs. Their team is
              professional, knowledgeable, and always available to help.{" "}
            </p>

            <h2>- Tantum Property, Lambeth</h2>
          </section>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
