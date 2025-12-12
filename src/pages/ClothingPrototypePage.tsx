import React from 'react';
import { Link } from 'react-router-dom';
import './ClothingPrototypePage.css';

/**
 * ClothingPrototypePage Component
 * Replicates the "Clothing Prototype" page of hongyuapparel.com
 */
const ClothingPrototypePage: React.FC = () => {
  const processSteps = [
    {
      num: '01',
      title: 'Create Your Brand\'s Logo and Identity',
      desc: 'The logo that you create will be one of the most significant aspects of your brand identity.'
    },
    {
      num: '02',
      title: 'Create Your Design Ideas in Flat Sketches',
      desc: 'Make sure to consider the manufacturing process as you create your sketches.'
    },
    {
      num: '03',
      title: 'Include Call Out Construction in Your Design',
      desc: 'If you want your product call-outs to be accurate, you need to learn about how your products are made.'
    },
    {
      num: '04',
      title: 'Include Colorways',
      desc: 'Adding colorways to your tech pack is an absolute must if you have multiple color variations or trim options.'
    },
    {
      num: '05',
      title: 'Make a Bill of Materials (BOM)',
      desc: 'Bill of Materials (BOM) is an important part of your tech pack because it outlines every material that will be used in your product line.'
    },
    {
      num: '06',
      title: 'Make Sure To Add Assembly Instructions',
      desc: 'Including assembly instructions is an important part of your tech pack. This way, people will know how to put your product together correctly in a step-by-step format.'
    },
    {
      num: '07',
      title: 'Include Packaging Details',
      desc: 'If you\'ve reached the production stage, you should also have your hangtags, labels, and packaging requirements ready.'
    }
  ];

  const serviceList = [
    'Free design consultation',
    'Construction call-outs',
    'Technical drawings to scale',
    'Multiple colorways, print; embellishment details',
    'Basic Graded Specs',
    'Point of measurement diagrams',
    'Bill of Materials (if you have all the materials)',
    'Brand; Care Labels, Folding instructions, Tags; Packaging'
  ];

  return (
    <div className="prototype-page">
      {/* Hero Section */}
      <section className="prototype-hero">
        <div className="prototype-hero__overlay"></div>
        <div className="container prototype-hero__content">
          <h1 className="prototype-hero__title">
            01. Clothing <span className="text-[#c8a96a]">Prototype</span>
          </h1>
          <p className="prototype-hero__desc">
            When it comes to manufacturing clothes, having a well-made tech pack is very important. A tech pack is a document that you need to create in order to communicate your design to a manufacturer. The document contains all of the technical information about your product line in one place.
          </p>
          <div className="prototype-hero__actions">
            <Link to="/about" className="prototype-hero__btn prototype-hero__btn--primary">Get Your Tech Pack!</Link>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="prototype-section">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="prototype-section__title text-left mb-6">Tech Pack Service</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Although it may be difficult to start working on a tech pack, it is important that you take the time to do it correctly. This includes things like finding the right materials, understanding how the product is assembled, and what type of packaging will work best.
              </p>
              
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                <h3 className="font-bold text-lg mb-4 text-[#c8a96a]">Included in our service:</h3>
                <ul className="prototype-service-list">
                  {serviceList.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 mb-2">
                      <svg className="prototype-service-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="font-semibold text-gray-800">Price: $50-$100</p>
                  <p className="font-semibold text-gray-800">Lead time: 2 weeks</p>
                  <p className="mt-4 text-[#c8a96a] font-bold italic">
                    We will gladly provide you with tech pack FREE OF CHARGE if you choose to work with us for clothing manufacturing.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-[3/4] bg-gray-200 rounded-lg relative overflow-hidden group">
                 <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-bold">Dress Tech Pack</div>
              </div>
              <div className="aspect-[3/4] bg-gray-200 rounded-lg relative overflow-hidden group mt-8">
                 <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-bold">Hoodie Tech Pack</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="prototype-section bg-gray-50">
        <div className="container">
          <h2 className="prototype-section__title">How We Make Your Tech Pack</h2>
          <div className="prototype-steps-grid">
            {processSteps.map((step, idx) => (
              <div key={idx} className="prototype-step-card">
                <span className="prototype-step-card__num">{step.num}</span>
                <h3 className="prototype-step-card__title">{step.title}</h3>
                <p className="prototype-step-card__desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Bottom */}
      <section className="prototype-cta-section">
        <div className="container">
          <h2 className="text-3xl font-bold mb-4">Ready to Start?</h2>
          <p className="mb-8 text-white/80">What’s Next? After we approve the tech pack, we can start developing the prototype/sample development.</p>
          <Link to="/about" className="prototype-hero__btn prototype-hero__btn--primary bg-white text-[#c8a96a]">
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ClothingPrototypePage;

