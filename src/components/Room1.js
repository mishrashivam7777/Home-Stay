import React from 'react';
import room1 from '../assets/img/hotel images/image5.jpg'
const Room1 = () => {
  return <div>
      <div className='Room'>
        <img src={room1}/> 
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
        <li>Bathroom with shower</li>
        <li>Fan</li>
        <li>Openable windows</li>
        <li>Full-length mirror</li>
        <li>Private bathroom</li>
        <li>Bedlinen</li>
      </ul>
      <h4> FROM Rs.3500</h4>
      <a href='/bookingdetails'>Close</a>
      <a href='/bookingdetails'>Book Now</a>
      </div>
      </div>
  </div>;
};

export default Room1;
