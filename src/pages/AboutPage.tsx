import { useState, useEffect } from 'react';
import { useContactForm, FormError } from '../hooks/useContactForm';
import { pushFormSubmitSuccess } from '../utils/gtm';
import './AboutPage.css';

/**
 * AboutPage Component
 * About Us page for Navra
 * 
 * Sections:
 * - Company introduction
 * - Contact information
 * - Ethics and values
 * - Customer reviews
 * - Contact form
 */
const AboutPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('about');
  const { state, handleSubmit } = useContactForm();

  useEffect(() => {
    if (state.succeeded) {
      pushFormSubmitSuccess({ formName: 'about_contact_form', formId: 'about_page', page: '/about' });
    }
  }, [state.succeeded]);

  const stats = [
    { number: '22+', label: 'Years Experience' },
    { number: '2000+', label: 'Happy Clients' },
    { number: '100+', label: 'Team Members' },
    { number: '70K+', label: 'Products/Month' },
  ];

  const values = [
    {
      title: 'Quality First',
      description: 'We never compromise on quality. Every garment undergoes rigorous inspection.',
      icon: '🎯',
    },
    {
      title: 'Ethical Manufacturing',
      description: 'Fair wages, safe working conditions, and sustainable practices.',
      icon: '🌱',
    },
    {
      title: 'Customer Focus',
      description: 'Your success is our success. We go above and beyond for every client.',
      icon: '🤝',
    },
    {
      title: 'Innovation',
      description: 'Constantly improving our processes and adopting new technologies.',
      icon: '💡',
    },
  ];

  const reviews = [
    {
      name: 'Pedro',
      location: 'Spain',
      rating: 5,
      text: "I've been working with Navra just for a couple of months, and I've bought all of the tees and hoodies. They are amazing! Their client treatment is amazing, and the quality is excellent.",
    },
    {
      name: 'Jake',
      location: 'Australia',
      rating: 5,
      text: "They've been amazing at making really good samples. I feel like they are my secret weapon. They've just done an amazing job, and they really are a good team to work with!",
    },
    {
      name: 'Cora',
      company: 'LUVHER BOY',
      location: 'United States',
      rating: 5,
      text: "The quality is amazing, super thick and super soft. They are super good at making any changes and answering super quickly. I love the quality, the fit and the color!",
    },
    {
      name: 'Michael',
      location: 'United Kingdom',
      rating: 5,
      text: "Professional service from start to finish. The communication was excellent and the final products exceeded my expectations. Highly recommend!",
    },
    {
      name: 'Sarah',
      location: 'Canada',
      rating: 5,
      text: "Starting my clothing brand seemed daunting but Navra made it so easy. They guided me through every step and delivered exceptional quality.",
    },
    {
      name: 'David',
      location: 'Germany',
      rating: 5,
      text: "Fast turnaround, great quality, and excellent customer service. What more could you ask for? Will definitely order again.",
    },
  ];

  const faqs = [
    {
      question: 'How do I place a sample order?',
      answer: 'After confirming your design, we will provide a quote based on complexity. It takes 7-12 working days to receive your sample.',
    },
    {
      question: "What's the minimum order quantity?",
      answer: 'Generally 100 units per style per color for cut & sew, and 50 pieces for blank wholesale and logo customization.',
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept PayPal, T/T (Bank Transfer), and Western Union. 50% deposit for new customers, 30% for returning customers.',
    },
    {
      question: 'How long does production take?',
      answer: 'Standard lead time is 15-25 days depending on quantity. Fabric dying, printing, and embroidery add 7 days each.',
    },
    {
      question: 'Do you ship worldwide?',
      answer: 'Yes! We ship globally via DHL, FedEx, UPS, and TNT. Express delivery takes 2-5 days, regular post 15-30 days.',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/3 w-96 h-96 bg-[#3b82f6] rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-[#3b82f6] rounded-full filter blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1 text-sm font-medium text-[#3b82f6] bg-[#3b82f6]/10 rounded-full mb-4">
              About Us
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white font-['Playfair_Display'] mb-6">
              Your Trusted <span className="text-[#3b82f6]">Clothing Partner</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Since 2003, we've been helping brands bring their clothing visions to life with quality manufacturing and exceptional service.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-white py-8 shadow-sm relative z-10 -mt-8 mx-4 lg:mx-auto max-w-5xl rounded-2xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#3b82f6] font-['Playfair_Display']">{stat.number}</div>
              <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[
              { id: 'about', label: 'About' },
              { id: 'ethics', label: 'Our Ethics' },
              { id: 'reviews', label: 'Reviews' },
              { id: 'contact', label: 'Contact Us' },
              { id: 'faq', label: 'FAQ' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-[#3b82f6] to-[#3b82f6] text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* About Tab */}
          {activeTab === 'about' && (
            <div className="animate-fade-in">
              <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
                <div>
                  <h2 className="text-4xl font-bold text-gray-900 font-['Playfair_Display'] mb-6">
                    From Humble Beginnings to Industry Leader
                  </h2>
                  <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                    Navra was founded in 2003 in Dongguan, China. What started as a small clothing manufacturer has grown into one of China's leading companies for women, men, and children apparel manufacturing.
                  </p>
                  <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                    With over 100 skilled workers and state-of-the-art facilities, we've helped thousands of brands worldwide bring their clothing visions to life. Our commitment to quality, ethical practices, and customer satisfaction has made us the trusted partner for businesses of all sizes.
                  </p>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Whether you're a startup launching your first collection or an established brand scaling production, we have the expertise and capacity to meet your needs.
                  </p>
                </div>
                <div className="relative">
                  <div className="aspect-[4/3] bg-gradient-to-br from-amber-50 to-amber-100 rounded-3xl flex items-center justify-center">
                    <div className="text-center">
                      <span className="text-8xl font-bold text-[#3b82f6]/20 font-['Playfair_Display']">H</span>
                      <p className="text-gray-500 mt-4">Factory Image Placeholder</p>
                    </div>
                  </div>
                  <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-[#3b82f6] to-[#3b82f6] rounded-2xl p-6 text-white">
                    <div className="text-3xl font-bold font-['Playfair_Display']">22+</div>
                    <div className="text-sm opacity-90">Years of Excellence</div>
                  </div>
                </div>
              </div>

              {/* Values */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {values.map((value) => (
                  <div key={value.title} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow">
                    <span className="text-4xl mb-4 block">{value.icon}</span>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{value.title}</h3>
                    <p className="text-gray-600 text-sm">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Ethics Tab */}
          {activeTab === 'ethics' && (
            <div className="animate-fade-in max-w-4xl mx-auto">
              <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm">
                <h2 className="text-3xl font-bold text-gray-900 font-['Playfair_Display'] mb-8 text-center">
                  Our Commitment to Ethical Manufacturing
                </h2>
                <div className="space-y-8">
                  {[
                    {
                      title: 'Fair Labor Practices',
                      description: 'All our workers receive fair wages, reasonable working hours, and safe working conditions. We comply with all local labor laws and international standards.',
                    },
                    {
                      title: 'Sustainable Materials',
                      description: 'We actively source eco-friendly fabrics and materials. Our suppliers are vetted for environmental responsibility.',
                    },
                    {
                      title: 'Waste Reduction',
                      description: 'Our cutting processes are optimized to minimize fabric waste. Scraps are recycled or repurposed whenever possible.',
                    },
                    {
                      title: 'Transparency',
                      description: 'We maintain open communication about our processes, pricing, and practices. Factory visits are welcome.',
                    },
                    {
                      title: 'Community Support',
                      description: 'We support our local community through employment opportunities and educational initiatives.',
                    },
                  ].map((item, index) => (
                    <div key={index} className="flex gap-6">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-[#3b82f6] to-[#3b82f6] flex items-center justify-center text-white font-bold">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Reviews Tab */}
          {activeTab === 'reviews' && (
            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold text-gray-900 font-['Playfair_Display'] mb-8 text-center">
                What Our Clients Say
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {reviews.map((review, index) => (
                  <div key={index} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
                    <div className="flex gap-1 mb-4">
                      {[...Array(review.rating)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-[#3b82f6]" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-gray-600 mb-6 leading-relaxed">"{review.text}"</p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#3b82f6] to-[#3b82f6] flex items-center justify-center text-white font-bold">
                        {review.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{review.name}</div>
                        <div className="text-sm text-gray-500">
                          {review.company && <span className="text-[#3b82f6]">{review.company} • </span>}
                          {review.location}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Contact Tab */}
          {activeTab === 'contact' && (
            <div className="animate-fade-in">
              <div className="grid lg:grid-cols-2 gap-12">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 font-['Playfair_Display'] mb-6">
                    Get in Touch
                  </h2>
                  <p className="text-gray-600 mb-8">
                    Ready to start your clothing project? Contact us today and our team will get back to you within 24 hours.
                  </p>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-[#3b82f6]/10 flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-[#3b82f6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Phone</h4>
                        <p className="text-gray-600">+91 7680943044</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-[#3b82f6]/10 flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-[#3b82f6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Email</h4>
                        <p className="text-gray-600">admin@thenavra.in</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-[#3b82f6]/10 flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-[#3b82f6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Address</h4>
                        <p className="text-gray-600">3/F-B, No. 9, Botou Industry Road,<br />Humen Town, Dongguan, Guangdong, CN</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-3xl p-8 shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Send us a Message</h3>
                  {state.succeeded ? (
                    <div className="text-center py-8">
                      <div className="text-green-600 text-xl font-bold mb-4">Thank You!</div>
                      <p className="text-gray-600">Your enquiry has been sent successfully. We will contact you shortly.</p>
                      <button 
                        onClick={() => window.location.reload()} 
                        className="mt-6 px-6 py-2 bg-[#001F3F] text-white rounded-lg hover:bg-[#003366] transition-colors"
                      >
                        Send Another Message
                      </button>
                    </div>
                  ) : (
                    <form className="space-y-4" onSubmit={handleSubmit}>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
                          <input 
                            type="text" 
                            name="name"
                            id="name"
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#3b82f6] focus:ring-2 focus:ring-[#3b82f6]/20 outline-none" 
                            placeholder="Your name" 
                            required
                          />
                          <FormError field="name" errors={state.errors} className="text-red-500 text-xs mt-1" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                          <input 
                            type="email" 
                            name="email"
                            id="email"
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#3b82f6] focus:ring-2 focus:ring-[#3b82f6]/20 outline-none" 
                            placeholder="your@email.com" 
                            required
                          />
                          <FormError field="email" errors={state.errors} className="text-red-500 text-xs mt-1" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Budget</label>
                        <select 
                          name="budget"
                          id="budget"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#3b82f6] focus:ring-2 focus:ring-[#3b82f6]/20 outline-none"
                        >
                          <option value="">Select Budget</option>
                          <option value="Within $2,000">Within $2,000</option>
                          <option value="$2,000 - $5,000">$2,000 - $5,000</option>
                          <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                          <option value="$10,000+">$10,000+</option>
                        </select>
                        <FormError field="budget" errors={state.errors} className="text-red-500 text-xs mt-1" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
                        <textarea 
                          rows={4} 
                          name="message"
                          id="message"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#3b82f6] focus:ring-2 focus:ring-[#3b82f6]/20 outline-none resize-none" 
                          placeholder="Tell us about your project..."
                          required
                        ></textarea>
                        <FormError field="message" errors={state.errors} className="text-red-500 text-xs mt-1" />
                      </div>
                      <button 
                        type="submit" 
                        disabled={state.submitting}
                        className="w-full px-8 py-4 bg-gradient-to-r from-[#3b82f6] to-[#3b82f6] text-white font-semibold rounded-xl hover:shadow-lg transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        {state.submitting ? 'Sending...' : 'Send Inquiry'}
                      </button>
                      {state.errors?.length > 0 && (
                        <p className="text-red-500 text-sm mt-2" role="alert">{state.errors[0].message}</p>
                      )}
                    </form>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* FAQ Tab */}
          {activeTab === 'faq' && (
            <div className="animate-fade-in max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 font-['Playfair_Display'] mb-8 text-center">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <details key={index} className="group bg-white rounded-2xl overflow-hidden shadow-sm">
                    <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 transition-colors">
                      <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                      <svg className="w-5 h-5 text-[#3b82f6] transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <div className="px-6 pb-6 text-gray-600">{faq.answer}</div>
                  </details>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default AboutPage;

