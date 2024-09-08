import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="section">
      <h2>Contact Me</h2>
      <form id="contactForm">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" required></textarea>

        <button type="submit">Send</button>
      </form>
      <div className="social-links">
        <a href="https://twitter.com/your-twitter" target="_blank"><i className="fab fa-twitter"></i></a>
        <a href="https://linkedin.com/in/your-linkedin" target="_blank"><i className="fab fa-linkedin"></i></a>
        <a href="https://github.com/your-github" target="_blank"><i className="fab fa-github"></i></a>
      </div>
      <p><a href="https://calendly.com/your-calendly-link">Schedule a meeting</a></p>
    </section>
  );
};

export default Contact;
