import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import image1 from "../assets/img/hotel images/image1.jpg"
import image2 from "../assets/img/hotel images/image2.jpg"
import image3 from "../assets/img/hotel images/image3.jpg"
import image4 from "../assets/img/hotel images/image4.jpg"
import image5 from "../assets/img/hotel images/image5.jpg"
import image6 from "../assets/img/hotel images/image6.jpg"
import image7 from "../assets/img/hotel images/image7.jpg"
import image8 from "../assets/img/hotel images/image8.jpg"
import image9 from "../assets/img/hotel images/image9.jpg"
import Logo from "../assets/img/aboutus.png"
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const Aboutus = () => {
  return ( <div>
    <h1 className='aboutusheading'>WHO ARE WE ?</h1>
    <div className='aboutussection'>
      <span> <img src={Logo}/></span>
      <div>
      <p>Welcome to Shri Villa Home Stay nestled in the serene ranges of Shimla. Perched high amidst the lush greenery, our abode offers a perfect retreat for those seeking a tranquil escape from the bustling city life. The breathtaking views of the majestic mountains and the crisp, invigorating air will rejuvenate your spirit. Our cozy rooms are designed to provide you with comfort and warmth, ensuring a restful stay. Immerse yourself in the natural beauty that surrounds us, whether you're sipping a hot cup of tea on the veranda or taking a leisurely stroll through the nearby trails. Our friendly staff is dedicated to making your stay unforgettable, offering personalized service and insider tips on exploring the best of Shimla. Come, experience the magic of the mountains with us. Your mountain retreat awaits</p>
     <br/>
      <h3>Extra Facilties</h3>
      <p>Lawn area,
        <br/> Recreational area with indoor games. 
        <br/>Small gym with Trademill machine.</p>
        <h3>Aminities:</h3>
        <p>Pet friendly homestay.
          <br/>
Security cameras at property for the safety and security of our guests.
<br/>
Beautiful mountain and valley view from our homestay.
<br/>
Free Parking (Ample parking space which can accomodate upto 5-6 vehicles).
<br/>
On site food and snacks arrangements.</p>
     </div>
    </div>
    <Carousel className='Carousel' responsive={responsive}>
  <div className='carouselmain'>
    <img src={image1}/>
  </div>
  <div className='carouselmain'>
    <img src={image8}/>
  </div>
<div className='carouselmain'>
  <img src={image3}/>
</div>
<div className='carouselmain'>
    <img src={image9}/>
  </div>
  <div className='carouselmain'>
    <img src={image5}/>
  </div>
  <div className='carouselmain'>
    <img src={image6}/>
  </div>
  <div className='carouselmain'>
    <img src={image7}/>
  </div>
</Carousel>;
  </div>)
  
};

export default Aboutus;





