import React from 'react';
import { Link } from 'react-router-dom';
import PrintOptions from '../components/PrintOptions';
import './TechnologyPage.css';

/**
 * TechnologyPage Component
 * Replicates the technology page of hongyuapparel.com
 * Displays various printing and manufacturing technologies.
 */
const TechnologyPage: React.FC = () => {
  return (
    <div className="technology-page">
      {/* Hero Banner */}
      <section className="technology-hero">
        <div className="technology-hero__decorations">
          <div className="technology-hero__decoration"></div>
        </div>
        <div className="container technology-hero__content">
          <span className="technology-hero__badge">
            Advanced Manufacturing
          </span>
          <h1 className="technology-hero__title">
            Our Technology
          </h1>
          <p className="technology-hero__subtitle">
            State-of-the-art printing and embroidery techniques to bring your designs to life.
          </p>
          <div className="mt-8">
            <Link to="/contact-us" className="technology-hero__cta">
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* Technology Grid - Replaced with PrintOptions component */}
      <PrintOptions />

      {/* CTA Section */}
      <section className="technology-cta-section">
        <div className="container">
          <div className="technology-cta-box">
            <h2>Looking for a specific technique?</h2>
            <p>Our experts can advise on the best printing or embroidery method for your design.</p>
            <Link to="/contact-us" className="technology-cta-btn">
              Consult an Expert
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TechnologyPage;
