import React from 'react';
import { Link } from 'react-router-dom';
import './ApparelProductionPage.css';

/**
 * ApparelProductionPage Component
 * Replicates the "Custom Apparel Production" page of hongyuapparel.com
 */
const ApparelProductionPage: React.FC = () => {
  const materials = [
    'Jersey', 'Jacquard', 'Fleece', 'Piqué', 'Interlock', 'Rib', 'Satin', 'Canvas',
    'Double face', 'Bonded fabrics', 'Wovens', 'Denim', 'Twill', 'Sherpa', 'Corduroy', 'More'
  ];

  const fibers = [
    'Cotton (Organic / recycled)', 'Wool', 'Linen', 'Polyamide', 'Polyester/ recycled polyester', 'Modal', 'Lyocell', 'Viscose',
    'Tencel', 'Cupro', 'Cashmere (for jersey)', 'Acetate', 'Triacetate', 'Elastane', 'Rayon', 'More'
  ];

  const techniques = [
    'Digital printing & Screen printing',
    'Sublimation',
    'All-over print',
    'Vinyl & Flock',
    'Embroidery (regular, with applications, Tanaka, High Point, Chain Stitch, etc.)',
    'High frequency',
    'Sequin and Bead embroidery',
    'Bonded seams (woven fabric)',
    'All types of fusion processes',
    'Special effects (foil, membranes…)'
  ];

  const processSteps = [
    {
      num: '01',
      title: 'Pre-Production',
      desc: 'The fabrics are sent to be washed before they are made into clothes. This is to avoid any problems with the clothes shrinking later on. If there are any changes that need to be made, it will be done in a small batch first.'
    },
    {
      num: '02',
      title: 'Bulk Production',
      desc: 'After we have all the details and samples confirmed, like the quantity, colors, and size of the clothes, and you have paid the deposit, we will start making your clothes. The lead time for a bulk order usually takes 2-4 weeks.'
    },
    {
      num: '03',
      title: 'Quality Assurance',
      desc: 'We work hard to create products that will be the best for your customers. We have a QC team who checks the quality of the products before we package them. If there are any problems, we will fix them before we package the products.'
    },
    {
      num: '04',
      title: 'Packaging',
      desc: 'We prioritize delivery in the clothing manufacturing world because we understand how important it is to you. All items are steam ironed, neatly folded, packed individually into poly bags and boxed before shipping.'
    }
  ];

  return (
    <div className="production-page">
      {/* Hero Section */}
      <section className="production-hero">
        <div className="production-hero__overlay"></div>
        <div className="container production-hero__content">
          <h1 className="production-hero__title">
            03. Custom Apparel <span className="production-hero__highlight">Production</span>
          </h1>
          <p className="production-hero__desc">
            At Navra, we prioritize our customer's satisfaction above all else. In addition to offering quick turnaround times and competitive pricing, we also guarantee the highest quality workmanship for each of our clients. We pride ourselves on being able to design clothing exactly how you want it without any limitations.
          </p>
          <div className="production-hero__actions">
            <Link to="/contact-us" className="production-hero__btn production-hero__btn--primary">Get Started</Link>
          </div>
        </div>
      </section>

      {/* Product Types & Materials */}
      <section className="production-section">
        <div className="container">
          <div className="production-grid">
            <div>
              <h2 className="production-section__title production-section__title--left">Product Types</h2>
              <div className="production-types-list-wrapper">
                <ul className="production-list">
                  <li>T-shirt</li>
                  <li>Polo</li>
                  <li>Henley shirt</li>
                  <li>Hoodie</li>
                  <li>Denim Jacket</li>
                  <li>Shorts</li>
                </ul>
                <ul className="production-list">
                  <li>Pants/Jeans</li>
                  <li>Chino</li>
                  <li>Biker-Jacket</li>
                  <li>Shirt</li>
                  <li>Vest</li>
                  <li>Dress</li>
                </ul>
              </div>
            </div>
            
            <div>
              <h2 className="production-section__title production-section__title--left">Materials</h2>
              <p className="mb-4 text-gray-600">We pride ourselves on being versatile with the types of fabric structures, weights and compositions that we use.</p>
              <div className="production-tags">
                {materials.map((m, idx) => (
                  <span key={idx} className="production-tag">{m}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fibers & Techniques */}
      <section className="production-section production-section--alt">
        <div className="container">
          <div className="production-grid">
            <div>
              <h2 className="production-section__title production-section__title--left">Fibers</h2>
              <div className="production-tags">
                {fibers.map((f, idx) => (
                  <span key={idx} className="production-tag production-tag--white">{f}</span>
                ))}
              </div>
            </div>

            <div>
              <h2 className="production-section__title production-section__title--left">Techniques</h2>
              <ul className="production-list">
                {techniques.map((t, idx) => (
                  <li key={idx}>{t}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Sizing Table (Simplified) */}
      <section className="production-section">
        <div className="container">
          <h2 className="production-section__title">Size Guide</h2>
          <div className="production-table-wrapper">
            <table className="production-table">
              <thead>
                <tr>
                  <th>USA</th>
                  <th>Europe</th>
                  <th>Bust</th>
                  <th>Waist</th>
                  <th>Hips</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { usa: 'XS', eu: '4', bust: '34"', waist: '34"', hips: '26"' },
                  { usa: 'S', eu: '6', bust: '36"', waist: '35"', hips: '27"' },
                  { usa: 'M', eu: '8', bust: '38"', waist: '36"', hips: '28"' },
                  { usa: 'L', eu: '10', bust: '40"', waist: '37"', hips: '29"' },
                  { usa: 'XL', eu: '12', bust: '42"', waist: '38"', hips: '30"' },
                ].map((row, idx) => (
                  <tr key={idx}>
                    <td>{row.usa}</td>
                    <td>{row.eu}</td>
                    <td>{row.bust}</td>
                    <td>{row.waist}</td>
                    <td>{row.hips}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Production Process */}
      <section className="production-section production-section--alt">
        <div className="container">
          <h2 className="production-section__title">How We Make Your Clothes</h2>
          <div className="production-process-grid">
            {processSteps.map((step, idx) => (
              <div key={idx} className="production-process-card">
                <span className="production-process-card__num">{step.num}</span>
                <h3 className="production-process-card__title">{step.title}</h3>
                <p className="production-process-card__desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Next Section */}
      <section className="production-next-step">
        <div className="container">
          <Link to="/services/labels-tags-packaging" className="production-next-link">
            <h2 className="production-next-title">What's Next?</h2>
            <p className="production-next-desc">
              Once we're done with mass production of apparel, then we can move on to attaching labels and tags, as well as packaging everything up.
            </p>
            <div className="production-next-arrow">
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

export default ApparelProductionPage;
