import React from 'react';
import { Link } from 'react-router-dom';
import './ProductPhotographyPage.css';

/**
 * ProductPhotographyPage Component
 * Replicates the "Product Photography" page of hongyuapparel.com
 */
const ProductPhotographyPage: React.FC = () => {
  return (
    <div className="photo-page">
      {/* Hero Section */}
      <section className="photo-hero">
        <div className="photo-hero__overlay"></div>
        <div className="container photo-hero__content">
          <h1 className="photo-hero__title">
            06. Product <span className="text-[#c8a96a]">Photography</span>
          </h1>
          <p className="photo-hero__desc">
            High-quality product photography is essential for your brand's success. We offer professional photography services to help you showcase your apparel in the best light for your website, catalog, and marketing materials.
          </p>
          <div className="photo-hero__actions">
            <Link to="/about" className="photo-hero__btn photo-hero__btn--primary">Book a Session</Link>
          </div>
        </div>
      </section>

      {/* Service Info */}
      <section className="photo-section">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="photo-section__title text-left mb-6">Professional Apparel Photography</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                We understand that clear, high-resolution images are critical for online sales. Our experienced photographers specialize in apparel and fashion photography.
              </p>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                <h3 className="font-bold text-lg mb-4 text-[#c8a96a]">Our Services Include:</h3>
                <ul className="list-none space-y-3">
                  <li className="flex items-center gap-3">
                    <span className="text-[#c8a96a]">✓</span>
                    <span>Low-cost professional photography</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-[#c8a96a]">✓</span>
                    <span>High-resolution images suitable for catalogs & line sheets</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-[#c8a96a]">✓</span>
                    <span>Ghost mannequin, flat lay, or model shots</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-[#c8a96a]">✓</span>
                    <span>Professional image editing and retouching</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="relative h-96 bg-gray-200 rounded-lg overflow-hidden shadow-lg group">
               {/* Placeholder for photography setup image */}
               <div className="absolute inset-0 flex items-center justify-center bg-gray-300 text-gray-500 font-bold text-xl">
                 Studio Setup
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Package Details */}
      <section className="photo-section bg-gray-50">
        <div className="container">
          <h2 className="photo-section__title">Our Most Popular Package</h2>
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-sm border border-gray-100">
            <p className="text-center text-lg text-gray-600 mb-8">
              Everything you need to launch your product online.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="p-4 bg-gray-50 rounded-md">
                <span className="block text-3xl mb-2">📸</span>
                <span className="font-bold text-gray-800">Front View</span>
              </div>
              <div className="p-4 bg-gray-50 rounded-md">
                <span className="block text-3xl mb-2">📸</span>
                <span className="font-bold text-gray-800">Back View</span>
              </div>
              <div className="p-4 bg-gray-50 rounded-md">
                <span className="block text-3xl mb-2">📸</span>
                <span className="font-bold text-gray-800">Side View</span>
              </div>
              <div className="p-4 bg-gray-50 rounded-md">
                <span className="block text-3xl mb-2">🔍</span>
                <span className="font-bold text-gray-800">Detail Shots</span>
              </div>
            </div>
            <p className="text-center mt-8 text-gray-500">
              *Includes 6-8 high-resolution edited photos per garment.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Bottom */}
      <section className="photo-cta-section">
        <div className="container">
          <h2 className="text-3xl font-bold mb-4">Capture Your Brand's Best Look</h2>
          <p className="mb-8 text-white/80">Get professional photos without the hassle of hiring a separate studio.</p>
          <Link to="/about" className="photo-hero__btn photo-hero__btn--primary bg-white text-[#c8a96a]">
            Get a Quote
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ProductPhotographyPage;

