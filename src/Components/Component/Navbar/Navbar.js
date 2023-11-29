import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="container-nav container">
      <div className="nav-bar">
        <ul  className="ul-main">
          <li className="li-main">
            <Link to="/alldepartments" className="alldepartments">
              All departments
            </Link>

            <ul className="ul-menu">
              <li className="li-menu">
                <Link to="/women" className="women">
                  Women's clothing
                </Link>
              </li>
              <li className="li-menu">
                <Link to="/men" className="men">
                  Men's clothing
                </Link>
              </li>
              <li className="li-menu">
                <Link to="/kids" className="kids">
                  kid's clothing
                </Link>
              </li>
              <li className="li-menu">
                <Link to="/brand" className="brand">
                  Brand fashion
                </Link>
              </li>
            </ul>
          </li>
          <li className="li-main">
            <Link to="/Home" className="home">
              HOME
            </Link>
          </li>
          <li className="li-main">
            <Link to="/womenpage" className="search">
              SHOP
            </Link>
          </li>
          <li className="li-main">
            <Link to="/blog">BLOG</Link>

            <ul className="ul-menu">
              <li className="li-menu">
                <Link to="/women" className="women">
                  Women's clothing
                </Link>
              </li>
              <li className="li-menu">
                <Link to="/men" className="men">
                  Men's clothing
                </Link>
              </li>
              <li className="li-menu">
                <Link to="/kid" className="kid">
                  kid's clothing
                </Link>
              </li>
              </ul>
          </li>
          <li className="li-main">
            <Link to="/about">ABOUT</Link>
          </li>
          <li className="li-main">
            <Link to="/contact" className="contact">
              CONTACT
            </Link>
          </li>
          <li className="li-main">
            <Link to="/pages" className="pages">
              PAGES
            </Link>

            <ul className="ul-menu">
              <li className="li-menu"> 
                <Link to="/blog" className="blog">
                  Blog details
                </Link>
              </li>
              <li className="li-menu">
                <Link to="/shopping" className="shopping">
                  Shopping Cart
                </Link>
              </li>
              <li className="li-menu">
                <Link to="/checkout" className="checkout">
                  Check out
                </Link>
              </li>
              </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
