import React from 'react';
import { Link } from 'react-router-dom';
import './SampleDevelopmentPage.css';

/**
 * SampleDevelopmentPage Component
 * Replicates the "Sample Development" page of hongyuapparel.com
 */
const SampleDevelopmentPage: React.FC = () => {
  const timetable = [
    { step: '01', title: 'Make pattern', time: '3 Working Days' },
    { step: '02', title: 'Prepare Fabric', time: '3 Working Days' },
    { step: '03', title: 'Printing or Embroidery', time: '5 Working Days' },
    { step: '04', title: 'Sewing', time: '2 Working Days' },
  ];

  const processSteps = [
    {
      num: '01',
      title: 'Project Discussion',
      desc: 'Our team assists you in developing your ideas into a reality by advising on the best methods of fabrication and printing. We help you create technical drawings and "tech packs" of your concepts so that they can be brought to life.'
    },
    {
      num: '02',
      title: 'Fabrics & Trims Sourcing',
      desc: 'We collaborate with a variety of local fabric producers to provide a wide range of fabrics, trims, fasteners, zippers and buttons for your designs. Fabric customizations, dyeing, trimming, and notions are also available.'
    },
    {
      num: '03',
      title: 'Pattern & Sewing',
      desc: 'Our clothing pattern maker and skilled staff use high-speed technology to produce one sample. Every detail is always corrected and tracked, even the tiniest details, as we strive to make near-perfect samples.'
    },
    {
      num: '04',
      title: 'QC of Samples',
      desc: 'Once samples are created, our product development team will inspect them for uniformity and whether they meet the standards to be sent out. In addition, we will send you videos of the products before shipping.'
    }
  ];

  return (
    <div className="sample-dev-page">
      {/* Hero Section */}
      <section className="sample-dev-hero">
        <div className="sample-dev-hero__overlay"></div>
        <div className="container sample-dev-hero__content">
          <h1 className="sample-dev-hero__title">
            02. Sample <span className="sample-dev-hero__highlight">Development</span>
          </h1>
          <p className="sample-dev-hero__desc">
            Navra was established in 2003, and since then we have been working with various designers and fashion brands to help create new collections every quarter. Our clothing pattern maker can make products for you based on your design draft, completed technical package or any reference clothing you provide to make samples for you.
          </p>
          <div className="sample-dev-hero__actions">
            <Link to="/contact-us" className="sample-dev-hero__btn sample-dev-hero__btn--primary">Get Started</Link>
          </div>
        </div>
      </section>

      {/* Timetable Section */}
      <section className="sample-dev-section">
        <div className="container">
          <h2 className="sample-dev-section__title">Timetable for Your Sample Development</h2>
          <div className="sample-dev-timetable-grid">
            {timetable.map((item, idx) => (
              <div key={idx} className="sample-dev-time-card">
                <span className="sample-dev-time-card__num">{item.step}</span>
                <h3 className="sample-dev-time-card__title">{item.title}</h3>
                <p className="sample-dev-time-card__time">{item.time}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="sample-dev-section sample-dev-section--alt">
        <div className="container">
          <h2 className="sample-dev-section__title">How We Made Your Samples</h2>
          <div className="sample-dev-process-grid">
            {processSteps.map((step, idx) => (
              <div key={idx} className="sample-dev-process-card">
                <span className="sample-dev-process-card__num">{step.num}</span>
                <h3 className="sample-dev-process-card__title">{step.title}</h3>
                <p className="sample-dev-process-card__desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Factors */}
      <section className="sample-dev-section">
        <div className="container">
          <h2 className="sample-dev-section__title sample-dev-section__title--left">Pricing Factors</h2>
          <div className="sample-dev-pricing-box">
            <p className="sample-dev-pricing-intro">*The bulk order price will update after the sample is approved. Here are 4 factors that could lead to a different price:</p>
            <ol className="sample-dev-pricing-list">
              <li><strong>Order Quantity</strong> — The minimum order quantity (MOQ) is 300 units.</li>
              <li><strong>Size/Color Quantities</strong> — A minimum of 100 pieces each color is necessary, having too many sizes may result in an increase of costs.</li>
              <li><strong>Textile/Fabric composition</strong> — Different fabrics cost different prices. The price of the finished product will vary depending on the fabric used.</li>
              <li><strong>Quality of Products</strong> — The more complicated the design on a piece of clothing, the more it costs. This includes stitching, accessories, and buttons.</li>
            </ol>
          </div>
        </div>
      </section>

      {/* What's Next Section */}
      <section className="sample-dev-next-step">
        <div className="container">
          <Link to="/services/apparel-production" className="sample-dev-next-link">
            <h2 className="sample-dev-next-title">What's Next?</h2>
            <p className="sample-dev-next-desc">
              Once we confirm that the sample clothing meets our standards, we can move forward with mass producing the clothing.
            </p>
            <div className="sample-dev-next-arrow">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 5v14M19 12l-7 7-7-7"/>
              </svg>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default SampleDevelopmentPage;
