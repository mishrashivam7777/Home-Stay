import React from 'react';
import logo from '../assets/img/LOGO.png'
import {BsFillTelephoneFill,BsInstagram} from 'react-icons/bs'
import  {AiFillMail,AiFillLinkedin,AiFillFacebook} from 'react-icons/ai'
import {FcHome} from 'react-icons/fc'
const Footer = () => {
  return <div>
    <div className='footer'>
      <div className='footerele'>
      <span className='Logo'>
        <img src={logo}/>
      </span>
      </div>
      <div className='footerele'>
        <a > <BsFillTelephoneFill/> 6239053658</a>
        <br/>
        <a><AiFillMail/>  info@shrivillahomestay.com</a>
        <br/>
        <p>
          <FcHome/>
          Shri Villa Homestay,
          <br/>
          Beolia, Near Satya Sai Mandir,
          <br/>
          Shimla,H.P. (171009) 
        </p>
      </div>
      <div className='footerele'>
        <a href='https://www.facebook.com/people/Shri-Villa-Homestay/100095485111738/?mibextid=ZbWKwL'><AiFillFacebook/></a>
        <a href='https://www.instagram.com/shrivillahomestay/'><BsInstagram/></a>
        
      </div>
    </div>
  </div>;
};

export default Footer;
