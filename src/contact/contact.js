import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <div class="frame">
      <div class="container">
        <div class="form-container">
          <h2 class="form-title">Contact Us</h2>
          <input class="form-input" placeholder="Name" type="name"></input>
          <input class="form-input" placeholder="Email" type="email"></input>
          <textarea class="form-textarea" placeholder="Message"></textarea>
          <button class="form-button">Submit</button>
        </div>
      </div>
      <div id="map" class="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.6267970225545!2d77.03537277528821!3d28.610970775676495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d05dd375e5a13%3A0x108adaa3abe4bd07!2sNetaji%20Subhas%20University%20of%20Technology!5e0!3m2!1sen!2sin!4v1718000812649!5m2!1sen!2sin"
          title="Kalpana Map" width="100%" height="480" style={{ border: 0 }} allowfullscreen="" loading="lazy">
        </iframe>
      </div>
    </div>
  );
};

export default Contact;