import React from 'react';
import Cv_en from "../../assets/cv/CV-BrianKsiazek(English).pdf";

export default function Cta(props) {
  const ctaText = props.text;
  return (
    <div className='cta'>
        <a href={Cv_en} download className='btn'>{ctaText.cv}</a>
        <a href='#contact' className='btn btn-primary'>{ctaText.talk}</a>
    </div>
  )
}
