import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './ContactUsPage.css';

/**
 * ContactUsPage Component
 * Replicates the "Contact Us" page of hongyuapparel.com
 */
const ContactUsPage: React.FC = () => {
  // Replace 'YOUR_FORM_ID' with your actual Formspree Form ID
  const [state, handleSubmit] = useForm("YOUR_FORM_ID");

  if (state.succeeded) {
    return (
      <div className="contact-page">
         <section className="contact-hero">
            <div className="contact-hero__overlay"></div>
            <div className="container contact-hero__content">
              <h1 className="contact-hero__title text-white">Thank You!</h1>
              <p className="contact-hero__desc">
                  Your enquiry has been sent successfully. We will get back to you within 24 hours.
              </p>
            </div>
         </section>
      </div>
    );
  }

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
                      id="name"
                      className="contact__form-input" 
                      placeholder="Your name" 
                      required
                    />
                     <ValidationError 
                        prefix="Name" 
                        field="name"
                        errors={state.errors}
                      />
                  </div>
                  <div className="contact__form-group">
                    <label>Email *</label>
                    <input 
                      type="email" 
                      name="email"
                      id="email"
                      className="contact__form-input" 
                      placeholder="your@email.com" 
                      required
                    />
                    <ValidationError 
                        prefix="Email" 
                        field="email"
                        errors={state.errors}
                      />
                  </div>
                </div>
                <div className="contact__form-group">
                  <label>Company Name</label>
                  <input 
                    type="text" 
                    name="company"
                    id="company"
                    className="contact__form-input" 
                    placeholder="Your company" 
                  />
                  <ValidationError 
                        prefix="Company" 
                        field="company"
                        errors={state.errors}
                      />
                </div>
                <div className="contact__form-group">
                  <label>Message *</label>
                  <textarea 
                    name="message"
                    id="message"
                    rows={4} 
                    className="contact__form-textarea" 
                    placeholder="Tell us about your project..."
                    required
                  ></textarea>
                  <ValidationError 
                        prefix="Message" 
                        field="message"
                        errors={state.errors}
                      />
                </div>
                <button type="submit" className="contact__form-submit" disabled={state.submitting}>
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
