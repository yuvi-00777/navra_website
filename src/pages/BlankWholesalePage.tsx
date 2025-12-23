import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './BlankWholesalePage.css';

import whyChooseUsImage from '../assets/why-choose-us.jpg';

// Import product images
import mensOversized1 from '../assets/products/mens-oversized-tshirt-1.jpg';
import mensOversized2 from '../assets/products/mens-oversized-tshirt-2.jpg';
import womensOversized1 from '../assets/products/womens-oversized-white-1.jpg';
import polo1 from '../assets/products/classic-pique-polo-1.jpg';
import polo3 from '../assets/products/performance-polo-1.jpg';
import mensHoodie1 from '../assets/products/mens-hoodie-1.jpg';
import womensHoodie1 from '../assets/products/womens-hoodie-1.jpg';
import mensSweatshirt1 from '../assets/products/mens-sweatshirt-1.jpg';
import mensFullSleeve1 from '../assets/products/mens-full-sleeve-1.jpg';
import bioWash1 from '../assets/products/bio-wash-1.jpg';
import unisexPlain1 from '../assets/products/unisex-plain-1.jpg';
import womensTshirt1 from '../assets/products/womens-tshirt-1.jpg';
import mensTrackPants1 from '../assets/products/mens-track-pants-1.jpg';
import joggers1 from '../assets/products/joggers-1.jpg';
import womensTrackSuit1 from '../assets/products/womens-track-suit-1.jpg';

import FabricOptions from '../components/FabricOptions';
import PrintOptions from '../components/PrintOptions';
import ContactCTA from '../components/ContactCTA';

