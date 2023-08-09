import React, { useState } from "react";

function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-card">
        <div className="get-in-touch">Get in touch</div>
        <div className="line"></div>
        <div className="methods">
          <section>
            <p className="top">Work Room</p>
            <p className="bottom">789 E. Pennsylvanie Ave</p>
            <p className="bottom">Milwaukee, WI 58876</p>
          </section>
          <section>
            <p className="top">Email</p>
            <p className="bottom">denisebraun54@gmail.com</p>
          </section>
          <section>
            <p className="top">Phone</p>
            <p className="bottom">608-575-1303</p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Contact;
