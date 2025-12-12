import React from 'react';
import { Link } from 'react-router-dom';
import './GlobalShippingPage.css';

/**
 * GlobalShippingPage Component
 * Replicates the "Global Shipping" page of hongyuapparel.com
 */
const GlobalShippingPage: React.FC = () => {
  const methods = [
    {
      title: 'By Express',
      desc: 'DHL, UPS, FedEx, TNT. Fastest delivery for samples and smaller orders. Door-to-door service.',
      icon: '✈️'
    },
    {
      title: 'By Air',
      desc: 'Cost-effective for medium to large shipments. Faster than sea freight, suitable for time-sensitive bulk orders.',
      icon: '🛫'
    },
    {
      title: 'By Sea',
      desc: 'The most economical option for large bulk orders. Longer transit time but significantly lower cost.',
      icon: '🚢'
    },
    {
      title: 'By Train or Car',
      desc: 'Alternative options for specific regions, offering a balance between cost and speed.',
      icon: '🚆'
    }
  ];

  return (
    <div className="shipping-page">
      {/* Hero Section */}
      <section className="shipping-hero">
        <div className="shipping-hero__overlay"></div>
        <div className="container shipping-hero__content">
          <h1 className="shipping-hero__title">
            05. Global <span className="text-[#c8a96a]">Shipping</span>
          </h1>
          <p className="shipping-hero__desc">
            We ship globally to over 50 countries. Whether you need express delivery for samples or economical sea freight for bulk orders, we have the right logistics solution for you.
          </p>
          <div className="shipping-hero__actions">
            <Link to="/about" className="shipping-hero__btn shipping-hero__btn--primary">Get a Quote</Link>
          </div>
        </div>
      </section>

      {/* Methods Grid */}
      <section className="shipping-section">
        <div className="container">
          <h2 className="shipping-section__title">Shipping Methods</h2>
          <div className="shipping-grid">
            {methods.map((item, idx) => (
              <div key={idx} className="shipping-card">
                <div className="shipping-card__icon">{item.icon}</div>
                <h3 className="shipping-card__title">{item.title}</h3>
                <p className="shipping-card__desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="shipping-section bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="shipping-section__title text-left mb-6">Tax by Destination Country</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Please note that import duties, taxes, and charges are not included in the item price or shipping cost. These charges are the buyer's responsibility.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We recommend checking with your country's customs office to determine what these additional costs will be prior to buying. We can assist with documentation to help smooth the customs process.
              </p>
            </div>
            <div>
              <h2 className="shipping-section__title text-left mb-6">Shipping Costs</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Shipping costs are calculated based on the weight and volume of your order, as well as the destination and shipping method chosen.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Express: Expensive but fast (3-5 days)</li>
                <li>Air Freight: Moderate cost (7-10 days)</li>
                <li>Sea Freight: Low cost (20-40 days)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Bottom */}
      <section className="shipping-cta-section">
        <div className="container">
          <h2 className="text-3xl font-bold mb-4">Ready to Ship Your Order?</h2>
          <p className="mb-8 text-white/80">Contact us to get a precise shipping estimate for your location.</p>
          <Link to="/about" className="shipping-hero__btn shipping-hero__btn--primary bg-white text-[#c8a96a]">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
};

export default GlobalShippingPage;

