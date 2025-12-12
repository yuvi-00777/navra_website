import React from 'react';
import { Link } from 'react-router-dom';
import './StartupsPage.css';

/**
 * StartupsPage Component
 * Replicates the "Clothing Manufacturers For Startups" page of hongyuapparel.com
 */
const StartupsPage: React.FC = () => {
  const customProducts = [
    { name: 'T-Shirts' },
    { name: 'Sleepwear' },
    { name: 'Swimwear' },
    { name: 'Hoodies' },
    { name: 'Accessories' },
  ];

  const tips = [
    { title: 'Do Your Research', text: 'Research potential manufacturers thoroughly, read reviews, and understand the industry landscape.' },
    { title: 'Consider Your Budget', text: 'Determine a clear budget and find manufacturers that can work within your financial constraints.' },
    { title: 'Consider Their Location', text: 'Decide between local vs. overseas manufacturers based on communication, cost, and shipping needs.' },
    { title: 'Check Their Portfolio', text: 'Review their past work to ensure they have experience with the type of clothing you want to produce.' },
    { title: 'Ask About MOQs', text: 'Confirm Minimum Order Quantities early to ensure they align with your startup\'s initial volume.' },
    { title: 'Consider Their Lead Time', text: 'Understand production timelines to plan your launch and inventory management effectively.' },
    { title: 'Ask for Samples', text: 'Always request samples to verify quality, fit, and material before committing to a full production run.' },
    { title: 'Check Their References', text: 'Contact previous clients if possible to get first-hand feedback on reliability and quality.' },
  ];

  return (
    <div className="startups-page">
      {/* Hero Section */}
      <section className="startups-hero">
        <div className="startups-hero__overlay"></div>
        <div className="container startups-hero__content">
          <h1 className="startups-hero__title">
            Clothing Manufacturers <span className="text-[#c8a96a]">For Startups</span>
          </h1>
          <p className="startups-hero__desc">
            With Navra, you can create unique custom clothing for startups that will make your fashion label stand out among the rest. Your customers are sick of seeing the same thing everywhere they go; give them something new and different that they won’t be able to find anywhere else!
          </p>
          <div className="startups-hero__actions">
            <Link to="/about" className="startups-hero__btn startups-hero__btn--primary">Custom Now</Link>
          </div>
        </div>
      </section>

      {/* Quick Access Nav */}
      <div className="startups-quick-access">
        <div className="container">
          <div className="startups-quick-access__label">Quick Access</div>
          <div className="startups-quick-access__list">
            <span>01 Custom Product Series</span>
            <span>02 Product Features</span>
            <span>03 How We Make it</span>
            <span>04 Fabric Option</span>
            <span>05 Technology</span>
            <span>06 Clients Reviews</span>
            <span>07 Why Choose Us</span>
            <span>08 Buyer’s Guide</span>
          </div>
        </div>
      </div>

      {/* Custom Product Series */}
      <section className="startups-section">
        <div className="container">
          <h2 className="startups-section__title">Custom Product Series</h2>
          <div className="startups-products-grid">
            {customProducts.map((item, index) => (
              <div key={index} className="startups-product-card">
                <div className="startups-product-card__image">
                  <div className="startups-product-card__placeholder">
                    {/* Placeholder icon */}
                    <svg className="w-16 h-16 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
                <h3 className="startups-product-card__title">{item.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us / Features */}
      <section className="startups-section bg-gray-50">
        <div className="container">
          <h2 className="startups-section__title">Why Choose Us for Your Startup?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-[#c8a96a]">Low MOQ</h3>
              <p className="text-gray-600">We support small businesses with flexible minimum order quantities to get you started without heavy inventory risk.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-[#c8a96a]">Competitive Pricing</h3>
              <p className="text-gray-600">Factory-direct pricing ensures you have healthy margins to grow your business effectively.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-[#c8a96a]">Fast Turnaround</h3>
              <p className="text-gray-600">Quick sampling and production times help you bring your designs to market faster than competitors.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 8 Tips Guide */}
      <section className="startups-section">
        <div className="container">
          <h2 className="startups-section__title">8 Tips To Choose the Right Manufacturer</h2>
          <div className="startups-tips-grid">
            {tips.map((tip, idx) => (
              <div key={idx} className="startups-tip-card">
                <div className="startups-tip-card__header">
                  <span className="startups-tip-card__num">#{idx + 1}</span>
                  <h3 className="startups-tip-card__title">{tip.title}</h3>
                </div>
                <p className="startups-tip-card__text">{tip.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Bottom */}
      <section className="startups-cta-section">
        <div className="container">
          <h2 className="text-3xl font-bold mb-4">Ready to Launch Your Brand?</h2>
          <p className="mb-8 text-white/80">We are here to help startups succeed. Let's build something great together.</p>
          <Link to="/about" className="startups-hero__btn startups-hero__btn--primary bg-white text-[#c8a96a]">
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default StartupsPage;

