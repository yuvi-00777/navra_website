import React from 'react';
import { Link } from 'react-router-dom';
import './AboutUsPage.css';

/**
 * AboutUsPage Component
 * Replicates the "About Us" page of hongyuapparel.com
 */
const AboutUsPage: React.FC = () => {
  const stats = [
    { num: '22', label: 'Years of OEM experience in clothing industry' },
    { num: '2013', label: 'Happy clients and counting' },
    { num: '8058', label: 'Ready stylish designs' },
    { num: '73685', label: 'Pieces of high-quality clothes made per month' },
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero__overlay"></div>
        <div className="container about-hero__content">
          <h1 className="about-hero__title">
            Our <span className="about-hero__highlight">Story</span>
          </h1>
          <p className="about-hero__desc">
            Founded in 2003, Navra Factory is devoted to helping independent fashion brands and start-up designers with their clothing production needs.
          </p>
          <div className="about-hero__actions">
            <Link to="/contact-us" className="about-hero__btn about-hero__btn--primary">Get Started</Link>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="about-section">
        <div className="container">
          <div className="about-grid">
            <div>
              <h2 className="about-section__title about-section__title--left">How It All Began</h2>
              <p className="about-text">
                We are experts in large-scale apparel manufacturing, with over 20 years of expertise. We handle the whole supply chain process, from sourcing fabrics and accessories to producing samples, brand development by adding logos, bulk garment production, packaging, quality control inspections, and product delivery.
              </p>
              <p className="about-text">
                Here at Navra Clothing Factory, we have a whole team of experts who will take care of your every clothing production need, no matter how big or small the project is.
              </p>
              <p className="about-text">
                We prioritize quality and customer satisfaction above all else, treating each project as a partnership.
              </p>
            </div>
            <div className="about-features-grid">
              <div className="about-feature-card">
                <h3 className="about-feature-title">01 Professional</h3>
                <p className="about-feature-desc">Our clothing factory has been providing custom clothing services since 2003, with a daily production of up to 10,000 pieces.</p>
              </div>
              <div className="about-feature-card">
                <h3 className="about-feature-title">02 Focused</h3>
                <p className="about-feature-desc">We have helped over 1000 clothing brands and bring their designs to life and grow their businesses.</p>
              </div>
              <div className="about-feature-card">
                <h3 className="about-feature-title">03 Confidentiality</h3>
                <p className="about-feature-desc">We guarantee that your designs will remain private, and we have strict policies against sharing or reusing client designs.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder's Letter */}
      <section className="about-section about-section--alt">
        <div className="container">
          <div className="about-founder-grid">
            <div className="about-founder-image">
               Kiki Qi (Founder)
            </div>
            <div>
              <h2 className="about-section__title about-section__title--left">A Letter from Founder - Kiki</h2>
              <blockquote className="about-founder-quote">
                "My parents started our clothing factory in 2003 and called it Navra. When we first opened, we only focused on fulfilling orders for big international brands... At that time, I decided that I would help anybody, whether you’re a designer, a small start-up brand, or a college student interested in the clothing industry. Navra will be here with you along the way."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="about-stats-section">
        <div className="container">
          <h2 className="about-stats-title">Numbers We Are Proud Of</h2>
          <div className="about-stats-grid">
            {stats.map((stat, idx) => (
              <div key={idx} className="about-stat-card">
                <span className="about-stat-num">{stat.num}</span>
                <span className="about-stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="about-section">
        <div className="container">
          <h2 className="about-section__title">Why Choose Navra</h2>
          <div className="about-why-grid">
            {[
              { title: 'ONE-STOP SOLUTION', desc: 'From sample development and bulk production to label printing, delivery of goods.' },
              { title: 'CUSTOM YOUR OWN UNIQUE DESIGN', desc: 'We have a team of professionals who will turn your design into reality.' },
              { title: 'QUICK TURNAROUND TIME', desc: 'Our turnaround time is very short, which means that it will grow your business quicker!' },
              { title: 'ETHICALLY QUALITY CONTROL', desc: 'We will check the quality of all stitching, measurements and fabrics used in our products.' },
              { title: 'LOWER YOUR INVENTORY RISK', desc: 'Start your own clothing line with 100 pieces per design to save money.' }
            ].map((item, idx) => (
              <div key={idx} className="about-why-card">
                <span className="about-why-num">0{idx + 1}</span>
                <h3 className="about-why-title">{item.title}</h3>
                <p className="about-why-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="about-section about-section--alt">
        <div className="container">
          <h2 className="about-section__title">We Are Different</h2>
          <div className="about-table-wrapper">
            <table className="about-table">
              <thead>
                <tr>
                  <th>Benefit</th>
                  <th>NAVRA</th>
                  <th>TRADITIONAL CLOTHING</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { benefit: '100% Custom Products', us: true, them: true },
                  { benefit: 'Low Minimum Order', us: true, them: false },
                  { benefit: 'All Products Under One Roof', us: true, them: false },
                  { benefit: 'Best Value For Quality', us: true, them: false },
                  { benefit: 'Convenient Ordering Process', us: true, them: false },
                  { benefit: 'Custom Labels, Tags & Packaging Options', us: true, them: true },
                  { benefit: 'Cost Effective For Large Orders', us: true, them: true },
                ].map((row, idx) => (
                  <tr key={idx}>
                    <td>{row.benefit}</td>
                    <td className="about-table-check">{row.us ? '✓' : '✕'}</td>
                    <td className="about-table-cross">{row.them ? '✓' : '✕'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;
