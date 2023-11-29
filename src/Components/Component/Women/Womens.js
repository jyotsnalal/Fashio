import React from "react";
import { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
//import Carousel from 'react-grid-carousel'
import "./Womens.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const sliderSettings = {
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
};

const Cards = [
  {
    imageSrc:
      "https://preview.colorlib.com/theme/fashi/img/products/women-4.jpg",
    description: "Pure pineapple",
    pricingText: "34$",
  },
  {
    imageSrc:
      "https://preview.colorlib.com/theme/fashi/img/products/women-1.jpg",
    description: "Pure pineapple",
    pricingText: "34$",
  },
  {
    imageSrc:
      "https://preview.colorlib.com/theme/fashi/img/products/women-2.jpg",
    description: "Pure pineapple",
    pricingText: "34$",
  },
  {
    imageSrc:
      "https://preview.colorlib.com/theme/fashi/img/products/women-3.jpg",
    description: "Pure pineapple",
    pricingText: "34$",
  },
];
const Womens = (props) => {
  const [sliderRef, setSliderRef] = useState(null);

  return (
    <div className="women-div-main">
      <div className="women-img">
        <h2 className="women-h2">Women's</h2>
        <p className="women-p">Discover more</p>
      </div>
      <div className="div-column">
        <div className="women-scroll-div">
          <h2 className="women-tag">
            <span className="clothing">Clothing</span> HandBag Shoes Accessories
          </h2>
        </div>
        <div className="content">
          <div className="controls">
            
          </div>
          <Slider ref={setSliderRef} {...sliderSettings}>
            {Cards.map((card, index) => (
              <div key={index} className="card ">
                <img src={card.imageSrc} className="card-image" />
                <div className="text-infos">
                  <div className="card-header">
                    <span>{card.pricingText}</span>
                  </div>
                  <p>{card.description}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Womens;
