import React from 'react'

export const Footer = () => {
  return (
    <footer>
        <div className="footer-container">
          <div className="footer-logo">
            <li className="logo">
              <img src="src\images\Geass_Logo.png" alt="Geass" />
            </li>
          </div>
          <div className="footer-icons">
            <i className="fa-brands fa-discord"></i>
            <i className="fa-brands fa-reddit"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-twitter"></i>
          </div>
          <div className="footer-menu">
            <li><a href="#">Home</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">DMCA Notices</a></li>
            <li><a href="#">Contact Us</a></li>
          </div>
          <div className="footer-support-box">
            <li><a href="#">Support</a></li>
          </div>          
        </div>
      </footer>
  )
}
