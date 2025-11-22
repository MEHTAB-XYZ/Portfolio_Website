import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container contact-container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="contact-text">
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi,
          I'll try my best to get back to you!
        </p>

        <div className="contact-info">
          <div className="contact-item">
            <FaEnvelope className="icon" />
            <a href="mailto:mehtabarifahad@gmail.com">mehtabarifahad@gmail.com</a>
          </div>
          <div className="contact-item">
            <FaPhone className="icon" />
            <span>+91 7907424582</span>
          </div>
          <div className="contact-item">
            <FaMapMarkerAlt className="icon" />
            <span>Trivandrum, Kerala</span>
          </div>
        </div>

        <a href="mailto:mehtabarifahad@gmail.com" className="btn btn-primary big-btn">Say Hello</a>

        <div className="footer-socials">
          <a href="https://github.com/MEHTAB-XYZ" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/mehtab-arif-9243422aa/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        </div>

        <footer className="footer">
          <p>Designed & Built by Mehtab Arif</p>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
