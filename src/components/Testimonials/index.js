import React from "react"
import { FormattedMessage } from "react-intl"
import Slider from "react-slick"

import UserImg1 from "~assets/images/user1.png"
import UserImg2 from "~assets/images/user2.png"
import UserImg3 from "~assets/images/user3.png"

export default function Testimonials() {
  const settings = {
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  }

  return (
    <section className="testimonials">
      <div className="container">
        <h2 className="section-title text-center">
          <FormattedMessage id="home.Testimonials" />
        </h2>
        <Slider {...settings} className="testimonials-slider">
          <div className="card testimonial-card">
            <div className="card-header">
              <p>
                Lives of great men all remind us, we can make our lives sublime,
                and, departing, leave behind us, footprints on the sands of
                time.
              </p>
            </div>
            <div className="card-body">
              <div className="user">
                <img src={UserImg1} alt="user image" />
              </div>
              <h5>AMY HONOR</h5>
              <span>Senior Designer</span>
            </div>
          </div>
          <div className="card testimonial-card">
            <div className="card-header">
              <p>
                The greatest way to live with honor in this world is to be what
                we pretend to be.
              </p>
            </div>
            <div className="card-body">
              <div className="user">
                <img src={UserImg2} alt="user image" />
              </div>
              <h5>ALEXANDER DOUGLAS</h5>
              <span>CTO</span>
            </div>
          </div>
          <div className="card testimonial-card">
            <div className="card-header">
              <p>
                I firmly believe that any man's finest hour, the greatest
                fulfillment of all that he holds dear, is that moment when he
                has worked.
              </p>
            </div>
            <div className="card-body">
              <div className="user">
                <img src={UserImg3} alt="user image" />
              </div>
              <h5>DONALD BEST</h5>
              <span>Head Developer</span>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  )
}
