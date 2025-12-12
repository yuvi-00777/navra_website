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
            Our <span className="text-[#c8a96a]">Story</span>
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="about-section__title text-left mb-6">How It All Began</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We are experts in large-scale apparel manufacturing, with over 20 years of expertise. We handle the whole supply chain process, from sourcing fabrics and accessories to producing samples, brand development by adding logos, bulk garment production, packaging, quality control inspections, and product delivery.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Here at Navra Clothing Factory, we have a whole team of experts who will take care of your every clothing production need, no matter how big or small the project is.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We prioritize quality and customer satisfaction above all else, treating each project as a partnership.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-[#c8a96a]">
                <h3 className="text-xl font-bold mb-2">01 Professional</h3>
                <p className="text-gray-600">Our clothing factory has been providing custom clothing services since 2003, with a daily production of up to 10,000 pieces.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-[#c8a96a]">
                <h3 className="text-xl font-bold mb-2">02 Focused</h3>
                <p className="text-gray-600">We have helped over 1000 clothing brands and bring their designs to life and grow their businesses.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-[#c8a96a]">
                <h3 className="text-xl font-bold mb-2">03 Confidentiality</h3>
                <p className="text-gray-600">We guarantee that your designs will remain private, and we have strict policies against sharing or reusing client designs.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder's Letter */}
      <section className="about-section bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
               <div className="bg-gray-200 aspect-square rounded-lg flex items-center justify-center text-gray-400 font-bold">
                 Kiki Qi (Founder)
               </div>
            </div>
            <div className="md:col-span-2">
              <h2 className="about-section__title text-left mb-6">A Letter from Founder - Kiki</h2>
              <blockquote className="italic text-gray-700 border-l-4 border-gray-300 pl-4">
                "My parents started our clothing factory in 2003 and called it Navra. When we first opened, we only focused on fulfilling orders for big international brands... At that time, I decided that I would help anybody, whether you’re a designer, a small start-up brand, or a college student interested in the clothing industry. Navra will be here with you along the way."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="about-section bg-[#c8a96a] text-white">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Numbers We Are Proud Of</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((stat, idx) => (
              <div key={idx} className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <span className="block text-4xl font-bold mb-2">{stat.num}</span>
                <span className="text-sm opacity-90">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="about-section">
        <div className="container">
          <h2 className="about-section__title">Why Choose Navra</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'ONE-STOP SOLUTION', desc: 'From sample development and bulk production to label printing, delivery of goods.' },
              { title: 'CUSTOM YOUR OWN UNIQUE DESIGN', desc: 'We have a team of professionals who will turn your design into reality.' },
              { title: 'QUICK TURNAROUND TIME', desc: 'Our turnaround time is very short, which means that it will grow your business quicker!' },
              { title: 'ETHICALLY QUALITY CONTROL', desc: 'We will check the quality of all stitching, measurements and fabrics used in our products.' },
              { title: 'LOWER YOUR INVENTORY RISK', desc: 'Start your own clothing line with 100 pieces per design to save money.' }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <span className="text-[#c8a96a] font-bold text-xl block mb-3">0{idx + 1}</span>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="about-section bg-gray-50">
        <div className="container">
          <h2 className="about-section__title">We Are Different</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white shadow-sm rounded-lg overflow-hidden">
              <thead className="bg-[#c8a96a] text-white">
                <tr>
                  <th className="p-4 text-left">Benefit</th>
                  <th className="p-4 text-center">NAVRA</th>
                  <th className="p-4 text-center">TRADITIONAL CLOTHING</th>
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
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="p-4 border-b border-gray-100 font-medium">{row.benefit}</td>
                    <td className="p-4 border-b border-gray-100 text-center text-green-600 font-bold">{row.us ? '✓' : '✕'}</td>
                    <td className="p-4 border-b border-gray-100 text-center text-red-500 font-bold">{row.them ? '✓' : '✕'}</td>
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

