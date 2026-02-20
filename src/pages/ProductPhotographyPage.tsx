import React from 'react';
import { Link } from 'react-router-dom';
import './ProductPhotographyPage.css';
import ContactCTA from '../components/ContactCTA';

/**
 * ProductPhotographyPage Component
 * Product Photography page for Navra
 */
const ProductPhotographyPage: React.FC = () => {
  return (
    <div className="photo-page">
      {/* Hero Section */}
      <section className="photo-hero">
        <div className="photo-hero__overlay"></div>
        <div className="container photo-hero__content">
          <h1 className="photo-hero__title">
            06. Product <span className="photo-hero__highlight">Photography</span>
          </h1>
          <p className="photo-hero__desc">
            High-quality product photography is essential for your brand's success. We offer professional photography services to help you showcase your apparel in the best light for your website, catalog, and marketing materials.
          </p>
          <div className="photo-hero__actions">
            <Link to="/contact-us" className="photo-hero__btn photo-hero__btn--primary">Book a Session</Link>
          </div>
        </div>
      </section>

      {/* Service Info */}
      <section className="photo-section">
        <div className="container">
          <div className="photo-grid">
            <div>
              <h2 className="photo-section__title photo-section__title--left">Professional Apparel Photography</h2>
              <p className="photo-text">
                We understand that clear, high-resolution images are critical for online sales. Our experienced photographers specialize in apparel and fashion photography.
              </p>
              <div className="photo-service-box">
                <h3 className="photo-service-title">Our Services Include:</h3>
                <ul className="photo-service-list">
                  <li className="photo-service-item">
                    <span className="photo-service-icon">✓</span>
                    <span>Low-cost professional photography</span>
                  </li>
                  <li className="photo-service-item">
                    <span className="photo-service-icon">✓</span>
                    <span>High-resolution images suitable for catalogs & line sheets</span>
                  </li>
                  <li className="photo-service-item">
                    <span className="photo-service-icon">✓</span>
                    <span>Ghost mannequin, flat lay, or model shots</span>
                  </li>
                  <li className="photo-service-item">
                    <span className="photo-service-icon">✓</span>
                    <span>Professional image editing and retouching</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="photo-image-placeholder">
               {/* Placeholder for photography setup image */}
               <div className="photo-image-text">
                 Studio Setup
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Package Details */}
      <section className="photo-section photo-section--alt">
        <div className="container">
          <h2 className="photo-section__title">Our Most Popular Package</h2>
          <div className="photo-package-box">
            <p className="photo-package-subtitle">
              Everything you need to launch your product online.
            </p>
            <div className="photo-package-grid">
              <div className="photo-package-item">
                <span className="photo-package-icon">📸</span>
                <span className="photo-package-label">Front View</span>
              </div>
              <div className="photo-package-item">
                <span className="photo-package-icon">📸</span>
                <span className="photo-package-label">Back View</span>
              </div>
              <div className="photo-package-item">
                <span className="photo-package-icon">📸</span>
                <span className="photo-package-label">Side View</span>
              </div>
              <div className="photo-package-item">
                <span className="photo-package-icon">🔍</span>
                <span className="photo-package-label">Detail Shots</span>
              </div>
            </div>
            <p className="photo-package-note">
              *Includes 6-8 high-resolution edited photos per garment.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Bottom */}
      <ContactCTA 
        title="Capture Your Brand's Best Look"
        subtitle="Get professional photos without the hassle of hiring a separate studio."
        buttonText="Contact Us"
      />
    </div>
  );
};

export default ProductPhotographyPage;
