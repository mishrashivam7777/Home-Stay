import React from 'react';
//components
import Header from './components/Header'; 
import Footer from './components/Footer';
//pages
import Home from './pages/Home';
// import RoomDetails from './pages/RoomDetails'
import Aboutus from './pages/Aboutus';
import Aroundus from './pages/Aroundus'
import Contactus from './components/Contactus';
import Bookings from './pages/Bookings';
import Room1 from './components/Room1';
import Room2 from './components/Room2'
//react router
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';


const App = () => {
  return( <div>
    <style>@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:opsz@6..12&display=swap');</style>
    <Router>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>} />
      {/* <Route path='/room/:id' element={<RoomDetails/>}/> */}
      <Route path='/about' element={<Aboutus/>}/>
      <Route path='/aroundus' element={<Aroundus/>}/>
      <Route path='/contactus' element={<Contactus/>}/>
      <Route path='/bookingdetails' element={<Bookings/>}/>
      <Route path='/room:1' element={<Room1/>}/>
      <Route path='/room:2' element={<Room2/>}/>
    </Routes>

    <Footer/>

    </Router>
  </div>
)};

export default App;
