import React from "react";
import Ridge from "../assets/img/heroSlider/ridge.avif"
import Kufri from "../assets/img/heroSlider/KUFRI.jpg"
import chailcricket from "../assets/img/heroSlider/Ei1uwnAUMAEoivc.jpg"
import chailpalace from "../assets/img/heroSlider/chail palace.webp"
import jakhutemple from "../assets/img/heroSlider/Jakhu Temple.webp"
import kallitibba from "../assets/img/heroSlider/kallitibbabb.avif"
import shrisatya from "../assets/img/heroSlider/shriii satya.jpg"
import stoneshambhu from "../assets/img/heroSlider/stone shambhu.webp"
import { motion } from "framer-motion";
const Aroundus =()=>{
return <div className="aroundussection">
    <motion.div  initial={{opacity:0,scale:0}} whileInView={{opacity:1,scale:1}} transition={{duration:1}} className="aroundsection1">
    <div className="aroundsection1left">
        <h3>The Ridge, Shimla</h3>
       <br/>
       <img src={Ridge}/>
    </div>

    <div className="aroundsection1left">
    <h3>Kufri</h3>
        <br/>
    <img src={Kufri}/>
    </div>
    </motion.div>
    <br/>

    <motion.div  initial={{opacity:0,scale:0}} whileInView={{opacity:1,scale:1}} transition={{duration:1}} 
    className="aroundsection1">
    <div className="aroundsection1left">
    
    <h3>Chail Cricket Ground</h3>
        <br/>
    <img src={chailcricket}/>
    
    </div>
    <div className="aroundsection1left">
    <h3>Chail Palace</h3>
        <br/>
    <img src={chailpalace}/>
     
    </div>
    </motion.div>

    <motion.div  initial={{opacity:0,scale:0}} whileInView={{opacity:1,scale:1}} transition={{duration:1}} className="aroundsection1">
    <div className="aroundsection1left">
    <h3>Jakhu Temple</h3>
        <br/>
    <img src={jakhutemple}/>
    </div>
    <div className="aroundsection1left">
    <h3>Kalli Tibba</h3>
        <br/>
    <img src={kallitibba}/>
    
    </div>
    </motion.div>


    <motion.div  initial={{opacity:0,scale:0}} whileInView={{opacity:1,scale:1}} transition={{duration:1}} className="aroundsection1">
    <div className="aroundsection1left">
    <h3>Shri Satya Sai Mandir</h3>
        <br/>
    <img src={shrisatya}/>
    </div>
    <div className="aroundsection1left">
    <h3>Stone Sambhu</h3>
        <br/>
    <img src={stoneshambhu}/>
    </div>
    </motion.div>

</div>
   
    
}
export default Aroundus