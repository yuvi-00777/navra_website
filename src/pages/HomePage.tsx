import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useForm, ValidationError } from '@formspree/react';
import './HomePage.css';
import navraReel from '../assets/videos/navra-reel.mp4';

// Import images for categories
import mensFullSleeve1 from '../assets/products/mens-full-sleeve-1.jpg';
import mensOversized1 from '../assets/products/mens-oversized-tshirt-1.jpg';
import polo1 from '../assets/products/classic-pique-polo-1.jpg';
import mensHoodie1 from '../assets/products/mens-hoodie-1.jpg';
import mensSweatshirt1 from '../assets/products/mens-sweatshirt-1.jpg';
import womensTrackSuit1 from '../assets/products/womens-track-suit-1.jpg';
import mensTrackPants1 from '../assets/products/mens-track-pants-1.jpg';
import joggers1 from '../assets/products/joggers-1.jpg'; // For Trousers
import performancePolo1 from '../assets/products/performance-polo-1.jpg'; // For Jersey
import whyChooseUsImage from '../assets/why-choose-us.jpg';
import brandStyle1 from '../assets/brand-style-1.jpg';
import brandStyle2 from '../assets/brand-style-2.jpg';
import brandStyle3 from '../assets/brand-style-3.jpg';
import brandStyle4 from '../assets/brand-style-4.jpg';
import brandStyle5 from '../assets/brand-style-5.jpg';
import brandStyle6 from '../assets/brand-style-6.jpg';
import brandStyle7 from '../assets/brand-style-7.jpg';
import brandStyle8 from '../assets/brand-style-8.jpg';
import brandStyle9 from '../assets/brand-style-9.jpg';
import brandStyle10 from '../assets/brand-style-10.jpg';

/**
 * HomePage Component
 * Replicates the main landing page of hongyuapparel.com
 */
