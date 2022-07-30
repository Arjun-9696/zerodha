import React, { useEffect } from "react";
import "./Home.css";
import { Link } from "react-router-dom";

import { NavLink } from "react-router-dom";

// import Footer from "../footer/Footer";

function Home() {
  return (
    <div className="Home">
      <div className="top-div">
        <img
          className="home-1"
          src="https://zerodha.com/static/images/landing.png"
          alt=""
        />
        <p className="home-heading">Invest in Everything</p>
        <p className="home-description">
          Online platform to invest in stocks, derivatives, mutual funds, and
          more
        </p>
        <Link to={`/signup`}>
          <button className="home-button">Sign Up Now</button>
        </Link>
      </div>
      <div className="home-flexbox">
        <img
          className="home-3"
          src="https://zerodha.com/static/images/largest-broker.svg"
          alt=""
        />
        <div className="flex-div">
          <p className="home-heading">Largest stock broker in India</p>
          <p className="home-content">
            7.5+ million Zerodha clients contribute to over 15% of all retail
            order volumes in India daily by trading and investing in:
          </p>
          <div className="list-flex">
            <ul>
              <li>Futures and Options</li>
              <li>Commodity derivatives</li>
              <li>Currency derivatives</li>
            </ul>
            <ul>
              <li>Stocks & IPOs</li>
              <li>Direct mutual funds</li>
              <li>Bonds and Govt. Securities</li>
            </ul>
          </div>
          <img
            className="press-logos"
            src="https://zerodha.com/static/images/press-logos.png"
            alt=""
          />
        </div>
      </div>
      <div className="top-div">
        <p className="home-heading">The Zerodha Universe</p>
        <p className="home-description">
          A whole ecosystem of modern investment apps
        </p>
        <p className="home-description">
          tailored to specific needs, built from the ground up
        </p>
        <NavLink to="/products">
          <img
            className="home-2"
            src="https://zerodha.com/static/images/ecosystem.png"
            alt=""
          />
        </NavLink>
        <NavLink to="/products">
          <p className="home-links">Explore our products {`->`}</p>
        </NavLink>
      </div>

      <div className="home-flexbox">
        <div className="home-width">
          <p className="home-heading">Unbeatable Pricing </p>
          <p className="home-content">
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>

          <NavLink to="/pricing" className="home-links">
            See Pricing {`->`}
          </NavLink>
        </div>
        <div>
          <div className="pricing-flex">
            <div className="pricing-div">
              <p className="price"> &#8377;0</p>
              <p>Free equity delivery and direct mutual funds</p>
            </div>
            <div className="pricing-div">
              <p className="price"> &#8377;20</p>
              <p>Intraday and F&O</p>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div style={{ display: "flex" }}>
        <div style={{ marginLeft: "140px" }}>
          <img
            src="https://zerodha.com/static/images/index-education.svg"
            alt=""
          />
        </div>

        <div>
          <p className="home-heading" style={{ marginLeft: "60px" }}>
            Free and open market education
          </p>
          <p className="home-content" style={{ marginLeft: "60px" }}>
            Varsity, the largest online stock market education book in the world
          </p>
          <p className="home-content" style={{ lineHeight: "2px" }}>
            covering everything from the basics to advanced trading.
          </p>
          <a
            style={{ marginRight: "300px" }}
            href="https://zerodha.com/varsity/"
          >
            Varsity {`->`}
          </a>

          <br />
          <br />
          <p className="home-content" style={{ marginLeft: "70px" }}>
            TradingQ&A, the most active trading and investment community in
          </p>
          <p
            className="home-content"
            style={{ lineHeight: "2px", marginRight: "120px" }}
          >
            India for all your market related queries
          </p>
          <a style={{ marginRight: "250px" }} href="https://tradingqna.com/">
            TrandingQ&A{`->`}
          </a>
        </div>
      </div>
      <div className="top-div">
        <p className="home-heading">Open a Zerodha account</p>
        <p className="home-description">
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.
        </p>
        <Link to={`/signup`}>
          <button className="home-button">Sign Up Now</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
