import React from 'react';
import { Link } from 'react-router-dom';
import './LogoCustomizePage.css';

/**
 * LogoCustomizePage Component
 * Replicates the "Logo Customize" / "Custom Clothing Manufacturer" page of hongyuapparel.com
 */
const LogoCustomizePage: React.FC = () => {
  const customProducts = [
    { name: 'T-Shirts', image: 'tshirt' },
    { name: 'Hoodies', image: 'hoodie' },
    { name: 'Pants', image: 'pants' },
    { name: 'Kids Wear', image: 'kids' },
    { name: 'Accessories', image: 'accessories' },
  ];

  const features = [
    {
      title: 'Ready to Print',
      description: 'Choose from 1,000+ styles ready for your logo.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: 'Premium Printing',
      description: 'High-quality DTG, Puff, and Screen Printing options.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
    },
    {
      title: 'Fast Delivery',
      description: '7-day global delivery for quick market entry.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="logo-customize-page">
      {/* Hero Section */}
      <section className="lc-hero">
        <div className="lc-hero__overlay"></div>
        <div className="container lc-hero__content">
          <h1 className="lc-hero__title">
            Logo Customize <span className="text-[#c8a96a]">Manufacturer</span>
          </h1>
          <p className="lc-hero__desc">
            Skip the wait! Choose from 1,000+ ready-to-print styles (hoodies, tees, caps) and add your logo with premium DTG, or heat transfer printing/embroidery. 7-day global delivery – You Focus on marketing, we’ll nail production.
          </p>
          <div className="lc-hero__actions">
            <Link to="/about" className="lc-hero__btn lc-hero__btn--primary">Custom Now</Link>
          </div>
        </div>
      </section>

      {/* Quick Access Nav */}
      <div className="lc-quick-access">
        <div className="container">
          <div className="lc-quick-access__label">Quick Access</div>
          <div className="lc-quick-access__list">
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
      <section className="lc-section">
        <div className="container">
          <h2 className="lc-section__title">Custom Product Series</h2>
          <div className="lc-products-grid">
            {customProducts.map((item, index) => (
              <div key={index} className="lc-product-card">
                <div className="lc-product-card__image">
                  <div className="lc-product-card__placeholder">
                    {/* Placeholder icon */}
                    <svg className="w-16 h-16 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
                <h3 className="lc-product-card__title">{item.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="lc-section bg-gray-50">
        <div className="container">
          <h2 className="lc-section__title">Product Features</h2>
          <div className="lc-features-grid">
            {features.map((feature, index) => (
              <div key={index} className="lc-feature-card">
                <div className="lc-feature-card__icon">{feature.icon}</div>
                <h3 className="lc-feature-card__title">{feature.title}</h3>
                <p className="lc-feature-card__desc">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fabric Options Preview */}
      <section className="lc-section">
        <div className="container">
          <h2 className="lc-section__title">Fabric Option</h2>
          <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
            We use premium blanks ensuring your logo sits on high-quality fabric.
          </p>
          <div className="text-center">
            <Link to="/fabrics" className="lc-btn-outline">
              View Fabrics
            </Link>
          </div>
        </div>
      </section>

      {/* Technology Preview */}
      <section className="lc-section bg-gray-50">
        <div className="container">
          <h2 className="lc-section__title">Technology</h2>
          <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
            DTG, Puff Printing, Embroidery, and more. We have the tech to make your logo pop.
          </p>
          <div className="text-center">
            <Link to="/technology" className="lc-btn-outline">
              View Technologies
            </Link>
          </div>
        </div>
      </section>

      {/* Buyer's Guide / Tips */}
      <section className="lc-section">
        <div className="container">
          <h2 className="lc-section__title">5 Traps To Avoid</h2>
          <div className="lc-guide-grid">
            {[
              { num: '01', title: 'Not Doing Research', text: 'Know your market before you start.' },
              { num: '02', title: 'Single Supplier Reliance', text: 'Diversify your manufacturing partners.' },
              { num: '03', title: 'No Clear Niche', text: 'Define your target audience clearly.' },
              { num: '04', title: 'No Marketing Plan', text: 'Have a sales strategy ready.' },
              { num: '05', title: 'No Budget', text: 'Plan your finances realistically.' },
            ].map((tip, idx) => (
              <div key={idx} className="lc-tip-card">
                <span className="lc-tip-card__num">{tip.num}</span>
                <h3 className="lc-tip-card__title">{tip.title}</h3>
                <p className="lc-tip-card__text">{tip.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Bottom */}
      <section className="lc-cta-section">
        <div className="container">
          <h2 className="text-3xl font-bold mb-4">Start Your Custom Brand Today</h2>
          <p className="mb-8 text-white/80">Get your logo on premium apparel in just 7 days.</p>
          <Link to="/about" className="lc-hero__btn lc-hero__btn--primary bg-white text-[#c8a96a]">
            Start Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default LogoCustomizePage;

