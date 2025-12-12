import React from 'react';
import { Link } from 'react-router-dom';
import './CutAndSewPage.css';

/**
 * CutAndSewPage Component
 * Replicates the "Cut & Sew Customize" page of hongyuapparel.com
 */
const CutAndSewPage: React.FC = () => {
  const customProducts = [
    { name: 'Dresses', image: 'dress' },
    { name: 'Sleepwear', image: 'sleepwear' },
    { name: 'Swimwear', image: 'swimwear' },
    { name: 'Outdoor Clothing', image: 'outdoor' },
    { name: 'T-Shirts', image: 'tshirt' },
    { name: 'Hoodies', image: 'hoodie' },
  ];

  const features = [
    {
      title: 'Full Customization',
      description: 'Create unique designs from scratch with our comprehensive OEM service.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      ),
    },
    {
      title: 'Premium Fabrics',
      description: 'Access to a wide range of high-quality fabrics for your clothing line.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
    },
    {
      title: 'Advanced Technology',
      description: 'State-of-the-art printing and embroidery techniques for superior results.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="cut-and-sew-page">
      {/* Hero Section */}
      <section className="cs-hero">
        <div className="cs-hero__overlay"></div>
        <div className="container cs-hero__content">
          <h1 className="cs-hero__title">
            Clothing <span className="text-[#c8a96a]">Manufacturer</span>
          </h1>
          <p className="cs-hero__desc">
            With Navra, you can create unique custom OEM clothing that will make your fashion label stand out among the rest. Your customers are sick of seeing the same thing everywhere they go; give them something new and different that they won’t be able to find anywhere else!
          </p>
          <div className="cs-hero__actions">
            <Link to="/about" className="cs-hero__btn cs-hero__btn--primary">Custom Now</Link>
          </div>
        </div>
      </section>

      {/* Quick Access Nav */}
      <div className="cs-quick-access">
        <div className="container">
          <div className="cs-quick-access__label">Quick Access</div>
          <div className="cs-quick-access__list">
            <span>01 Custom Product Series</span>
            <span>02 Product Features</span>
            <span>03 How We Make it</span>
            <span>04 Fabric Option</span>
            <span>05 Technology</span>
            <span>06 Clients Reviews</span>
            <span>07 Why Choose Us</span>
          </div>
        </div>
      </div>

      {/* Custom Product Series */}
      <section className="cs-section">
        <div className="container">
          <h2 className="cs-section__title">Custom Product Series</h2>
          <div className="cs-products-grid">
            {customProducts.map((item, index) => (
              <div key={index} className="cs-product-card">
                <div className="cs-product-card__image">
                  <div className="cs-product-card__placeholder">
                    {/* Placeholder icon */}
                    <svg className="w-16 h-16 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
                <h3 className="cs-product-card__title">{item.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="cs-section bg-gray-50">
        <div className="container">
          <h2 className="cs-section__title">Product Features</h2>
          <div className="cs-features-grid">
            {features.map((feature, index) => (
              <div key={index} className="cs-feature-card">
                <div className="cs-feature-card__icon">{feature.icon}</div>
                <h3 className="cs-feature-card__title">{feature.title}</h3>
                <p className="cs-feature-card__desc">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fabric Options Preview */}
      <section className="cs-section">
        <div className="container">
          <h2 className="cs-section__title">Fabric Option</h2>
          <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
            We offer a vast selection of fabrics including Cotton, Polyester, Silk, Denim, and more.
          </p>
          <div className="text-center">
            <Link to="/fabrics" className="cs-btn-outline">
              View All Fabrics
            </Link>
          </div>
        </div>
      </section>

      {/* Technology Preview */}
      <section className="cs-section bg-gray-50">
        <div className="container">
          <h2 className="cs-section__title">Technology</h2>
          <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
            From DTG Printing to 3D Embroidery, we have the technology to execute your vision.
          </p>
          <div className="text-center">
            <Link to="/technology" className="cs-btn-outline">
              View Technologies
            </Link>
          </div>
        </div>
      </section>

      {/* Buyer's Guide / Tips */}
      <section className="cs-section">
        <div className="container">
          <h2 className="cs-section__title">5 Tips for Sourcing the Right Partner</h2>
          <div className="cs-guide-grid">
            {[
              { num: '01', title: 'Define Your Needs', text: 'Know exactly what you want to produce.' },
              { num: '02', title: 'Do Your Research', text: 'Look for experience and reviews.' },
              { num: '03', title: 'Consider Your Budget', text: 'Balance cost with quality requirements.' },
              { num: '04', title: 'Ask for Samples', text: 'Always verify quality before bulk orders.' },
              { num: '05', title: 'Negotiate Terms', text: 'Clarify lead times and MOQs upfront.' },
            ].map((tip, idx) => (
              <div key={idx} className="cs-tip-card">
                <span className="cs-tip-card__num">{tip.num}</span>
                <h3 className="cs-tip-card__title">{tip.title}</h3>
                <p className="cs-tip-card__text">{tip.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Bottom */}
      <section className="cs-cta-section">
        <div className="container">
          <h2 className="text-3xl font-bold mb-4">Ready to Create Your Custom Line?</h2>
          <p className="mb-8 text-white/80">Get in touch with our team to start your OEM manufacturing journey.</p>
          <Link to="/about" className="cs-hero__btn cs-hero__btn--primary bg-white text-[#c8a96a]">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CutAndSewPage;

