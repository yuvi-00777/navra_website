import React, { useState } from 'react';
import * as XLSX from 'xlsx';
import './ContactUsPage.css';

/**
 * ContactUsPage Component
 * Replicates the "Contact Us" page of hongyuapparel.com
 */
const ContactUsPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://127.0.0.1:5001/api/enquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Thank you! Your enquiry has been sent successfully.");
        // Reset form
        setFormData({
          name: '',
          email: '',
          company: '',
          message: ''
        });
      } else {
        throw new Error('Failed to submit enquiry');
      }
    } catch (error) {
      console.error('Error submitting enquiry:', error);
      alert(`There was an error submitting your enquiry: ${error instanceof Error ? error.message : String(error)}. Please check if the backend server is running.`);
    }
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero__overlay"></div>
        <div className="container contact-hero__content">
          <h1 className="contact-hero__title text-white">
            Let's Take Your Brand to <span className="contact-hero__highlight">Next Level</span>
          </h1>
          <p className="contact-hero__desc">
            Get in touch with our team of experts to start your clothing manufacturing journey.
          </p>
        </div>
      </section>

      {/* Main Content (Replaced with HomePage Contact Section) */}
      <section className="contact">
        <div className="contact__container">
          <div className="contact__grid">
            <div className="contact__info">
              <h2>You've already taken the first step? <span>Talk to us.</span></h2>
              <p>
                Ready to start your clothing line? Fill out the form and our team will get back to you within 24 hours.
              </p>
              <div className="contact__details">
                <div className="contact__detail-item">
                  <div className="contact__detail-icon">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <span className="contact__detail-text">+86 188 2580 3155</span>
                </div>
                <div className="contact__detail-item">
                  <div className="contact__detail-icon">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="contact__detail-text">info@navra.com</span>
                </div>
              </div>
            </div>

            <div className="contact__form-wrapper">
              <h3 className="contact__form-title">Get in Touch</h3>
              <form className="contact__form" onSubmit={handleSubmit}>
                <div className="contact__form-row">
                  <div className="contact__form-group">
                    <label>Name *</label>
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="contact__form-input" 
                      placeholder="Your name" 
                      required
                    />
                  </div>
                  <div className="contact__form-group">
                    <label>Email *</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="contact__form-input" 
                      placeholder="your@email.com" 
                      required
                    />
                  </div>
                </div>
                <div className="contact__form-group">
                  <label>Company Name</label>
                  <input 
                    type="text" 
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="contact__form-input" 
                    placeholder="Your company" 
                  />
                </div>
                <div className="contact__form-group">
                  <label>Message *</label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4} 
                    className="contact__form-textarea" 
                    placeholder="Tell us about your project..."
                    required
                  ></textarea>
                </div>
                <button type="submit" className="contact__form-submit">
                  Send Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUsPage;
