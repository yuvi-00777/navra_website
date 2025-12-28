import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { countryCodes } from '../data/countryCodes';

// Styles are expected to be loaded by the parent page (HomePage.css or ContactUsPage.css)
// or we can import a shared CSS file if we extracted it. 
// For now, relying on existing CSS classes.

const ContactForm: React.FC = () => {
  // Replace 'YOUR_FORMSPREE_ID' with your actual Formspree form ID
  const [state, handleSubmit] = useForm("xeejylvo");

  if (state.succeeded) {
      return (
          <div className="contact__form-success">
             <div style={{ color: 'green', marginTop: '10px', fontWeight: 'bold', fontSize: '1.1rem' }}>
                Thank you! Your enquiry has been sent successfully. We will contact you shortly.
             </div>
             <button 
                onClick={() => window.location.reload()} 
                style={{
                  marginTop: '20px',
                  padding: '10px 20px',
                  background: '#001F3F',
                  color: 'white',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer'
                }}
             >
               Send Another Message
             </button>
          </div>
      );
  }

  return (
    <form className="contact__form" onSubmit={handleSubmit}>
      <div className="contact__form-row">
        <div className="contact__form-group">
          <label htmlFor="name">Name *</label>
          <input
            type="text"
            id="name"
            name="name"
            className="contact__form-input"
            placeholder="Your Name"
            required
          />
          <ValidationError 
            prefix="Name" 
            field="name"
            errors={state.errors}
            style={{ color: 'red', fontSize: '0.8rem', marginTop: '5px' }}
          />
        </div>
        <div className="contact__form-group">
          <label htmlFor="email">Email *</label>
          <input
            type="email"
            id="email"
            name="email"
            className="contact__form-input"
            placeholder="Your Email"
            required
          />
          <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}
            style={{ color: 'red', fontSize: '0.8rem', marginTop: '5px' }}
          />
        </div>
      </div>

      <div className="contact__form-group">
        <label htmlFor="phone">Phone *</label>
        <div className="phone-input-group" style={{ display: 'flex', gap: '10px' }}>
          <select
            name="countryCode"
            id="countryCode"
            className="contact__form-select"
            style={{ width: '120px', minWidth: '120px' }}
            defaultValue="+1"
          >
            {countryCodes.map((country) => (
              <option key={country.code} value={country.dial_code}>
                {country.name} ({country.dial_code})
              </option>
            ))}
          </select>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="contact__form-input"
            placeholder="Phone Number"
            style={{ flex: 1 }}
            required
          />
        </div>
        <ValidationError 
          prefix="Phone" 
          field="phone"
          errors={state.errors}
          style={{ color: 'red', fontSize: '0.8rem', marginTop: '5px' }}
        />
      </div>

      <div className="contact__form-group">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          className="contact__form-textarea"
          placeholder="Tell us about your project..."
        ></textarea>
        <ValidationError 
          prefix="Message" 
          field="message"
          errors={state.errors}
          style={{ color: 'red', fontSize: '0.8rem', marginTop: '5px' }}
        />
      </div>

      <div className="contact__form-group contact__checkbox-group" style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginTop: '15px', marginBottom: '15px' }}>
        <input 
          type="checkbox" 
          id="contactConsent" 
          name="contactConsent" 
          required 
          style={{ marginTop: '4px', width: 'auto' }}
        />
        <label htmlFor="contactConsent" style={{ fontSize: '0.9rem', color: '#666', fontWeight: 'normal', lineHeight: '1.5' }}>
          By checking this box, you agree to allow the Navra team to contact you via email, phone, or message. We will reach out within 12 to 24 hours.
        </label>
      </div>

      <button 
        type="submit" 
        className="contact__form-submit"
        disabled={state.submitting}
      >
        {state.submitting ? 'Sending...' : 'Send Message'}
      </button>

      {state.errors && (
        <div style={{ color: 'red', marginTop: '10px', fontWeight: 'bold' }}>
          There was an error sending your message. Please check the fields and try again.
        </div>
      )}
    </form>
  );
};

export default ContactForm;
