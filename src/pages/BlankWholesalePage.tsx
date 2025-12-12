import React from 'react';
import { Link } from 'react-router-dom';
import './BlankWholesalePage.css';

/**
 * BlankWholesalePage Component
 * Replicates the "Readymade Garments Manufacturers" / "Blank Wholesale" page of hongyuapparel.com
 */
const BlankWholesalePage: React.FC = () => {
  const customProducts = [
    { name: 'T-Shirts', image: 'tshirt' },
    { name: 'Sleepwear', image: 'sleepwear' },
    { name: 'Swimwear', image: 'swimwear' },
    { name: 'Hoodies', image: 'hoodie' },
    { name: 'Accessories', image: 'accessories' },
  ];

  const features = [
    {
      title: 'Ready to Ship',
      description: 'Extensive stock of high-quality blanks ready for immediate dispatch.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
        </svg>
      ),
    },
    {
      title: 'Premium Quality',
      description: 'Fabrics and stitching designed to last, perfect for your brand.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'Low MOQ',
      description: 'Start small with our flexible minimum order quantities.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="blank-wholesale-page">
      {/* Hero Section */}
      <section className="bw-hero">
        <div className="bw-hero__overlay"></div>
        <div className="container bw-hero__content">
          <h1 className="bw-hero__title">
            Readymade Garments <span className="text-[#c8a96a]">Manufacturers</span>
          </h1>
          <p className="bw-hero__desc">
            With Navra, you can create unique custom readymade garments that will make your fashion label stand out among the rest. Your customers are sick of seeing the same thing everywhere they go; give them something new and different that they won’t be able to find anywhere else!
          </p>
          <div className="bw-hero__actions">
            <Link to="/about" className="bw-hero__btn bw-hero__btn--primary">Custom Now</Link>
          </div>
        </div>
      </section>

      {/* Quick Access Nav */}
      <div className="bw-quick-access">
        <div className="container">
          <div className="bw-quick-access__label">Quick Access</div>
          <div className="bw-quick-access__list">
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
      <section className="bw-section">
        <div className="container">
          <h2 className="bw-section__title">Custom Product Series</h2>
          <div className="bw-products-grid">
            {customProducts.map((item, index) => (
              <div key={index} className="bw-product-card">
                <div className="bw-product-card__image">
                  <div className="bw-product-card__placeholder">
                    {/* Placeholder icon */}
                    <svg className="w-16 h-16 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
                <h3 className="bw-product-card__title">{item.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bw-section bg-gray-50">
        <div className="container">
          <h2 className="bw-section__title">Product Features</h2>
          <div className="bw-features-grid">
            {features.map((feature, index) => (
              <div key={index} className="bw-feature-card">
                <div className="bw-feature-card__icon">{feature.icon}</div>
                <h3 className="bw-feature-card__title">{feature.title}</h3>
                <p className="bw-feature-card__desc">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fabric Options Preview */}
      <section className="bw-section">
        <div className="container">
          <h2 className="bw-section__title">Fabric Option</h2>
          <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
            Choose from a variety of premium fabrics ready for your brand.
          </p>
          <div className="text-center">
            <Link to="/fabrics" className="bw-btn-outline">
              View Fabrics
            </Link>
          </div>
        </div>
      </section>

      {/* Technology Preview */}
      <section className="bw-section bg-gray-50">
        <div className="container">
          <h2 className="bw-section__title">Technology</h2>
          <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
            Advanced manufacturing processes ensuring consistency and quality.
          </p>
          <div className="text-center">
            <Link to="/technology" className="bw-btn-outline">
              View Technologies
            </Link>
          </div>
        </div>
      </section>

      {/* Buyer's Guide / Tips */}
      <section className="bw-section">
        <div className="container">
          <h2 className="bw-section__title">5 Things to Consider</h2>
          <div className="bw-guide-grid">
            {[
              { num: '01', title: 'Location', text: 'Consider shipping times and communication.' },
              { num: '02', title: 'Reputation', text: 'Check reviews and past work.' },
              { num: '03', title: 'Cost', text: 'Balance unit price with quality.' },
              { num: '04', title: 'Services', text: 'Look for full-package production.' },
              { num: '05', title: 'Customization', text: 'Ensure they can meet your design needs.' },
            ].map((tip, idx) => (
              <div key={idx} className="bw-tip-card">
                <span className="bw-tip-card__num">{tip.num}</span>
                <h3 className="bw-tip-card__title">{tip.title}</h3>
                <p className="bw-tip-card__text">{tip.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Bottom */}
      <section className="bw-cta-section">
        <div className="container">
          <h2 className="text-3xl font-bold mb-4">Ready to Stock Your Store?</h2>
          <p className="mb-8 text-white/80">Get high-quality blank apparel for your business today.</p>
          <Link to="/about" className="bw-hero__btn bw-hero__btn--primary bg-white text-[#c8a96a]">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
};

export default BlankWholesalePage;

