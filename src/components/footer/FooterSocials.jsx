import React from 'react';
import {BsLinkedin, BsGithub, BsTwitter} from "react-icons/bs";

export default function FooterSocials() {
  return (
    <div className='footer__socials'>
        <a href='https://linkedin.com' target="_blank"><BsLinkedin /></a>
        <a href='https://github.com' target="_blank"><BsGithub /></a>
        <a href="https://twitter.com" target={"_blank"}><BsTwitter /></a>
    </div>
  )
}