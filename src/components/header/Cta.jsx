import React from 'react';
import Cv_en from "../../assets/cv/CV-BrianKsiazek(English).pdf";

export default function Cta() {
  return (
    <div className='cta'>
        <a href={Cv_en} download className='btn'>Download CV</a>
        <a href='#contact' className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}
