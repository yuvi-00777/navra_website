import React from 'react';
import { Link } from 'react-router-dom';
import './LabelsTagsPackagingPage.css';

/**
 * LabelsTagsPackagingPage Component
 * Replicates the "Labels / Tags / Packaging" page of hongyuapparel.com
 */
const LabelsTagsPackagingPage: React.FC = () => {
  const items = [
    {
      title: 'Main Label & Size Label',
      desc: 'The main label usually features your brand logo or name. The size label indicates the size of the garment. These are essential for branding and customer information.',
      icon: '🏷️'
    },
    {
      title: 'Hangtag',
      desc: 'Hangtags are attached to the outside of the garment and often contain brand stories, pricing, or care instructions. They are a key element of retail presentation.',
      icon: '🎫'
    },
    {
      title: 'Care Label',
      desc: 'Care labels provide instructions on how to wash, dry, and iron the garment. They are legally required in many countries and crucial for garment longevity.',
      icon: '👕'
    },
    {
      title: 'Leather Label',
      desc: 'Often used on denim or heavy fabrics, leather labels add a premium, rugged touch to your apparel.',
      icon: '👖'
    },
    {
      title: 'Rubber Label',
      desc: 'Rubber labels are durable and often used for sportswear or outerwear, offering a modern, 3D look.',
      icon: '🛡️'
    },
    {
      title: 'Sticker',
      desc: 'Stickers can be used on packaging or directly on garments for promotional purposes or size indication.',
      icon: '🔖'
    },
    {
      title: 'Package Bag',
      desc: 'Custom poly bags or biodegradable bags protect the garment and can be printed with your logo.',
      icon: '🛍️'
    },
    {
      title: 'Shipping Bag',
      desc: 'Durable shipping bags ensure your products arrive safely. Custom branding on these adds a professional touch.',
      icon: '📦'
    },
    {
      title: 'Package Box',
      desc: 'For premium items, a custom box enhances the unboxing experience and adds significant value to your brand.',
      icon: '🎁'
    }
  ];

  return (
    <div className="ltp-page">
      {/* Hero Section */}
      <section className="ltp-hero">
        <div className="ltp-hero__overlay"></div>
        <div className="container ltp-hero__content">
          <h1 className="ltp-hero__title">
            04. Customized Labels & <span className="text-[#c8a96a]">Tags & Packaging</span>
          </h1>
          <p className="ltp-hero__desc">
            We offer a wide range of customized labels, tags, and packaging solutions to make your brand stand out. From woven labels to custom boxes, we help you create a cohesive and professional brand identity.
          </p>
          <div className="ltp-hero__actions">
            <Link to="/about" className="ltp-hero__btn ltp-hero__btn--primary">Get Started</Link>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="ltp-section">
        <div className="container">
          <h2 className="ltp-section__title">Our Branding Solutions</h2>
          <div className="ltp-grid">
            {items.map((item, idx) => (
              <div key={idx} className="ltp-card">
                <div className="ltp-card__icon">{item.icon}</div>
                <h3 className="ltp-card__title">{item.title}</h3>
                <p className="ltp-card__desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Bottom */}
      <section className="ltp-cta-section">
        <div className="container">
          <h2 className="text-3xl font-bold mb-4">Elevate Your Brand Identity</h2>
          <p className="mb-8 text-white/80">Ready to customize your labels and packaging? Contact us today to discuss your requirements.</p>
          <Link to="/about" className="ltp-hero__btn ltp-hero__btn--primary bg-white text-[#c8a96a]">
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default LabelsTagsPackagingPage;

