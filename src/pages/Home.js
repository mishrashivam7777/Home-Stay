// import { Input } from 'postcss';
import React, { useState } from 'react';
import {AiOutlineArrowRight} from 'react-icons/ai'
import shimla1 from '../assets/img/heroSlider/shimla 1.jpg'
import shimla2 from '../assets/img/heroSlider/shimla2.jpg'
import shimla3 from '../assets/img/heroSlider/shimla 3.jpg'
import extrra from '../assets/img/heroSlider/bornfire.webp'
import {motion} from 'framer-motion'
//  function getDate(){
//   const today =new Date();
//   const month = today.getMonth() + 1;
//   const year = today.getFullYear();
//   const date = today.getDate();
//   return `${month}/${date}/${year}`;
  
//  }

const Home = () => {
  // const[currentdate,setcurrentdate]=useState(getDate())
  // console.log(currentdate)
  return <div >
    <div className='homesection1'>
     <motion.h1 initial={{x:-1200}} animate={{x:0}} transition={{ duration:"2"}}  >SHRI VILLA HOMESTAY</motion.h1>
     <motion.p initial={{x:-1200}} animate={{x:0}} transition={{ duration:"2", delay:"1"}} >Discover an unparalleled mountain getaway at Shri Villa Homestay, where tranquility meets comfort amidst the breathtaking landscapes of the Shimla hills. Our homestay is more than just accommodation; it's an experience that immerses you in the beauty of nature while offering the convenience of modern living.
</motion.p>
   <a href='/about' className='butttonnn'>Who Are we?</a>
    </div>
    <div  className='homeroomsection'>
     <h3>Book Your Accommodation now</h3>
      <input type='date'  />
      <input type='date'/>
      <a href='/bookingdetails' className='butttonnn'>Check Availability</a>   
    </div>

    <div className='homesection3'>

    <motion.div initial={{opacity:0,scale:0}} whileInView={{opacity:1,scale:1}} transition={{duration:2}} className='homesection3ele'>
      <img src={shimla1}/>
    <h3>Our location is one of the biggest draws of Shri Villa Homestay. Situated amidst the lush greenery of the Shimla hills, our homestay offers stunning views of the surrounding mountains and valleys. Whether you want to just sit back and relax or go exploring, our location is perfect for both.</h3>
    <a>Explore more<AiOutlineArrowRight/></a>
    </motion.div>

    <motion.div initial={{opacity:0,scale:0}} whileInView={{opacity:1,scale:1}} transition={{duration:2}} className='homesection3ele'>
    <img src={shimla2}/>
    <h3>At Shri Villa Homestay, we offer a range of well-appointed rooms that are designed to provide you with the ultimate in comfort and luxury. Each room is tastefully decorated and comes equipped with all the modern amenities that you need to make your stay comfortable and convenient.</h3>
    <a>Explore more <AiOutlineArrowRight/></a>
    </motion.div>
    <motion.div initial={{opacity:0,scale:0}} whileInView={{opacity:1,scale:1}} transition={{duration:2}}  className='homesection3ele'>
      <img src={shimla3}/>
    <h3>Nestled in the midst of the breathtaking landscapes of the Shimla hills, Shri Villa Homestay is an unparalleled mountain getaway that offers a perfect blend of tranquility and comfort. Our homestay is designed to provide you with a serene and rejuvenating experience that will leave you feeling refreshed and energized.</h3>
    <a>Explore more <AiOutlineArrowRight/></a>
    </motion.div>
    </div>
    <motion.div initial={{opacity:0,scale:0}} whileInView={{opacity:1,scale:1}} transition={{duration:2}} className='extrasection'>
      <h1>We Also Provide</h1>
    <img src={extrra}/>
    <p>We also provide adventure activities (CHARGABLE) which include:
Treeventure activities like zip line, bamboo bridge walk etc. 
Main adventure activity is PARAGLIDING.

These activities are provided at a different site which is approx. 10 k.m from our homestay at The Glide Inn, Junga Shimla
</p>
    </motion.div>
  </div>;
};

export default Home;
