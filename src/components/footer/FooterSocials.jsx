import React from 'react';
import {BsLinkedin, BsGithub, BsTwitter} from "react-icons/bs";

export default function FooterSocials() {
  return (
    <div className='footer__socials'>
        <a href='https://www.linkedin.com/in/brian-ksiazek/' target="_blank"><BsLinkedin /></a>
        <a href='https://github.com/beksiazek' target="_blank"><BsGithub /></a>
        <a href="https://twitter.com" target={"_blank"}><BsTwitter /></a>
    </div>
  )
}