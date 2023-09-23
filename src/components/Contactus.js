import React from "react";

const Contactus =()=>{
return(
<div>
    <h1 className="contactusheading">SUGGEST US ? </h1>
    <form className="contactusform" action="https://formspree.io/f/xzblawoa"
  method="POST">
    <input required autoComplete='on' type="text" name="username" placeholder="Enter Your NAME"/>
    <input required autoComplete='on' type="email" name="email" placeholder="Enter Your EMAIL"/>
    <input required autoComplete='on' className="phonenumber" type="number" name="number" placeholder="Enter your Phone Number" />
    <textarea required autoComplete='on' placeholder="YOUR SUGGESTIONS" name="message" />
    <button type="submit">SUBMIT</button>
    </form>
    <iframe className="iframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1459.005116435555!2d77.18255731400328!3d31.045764675383353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39057f6562f5ebcb%3A0x6403cb609c8d6150!2s25VM%2BX74%20Shri%20Villa%20Homestay%2C%20Beolia%2C%20Shimla%2C%20Himachal%20Pradesh%20171009!5e0!3m2!1sen!2sin!4v1694712131325!5m2!1sen!2sin" width="1500" height="450" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
</div>
)
}

export default Contactus

