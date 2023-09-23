import React from 'react';
import room2 from '../assets/img/hotel images/image9.jpg'
const Room2 = () => {
  return <div>  
     <div className='Room'>
  <img src={room2}/> 
<div className='Roompart'>
<h3>Double Room with Attached washroom</h3>
<h4>About this Room</h4>
<p>2 Adults max</p>
<p>Double, Mountain view, Separate luggage store, Bathroom with shower, Fan, Openable windows, Full-length mirror, Private bathroom, and Bedlinen</p>
<h4>Amenities</h4>
<ul>
  <li>Double</li>
  <li>Mountain View</li>
  <li>Separate luggage store</li>
  <li>Seating Area</li>
  <li>Bathroom with shower</li>
  <li>Fan</li>
  <li>Openable windows</li>
  <li>Full-length mirror</li>
  <li>Bedlinen</li>
</ul>
<h4> FROM Rs.3500</h4>
<a href='/bookingdetails'>Close</a>
<a href='/bookingdetails'>Book Now</a>
</div>
</div></div>;
};

export default Room2;