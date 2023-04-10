import React from 'react';

export default function Cta(props) {
  const { text, cv } = props;
  return (
    <div className='cta'>
        <a href={cv} download className='btn'>{text.cv}</a>
        <a href='#contact' className='btn btn-primary'>{text.talk}</a>
    </div>
  )
}
