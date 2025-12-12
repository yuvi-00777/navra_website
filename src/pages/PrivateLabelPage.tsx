import React from 'react';
import { Link } from 'react-router-dom';
import './PrivateLabelPage.css';

/**
 * PrivateLabelPage Component
 * Replicates the "Private Label Clothing Manufacturers" page of hongyuapparel.com
 */
const PrivateLabelPage: React.FC = () => {
  const customProducts = [
    { name: 'T-Shirts', image: 'tshirt' },
    { name: 'Sleepwear', image: 'sleepwear' },
    { name: 'Swimwear', image: 'swimwear' },
    { name: 'Hoodies', image: 'hoodie' },
    { name: 'Accessories', image: 'accessories' },
  ];

  const features = [
    {
      title: 'Full Branding',
      description: 'Custom tags, labels, and packaging to make the product uniquely yours.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
        </svg>
      ),
    },
    {
      title: 'Design Freedom',
      description: 'Customize fit, style, color, and design to match your brand identity.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      ),
    },
    {
      title: 'Scalable Production',
      description: 'From small batches to large volume orders, we grow with your brand.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
    },
  ];

  return (
    <div className="private-label-page">
      {/* Hero Section */}
      <section className="pl-hero">
        <div className="pl-hero__overlay"></div>
        <div className="container pl-hero__content">
          <h1 className="pl-hero__title">
            Private Label Clothing <span className="text-[#c8a96a]">Manufacturers</span>
          </h1>
          <p className="pl-hero__desc">
            With Navra, you can create unique custom private label clothing that will make your fashion label stand out among the rest. Your customers are sick of seeing the same thing everywhere they go; give them something new and different that they won’t be able to find anywhere else!
          </p>
          <div className="pl-hero__actions">
            <Link to="/about" className="pl-hero__btn pl-hero__btn--primary">Custom Now</Link>
          </div>
        </div>
      </section>

      {/* Quick Access Nav */}
      <div className="pl-quick-access">
        <div className="container">
          <div className="pl-quick-access__label">Quick Access</div>
          <div className="pl-quick-access__list">
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
      <section className="pl-section">
        <div className="container">
          <h2 className="pl-section__title">Custom Product Series</h2>
          <div className="pl-products-grid">
            {customProducts.map((item, index) => (
              <div key={index} className="pl-product-card">
                <div className="pl-product-card__image">
                  <div className="pl-product-card__placeholder">
                    {/* Placeholder icon */}
                    <svg className="w-16 h-16 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
                <h3 className="pl-product-card__title">{item.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="pl-section bg-gray-50">
        <div className="container">
          <h2 className="pl-section__title">Why Choose Private Label?</h2>
          <div className="pl-features-grid">
            {features.map((feature, index) => (
              <div key={index} className="pl-feature-card">
                <div className="pl-feature-card__icon">{feature.icon}</div>
                <h3 className="pl-feature-card__title">{feature.title}</h3>
                <p className="pl-feature-card__desc">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customization Options */}
      <section className="pl-section">
        <div className="container">
          <h2 className="pl-section__title">Customization Options</h2>
          <div className="pl-options-grid">
            {[
              { title: 'Fit', desc: 'Custom sizing for different body types.' },
              { title: 'Style', desc: 'Unique styles for any occasion.' },
              { title: 'Color', desc: 'Custom dye and color matching.' },
              { title: 'Design', desc: 'Create unique patterns and prints.' },
              { title: 'Logo', desc: 'Your brand, your logo, everywhere.' },
            ].map((opt, idx) => (
              <div key={idx} className="pl-option-card">
                <h3 className="pl-option-card__title">{opt.title}</h3>
                <p className="pl-option-card__desc">{opt.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Buyer's Guide / Tips */}
      <section className="pl-section bg-gray-50">
        <div className="container">
          <h2 className="pl-section__title">4 Mistakes to Avoid</h2>
          <div className="pl-guide-grid">
            {[
              { num: '01', title: 'Not Doing Research', text: 'Understand the industry first.' },
              { num: '02', title: 'No Unique Identity', text: 'Differentiate your brand.' },
              { num: '03', title: 'No Marketing', text: 'Invest in visibility.' },
              { num: '04', title: 'Underestimating Costs', text: 'Budget realistically.' },
            ].map((tip, idx) => (
              <div key={idx} className="pl-tip-card">
                <span className="pl-tip-card__num">{tip.num}</span>
                <h3 className="pl-tip-card__title">{tip.title}</h3>
                <p className="pl-tip-card__text">{tip.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Bottom */}
      <section className="pl-cta-section">
        <div className="container">
          <h2 className="text-3xl font-bold mb-4">Launch Your Private Label Brand</h2>
          <p className="mb-8 text-white/80">Partner with Navra for premium manufacturing solutions.</p>
          <Link to="/about" className="pl-hero__btn pl-hero__btn--primary bg-white text-[#c8a96a]">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
};

export default PrivateLabelPage;

