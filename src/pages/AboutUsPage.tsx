import React from 'react';
import { Link } from 'react-router-dom';
import './AboutUsPage.css';

// Import images (using existing assets as placeholders for now)
import brandStyle1 from '../assets/brand-style-1.jpg';
import brandStyle2 from '../assets/brand-style-2.jpg';
import brandStyle3 from '../assets/brand-style-3.jpg';
import brandStyle4 from '../assets/brand-style-4.jpg';

/**
 * AboutUsPage Component
 * Updated content based on about_us.html
 */
const AboutUsPage: React.FC = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero__overlay"></div>
        <div className="container about-hero__content">
          <h1 className="about-hero__title">
            Crafted for the <span className="about-hero__highlight">World</span>
          </h1>
          {/* Kept the button as a useful CTA, though not explicitly in the HTML text content */}
          <div className="about-hero__actions">
            <Link to="/contact-us" className="about-hero__btn">Get Started</Link>
          </div>
        </div>
      </section>

      {/* Who are We? */}
      <section className="about-section">
        <div className="container">
          <div className="about-grid">
            <div>
              <h2 className="about-section__title about-section__title--left">Who are We?</h2>
              <div className="about-text">
                <p>
                  NAVRA was built on a simple but powerful belief — global apparel sourcing should be transparent, reliable, and collaborative.
                  <strong> Not chaotic. Not uncertain. Not hidden.</strong>
                </p>
                <br />
                <p>
                  Born in India and built for the world, NAVRA bridges the gap between what international buyers expect and what they actually receive. We bring together design intelligence, ethical sourcing, structured systems, and modern communication to make sourcing from India effortless and trustworthy.
                </p>
                <br />
                <p>
                  We are not middlemen.<br />
                  We are not traditional exporters.<br />
                  We are a new-generation sourcing partner — combining Indian craftsmanship with global sensibility.
                </p>
                <br />
                <p>
                  NAVRA represents a fresh rhythm in global trade: organized, data-driven, design-led, and deeply human.
                </p>
              </div>
            </div>
            <div className="about-image-wrapper">
               {/* Placeholder for home_page_1.png */}
               <img src={brandStyle1} alt="Who We Are" className="about-image" style={{ borderRadius: '8px', width: '100%', height: 'auto' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="about-section about-section--alt">
        <div className="container">
          <div className="about-grid">
             <div className="about-image-wrapper">
               {/* Placeholder for about_us_page_3.png */}
               <img src={brandStyle2} alt="Vision and Mission" className="about-image" style={{ borderRadius: '8px', width: '100%', height: 'auto' }} />
            </div>
            <div>
              <h2 className="about-section__title about-section__title--left">Vision & Mission</h2>
              <div className="about-text">
                <p>
                  To make sourcing apparel from India as easy, transparent, and trustworthy as possible — setting a new global standard for how trade is done.
                </p>
                <br />
                <p><strong>Simplify and humanize sourcing</strong> through transparent systems and clear communication.</p>
                <p><strong>Represent India globally</strong> — not just as a producer, but as a trusted partner in quality and innovation.</p>
                <p><strong>Build long-term relationships</strong> with brands, importers, and retailers worldwide.</p>
                <p><strong>Establish global distribution hubs</strong> for faster, direct collaboration.</p>
                <p><strong>Evolve into a full-scale ecosystem</strong> that blends design, technology, and supply chain intelligence.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Navra? */}
      <section className="about-section">
        <div className="container">
          <div className="about-grid">
             <div className="about-image-wrapper">
               {/* Placeholder for about_us_page_1.png */}
               <img src={brandStyle3} alt="Why Navra" className="about-image" style={{ borderRadius: '8px', width: '100%', height: 'auto' }} />
            </div>
            <div>
              <h2 className="about-section__title about-section__title--left">Why Navra?</h2>
              <div className="about-text">
                <p><strong>Relationships over Transactions</strong>: We don’t just ship products — we help brands grow.</p>
                <br />
                <p><strong>Transparency over Guesswork</strong>: Track production, quality, and progress in real time.</p>
                <br />
                <p><strong>Systems over Chaos</strong>: Clear communication, predictable timelines, and structured processes.</p>
                <br />
                <p><strong>Value over Price</strong>: Design support, reliability, and trust at the core.</p>
                <br />
                <p><strong>Brand-First over Factory-First</strong>: Your vision leads; we build around it.</p>
                <br />
                <p><strong>NAVRA is not the old way — it’s the smarter way to source.</strong></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Capabilities */}
      <section className="about-section about-section--alt">
        <div className="container">
          <div className="about-grid">
            <div>
              <h2 className="about-section__title about-section__title--left">Our Capabilities</h2>
              <div className="about-text">
                <p><strong>Design + Sourcing Hybrid:</strong> Creative collaboration with trend forecasts, color palettes, mockups, and product development — brands get ideas, not just execution.</p>
                <br />
                <p><strong>Flexible Manufacturing & Micro-Production:</strong> Scalable production from 50 to 50,000 units for startups, D2C brands, and global labels.</p>
                <br />
                <p><strong>Sustainability & Traceability:</strong> Every garment tells a story — verify fabric origin, ethical standards, and environmental impact.</p>
                <br />
                <p><strong>Quality Without Surprises:</strong> Pre-shipment QC tailored to buyers’ preferences — photo/video approvals, live virtual inspections, or third-party checks.</p>
                <br />
                <p><strong>End-to-End System:</strong> Centralized communication, predictable timelines, documented processes, timely follow-ups, and data-driven updates.</p>
              </div>
            </div>
             <div className="about-image-wrapper">
               {/* Placeholder for ChatGPT-Image... */}
               <img src={brandStyle4} alt="Our Capabilities" className="about-image" style={{ borderRadius: '8px', width: '100%', height: 'auto' }} />
            </div>
          </div>
        </div>
      </section>

      {/* The Future We are Building */}
      <section className="about-section">
        <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
          <h2 className="about-section__title">The Future We are Building</h2>
          
          <h3 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '2rem', color: '#374151' }}>
            NAVRA is on a long-term mission to transform India into the world’s most trusted apparel sourcing destination.
          </h3>
          
          <div className="about-text" style={{ textAlign: 'left', display: 'inline-block' }}>
            <p className="mb-4">Our future roadmap includes:</p>
            <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', marginBottom: '2rem' }}>
              <li className="mb-2">Developing a global brand accelerator for startups</li>
              <li className="mb-2">Creating a "Fashion Cloud" — a digital library of fabrics, trims, suppliers, and timelines</li>
              <li className="mb-2">Launching NAVRA’s own distribution hubs abroad</li>
              <li className="mb-2">Growing "House of Vibes" into a global youth brand</li>
              <li className="mb-2">And eventually, creating a legacy that uplifts India’s next generation of manufacturers and designers</li>
            </ul>
          </div>
          
          <div style={{ marginTop: '2rem' }}>
            <p style={{ fontSize: '1.25rem', color: '#111827' }}>
              NAVRA is not just a company.<br />
              <strong style={{ fontSize: '1.5rem', color: '#001F3F' }}>It’s a movement.</strong>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;
