import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

/**
 * HomePage Component
 * Replicates the main landing page of hongyuapparel.com
 */
const HomePage: React.FC = () => {
  // Mock data for solutions cards
  const solutions = [
    {
      id: 1,
      title: 'Blank Wholesale',
      subtitle: 'For Wholesaler',
      difficulty: 5,
      elements: 5,
      measurements: 5,
      customizations: 5,
      quantities: 5,
      cost: 5,
      description: 'Order ready-made clothing from our product page.',
      moq: '50 pieces mix size style Colors',
      sampleTime: '3 days',
      sampleFee: 'USD $20-25/piece',
      bulkPrice: 'As shown on website',
    },
    {
      id: 2,
      title: 'Logo Customize',
      subtitle: 'For Brand Starter',
      difficulty: 15,
      elements: 20,
      measurements: 20,
      customizations: 35,
      quantities: 50,
      cost: 10,
      description: 'Add logo on our blank clothing, printing, embroidery, or change to your private label.',
      moq: '50 pieces mix size style Colors',
      sampleTime: '5-8 days',
      sampleFee: 'USD $50/piece',
      bulkPrice: 'Quote upon request',
    },
    {
      id: 3,
      title: 'Cut & Sew Customize',
      subtitle: 'For Fashion Brand Expert',
      difficulty: 75,
      elements: 90,
      measurements: 80,
      customizations: 80,
      quantities: 90,
      cost: 75,
      description: 'Create your own designs and dreams from sketch.',
      moq: '100Pcs/style/color (4 sizes)',
      sampleTime: '8-15 days',
      sampleFee: 'USD $50/piece',
      bulkPrice: 'Depends on design',
    },
  ];

  // Mock data for product categories
  const categories = [
    { name: 'T-Shirts & Tops', icon: 'shirt' },
    { name: 'Pajamas', icon: 'moon' },
    { name: 'Swimwear', icon: 'water' },
    { name: 'Hoodies', icon: 'hoodie' },
    { name: 'Hats & Caps', icon: 'hat' },
    { name: 'Streetwear', icon: 'street' },
    { name: 'Dress', icon: 'dress' },
  ];

  // Mock data for Why Choose section
  const features = [
    {
      number: '01',
      title: 'ONE-STOP SOLUTION',
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
      title: 'ETHICALLY QUALITY CONTROL',
      description: 'Bring your design to life with Navra’s professional service team. We will check the quality of all stitching, measurements and fabrics used in our products before they are shipped off for delivery so that you can be sure you’re getting the highest quality of products.',
    },
    {
      number: '05',
      title: 'LOWER YOUR INVENTORY RISK',
      description: 'Start your own clothing line with 100 pieces per design to save money and pamper customers by giving them more options.',
    },
  ];

  // Mock data for comparison table
  const comparisonData = [
    { benefit: '100% Custom Products', hongyu: true, traditional: true },
    { benefit: 'Low Minimum Order', hongyu: true, traditional: false },
    { benefit: 'All Products Under One Roof', hongyu: true, traditional: false },
    { benefit: 'Best Value For Quality', hongyu: true, traditional: false },
    { benefit: 'Convenient Ordering Process', hongyu: true, traditional: false },
    { benefit: 'Custom Labels, Tags & Packaging Options', hongyu: true, traditional: true },
    { benefit: 'Cost Effective For Large Orders', hongyu: true, traditional: true },
  ];

  // Mock data for statistics
  const stats = [
    { number: '22', label: 'Years of OEM experience in clothing industry' },
    { number: '2013', label: 'Happy clients and counting' },
    { number: '8058', label: 'Ready stylish designs' },
    { number: '73685', label: 'Pieces of high-quality clothes made per month' },
  ];

  // Mock data for testimonials
  const testimonials = [
    {
      name: 'Pedro',
      location: 'Spain',
      quote: "hello everyone, I’m Pedro from Spain, I’ve been working with Navra just for a couple of months, and I’ve bought all of the tees and hoodies, I must say they are amazing, I love them their client treatment is amazing, and kiki is so nice, they treat u very well, and the quality of the product they manufacture is excellent, in fact, I’m wearing one right now, its oversized wash tee, I truly recommend working with Navra and I’m very pleased.",
    },
    {
      name: 'Jake',
      location: 'Australia',
      quote: "hey everyone, so I work with Navra, I’ve been working with them for quite a few months now, they’ve been amazing at making really good samples, and we are about to go into production. I was really struggling on trying to figure out whether I wanted to make this video or not, and the reason for that is, I feel like they are my secret weapon, they’ve just done an amazing job, and they really are a good team to work with!!",
    },
    {
      name: 'Cora',
      location: 'United States',
      company: 'LUVHER BOY',
      quote: "i’m Cora Sanfilippo, i work with Navra, this is the sample that I received, the quality of it is amazing, its super thick its super soft, its amazing quality, we also did puffy screen print on the back, and I was incredibly impressed they are super good at making any changes that u need. and answering super quickly, I love the quality and the fit and the color, they’ve been super great, showing every single option that you could possibly want in customizing it, so I am super grateful to be work with Navra!",
    },
  ];

  // Mock data for process steps
  const processSteps = [
    { step: '01', title: 'Project Planning', description: 'Send your tech pack or pic of the design you want. We will assist you in verifying your materials and fitting details. The advice about sample fee, MOQ and estimate bulk price.' },
    { step: '02', title: 'Sourcing Materials', description: 'We work with local suppliers to acquire high-quality materials and assure that we stay below your specified price points. Lead times may be significantly shortened by choosing in-stock products.' },
    { step: '03', title: 'Pattern Making', description: 'Work with our expert pattern makers to achieve the features and fit of each style. Patterns are essentially the blueprint for all clothing items.' },
    { step: '04', title: 'Sample Making', description: 'Our skilled sample makers hand cut and sew your garments with detail and precision. By creating samples of your clothing, we\'re able to test the fit and functionality before mass production.' },
    { step: '05', title: 'Revisions', description: 'You\'ll have a fitting on the samples so we can know what alterations are needed for your next batch of samples. Thanks to the rich industry experience of our service team, we are confident to finish all revisions within only 1-2 rounds, while other traditional manufacturers may need 5+ rounds to achieve that.' },
    { step: '06', title: 'Productions', description: 'With your sample approved, we can begin pre-production. Placing your purchase order will initiate your first production run.' },
  ];

  // Mock data for FAQs
  const faqs = [
    {
      question: 'How to place a sample order?',
      answer: 'After we confirmed the design you want for the sample, we can move forward for more details. For a simple sample, we charge $50 per piece; while for a more complicated sample, we may charge up to $80 per piece. After payment has been made, it takes about 7-12 working days to receive your sample.',
    },
    {
      question: 'Can I choose directly from your ready design?',
      answer: 'Yes, of course. Our designer team create our own designs every season so that you can use directly. For more details, please contact us.',
    },
    {
      question: 'Can I make my own design?',
      answer: 'Yes, we can customize it based on your own design. If you choose our ready design and want to modify it, we can do that too upon your request. and we can customize your own size and make standard sizes as well, such as US, UK, EU, AU size.',
    },
    {
      question: "Whats your ethics ?",
      answer: 'you can check this link > Find Ethical Clothing Manufacturer',
    },
    {
      question: "What is the production process?",
      answer: '1. After confirming your order items and quantity, we will provide you a quote and the lead time. 2. You need to pay 30% deposit if you’re an old customer, while it’s 50% deposit if you’re a new customer. We accept payments via Paypal, T/T, Western Union, etc. 3. We’ll source the materials and seek for your approval. 4. Material ordering. 5. Pre Production Samples are made for your approval. 6. Mass Production 7. Payment of the 70% balance before processing delivery. (70% is for old customers while 50% is for new customers)',
    },
    {
      question: "What's your MOQ for production? (minimum order quantity)",
      answer: 'Generally speaking, our MOQ is 100 units per style per color. But it may vary according to the fabric you choose.',
    },
    {
      question: "What are the main factors that affect the final price?",
      answer: 'Prices may vary depending on: 1. Ordered quantity 2. Number of size/color: i.e. 100pcs in 3 sizes(S,M,L) is cheaper than 100pcs in 6 sizes(XS,S,M,L,XL,XXL) 3. Textile/Fabric composition: i.e. T-Shirt made from Polyester is cheaper than one that was made from cotton or viscose. 4. Quality of Production: i.e. Customized designs in terms of stitching, accessories, buttons have higher cost per unit; flat-lock stitch has a price difference from reverse cross-stitch',
    },
    {
      question: "What is your leading time?",
      answer: 'The standard lead time is 15-25 days, which can vary depending on the quantity of your order. For fabric dying, printing and embroidery, there’s 7 days additional lead time for each process.',
    },
    {
      question: "What are your modes of shipping?",
      answer: 'We can ship by express mail (2-5 days door to door) via FedEx, UPS, DHL,TNT, or regular post (15-30 days) depending on your location. The shipping fee will be calculated based on the product weight and chosen shipping method.',
    },
    {
      question: "Can I put my own logo on the label of products?",
      answer: 'Yes, we offer custom label and hang tag printing services. Send us your logo design to get a quote.',
    },
  ];

  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero__content">
          <div className="animate-fade-in-up">
            <h1 className="hero__title">
              Manufacturer For <span className="hero__title-highlight">YOUR</span><br />
              Clothing Line
            </h1>
            <p className="hero__subtitle">
              New fashion brand? Navra is here to be your first and last stop for all clothing needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/about" className="hero__cta">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Tailored Solutions Section */}
      <section className="solutions">
        <div className="solutions__container">
          <div className="solutions__header">
            <h2 className="solutions__title">Tailored Solutions For Your Business</h2>
          </div>

          <div className="solutions__grid">
            {solutions.map((solution, index) => (
              <div
                key={solution.id}
                className={`solution-card ${index === 2 ? 'solution-card--featured' : ''}`}
              >
                <div className="solution-card__header">
                  <span className="solution-card__badge">{solution.subtitle}</span>
                  <h3 className="solution-card__title">
                    <span className="solution-card__number">{solution.id}. </span>
                    {solution.title}
                  </h3>
                </div>

                <div className="solution-card__metrics">
                  {[
                    { label: 'Difficulty Level', value: solution.difficulty },
                    { label: 'Elements Required on your part', value: solution.elements },
                    { label: 'Measurments Chart', value: solution.measurements },
                    { label: 'Level Of Customizations', value: solution.customizations },
                    { label: 'Quantities Requirement', value: solution.quantities },
                    { label: 'Cost & Time', value: solution.cost },
                  ].map((item) => (
                    <div key={item.label} className="metric-item">
                      <div className="metric-item__header">
                        <span className="metric-item__label">{item.label}</span>
                        <span className="metric-item__value">{item.value}%</span>
                      </div>
                      <div className="metric-item__bar">
                        <div
                          className="metric-item__fill"
                          style={{ width: `${item.value}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="solution-card__details">
                  <p className="text-sm mb-4" style={{ color: index === 2 ? 'rgba(255,255,255,0.9)' : '#666' }}>
                    {solution.description}
                  </p>
                  <div className="solution-card__detail-item">
                    <span className="solution-card__detail-label">MOQ:</span>
                    <span className="solution-card__detail-value">{solution.moq}</span>
                  </div>
                  <div className="solution-card__detail-item">
                    <span className="solution-card__detail-label">Sample time:</span>
                    <span className="solution-card__detail-value">{solution.sampleTime}</span>
                  </div>
                  <div className="solution-card__detail-item">
                    <span className="solution-card__detail-label">Sample fee:</span>
                    <span className="solution-card__detail-value">{solution.sampleFee}</span>
                  </div>
                  <div className="solution-card__detail-item">
                    <span className="solution-card__detail-label">Bulk Price:</span>
                    <span className="solution-card__detail-value">{solution.bulkPrice}</span>
                  </div>
                </div>

                <Link to="/solutions" className="solution-card__cta">
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories Section */}
      <section className="categories">
        <div className="categories__container">
          <div className="categories__header">
            <h2 className="categories__title">
              Customize Any Type You Like. <span>In Your Style.</span>
            </h2>
          </div>

          <div className="categories__grid">
            {categories.map((category) => (
              <Link key={category.name} to="/products" className="category-pill">
                <span>{category.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="cta-banner">
        <div className="cta-banner__content">
          <h2 className="cta-banner__title">
            From Idea to <span>Reality</span>
            </h2>
          <p className="cta-banner__subtitle">
            Navra is here for you along the way. We'll help keep track of all those ideas that might scatter into papers, napkins or even just brain cells so they don't get lost inside your head!
            </p>
          <Link to="/about" className="cta-banner__btn">
              Get Started
            </Link>
        </div>
      </section>

      {/* Why Choose Navra Section */}
      <section className="why-us">
        <div className="why-us__container">
          <div className="why-us__header">
            <h2 className="why-us__title">Why Choose Navra</h2>
          </div>

          <div className="why-us__grid">
            {features.map((feature) => (
              <div key={feature.number} className="feature-card">
                <div className="feature-card__number">{feature.number}</div>
                <div className="feature-card__content">
                  <h3 className="feature-card__title">{feature.title}</h3>
                  <p className="feature-card__description">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="comparison">
        <div className="comparison__container">
          <div className="comparison__header">
            <h2 className="comparison__title">We Are Different</h2>
          </div>

          <div className="comparison__table">
            <table>
              <thead>
                <tr>
                  <th>Benefit</th>
                  <th>NAVRA</th>
                  <th>TRADITIONAL CLOTHING</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row) => (
                  <tr key={row.benefit}>
                    <td>{row.benefit}</td>
                    <td>
                      {row.hongyu ? (
                        <span className="check-icon check-icon--yes">
                          ✓
                        </span>
                      ) : (
                        <span className="check-icon check-icon--no">
                          ✕
                        </span>
                      )}
                    </td>
                    <td>
                      {row.traditional ? (
                        <span className="check-icon check-icon--yes">
                          ✓
                        </span>
                      ) : (
                        <span className="check-icon check-icon--no">
                          ✕
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="stats">
        <div className="stats__container">
          <div className="stats__header">
            <h2 className="stats__title">Numbers We Are Proud Of</h2>
            <p className="stats__subtitle">
              Navra was founded in 2003. From humble beginnings as a small clothing manufacturer, we’ve grown to be one of China's leading companies for women, men and children apparel manufacturing with our custom design service that will help you grow your brand!
            </p>
          </div>
          <div className="stats__grid">
            {stats.map((stat) => (
              <div key={stat.label} className="stat-item">
                <div className="stat-item__number">{stat.number}</div>
                <div className="stat-item__label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <div className="testimonials__container">
          <div className="testimonials__header">
            <h2 className="testimonials__title">Only True Feedback Counts</h2>
          </div>

          <div className="testimonials__grid">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="testimonial-card">
                <div className="testimonial-card__header">
                  <div className="testimonial-card__avatar">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="testimonial-card__name">{testimonial.name}</h4>
                    <p className="testimonial-card__location">
                      {testimonial.company && <span className="testimonial-card__company">{testimonial.company} • </span>}
                      {testimonial.location}
                    </p>
                  </div>
                </div>
                <p className="testimonial-card__content">"{testimonial.quote}"</p>
                <Link to="/customer-reviews" className="testimonial-card__read-more">Read More</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps Section */}
      <section className="process">
        <div className="process__container">
          <div className="process__header">
            <h2 className="process__title">How We Make It</h2>
          </div>

          <div className="process__grid">
            {processSteps.map((step) => (
              <div key={step.step} className="process-card">
                <div className="process-card__number">{step.step}</div>
                <div className="process-card__content">
                  <h3 className="process-card__title">{step.title}</h3>
                  <p className="process-card__description">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Your Brand Your Style */}
      <section className="brand-style">
        <div className="brand-style__container">
          <div className="brand-style__header">
            <h2 className="brand-style__title">Your Brand. Your Style.</h2>
            <p className="brand-style__subtitle">Any clothes you would like to customize, let Navra make it for you.</p>
          </div>
          {/* Placeholder for images as in original site - simplified for code */}
          <div className="brand-style__grid">
             {/* Images would go here */}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq">
        <div className="faq__container">
          <div className="faq__header">
            <h2 className="faq__title">Frequently Asked Questions</h2>
          </div>

          <div className="faq__list">
            {faqs.map((faq, index) => (
              <details key={index} className="faq-item">
                <summary>
                  <div className="faq-item__question">
                    <span className="faq-item__number">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    {faq.question}
                  </div>
                  <svg className="faq-item__icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="faq-item__answer">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact">
        <div className="contact__container">
          <div className="contact__grid">
            <div className="contact__info">
              <h2>You've already taken the first step? <span>Talk to us.</span></h2>
              <p>
                Sure. Why Not!
              </p>
              
              <div className="contact__details">
                {/* Contact details intentionally left minimal to match source visual if needed, 
                    but typically includes address/phone in footer. 
                    Added "Get in Touch" form adjacent as per structure. */}
              </div>
            </div>

            <div className="contact__form-wrapper">
              <h3 className="contact__form-title">Get in Touch</h3>
              <form className="contact__form">
                <div className="contact__form-row">
                  <div className="contact__form-group">
                    <label>Name *</label>
                    <input type="text" className="contact__form-input" required />
                  </div>
                  <div className="contact__form-group">
                    <label>Email *</label>
                    <input type="email" className="contact__form-input" required />
                  </div>
                </div>
                <div className="contact__form-row">
                  <div className="contact__form-group">
                    <label>Phone</label>
                    <input type="tel" className="contact__form-input" />
                  </div>
                  <div className="contact__form-group">
                    <label>What is you estimated budget?</label>
                    <select className="contact__form-select">
                      <option>Select Estimate Budget</option>
                      <option>Within $2,000</option>
                      <option>$2,000 - $5,000</option>
                      <option>$5,000 - $10,000</option>
                      <option>$10,000+</option>
                    </select>
                  </div>
                </div>
                <div className="contact__form-group">
                  <label>Company Name</label>
                  <input type="text" className="contact__form-input" />
                </div>
                <div className="contact__form-group">
                  <label>Your Selling Platforms</label>
                  <select className="contact__form-select">
                    <option>Choose Your Platform</option>
                    <option>Offline Store</option>
                    <option>Online Website</option>
                    <option>Social Media (Ins, FB, TIKTOK, etc.)</option>
                    <option>Not Started</option>
                    <option>Others</option>
                  </select>
                </div>
                <div className="contact__form-group">
                  <label>Website / URL</label>
                  <input type="text" className="contact__form-input" />
                </div>
                <div className="contact__form-group">
                  <label>More details *</label>
                  <textarea rows={4} className="contact__form-textarea" required></textarea>
                </div>
                <div className="contact__form-group">
                   <label>File Upload</label>
                   <div className="file-upload-box">
                     Click or drag files to this area to upload. You can upload up to 10 files.
                   </div>
                </div>
                <button type="submit" className="contact__form-submit">
                  Send Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