const BlankWholesalePage: React.FC = () => {
  const [activeProductTab, setActiveProductTab] = useState('T-Shirts');
  const [activeAccordion, setActiveAccordion] = useState<number | null>(0);

  const productTabs = ['T-Shirts', 'Oversized', 'Polo T-Shirts', 'Hoodies', 'Sweatshirts', 'Track Pants', 'Track Suits'];

  // Data for products with real images
  const products: Record<string, { name: string; image: string }[]> = {
    'T-Shirts': [
      { name: 'Men’s Full Sleeve T Shirt', image: mensFullSleeve1 },
      { name: 'Bio-Wash T-Shirt', image: bioWash1 },
      { name: 'Unisex Plain T-Shirt', image: unisexPlain1 },
      { name: 'Women’s T-Shirt', image: womensTshirt1 },
    ],
    'Oversized': [
      { name: 'Men’s Oversized T-Shirt', image: mensOversized1 },
      { name: 'Men’s Oversized T-Shirt V2', image: mensOversized2 },
      { name: 'Women’s Oversized White T-Shirt', image: womensOversized1 },
    ],
    'Polo T-Shirts': [
      { name: 'Classic Pique Polo', image: polo1 },
      { name: 'Performance Sport Polo', image: polo3 },
    ],
    'Hoodies': [
      { name: 'Men’s Hoodie', image: mensHoodie1 },
      { name: 'Women’s Hoodie', image: womensHoodie1 },
    ],
    'Sweatshirts': [
       { name: 'Men’s Sweatshirt', image: mensSweatshirt1 },
    ],
    'Track Pants': [
       { name: 'Men’s Track Pants', image: mensTrackPants1 },
       { name: 'Joggers', image: joggers1 },
    ],
    'Track Suits': [
       { name: 'Women’s Track Suit', image: womensTrackSuit1 },
    ]
  };

  const steps = [
    { num: '01', title: 'Choose Styles', desc: 'Browse our extensive catalog of blank apparel including t-shirts, hoodies, and activewear.' },
    { num: '02', title: 'Select Colors & Sizes', desc: 'Pick from a wide range of colors and a full size run to suit your customer base.' },
    { num: '03', title: 'Place Order', desc: 'Order exactly what you need with our low MOQs and flexible tiered pricing.' },
    { num: '04', title: 'Quality Check', desc: 'Every item goes through a rigorous quality control process before packing.' },
    { num: '05', title: 'Fast Shipping', desc: 'We dispatch your order quickly using reliable global shipping partners.' },
    { num: '06', title: 'Receive Goods', desc: 'Get your high-quality blanks ready for sale or further customization.' },
  ];

  const whyChoose = [
    {
      number: '01',
      title: 'ONE STOP SOLUTION',
      description: 'Navra Clothes Maker is the perfect solution for all your garment and clothing manufacturing needs. From sample development and bulk production to label printing, delivery of goods — the experts at this factory will take care every step along with you! We offer wide range of products such as women’s dresses or men’s shirts, sportswear and swimwear — there are many styles available which means that whatever kind clothing design you required, we can easily made it.',
    },
    {
      number: '02',
      title: 'CUSTOM YOUR OWN UNIQUE DESIGN',
      description: 'We have a team of professionals who will turn your design into reality. With our expertise, you can be assured that each product meets the highest standards for quality and craftsmanship while still maintaining an affordable price point.',
    },
    {
      number: '03',
      title: 'QUICK TURNAROUND TIME',
      description: 'With more than 100 clothes makers, we can make any volume of orders, big or small. Our turnaround time is very short, which means that it will grow your business quicker! We ship all over the world through DHL, FedEx, UPS etc., so you don’t have to worry about anything at hand – just relax while our team takes care of everything.',
    },
    {
      number: '04',
      title: 'ETHICALLY CONTROL QUALITY',
      description: 'Bring your design to life with Navra’s professional service team. We will check the quality of all stitching, measurements and fabrics used in our products before they are shipped off for delivery so that you can be sure you’re getting the highest quality of products.',
    },
    {
      number: '05',
      title: 'LOWER YOUR INVENTORY RISK',
      description: 'Start your own clothing line with 100 pieces per design to save money and pamper customers by giving them more options.',
    },
  ];

  const toggleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <div className="blank-wholesale-page">
      {/* Hero Section */}
      <section className="bw-hero">
        <div className="bw-hero__overlay"></div>
        <div className="container bw-hero__content">
          <h1 className="bw-hero__title">
            Sustainable <span className="text-white">Readymade Garments Manufacturers</span>
          </h1>
          <p className="bw-hero__desc">
            With Navra, you can create unique custom readymade garments that will make your fashion label stand out among the rest. Your customers are sick of seeing the same thing everywhere they go; give them something new and different that they won’t be able to find anywhere else!
          </p>
          <div className="bw-hero__actions">
            <Link to="/contact-us" className="bw-hero__btn bw-hero__btn--primary">Custom Now</Link>
          </div>
        </div>
      </section>


      {/* Custom Product Series */}
      <section id="custom-products" className="bw-section">
        <div className="container">
          <h2 className="bw-section__title">Custom Product Series</h2>
          <div className="bw-tabs">
            {productTabs.map(tab => (
              <button 
                key={tab} 
                className={`bw-tab ${activeProductTab === tab ? 'active' : ''}`}
                onClick={() => setActiveProductTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="bw-products-grid">
            {products[activeProductTab]?.map((item, index) => (
              <div key={index} className="bw-product-card">
                <div className="bw-product-card__image" style={{ aspectRatio: '3/4', overflow: 'hidden' }}>
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      className="transition-transform duration-500 hover:scale-105"
                    />
                </div>
                <h3 className="bw-product-card__title">{item.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Features */}
      <section id="product-features" className="bw-section bw-section--alt">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="bw-section__title text-center mb-8">Readymade Garments Manufacturer</h2>
            <ul className="bw-feature-list">
              <li><strong>Ready to Ship:</strong> Extensive stock of high-quality blanks ready for immediate dispatch to your location.</li>
              <li><strong>Premium Quality:</strong> Fabrics and stitching designed to last, perfect for your brand's reputation.</li>
              <li><strong>Wide Range of Styles:</strong> From basic tees to trendy streetwear cuts, we have it all.</li>
              <li><strong>Low MOQ:</strong> Start small with our flexible minimum order quantities to test your market.</li>
            </ul>
          </div>
        </div>
      </section>


      {/* How We Make It */}
      <section className="process">
        <div className="container">
          <div className="process__header">
            <h2 className="process__title">
              <span className="section-title-wrapper">
                How We Make It
                <svg className="scissors-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                   <path d="M7 19a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm-1-4h.01M17 19a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm-1-4h.01M6.5 11l5-5 5 5M11.5 6V1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </h2>
          </div>

          <div className="process__grid">
            {steps.map((step) => (
              <div key={step.num} className="process-card">
                <div className="process-card__number">{step.num}</div>
                <div className="process-card__content">
                  <h3 className="process-card__title">{step.title}</h3>
                  <p className="process-card__description">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fabric Option */}
      <FabricOptions />

      {/* Technology */}
      <PrintOptions />


      {/* Why Choose Us */}
      <section id="why-choose-us" className="bw-section">
        <div className="container">
          <div className="why-us__header">
            <h2 className="bw-section__title">
              <span className="section-title-wrapper">
                Why Choose Navra
                <svg className="scissors-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M6 6L18 18M18 6L6 18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </h2>
          </div>

          <div className="why-us__content-wrapper">
            <div className="why-us__list">
              {whyChoose.map((feature, index) => (
                <div 
                  key={feature.number} 
                  className={`why-us__item ${activeAccordion === index ? 'active' : ''}`}
                  onClick={() => toggleAccordion(index)}
                >
                  <div className="why-us__item-header">
                    <span className="why-us__item-number">{feature.number}</span>
                    <h3 className="why-us__item-title">{feature.title}</h3>
                    <span className="why-us__item-arrow">
                      {activeAccordion === index ? '↘' : '↗'}
                    </span>
                  </div>
                  {activeAccordion === index && (
                    <p className="why-us__item-description animate-fade-in">
                      {feature.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
            <div className="why-us__image">
               <img src={whyChooseUsImage} alt="Why Choose Us" />
            </div>
          </div>
        </div>
      </section>


      {/* CTA Bottom */}
      <ContactCTA 
        title="Stock Up Your Inventory Today"
        subtitle="Premium quality blanks ready for your brand's touch."
        buttonText="Get Quote"
      />
    </div>
  );
};

export default BlankWholesalePage;
