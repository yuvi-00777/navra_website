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
    { name: 'DTF Printing', image: 'https://www.hongyuapparel.com/wp-content/uploads/2025/04/烫画-1.jpg' },
    { name: 'DTG Printing', image: 'https://www.hongyuapparel.com/wp-content/uploads/2025/04/DTG.jpg' },
    { name: 'Puff Printing', image: 'https://www.hongyuapparel.com/wp-content/uploads/2025/04/未标题-2.jpg' },
    { name: 'Screen Printing', image: 'https://www.hongyuapparel.com/wp-content/uploads/2025/04/丝网印.jpg' },
    { name: 'Flat Embroidery', image: 'https://www.hongyuapparel.com/wp-content/uploads/2025/04/未标题-2-1.jpg' },
    { name: '3D Embroidery', image: 'https://www.hongyuapparel.com/wp-content/uploads/2025/04/3D-embroidery.jpg' },
    { name: 'Terry Embroidery', image: 'https://www.hongyuapparel.com/wp-content/uploads/2025/04/未标题-2-2.jpg' },
    { name: 'Applique Embroidery', image: 'https://www.hongyuapparel.com/wp-content/uploads/2025/04/未标题-2-4.jpg' },
    { name: 'Embroidery Patch', image: 'https://www.hongyuapparel.com/wp-content/uploads/2025/04/未标题-3.jpg' },
    { name: 'Rhinestone', image: 'https://www.hongyuapparel.com/wp-content/uploads/2025/04/未标题-2-10.jpg' },
    { name: 'Rubber Printing', image: 'https://www.hongyuapparel.com/wp-content/uploads/2025/04/未标题-2-6.jpg' },
    { name: 'Flocking', image: 'https://www.hongyuapparel.com/wp-content/uploads/2025/04/未标题-2-5.jpg' },
    { name: 'Embossing', image: 'https://www.hongyuapparel.com/wp-content/uploads/2025/07/Embossing.jpg' },
    { name: 'Reflective Printing', image: 'https://www.hongyuapparel.com/wp-content/uploads/2025/04/Reflective-Printing.jpg' },
    { name: 'Metallic Printing', image: 'https://www.hongyuapparel.com/wp-content/uploads/2025/04/Metallic-Printing-1.jpg' },
    { name: 'Laser', image: 'https://www.hongyuapparel.com/wp-content/uploads/2025/04/laser.jpg' },
    { name: 'Glitter', image: 'https://www.hongyuapparel.com/wp-content/uploads/2025/08/下载-1.jpg' },
  ];

  return (
    <div className="technology-page">
      {/* Hero Banner */}
      <section className="technology-hero">
        <div className="technology-hero__decorations">
          <div className="technology-hero__decoration"></div>
        </div>
        <div className="container technology-hero__content">
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
                  <img 
                    src={tech.image} 
                    alt={tech.name} 
                    className="technology-card__image"
                    loading="lazy"
                  />
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
