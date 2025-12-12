import React from 'react';
import './ContactUsPage.css';

/**
 * ContactUsPage Component
 * Replicates the "Contact Us" page of hongyuapparel.com
 */
const ContactUsPage: React.FC = () => {
  const team = [
    { name: 'Kiki', role: 'Team Leader', exp: '10 Years Experience', phone: '+86 18825803155' },
    { name: 'Lily', role: 'Project Manager', exp: '7 Years Experience' },
    { name: 'Rita', role: 'Marketing Manager', exp: '6 Years Experience' },
    { name: 'Kei', role: 'Project Manager', exp: '4 Years Experience', phone: '+86 18565976774' },
    { name: 'Sherry', role: 'Project Manager', exp: '4 Years Experience', phone: '+86 18925581021' },
    { name: 'Gordon', role: 'Project Manager', exp: '3 Years Experience', phone: '+86 18198827817' },
    { name: 'Nolan', role: 'Project Manager', exp: '2 Years Experience', phone: '+86 18027041926' },
    { name: 'Andy', role: 'Project Manager', exp: '2 Years Experience', phone: '+86 18029017057' },
  ];

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero__overlay"></div>
        <div className="container contact-hero__content">
          <h1 className="contact-hero__title">
            Let's Take Your Brand to <span className="text-[#c8a96a]">Next Level</span>
          </h1>
          <p className="contact-hero__desc">
            Get in touch with our team of experts to start your clothing manufacturing journey.
          </p>
        </div>
      </section>

      {/* Main Content (Replaced with HomePage Contact Section) */}
      <section className="contact">
        <div className="contact__container">
          <div className="contact__grid">
            <div className="contact__info">
              <h2>You've already taken the first step? <span>Talk to us.</span></h2>
              <p>
                Ready to start your clothing line? Fill out the form and our team will get back to you within 24 hours.
              </p>
              <div className="contact__details">
                <div className="contact__detail-item">
                  <div className="contact__detail-icon">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <span className="contact__detail-text">+86 188 2580 3155</span>
                </div>
                <div className="contact__detail-item">
                  <div className="contact__detail-icon">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="contact__detail-text">info@hongyuapparel.com</span>
                </div>
              </div>
            </div>

            <div className="contact__form-wrapper">
              <h3 className="contact__form-title">Get in Touch</h3>
              <form className="contact__form">
                <div className="contact__form-row">
                  <div className="contact__form-group">
                    <label>Name *</label>
                    <input type="text" className="contact__form-input" placeholder="Your name" />
                  </div>
                  <div className="contact__form-group">
                    <label>Email *</label>
                    <input type="email" className="contact__form-input" placeholder="your@email.com" />
                  </div>
                </div>
                <div className="contact__form-row">
                  <div className="contact__form-group">
                    <label>Phone</label>
                    <input type="tel" className="contact__form-input" placeholder="Your phone" />
                  </div>
                  <div className="contact__form-group">
                    <label>Budget</label>
                    <select className="contact__form-select">
                      <option>Select Budget</option>
                      <option>Within $2,000</option>
                      <option>$2,000 - $5,000</option>
                      <option>$5,000 - $10,000</option>
                      <option>$10,000+</option>
                    </select>
                  </div>
                </div>
                <div className="contact__form-group">
                  <label>Company Name</label>
                  <input type="text" className="contact__form-input" placeholder="Your company" />
                </div>
                <div className="contact__form-group">
                  <label>Message *</label>
                  <textarea rows={4} className="contact__form-textarea" placeholder="Tell us about your project..."></textarea>
                </div>
                <button type="submit" className="contact__form-submit">
                  Send Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Team Behind Navra</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
             <div>
                <h3 className="text-xl font-bold mb-4 text-[#c8a96a]">Service Team</h3>
                <p className="text-gray-600 leading-relaxed">
                  To ensure good communication, each of our clients is appointed their own service manager. This way, you can avoid any potential confusion by only having to communicate with one person.
                </p>
             </div>
             <div>
                <h3 className="text-xl font-bold mb-4 text-[#c8a96a]">Production Team</h3>
                <p className="text-gray-600 leading-relaxed">
                  Navra often arranges for production teams and their families to travel together. We treat our personnel with great respect, and everyone is glad to work here.
                </p>
             </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow text-center group">
                <div className="w-16 h-16 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl group-hover:bg-[#c8a96a] group-hover:text-white transition-colors">
                  {member.name.charAt(0)}
                </div>
                <div className="font-bold text-lg mb-1">{member.name}</div>
                <div className="text-[#c8a96a] text-sm font-semibold mb-2">{member.role}</div>
                <div className="text-gray-500 text-sm mb-2">{member.exp}</div>
                {member.phone && <div className="text-gray-400 text-xs">{member.phone}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUsPage;
