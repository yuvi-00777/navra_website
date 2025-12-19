import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ServicesPage.css';

/**
 * ServicesPage Component
 * Replicates the "Services" page of hongyuapparel.com
 */
const ServicesPage: React.FC = () => {
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

  const services = [
    {
      title: 'Clothing Prototype',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      path: '/services/clothing-prototype'
    },
    {
      title: 'Sample Development',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
      ),
      path: '/services/sample-development'
    },
    {
      title: 'Apparel Production',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      path: '/services/apparel-production'
    },
    {
      title: 'Labels & Tags & Packaging',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
        </svg>
      ),
      path: '/services/labels-tags-packaging'
    },
    {
      title: 'Global Shipping',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      path: '/services/global-shipping'
    },
    {
      title: 'Product Photography',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      path: '/services/product-photography'
    }
  ];

  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="services-hero__overlay"></div>
        <div className="container services-hero__content">
          <div className="services-hero__subtitle">Clothing Manufacturer</div>
          <h1 className="services-hero__title">
            For <span className="services-hero__highlight">Startups</span>
          </h1>
          <p className="services-hero__desc">
            Whether you have an online or offline business, bringing your designs into production is not that easy. There are a lot of questions coming in and important decisions must be made. That’s why we are here! We are your reliable partner in providing the right solution for your business.
          </p>
          <div className="services-hero__actions">
            <Link to="/contact-us" className="services-hero__btn services-hero__btn--primary">Get Started</Link>
          </div>
        </div>
      </section>

      {/* Business Type Section */}
      <section className="services-section services-section--alt">
        <div className="container">
          <h2 className="services-section__title">What’s Your Business?</h2>
          <div className="business-type-wrapper">
            <button className="business-type-btn">
              <span className="business-type-dot"></span>
              I’m a Start-up Brand
            </button>
            <button className="business-type-btn">
              <span className="business-type-dot"></span>
              I'm a Scale-up Brand
            </button>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="services-section">
        <div className="container">
          <h2 className="services-section__title">Services We Provide</h2>
          <div className="services-grid">
            {services.map((service, index) => (
              <Link to={service.path} key={index} className="service-card">
                <div className="service-card__icon">
                  {service.icon}
                </div>
                <h3 className="service-card__title">
                  {service.title}
                </h3>
                </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section (Reusing structure from ContactUsPage/HomePage) */}
      <section className="contact">
        <div className="contact__container">
          <div className="contact__grid">
            <div className="contact__info">
              <h2>You've already taken the first step? <span>Talk to us.</span></h2>
              <p>Sure. Why Not!</p>
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

export default ServicesPage;
