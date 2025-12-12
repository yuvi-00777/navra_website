import React from 'react';
import './OurEthicsPage.css';

/**
 * OurEthicsPage Component
 * Replicates the "Our Ethics" page of hongyuapparel.com
 */
const OurEthicsPage: React.FC = () => {
  return (
    <div className="ethics-page">
      {/* Hero Section */}
      <section className="ethics-hero">
        <div className="ethics-hero__overlay"></div>
        <div className="container ethics-hero__content">
          <h1 className="ethics-hero__title">
            Ethical <span className="text-[#c8a96a]">Manufacturing</span>
          </h1>
          <p className="ethics-hero__desc">
            We are committed to sustainable and ethical practices in every step of our manufacturing process. We believe in fair labor, safe working conditions, and environmental responsibility.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="ethics-section">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-12">
            
            {/* Sustainability */}
            <div className="text-center">
              <h2 className="ethics-section__title">Sustainability</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                We strive to minimize our environmental footprint by using eco-friendly materials whenever possible. We offer organic cotton, recycled polyester, and other sustainable fabric options to our clients. Our production processes are optimized to reduce waste and energy consumption.
              </p>
            </div>

            {/* Fair Labor */}
            <div className="text-center">
              <h2 className="ethics-section__title">Fair Labor Practices</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Our employees are our most valuable asset. We ensure fair wages, reasonable working hours, and a safe, healthy working environment for all our staff. We strictly prohibit child labor and forced labor. We believe that happy employees make better products.
              </p>
            </div>

            {/* Quality & Safety */}
            <div className="text-center">
              <h2 className="ethics-section__title">Quality & Safety</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Product safety is paramount. We ensure that all our products meet international safety standards. We conduct rigorous quality control checks to ensure that every garment we produce is of the highest quality and free from harmful substances.
              </p>
            </div>

            {/* Community */}
            <div className="text-center">
              <h2 className="ethics-section__title">Community Engagement</h2>
              <p className="text-gray-700 leading-relaxed">
                We are proud to be part of our local community. We actively participate in local initiatives and support local causes. We believe in giving back to the community that supports us.
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default OurEthicsPage;

