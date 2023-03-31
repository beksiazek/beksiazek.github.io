import React from 'react';
import FooterSocials from './FooterSocials';
import "./footer.css";

export default function Footer() {
  return (
    <footer>
      <a href="#" className='footer__logo'><h3>渦</h3>
      <h6>UZU</h6></a>
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <FooterSocials />
      <div className="footer__copyright">
        <small>Inspired by EGATOR React Web Portfolio design.</small>
        <small>&copy; Uzu Software by B. Ksiazek. All rights reserved.</small>
      </div>
    </footer>
  )
}
