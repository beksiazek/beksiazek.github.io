import React from 'react';
import {BsLinkedin, BsGithub, BsTwitter} from "react-icons/bs";

export default function FooterSocials() {
  return (
    <div className='footer__socials'>
        <a href='https://www.linkedin.com/in/brian-ksiazek/' target="_blank" rel="noreferrer"><BsLinkedin /></a>
        <a href='https://github.com/beksiazek' target="_blank" rel="noreferrer"><BsGithub /></a>
        <a href="https://twitter.com/beksiazek" target={"_blank"} rel="noreferrer"><BsTwitter /></a>
    </div>
  )
}