const HomePage: React.FC = () => {
  // Replace 'YOUR_FORM_ID' with your actual Formspree Form ID
  const [state, handleSubmit] = useForm("xvzpvyab");

  // State for Why Choose Navra accordion
  const [activeFeature, setActiveFeature] = useState<number | null>(0); // Default to first item open
  
  // State for Image Comparison Slider
  const [sliderPosition, setSliderPosition] = useState(50);
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPosition(Number(e.target.value));
  };

  // Toggle function for features accordion
  const toggleFeature = (index: number) => {
    if (activeFeature === index) {
      // If clicking the active one, close it
      setActiveFeature(null);
    } else {
      // If clicking a different one, open it (and close others automatically via state change)
      setActiveFeature(index);
    }
  };

  // Mock data for solutions cards
  const solutions = [
    {
      id: 1,
      title: 'Blank Wholesale',
      subtitle: 'For Wholesaler',
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
      description: 'Create your own designs and dreams from sketch.',
      moq: '100Pcs/style/color (4 sizes)',
      sampleTime: '8-15 days',
      sampleFee: 'USD $50/piece',
      bulkPrice: 'Depends on design',
    },
  ];

  // Updated product categories with images and sizes for grid layout
  const categories = [
    { name: 'T-Shirts', image: mensFullSleeve1 },
    { name: 'Oversized', image: mensOversized1 },
    { name: 'Polo T-Shirts', image: polo1 },
    { name: 'Hoodies', image: mensHoodie1 },
    { name: 'Sweatshirts', image: mensSweatshirt1 },
    { name: 'Track Suits', image: womensTrackSuit1 },
    { name: 'Track Pants', image: mensTrackPants1 },
    { name: 'Trousers', image: joggers1 },
    { name: 'Jersey', image: performancePolo1 },
  ];

  // Mock data for Why Choose section - UPDATED CONTENT
  const features = [
    {
      number: '01',
      title: 'ONE STOP SOLUTION',
      description: 'Navra Clothes Maker is the perfect solution for all your garment and clothing manufacturing needs. From sample development and bulk production to label printing, delivery of goods — the experts at this factory will take care every step along with you! we have wide variety of products such as t shirts, joggers, hoodies, sweatshirts — there are many styles available which means that whatever kind clothing design you required, we can easily made it.',
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

  // Mock data for process steps
  const processSteps = [
    { step: '01', title: 'Project Planning', description: 'Send your tech pack or pic of the design you want. We will assist you in verifying your materials and fitting details. The advice about sample fee, MOQ and estimate bulk price.' },
    { step: '02', title: 'Sourcing Materials', description: 'We work with local suppliers to acquire high-quality materials and assure that we stay below your specified price points. Lead times may be significantly shortened by choosing in-stock products.' },
    { step: '03', title: 'Pattern Making', description: 'Work with our expert pattern makers to achieve the features and fit of each style. Patterns are essentially the blueprint for all clothing items.' },
    { step: '04', title: 'Sample Making', description: 'Our skilled sample makers hand cut and sew your garments with detail and precision. By creating samples of your clothing, we\'re able to test the fit and functionality before mass production.' },
    { step: '05', title: 'Revisions', description: 'You\'ll have a fitting on the samples so we can know what alterations are needed for your next batch of samples. Thanks to the rich industry experience of our service team, we are confident to finish all revisions within only 1-2 rounds, while other traditional manufacturers may need 5+ rounds to achieve that.' },
    { step: '06', title: 'Productions', description: 'With your sample approved, we can begin pre-production. Placing your purchase order will initiate your first production run.' },
  ];

  // Mock data for Your Brand Your Style images
  const brandStyles = [
    brandStyle1, brandStyle2, brandStyle3, brandStyle4, brandStyle5,
    brandStyle6, brandStyle7, brandStyle8, brandStyle9, brandStyle10
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

  useEffect(() => {
    // Ensure video plays on load
    const videoElement = document.querySelector('video');
    if (videoElement) {
      videoElement.play().catch(error => {
        console.log("Video autoplay failed:", error);
      });
    }
  }, []);

  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero__video-container">
          <div className="hero__video-wrapper">
            <iframe
              className="hero__video-iframe"
              src={`https://www.youtube.com/embed/82hd6Gfp8_Q?autoplay=1&mute=1&controls=0&loop=1&playlist=82hd6Gfp8_Q&playsinline=1&rel=0&showinfo=0&modestbranding=1&iv_load_policy=3&disablekb=1&fs=0`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                width: '300%', // Increased width to zoom in
                height: '150%', // Increased height to zoom in
                transform: 'translate(-50%, -50%)',
                objectFit: 'cover',
                pointerEvents: 'none',
              }}
            ></iframe>
          </div>
          <div className="hero__overlay" style={{ zIndex: 2 }}></div> {/* Ensure overlay is on top */}
        </div>
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
              <Link to="/contact-us" className="hero__cta">
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

      {/* Product Categories Section - Updated to Grid Layout */}
      <section className="categories">
        <div className="categories__container">
          <div className="categories__header">
            <h2 className="categories__title">
              <span className="section-title-wrapper">
                Customize Any Type You Like. In Your Style.
                <svg className="scissors-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M6 6L18 18M18 6L6 18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </h2>
          </div>

          <div className="categories__grid">
            {categories.map((category) => (
              <Link 
                key={category.name} 
                to="/products" 
                state={{ category: category.name }}
                className="category-card"
              >
                <div className="category-card__image-wrapper">
                  <img src={category.image} alt={category.name} className="category-card__image" />
                  <div className="category-card__overlay"></div>
                </div>
                <div className="category-card__content">
                  <h3 className="category-card__title">{category.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner - FROM IDEA TO REALITY */}
      <section className="idea-reality">
        <div className="idea-reality__container">
          <div className="idea-reality__content">
            <h2 className="section-title-wrapper">
              From Idea to Reality
              <svg className="scissors-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                 <path d="M6 6L18 18M18 6L6 18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </h2>
            <p className="idea-reality__subtitle">
              Hongyu Apparel is here for you along the way. We'll help keep track of all those ideas that might scatter into papers, napkins or even just brain cells so they don't get lost inside your head!
            </p>
            <Link to="/contact-us" className="idea-reality__btn">
              Get Started
            </Link>
          </div>
          
          <div className="idea-reality__visual">
            <div className="comparison-slider" ref={sliderRef}>
              <div 
                className="comparison-slider__image comparison-slider__image--before" 
                style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
              >
                 {/* Sketch/Idea Image (Using filter for now) */}
                <img src={mensHoodie1} alt="Sketch" style={{ filter: 'grayscale(100%) contrast(150%) brightness(120%)' }} />
                <div className="comparison-slider__label">Sketch</div>
              </div>
              <div className="comparison-slider__image comparison-slider__image--after">
                {/* Real Image */}
                <img src={mensHoodie1} alt="Reality" />
                <div className="comparison-slider__label">Reality</div>
              </div>
              <input 
                type="range" 
                min="0" 
                max="100" 
                value={sliderPosition} 
                onChange={handleSliderChange}
                className="comparison-slider__input"
              />
              <div 
                className="comparison-slider__handle"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="comparison-slider__handle-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                    <path d="M8 5v14l11-7z" transform="rotate(180 12 12) translate(-4, 0)" />
                    <path d="M8 5v14l11-7z" transform="translate(4, 0)" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="about-us-home">
        <div className="about-us-home__container">
          <div className="about-us-home__header">
            <h2 className="about-us-home__title">
              <span className="section-title-wrapper">
                Crafted for the World
                <svg className="scissors-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M6 6L18 18M18 6L6 18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </h2>
          </div>
          <div className="about-content">
            <p>
              NAVRA, from the house of Exovate Exports, was created with one conviction — sourcing should be clear, dependable, and rooted in trust.
            </p>
            <p>
              Built in India for global markets, we close the gap between what buyers expect and what the industry actually delivers. Through design-led thinking, ethical supply chains, disciplined operations, and transparent communication, NAVRA makes sourcing seamless and predictable.
            </p>
            <p className="about-content__highlight">
              We’re not agents.<br/>
              We’re not traditional exporters.<br/>
              We’re a next-generation sourcing partner — blending India’s craftsmanship with global standards.
            </p>
            <p>
              NAVRA sets a new rhythm: organized, insight-driven, collaborative, and human at the core.
            </p>
          </div>
        </div>
      </section>

      {/* The Navra Way Section */}
      <section className="navra-way">
        <div className="navra-way__container">
          <h2 className="section-title">The Navra Way</h2>
          <div className="navra-way-grid">
            {[
              { title: "Trust you can count on", desc: "Promises kept, quality delivered." },
              { title: "Transparency at every step", desc: "Full visibility, zero guesswork." },
              { title: "Consistency that sets us apart", desc: "Repeatable excellence." },
              { title: "Innovation that moves you forward", desc: "Modern tools, modern thinking." },
              { title: "Partnership over transactions", desc: "We win when you win." },
              { title: "Responsibility built in", desc: "Ethical and sustainable practices always." },
              { title: "A vision beyond sourcing", desc: "Shaping the future of global apparel." }
            ].map((item, index) => (
              <div key={index} className="navra-way-item">
                <span className="navra-way-title">{item.title}</span>
                <span className="navra-way-desc">{item.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Navra Section */}
      <section className="why-us">
        <div className="why-us__container">
          <div className="why-us__header">
            <h2 className="why-us__title">
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
              {features.map((feature, index) => (
                <div 
                  key={feature.number} 
                  className={`why-us__item ${activeFeature === index ? 'active' : ''}`}
                  onClick={() => toggleFeature(index)}
                >
                  <div className="why-us__item-header">
                    <span className="why-us__item-number">{feature.number}</span>
                    <h3 className="why-us__item-title">{feature.title}</h3>
                    <span className="why-us__item-arrow">
                      {activeFeature === index ? '↘' : '↗'}
                    </span>
                  </div>
                  {activeFeature === index && (
                    <p className="why-us__item-description animate-fade-in">
                      {feature.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
            <div className="why-us__image">
              {/* Using a placeholder or existing image */}
               <img src={whyChooseUsImage} alt="Why Choose Us" />
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="comparison">
        <div className="comparison__container">
          <div className="comparison__header">
            <h2 className="comparison__title">
               <span className="section-title-wrapper">
                We Are Different
                <svg className="scissors-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                   <path d="M7 19a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm-1-4h.01M17 19a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm-1-4h.01M6.5 11l5-5 5 5M11.5 6V1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </h2>
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

      {/* Process Steps Section */}
      <section className="process">
        <div className="process__container">
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
          <div className="brand-style__grid">
             {brandStyles.map((img, index) => (
               <div key={index} className="brand-style__item">
                 <img src={img} alt={`Brand Style ${index + 1}`} loading="lazy" />
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq">
        <div className="faq__container">
          <div className="faq__header">
            <h2 className="faq__title">
               <span className="section-title-wrapper">
                Frequently Asked Questions
                 <svg className="scissors-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                   <path d="M7 19a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm-1-4h.01M17 19a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm-1-4h.01M6.5 11l5-5 5 5M11.5 6V1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </h2>
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
              <h2>
                <span className="section-title-wrapper-light">
                  You've already taken the first step? <br/>Now what? Talk to us.
                   <svg className="scissors-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                   <path d="M7 19a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm-1-4h.01M17 19a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm-1-4h.01M6.5 11l5-5 5 5M11.5 6V1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                </span>
              </h2>
              <button className="contact__cta-btn">Sure. Why Not!</button>
              
              <div className="contact__details">
                {/* Contact details intentionally left minimal to match source visual if needed, 
                    but typically includes address/phone in footer. 
                    Added "Get in Touch" form adjacent as per structure. */}
              </div>
            </div>

            <div className="contact__form-wrapper">
              <h3 className="contact__form-title">Get in Touch</h3>
              {state.succeeded ? (
                  <div className="text-center p-8">
                      <h4 className="text-xl font-bold mb-2">Thank You!</h4>
                      <p>Your enquiry has been sent successfully. We will get back to you within 24 hours.</p>
                  </div>
              ) : (
                <form className="contact__form" onSubmit={handleSubmit}>
                    <div className="contact__form-row">
                    <div className="contact__form-group">
                        <label>Name *</label>
                        <input 
                        type="text" 
                        name="name"
                        id="name"
                        className="contact__form-input" 
                        required 
                        />
                        <ValidationError 
                            prefix="Name" 
                            field="name"
                            errors={state.errors}
                        />
                    </div>
                    <div className="contact__form-group">
                        <label>Email *</label>
                        <input 
                        type="email" 
                        name="email"
                        id="email"
                        className="contact__form-input" 
                        required 
                        />
                        <ValidationError 
                            prefix="Email" 
                            field="email"
                            errors={state.errors}
                        />
                    </div>
                    </div>
                    <div className="contact__form-group">
                    <label>Company Name</label>
                    <input 
                        type="text" 
                        name="company"
                        id="company"
                        className="contact__form-input" 
                    />
                    <ValidationError 
                        prefix="Company" 
                        field="company"
                        errors={state.errors}
                    />
                    </div>
                    <div className="contact__form-group">
                    <label>More details *</label>
                    <textarea 
                        name="message"
                        id="message"
                        rows={4} 
                        className="contact__form-textarea" 
                        required
                    ></textarea>
                    <ValidationError 
                        prefix="Message" 
                        field="message"
                        errors={state.errors}
                    />
                    </div>
                    <button type="submit" className="contact__form-submit" disabled={state.submitting}>
                    Send Inquiry
                    </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
