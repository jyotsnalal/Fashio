import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./Mens.css";

const sliderSettings = {
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 2000,
};
const Cards = [
  {
    imageSrc: "https://preview.colorlib.com/theme/fashi/img/products/man-2.jpg",
    description: "Shoes",
    pricingText: "34$",
  },
  {
    imageSrc: "https://preview.colorlib.com/theme/fashi/img/products/man-4.jpg",
    description: "Sweater",
    pricingText: "34$",
  },
  {
    imageSrc: "https://preview.colorlib.com/theme/fashi/img/products/man-3.jpg",
    description: "Pure pineapple",
    pricingText: "34$",
  },
  {
    imageSrc: "https://preview.colorlib.com/theme/fashi/img/products/man-1.jpg",
    description: "Tshirt",
    pricingText: "34$",
  },
];
const Mens = (props) => {
  const [sliderRef, setSliderRef] = useState(null);
  return (
    <div className="men-div-main">
      <div className="men-img">
        <h2 className="men-h2">Men's</h2>
        <p className="men-p">Discover more</p>
      </div>
      <div className="div-columns">
        <div className="men-scroll-div">
          <h2 className="men-tag">
            <span className="clothings">Clothing</span> HandBag Shoes
            Accessories
          </h2>
        </div>

        <Slider ref={setSliderRef} {...sliderSettings}>
          {Cards.map((card, index) => (
            <div key={index} className="cards">
              <img src={card.imageSrc} className="cards-image" />
              <div className="texts-info">
                <div className="cards-header">
                  <span>{card.pricingText}</span>
                </div>
                <p>{card.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Mens;
