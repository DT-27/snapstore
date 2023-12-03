import React from 'react';
import './index.css'; // Import your CSS file for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
const Footer = () => {
  return (
    <div className="footer">


        <div className="footer-content">
          <div className="footer-section">
            <h2>About Us</h2>
            <p>just get lost in the variety of amazing pictures.</p>
          </div>
          <div className="footer-section">
            <h2>Quick Links</h2>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/">Products</a></li>
              <li><a href="/">Contact</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h2>Follow Us</h2>
            {/* Add social media icons or links here */}
            <div className="social-icons">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook"></i>
              </a>
              {/* Add more social media icons as needed */}
            </div>
          </div>
          <div className="footer-section">
            <h2>Contact Us</h2>
            <p>Email: contact@example.com</p>
            <p>Phone: +123 456 7890</p>
          </div>
  <span className="snapStoreText">Snap Store</span>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2023 Your Company. All rights reserved.</p>
        </div>

    </div>
  );
};

export default Footer;
