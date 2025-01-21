import React from "react";
import "../assets/styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <h2>SaberNation®</h2>
          <p>
            SaberNation® is not a trademark associated with Disney, LUCASFILM, or any lightsaber franchise.
          </p>
          <p>
            We want to balance the lightsaber market by creating unique and high-quality lightsabers that everyone can enjoy. To make science fiction into reality and to provide the world's best portable lightsaber experience.
          </p>
        </div>
        <div className="footer-support">
          <h3>CUSTOMER SUPPORT</h3>
          <ul>
            <li><a href="/manual">Lightsaber User Manual</a></li>
            <li><a href="/bluetooth">Bluetooth Apps</a></li>
            <li><a href="/faqs">FAQs</a></li>
            <li><a href="/about">About us</a></li>
            <li><a href="/contact">Contact Information</a></li>
            <li><a href="/track-order">Track Your Order</a></li>
            <li><a href="/terms">Terms</a></li>
            <li><a href="/privacy-policy">Privacy Policy</a></li>
            <li><a href="/refund-policy">Refund Policy</a></li>
            <li><a href="/shipping-policy">Shipping Policy</a></li>
            <li><a href="/terms-of-service">Terms of Service</a></li>
            <li><a href="/affiliate-program">Affiliate Program</a></li>
            <li><a href="/wholesale-program">Wholesale Program</a></li>
          </ul>
        </div>
        <div className="footer-contact">
          <h3>CONTACT</h3>
          <p>Do you need any more information?</p>
          <p>
            Just send us an email to <a href="mailto:support@nsabers.com">support@sabernationisnotreal.com</a>
          </p>
        </div>
      </div>
      <div className="footer-middle">
        <h3>JOIN US & SAVE</h3>
        <p>
          Join the community and be the first to know about new products, exclusive deals, and exciting announcements!
        </p>
        <div className="subscription">
          <input type="email" placeholder="Your email" />
          <button>Subscribe</button>
        </div>
        <div className="country-region">
          <label htmlFor="region-select">Country/region</label>
          <select id="region-select">
            <option value="uk">United Kingdom (GBP £)</option>
            <option value="us">United States (USD $)</option>
            <option value="eu">European Union (EUR €)</option>
          </select>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 SaberNation</p>
      </div>
    </footer>
  );
};

export default Footer;
