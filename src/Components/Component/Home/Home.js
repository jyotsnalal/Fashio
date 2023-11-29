import React from "react";
import "./Home.css";
import Womens from "../Women/Womens";
import Dealoftheweek from "../Deal/Dealoftheweek";
import Mens from "../Men/Mens";
import Images from "../Image/Images";
import Footers from "../Footer/Footers";
const Home = () => {
  return (
    <>
      <div className="container d-flex">
        <div className="main-page">
          <h4 className="h4-class">BAG,KIDS</h4>
          {/* <div className="h1-div"> */}
          <h1 className="h1-class">Black friday</h1>
          {/* </div> */}

          <p className="para-class">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantiu
            hic odio adipisci sequi eius deleniti.
          </p>
          <button className="button-shop">SHOP NOW</button>
        </div>
        <div className="img"></div>
      </div>

      <div className="baner">
        <div className="baner-1">
          <span className="mens">Men's</span>
        </div>
        <div className="baner-2">
          <span className="mens">Women's</span>
        </div>
        <div className="baner-3">
          <span className="mens">Kid's</span>
        </div>
      </div>
      <Womens />
      <Dealoftheweek />
      <Mens />
      <Images />
    </>
  );
};

export default Home;
