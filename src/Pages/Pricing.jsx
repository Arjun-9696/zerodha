import React from 'react'
import "./Pricing.css";

const Pricing = () => {
    
  return (
    <div className='pricing'>
        
        <div className="box">
        <h1 className="pricing-title">Pricing</h1>
        <h5 className="pricing-desc">
          Free equity investments and flat ₹20 intraday and F&O trades
        </h5>
      </div>
      <div className="box">
        <div className="pricing-details-container">
          <div className="pricing-details">
            <img src="https://zerodha.com/static/images/pricing-eq.svg" className="pricing-image" alt="zero" />
            <h2>Free Equity Delivery</h2>
            <p>
              All equity delivery investments (NSE, BSE), are absolutely free —
              ₹ 0 brokerage.
            </p>
          </div>
          <div className="pricing-details">
            <img src="https://zerodha.com/static/images/pricing-eq.svg" className="pricing-image" alt="twenty" />
            <h2>Intraday and F&O trades</h2>
            <p>
              Flat Rs. 20 or 0.03% (whichever is lower) per executed order on
              intraday trades across equity, currency, and commodity trades.
            </p>
          </div>
          <div className="pricing-details">
            <img src="https://zerodha.com/static/images/pricing-eq.svg" className="pricing-image" alt="zero" />
            <h2>Free direct MF</h2>
            <p>
              All direct mutual fund investments are absolutely free — ₹ 0
              commissions & DP charges.
            </p>
          </div>
        </div>
      </div>
      <div className="box">
        <div className="acc-open">
          <h2>Open a Zerodha account</h2>
          <p>
            Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
            F&O trades.
          </p>
          <button className="sign-up-btn">Sign up now</button>

          <div className="info-container">
            <div className="left-box">
              <h3>Brokerage calculator</h3>
              <li>
                Call & Trade and RMS auto-squareoff: Additional charges of ₹50 +
                GST per order.
              </li>
              <li>Digital contract notes will be sent via e-mail.</li>
              <li>
                Physical copies of contract notes, if required, shall be charged
                ₹20 per contract note. Courier charges apply.
              </li>
              <li>
                For NRI's: ₹200 or 0.1% (whichever lower) per executed order
              </li>
            </div>
            <div className="right-box">
              <h3>List of charges</h3>
            </div>
          </div>
        </div>
      </div>

 
    </div>
  )
}

export default Pricing