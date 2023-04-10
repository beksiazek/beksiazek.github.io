import React from 'react';
import FooterSocials from './FooterSocials';
import "./footer.css";

export default function Footer(props) {
  const { navText, footerText } = props;

  return ( navText ? footerText ? 
    <footer>
      <a href="#" className='footer__logo'><h3>渦</h3>
      <h6>UZU</h6></a>
      <ul className="permalinks">
        <li><a href="#">{navText.header}</a></li>
        <li><a href="#about">{navText.about}</a></li>
        <li><a href="#experience">{navText.experience}</a></li>
        <li><a href="#services">{navText.services}</a></li>
        <li><a href="#portfolio">{navText.portfolio}</a></li>
        <li><a href="#contact">{navText.contact}</a></li>
      </ul>
      <FooterSocials />
      <div className="footer__copyright">
        <small>{footerText.inspo}</small>
        <small>{footerText.copyright}</small>
      </div>
    </footer>
  :<footer></footer> : <footer></footer>)
}
