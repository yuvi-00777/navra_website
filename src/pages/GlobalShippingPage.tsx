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
            05. Global <span className="shipping-hero__highlight">Shipping</span>
          </h1>
          <p className="shipping-hero__desc">
            We ship globally to over 50 countries. Whether you need express delivery for samples or economical sea freight for bulk orders, we have the right logistics solution for you.
          </p>
          <div className="shipping-hero__actions">
            <Link to="/contact-us" className="shipping-hero__btn shipping-hero__btn--primary">Get a Quote</Link>
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
      <section className="shipping-section shipping-section--alt">
        <div className="container">
          <div className="shipping-info-grid">
            <div>
              <h2 className="shipping-section__title shipping-section__title--left">Tax by Destination Country</h2>
              <p className="shipping-text">
                Please note that import duties, taxes, and charges are not included in the item price or shipping cost. These charges are the buyer's responsibility.
              </p>
              <p className="shipping-text">
                We recommend checking with your country's customs office to determine what these additional costs will be prior to buying. We can assist with documentation to help smooth the customs process.
              </p>
            </div>
            <div>
              <h2 className="shipping-section__title shipping-section__title--left">Shipping Costs</h2>
              <p className="shipping-text">
                Shipping costs are calculated based on the weight and volume of your order, as well as the destination and shipping method chosen.
              </p>
              <ul className="shipping-list">
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
          <h2 className="shipping-cta-title">Ready to Ship Your Order?</h2>
          <p className="shipping-cta-desc">Contact us to get a precise shipping estimate for your location.</p>
          <Link to="/contact-us" className="shipping-cta-btn">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
};

export default GlobalShippingPage;
