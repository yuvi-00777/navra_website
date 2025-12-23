import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

// Styles are expected to be loaded by the parent page (HomePage.css or ContactUsPage.css)
// or we can import a shared CSS file if we extracted it. 
// For now, relying on existing CSS classes.

const ContactForm: React.FC = () => {
  // Replace 'YOUR_FORMSPREE_ID' with your actual Formspree form ID
  const [state, handleSubmit] = useForm("xvzpvyab");

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

      <div className="contact__form-row">
        <div className="contact__form-group">
          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="contact__form-input"
            placeholder="Your Phone Number"
          />
          <ValidationError 
            prefix="Phone" 
            field="phone"
            errors={state.errors}
            style={{ color: 'red', fontSize: '0.8rem', marginTop: '5px' }}
          />
        </div>
        <div className="contact__form-group">
          <label htmlFor="service">Service Interested In</label>
          <select
            id="service"
            name="service"
            className="contact__form-select"
            defaultValue="General Inquiry"
          >
            <option value="General Inquiry">General Inquiry</option>
            <option value="Blank Wholesale">Blank Wholesale</option>
            <option value="Logo Customization">Logo Customization</option>
            <option value="Cut & Sew Manufacturing">Cut & Sew Manufacturing</option>
            <option value="Private Label">Private Label</option>
            <option value="Sample Development">Sample Development</option>
          </select>
          <ValidationError 
            prefix="Service" 
            field="service"
            errors={state.errors}
            style={{ color: 'red', fontSize: '0.8rem', marginTop: '5px' }}
          />
        </div>
      </div>

      <div className="contact__form-group">
        <label htmlFor="message">Message *</label>
        <textarea
          id="message"
          name="message"
          className="contact__form-textarea"
          placeholder="Tell us about your project..."
          required
        ></textarea>
        <ValidationError 
          prefix="Message" 
          field="message"
          errors={state.errors}
          style={{ color: 'red', fontSize: '0.8rem', marginTop: '5px' }}
        />
      </div>

      <button 
        type="submit" 
        className="contact__form-submit"
        disabled={state.submitting}
      >
        {state.submitting ? 'Sending...' : 'Send Message'}
      </button>

      {state.errors && state.errors.length > 0 && (
        <div style={{ color: 'red', marginTop: '10px', fontWeight: 'bold' }}>
          There was an error sending your message. Please check the fields and try again.
        </div>
      )}
    </form>
  );
};

export default ContactForm;
