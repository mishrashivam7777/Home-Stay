import React,{useState} from 'react';
import logo from '../assets/img/aboutus.png';
import { motion } from 'framer-motion';
import {CgMenu,CgCloseR} from 'react-icons/cg'
const Header = () => {
  const [Mobile, setMobile] = useState(false)
  return <div>
    <div className="headercontainer">
    
     <span className='logo'>
      <img src={logo}/>
     </span>
     <motion.div initial={{x:1800}} animate={{x:0}} transition={{ duration:"2"}}  className={Mobile ? "tags active" : "tags"} onClick={() => setMobile(false)}>
     <a href='/' >HOME</a>
     <a href='/about'>ABOUT</a>
     <a href='/aroundus'>AROUND US</a>
     <a href='/bookingdetails'>BOOK A ROOM </a>
     <a href='/contactus'> CONTACT US </a>
     </motion.div> 
     <button className='mobile-menu-icon' onClick={() => setMobile(!Mobile)}>
          {Mobile ? <CgCloseR className='closing' /> : <CgMenu className='menu' />}
     </button>
    </div>
   
  </div>;
};

export default Header;
