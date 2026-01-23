import React, { useState } from 'react';
import './FAQPage.css';

const FAQPage: React.FC = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const faqs = [
    {
      question: 'How to place a sample order?',
      answer: 'After we confirmed the design you want for the sample, we can move forward for more details. Sample charges vary based on complexity. After payment has been made, it takes about 7-12 working days to receive your sample.',
    },
    {
      question: 'Can I choose directly from your ready design?',
      answer: 'Yes, of course. Our designer team create our own designs every season so that you can use directly. For more details, please contact us.',
    },
    {
      question: 'Can I make my own design?',
      answer: 'Yes, we can customize it based on your own design. If you choose our ready design and want to modify it, we can do that too upon your request. and we can customize your own size and make standard sizes as well, such as US, UK, EU, AU, and African sizes.',
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
    <div className="faq-page">
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
            <details 
              key={index} 
              className="faq-item" 
              open={activeFaq === index}
              onClick={(e) => {
                e.preventDefault();
                toggleFaq(index);
              }}
            >
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
    </div>
  );
};

export default FAQPage;


