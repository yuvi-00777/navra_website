import React from 'react';
import { Link } from 'react-router-dom';
import './ContactCTA.css';

interface ContactCTAProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  link?: string;
}

const ContactCTA: React.FC<ContactCTAProps> = ({ 
  title = "Ready to Create Your Custom Line?", 
  subtitle = "Get in touch with our team to start your manufacturing journey.",
  buttonText = "Contact Us",
  link = "/contact-us"
}) => {
  return (
    <section className="contact-cta-section">
      <div className="contact-cta-decoration"></div>
      <div className="container">
        <div className="contact-cta-content">
          <h2 className="contact-cta-title">{title}</h2>
          <p className="contact-cta-subtitle">{subtitle}</p>
          <Link to={link} className="contact-cta-btn">
            {buttonText}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;

