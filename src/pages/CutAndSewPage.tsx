import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './CutAndSewPage.css';

// Import images (using existing ones where possible or placeholders)
import navraLogoDark from '../assets/navra_logo_dark.png'; // Placeholder for client logos

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

const CutAndSewPage: React.FC = () => {
  const [activeProductTab, setActiveProductTab] = useState('T-Shirts');
  const [activeAccordion, setActiveAccordion] = useState<number | null>(0);

  const productTabs = ['T-Shirts', 'Oversized', 'Polo T-Shirts', 'Hoodies', 'Sweatshirts', 'Track Pants', 'Track Suits'];
  
  // Data for products grid based on tabs
  const products: Record<string, { name: string; price: string; image: string }[]> = {
    'T-Shirts': [
      { name: 'Men’s Full Sleeve T Shirt', price: '$8.99', image: mensFullSleeve1 },
      { name: 'Bio-Wash T-Shirt', price: '$7.99', image: bioWash1 },
      { name: 'Unisex Plain T-Shirt', price: '$6.99', image: unisexPlain1 },
      { name: 'Women’s T-Shirt', price: '$7.99', image: womensTshirt1 },
    ],
    'Oversized': [
      { name: 'Men’s Oversized T-Shirt', price: '$9.99', image: mensOversized1 },
      { name: 'Men’s Oversized T-Shirt V2', price: '$9.99', image: mensOversized2 },
      { name: 'Women’s Oversized White T-Shirt', price: '$9.99', image: womensOversized1 },
    ],
    'Polo T-Shirts': [
      { name: 'Classic Pique Polo', price: '$10.99', image: polo1 },
      { name: 'Performance Sport Polo', price: '$11.99', image: polo3 },
    ],
    'Hoodies': [
      { name: 'Men’s Hoodie', price: '$18.99', image: mensHoodie1 },
      { name: 'Women’s Hoodie', price: '$18.99', image: womensHoodie1 },
    ],
    'Sweatshirts': [
       { name: 'Men’s Sweatshirt', price: '$15.99', image: mensSweatshirt1 },
    ],
    'Track Pants': [
       { name: 'Men’s Track Pants', price: '$12.99', image: mensTrackPants1 },
       { name: 'Joggers', price: '$13.99', image: joggers1 },
    ],
    'Track Suits': [
       { name: 'Women’s Track Suit', price: '$24.99', image: womensTrackSuit1 },
    ]
  };

  const steps = [
    { num: '01', title: 'Project Planning', desc: 'Send your tech pack or pic of the design you want. We will assist you in verifying your materials and fitting details. The advice about sample fee, MOQ and estimate bulk price.' },
    { num: '02', title: 'Sourcing Materials', desc: 'We work with local suppliers to acquire high-quality materials and assure that we stay below your specified price points. Lead times may be significantly shortened by choosing in-stock products.' },
    { num: '03', title: 'Pattern Making', desc: 'Work with our expert pattern makers to achieve the features and fit of each style. Patterns are essentially the blueprint for all clothing items.' },
    { num: '04', title: 'Sample Making', desc: 'Our skilled sample makers hand cut and sew your garments with detail and precision. By creating samples of your clothing, we\'re able to test the fit and functionality before mass production.' },
    { num: '05', title: 'Revisions', desc: "You'll have a fitting on the samples so we can know what alterations are needed for your next batch of samples. Thanks to the rich industry experience of our service team, we are confident to finish all revisions within only 1-2 rounds, while other traditional manufacturers may need 5+ rounds to achieve that." },
    { num: '06', title: 'Productions', desc: 'With your sample approved, we can begin pre-production. Placing your purchase order will initiate your first production run.' },
  ];


  const reviews = [
    { name: 'Cora-LUVHER BOY', location: 'United States', text: 'The quality of it is amazing, its super thick its super soft... I was incredibly impressed.' },
    { name: 'Pedro', location: 'Spain', text: 'I must say they are amazing, I love them their client treatment is amazing... the quality of the product is excellent.' },
    { name: 'Jake', location: 'Australia', text: 'They’ve been amazing at making really good samples... I feel like they are my secret weapon.' },
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
    <div className="cut-and-sew-page">
      {/* Hero Section */}
      <section className="cs-hero">
        <div className="cs-hero__overlay"></div>
        <div className="container cs-hero__content">
          <h1 className="cs-hero__title">
            Sustainable <span className="text-[#c8a96a]">Clothing Manufacturer</span>
          </h1>
          <p className="cs-hero__desc">
            With Navra, you can create unique custom OEM clothing that will make your fashion label stand out among the rest. Your customers are sick of seeing the same thing everywhere they go; give them something new and different!
          </p>
          <div className="cs-hero__actions">
            <Link to="/contact-us" className="cs-hero__btn cs-hero__btn--primary">Custom Now</Link>
          </div>
        </div>
      </section>

      {/* Custom Product Series */}
      <section id="custom-products" className="cs-section">
        <div className="container">
          <h2 className="cs-section__title">Custom Product Series</h2>
          <div className="cs-tabs">
            {productTabs.map(tab => (
              <button 
                key={tab} 
                className={`cs-tab ${activeProductTab === tab ? 'active' : ''}`}
                onClick={() => setActiveProductTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="cs-products-grid">
            {products[activeProductTab]?.map((item, index) => (
              <div key={index} className="cs-product-card">
                <div className="cs-product-card__image" style={{ aspectRatio: '3/4', overflow: 'hidden' }}>
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      className="transition-transform duration-500 hover:scale-105"
                    />
                </div>
                <h3 className="cs-product-card__title">{item.name}</h3>
                <p className="cs-product-card__price">{item.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Features */}
      <section id="product-features" className="cs-section bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="cs-section__title text-center mb-8">OEM Clothing Manufacturer</h2>
            <ul className="cs-feature-list">
              <li><strong>We Are a ONE-STOP Shop:</strong> This means that all processes are finished under one roof. You only have to concentrate on design and marketing.</li>
              <li><strong>Wide variety of styles available:</strong> We have hundreds of fabrics and patterns to choose from, ranging from both classic and modern styles.</li>
              <li><strong>Customize your size:</strong> Choose the size specifically for each body type instead of a usual sizes offered by retailers.</li>
              <li><strong>Low MOQ:</strong> Start with 100 pieces per item per color.</li>
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
      <section id="why-choose-us" className="cs-section">
        <div className="container">
          <div className="why-us__header">
            <h2 className="cs-section__title">
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
        title="Ready to Create Your Custom Line?"
        subtitle="Get in touch with our team to start your OEM manufacturing journey."
      />
    </div>
  );
};

export default CutAndSewPage;
