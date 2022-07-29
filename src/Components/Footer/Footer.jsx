import React from "react";
import "./Footer.css";

import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="connect">
          <img src="https://zerodha.com/static/images/logo.svg" alt="logo" />
          <p>
            <p className="copyright text-grey">
              © 2010 - 2022, Zerodha Broking Ltd.
            </p>
            <p className="copyright text-grey">All rights reserved.</p>{" "}
          </p>
          <ul className="social">
            <li>
              <Link to="/">
                <img
                  src="https://tse4.mm.bing.net/th?id=OIP.KCOMqyxNd-Ph8uAwUHJ9ZwHaHa&pid=Api&P=0"
                  alt="twitter"
                />
              </Link>
            </li>
            <li>
              <Link to="/">
                <img
                  src="https://tse1.mm.bing.net/th?id=OIP.A4E1CwO3D01uWO69R_FLVgHaHa&pid=Api&P=0"
                  alt="facebook"
                />
              </Link>
            </li>
            <li>
              <Link to="/">
                <img
                  src="https://tse2.mm.bing.net/th?id=OIP.f3uHLlZDDmjWlTixdSXFHAHaHa&pid=Api&P=0"
                  alt="insta"
                />
              </Link>
            </li>
            <li>
              <Link to="/">
                <img
                  src="https://tse2.mm.bing.net/th?id=OIP.aoss3HItT9Y76TXm7HBpagHaHa&pid=Api&P=0"
                  alt="linkedin"
                />
              </Link>
            </li>
            <li>
              <Link to="/">
                <img
                  src="https://tse3.mm.bing.net/th?id=OIP.rY8QJ18n_jbo72ROP0zKcAAAAA&pid=Api&P=0"
                  alt="telegram"
                />
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer-company">
          <ul className="list-style">
            <li className="nav-head">Company</li>
            <li>
              <Link to="/Zerodha-Clone/about">About</Link>
            </li>
            <li>
              <Link to="/Zerodha-Clone/products">Products</Link>
            </li>
            <li>
              <Link to="/Zerodha-Clone/pricing">Pricing</Link>
            </li>
            <li>
              <Link to="/">Referral programme</Link>
            </li>
            <li>
              <Link to="/">Careers</Link>
            </li>
            <li>
              <Link to="/">Zerodha.tech</Link>
            </li>
            <li>
              <Link to="/">Press &amp; media</Link>
            </li>
            <li>
              <Link to="/">Zerodha Cares (CSR)</Link>
            </li>
          </ul>
        </div>
        <div className="footer-support">
          <ul className="list-style">
            <li className="nav-head">Support</li>
            <li>
              <Link to="/">Contact</Link>
            </li>
            <li>
              <Link to="">Support portal</Link>
            </li>
            <li>
              <Link to="">Z-Connect blog</Link>
            </li>
            <li>
              <Link to="">List of charges</Link>
            </li>
            <li>
              <Link to="">Downloads &amp; resources</Link>
            </li>
            <li>
              <Link to="">Videos</Link>
            </li>
          </ul>
        </div>
        <div className="footer-account">
          <ul className="list-style">
            <li className="nav-head">Account</li>
            <li>
              <Link to="">Open an account</Link>
            </li>
            <li>
              <Link to="">Fund transfer</Link>
            </li>
            <li>
              <Link to="">60 day challenge</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
