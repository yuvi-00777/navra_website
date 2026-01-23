import React from 'react';
import { Link } from 'react-router-dom';
import './FabricsPage.css';
import ContactCTA from '../components/ContactCTA';
import { fabrics } from '../data/fabrics';

/**
 * FabricsPage Component
 * Replicates the fabrics page of hongyuapparel.com
 * Displays a grid of available fabric types with descriptions.
 */
const FabricsPage: React.FC = () => {
  return (
    <div className="fabrics-page">
      {/* Hero Banner */}
      <section className="fabrics-hero">
        <div className="fabrics-hero__decorations">
          <div className="fabrics-hero__decoration"></div>
        </div>
        <div className="container fabrics-hero__content">
          <h1 className="fabrics-hero__title">
            Fabrics Collection
          </h1>
          <p className="fabrics-hero__subtitle">
            Discover our extensive range of high-quality fabrics suitable for any garment or application.
          </p>
          <div className="mt-8">
            <Link to="/contact-us" className="fabrics-hero__cta">
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* Fabrics Grid */}
      <section className="fabrics-content">
        <div className="container">
          <div className="fabrics-header">
            <h2 className="fabrics-header__title">What We Have</h2>
            <div className="fabrics-header__line"></div>
          </div>
          
          <div className="fabrics-grid">
            {fabrics.map((fabric, index) => (
              <div 
                key={index} 
                className="fabric-card"
                style={{
                  backgroundImage: `url(${fabric.image})`,
                }}
              >
                <div className="fabric-card__overlay">
                  <h3 className="fabric-card__title">{fabric.name}</h3>
                  <p className="fabric-card__desc">{fabric.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <ContactCTA
        title="Need a specific fabric not listed here?"
        subtitle="We can source any material for your custom clothing line."
        buttonText="Contact Us"
      />
    </div>
  );
};

export default FabricsPage;
