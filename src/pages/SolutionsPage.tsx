import { Link } from 'react-router-dom';
import './SolutionsPage.css';

/**
 * SolutionsPage Component
 * Replicates the Solutions page of hongyuapparel.com
 * 
 * Features:
 * - Cut & Sew Customize
 * - Logo Customize
 * - Blank Wholesale
 * - Private Label Clothing
 * - For Startups
 */
const SolutionsPage: React.FC = () => {
  const solutions = [
    {
      id: 1,
      title: 'Blank Wholesale',
      subtitle: 'For Wholesalers & Retailers',
      description: 'Order ready-made clothing from our extensive product catalog. Perfect for businesses looking to stock quality apparel quickly.',
      features: [
        'MOQ: 50 pieces mix size/style/colors',
        'Sample time: 3 days',
        'Sample fee: USD $20-25/piece',
        'Bulk delivery: 7-10 days',
      ],
      benefits: [
        'No design work required',
        'Quick turnaround time',
        'Wide variety of styles',
        'Low minimum order quantity',
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
    },
    {
      id: 2,
      title: 'Logo Customize',
      subtitle: 'For Brand Starters',
      description: 'Add your logo to our blank clothing through printing, embroidery, or change to your private label. Build your brand identity.',
      features: [
        'MOQ: 50 pieces mix size/style/colors',
        'Sample time: 5-8 days',
        'Sample fee: USD $50/piece',
        'Bulk order time: 12-18 days',
      ],
      benefits: [
        'Multiple branding options',
        'Private label available',
        'Professional quality print/embroidery',
        'Brand consistency across products',
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
    },
    {
      id: 3,
      title: 'Cut & Sew Customize',
      subtitle: 'For Fashion Brand Experts',
      description: 'Create your own designs from scratch. Full customization from fabric selection to final stitching. Bring your vision to life.',
      features: [
        'MOQ: 100 pcs/style/color (4 sizes)',
        'Sample time: 8-15 days',
        'Sample fee: USD $50+/piece',
        'Bulk order time: 24-30 days',
      ],
      benefits: [
        'Complete design freedom',
        'Custom fabric selection',
        'Unique sizing options',
        'Full creative control',
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z" />
        </svg>
      ),
    },
    {
      id: 4,
      title: 'Private Label Clothing',
      subtitle: 'For Established Brands',
      description: 'Full private label manufacturing service. Your brand, your labels, your packaging. We handle production, you focus on selling.',
      features: [
        'Custom labels and tags',
        'Branded packaging',
        'Quality assurance',
        'Flexible production runs',
      ],
      benefits: [
        'Complete brand ownership',
        'Professional presentation',
        'Scalable production',
        'Dedicated support team',
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
    },
    {
      id: 5,
      title: 'For Startups',
      subtitle: 'New Business Package',
      description: 'Special package for startups and new fashion entrepreneurs. Lower MOQs, guidance support, and flexible terms to help you launch.',
      features: [
        'Reduced MOQ options',
        'Expert guidance',
        'Sample development help',
        'Flexible payment terms',
      ],
      benefits: [
        'Lower startup costs',
        'Industry mentorship',
        'Risk-free sampling',
        'Growth partnership',
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
  ];

  const processSteps = [
    { step: 1, title: 'Inquiry', description: 'Send us your requirements and design ideas' },
    { step: 2, title: 'Quote', description: 'Receive detailed pricing and timeline' },
    { step: 3, title: 'Sample', description: 'We create samples for your approval' },
    { step: 4, title: 'Production', description: 'Mass production begins after approval' },
    { step: 5, title: 'Delivery', description: 'Quality checked and shipped globally' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#3b82f6] rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#3b82f6] rounded-full filter blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1 text-sm font-medium text-[#3b82f6] bg-[#3b82f6]/10 rounded-full mb-4">
              Business Solutions
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white font-['Playfair_Display'] mb-6">
              Tailored Solutions For <span className="text-white">Your Business</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Whether you're a startup or established brand, we have the perfect manufacturing solution for your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {solutions.map((solution, index) => (
              <div
                key={solution.id}
                className={`bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 ${
                  index % 2 === 0 ? '' : 'lg:flex-row-reverse'
                }`}
              >
                <div className="flex flex-col lg:flex-row">
                  {/* Content */}
                  <div className={`flex-1 p-8 md:p-12 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#3b82f6] to-[#3b82f6] flex items-center justify-center text-white">
                        {solution.icon}
                      </div>
                      <div>
                        <span className="text-sm text-[#3b82f6] font-medium">{solution.subtitle}</span>
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-['Playfair_Display']">
                          {solution.title}
                        </h2>
                      </div>
                    </div>
                    <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                      {solution.description}
                    </p>
                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                          <span className="w-2 h-2 bg-[#3b82f6] rounded-full"></span>
                          Details
                        </h4>
                        <ul className="space-y-2">
                          {solution.features.map((feature, i) => (
                            <li key={i} className="text-gray-600 text-sm flex items-start gap-2">
                              <svg className="w-4 h-4 text-[#3b82f6] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                              </svg>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                          <span className="w-2 h-2 bg-[#3b82f6] rounded-full"></span>
                          Benefits
                        </h4>
                        <ul className="space-y-2">
                          {solution.benefits.map((benefit, i) => (
                            <li key={i} className="text-gray-600 text-sm flex items-start gap-2">
                              <svg className="w-4 h-4 text-[#3b82f6] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <Link
                      to="/contact-us"
                      className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-[#3b82f6] to-[#3b82f6] text-white font-semibold rounded-full hover:shadow-lg hover:shadow-[#3b82f6]/30 transition-all duration-300"
                    >
                      Get Started
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                  {/* Visual */}
                  <div className={`lg:w-96 bg-gradient-to-br ${
                    index % 5 === 0 ? 'from-rose-50 to-rose-100' :
                    index % 5 === 1 ? 'from-sky-50 to-sky-100' :
                    index % 5 === 2 ? 'from-amber-50 to-amber-100' :
                    index % 5 === 3 ? 'from-emerald-50 to-emerald-100' :
                    'from-violet-50 to-violet-100'
                  } flex items-center justify-center p-12 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="text-center">
                      <div className="w-32 h-32 mx-auto mb-6 bg-white rounded-3xl shadow-lg flex items-center justify-center">
                        <span className="text-6xl font-bold text-[#3b82f6] font-['Playfair_Display']">{solution.id}</span>
                      </div>
                      <p className="text-gray-500 text-sm">Solution #{solution.id}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 text-sm font-medium text-[#3b82f6] bg-[#3b82f6]/10 rounded-full mb-4">
              How It Works
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-['Playfair_Display']">
              Simple 5-Step Process
            </h2>
          </div>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            {processSteps.map((step, index) => (
              <div key={step.step} className="flex items-center">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-[#3b82f6] to-[#3b82f6] rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-2xl font-bold text-white">{step.step}</span>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-1">{step.title}</h4>
                  <p className="text-sm text-gray-500 max-w-[140px]">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block w-16 h-0.5 bg-gradient-to-r from-[#3b82f6] to-[#3b82f6] mx-2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-[#3b82f6] to-[#3b82f6]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white font-['Playfair_Display'] mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-white/90 text-xl mb-10">
            Contact us today and let's discuss how we can bring your clothing line to life.
          </p>
          <Link
            to="/contact-us"
            className="inline-flex items-center gap-2 px-10 py-4 bg-white text-[#3b82f6] font-semibold rounded-full hover:shadow-xl transition-all duration-300"
          >
            Contact Us Today
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default SolutionsPage;

