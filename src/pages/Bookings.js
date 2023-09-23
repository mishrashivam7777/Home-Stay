import React from 'react';
import room1 from '../assets/img/heroSlider/room1.jpg'
import room2 from '../assets/img/heroSlider/room2.jpg'


// function clicked() {
//  alert('Form submitted Sucessfully') 
// }

const Bookings = () => {

 return <div> 
   <div className='bookinginput'>
     <input type='date'/>
     <input type='date'/>
     <button>Check Availability</button>
     </div>
   <div className='booking' >
    <div className='bookingright'>
      {/* Result */}
     <div className='Result'>
      {/* room 1  */}
      <div className='Result1'>
        <img src={room1}/> 
      <div className='resultpart'>
      <h3>Double Room with Attached washroom</h3>
      <p>2 Adults max</p>
      
      <h4> FROM Rs.3500</h4>
      <a href='/room:1'>MORE DETAILS</a>
      </div>
      </div>
      {/* room 2 */}
      <div className='Result1'>
      <img src={room2}/> 
      <div className='resultpart'>
      <h3>Double Room with Sharing Washroom</h3>
      <p>2 Adults max</p>
      <h4> FROM Rs.3000</h4>
      <a href='/room:2'>MORE DETAILS</a>
      </div>
      </div>
      </div> 
    </div>

    
    <form action="https://formspree.io/f/xeqbldwr" method="POST" className='bookingform'>
      <h3>Your Reservation</h3>
      <input required autoComplete='on' name="username" placeholder='Name'/>
      <input required autoComplete='on' name="email" placeholder='E-Mail'/>
      <input required autoComplete='on' name="number" placeholder='Phone Number'/>
      <input required autoComplete='on' name="Address" placeholder='Complete Address'/>
      <input required autoComplete='on'  name='date' type='date' />
      <input required autoComplete='on' name='Number of Rooms' placeholder='Number of Rooms'/>
      <select required autoComplete='on' name='roomtype' >
      <option value="seperate">Double Room with Seperate Washroom</option>
      <option value="Sharing">Double Room with Sharing Washroom</option>
      </select>
      <button type='submit' >Continue</button>
    </form>
    </div>
  </div>
 
  
};

export default Bookings;
