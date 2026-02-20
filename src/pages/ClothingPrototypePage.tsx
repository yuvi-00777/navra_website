import React from 'react';
import { Link } from 'react-router-dom';
import './ClothingPrototypePage.css';

/**
 * ClothingPrototypePage Component
 * Clothing Prototype page for Navra
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
            01. Clothing <span className="text-white">Prototype</span>
          </h1>
          <p className="prototype-hero__desc">
            When it comes to manufacturing clothes, having a well-made tech pack is very important. A tech pack is a document that you need to create in order to communicate your design to a manufacturer. The document contains all of the technical information about your product line in one place.
          </p>
          <div className="prototype-hero__actions">
            <Link to="/contact-us" className="prototype-hero__btn prototype-hero__btn--primary">Get Your Tech Pack!</Link>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="prototype-section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="prototype-section__title text-left mb-6">Tech Pack Service</h2>
              <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                Although it may be difficult to start working on a tech pack, it is important that you take the time to do it correctly. This includes things like finding the right materials, understanding how the product is assembled, and what type of packaging will work best.
              </p>
              
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -mr-16 -mt-16 opacity-50"></div>
                
                <h3 className="font-bold text-xl mb-6 text-[#001F3F] flex items-center">
                  <span className="w-2 h-8 bg-[#c8a96a] mr-3 rounded-full"></span>
                  Included in our service:
                </h3>
                
                <ul className="prototype-service-list grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3">
                  {serviceList.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#c8a96a] mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-700 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 pt-6 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-4 bg-gray-50 -mx-8 -mb-8 p-8">
                  <div>
                    <p className="text-sm text-gray-500 uppercase tracking-wider font-semibold">Service Cost</p>
                    <p className="text-2xl font-bold text-[#001F3F]">$50 - $100</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 uppercase tracking-wider font-semibold">Lead Time</p>
                    <p className="text-2xl font-bold text-[#001F3F]">2 Weeks</p>
                  </div>
                </div>
                
                <div className="mt-8 bg-[#001F3F] text-white p-4 rounded-lg text-center">
                   <p className="font-bold italic">
                    Free Tech Pack if you manufacture with us!
                  </p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6 mt-8 lg:mt-0">
              <div className="aspect-[3/4] bg-gray-100 rounded-2xl relative overflow-hidden group shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                 <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-bold bg-gray-200">Dress Tech Pack</div>
                 {/* Placeholder for actual image */}
              </div>
              <div className="aspect-[3/4] bg-gray-100 rounded-2xl relative overflow-hidden group shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 mt-12">
                 <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-bold bg-gray-200">Hoodie Tech Pack</div>
                 {/* Placeholder for actual image */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="prototype-section prototype-section--alt">
        <div className="container">
          <h2 className="prototype-section__title">How We Make Your Tech Pack</h2>
          <div className="prototype-steps-grid">
            {processSteps.map((step, idx) => (
              <div key={idx} className="prototype-step-card group">
                <span className="prototype-step-card__num">{step.num}</span>
                <h3 className="prototype-step-card__title">{step.title}</h3>
                <p className="prototype-step-card__desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Next Section */}
      <section className="prototype-next-step">
        <div className="container">
          <Link to="/services/sample-development" className="prototype-next-link">
            <h2 className="prototype-next-title">What's Next?</h2>
            <p className="prototype-next-desc">
              After we approve the tech pack, we can start developing the prototype/sample development.
            </p>
            <div className="prototype-next-arrow">
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

export default ClothingPrototypePage;

