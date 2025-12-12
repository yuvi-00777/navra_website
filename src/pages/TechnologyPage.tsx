import React from 'react';
import { Link } from 'react-router-dom';
import './TechnologyPage.css';

/**
 * TechnologyPage Component
 * Replicates the technology page of hongyuapparel.com
 * Displays various printing and manufacturing technologies.
 */
const TechnologyPage: React.FC = () => {
  const technologies = [
    { name: 'DTF Printing', image: 'dtf' },
    { name: 'DTG Printing', image: 'dtg' },
    { name: 'Puff Printing', image: 'puff' },
    { name: 'Screen Printing', image: 'screen' },
    { name: 'Flat Embroidery', image: 'flat-embroidery' },
    { name: '3D Embroidery', image: '3d-embroidery' },
    { name: 'Terry Embroidery', image: 'terry-embroidery' },
    { name: 'Applique Embroidery', image: 'applique' },
    { name: 'Embroidery Patch', image: 'patch' },
    { name: 'Rhinestone', image: 'rhinestone' },
    { name: 'Rubber Printing', image: 'rubber' },
    { name: 'Flocking', image: 'flocking' },
    { name: 'Embossing', image: 'embossing' },
    { name: 'Reflective Printing', image: 'reflective' },
    { name: 'Metallic Printing', image: 'metallic' },
    { name: 'Laser', image: 'laser' },
    { name: 'Glitter', image: 'glitter' },
  ];

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
            <Link to="/about" className="technology-hero__cta">
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* Technology Grid */}
      <section className="technology-content">
        <div className="container">
          <div className="technology-header">
            <h2 className="technology-header__title">What We Have</h2>
            <div className="technology-header__line"></div>
          </div>
          
          <div className="technology-grid">
            {technologies.map((tech, index) => (
              <div key={index} className="technology-card">
                <div className="technology-card__image-wrapper">
                  {/* Placeholder for technology images */}
                  <div className={`technology-card__image bg-gradient-to-br ${
                    index % 3 === 0 ? 'from-gray-100 to-gray-200' :
                    index % 3 === 1 ? 'from-gray-50 to-gray-100' :
                    'from-white to-gray-50'
                  }`}>
                    <svg className="w-16 h-16 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <div className="technology-card__overlay">
                    <Link to="/about" className="technology-card__btn">
                      Learn More
                    </Link>
                  </div>
                </div>
                <h3 className="technology-card__title">{tech.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="technology-cta-section">
        <div className="container">
          <div className="technology-cta-box">
            <h2>Looking for a specific technique?</h2>
            <p>Our experts can advise on the best printing or embroidery method for your design.</p>
            <Link to="/about" className="technology-cta-btn">
              Consult an Expert
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TechnologyPage;

