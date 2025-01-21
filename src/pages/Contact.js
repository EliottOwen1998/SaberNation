import React from "react";
import '../assets/styles/contact.css';

const Contact = () => {
  return (
    <main>
      <section className="Contact Us">
        <h2>Contact Us:</h2>
        <p>
          Please read our FAQ before contacting us, chances are we've answered your question there.
          If you have a question about your order shipping, check Track Your Order.
          If you still have any questions regarding your online order, our privacy policy, or if you wish to be removed from our mailing list, please contact us by
        </p>
        <div className="line"></div>
        <p>Email: support@sabernationsisnotreal.con
          <br /> Galaxy number: Z5E00MJ7c
          <br /> NabooTube: @fakesabers
          <br /> FaceWookie: @fakesabers
          <br /> DeathStagram: @SABERNATIONSISNTREAL
          <br /> Or easily chat with us using the force
        </p>
      </section>

      <div className="contact-container">
        <form action="#" method="POST">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="4" required></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>

      <img src="./img/aboutuspic.webp" alt="About Us" className="center-image" />
    </main>
  );
};

export default Contact;



