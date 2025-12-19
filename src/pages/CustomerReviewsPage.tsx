import React from 'react';
import './CustomerReviewsPage.css';

/**
 * CustomerReviewsPage Component
 * Replicates the "Customer Reviews" page of hongyuapparel.com
 */
const CustomerReviewsPage: React.FC = () => {
  const reviews = [
    {
      name: 'Pedro',
      location: 'Spain',
      title: 'Excellent Quality & Service',
      content: "Hello everyone, I’m Pedro from Spain, I’ve been working with Navra just for a couple of months, and I’ve bought all of the tees and hoodies, I must say they are amazing, I love them their client treatment is amazing, and Kiki is so nice, they treat u very well, and the quality of the product they manufacture is excellent, in fact, I’m wearing one right now, its oversized wash tee, I truly recommend working with Navra and I’m very pleased."
    },
    {
      name: 'Jake',
      location: 'Australia',
      title: 'My Secret Weapon',
      content: "Hey everyone, so I work with Navra, I’ve been working with them for quite a few months now, they’ve been amazing at making really good samples, and we are about to go into production. I was really struggling on trying to figure out whether I wanted to make this video or not, and the reason for that is, I feel like they are my secret weapon, they’ve just done an amazing job, and they really are a good team to work with!!"
    },
    {
      name: 'Cora-LUVHER BOY',
      location: 'United States',
      title: 'Incredibly Impressed',
      content: "I’m Cora Sanfilippo, I work with Navra, this is the sample that I received, the quality of it is amazing, its super thick its super soft, its amazing quality, we also did puffy screen print on the back, and I was incredibly impressed. They are super good at making any changes that u need. and answering super quickly, I love the quality and the fit and the color, they’ve been super great..."
    }
  ];

  return (
    <div className="reviews-page">
      {/* Hero Section */}
      <section className="reviews-hero">
        <div className="reviews-hero__overlay"></div>
        <div className="container reviews-hero__content">
          <h1 className="reviews-hero__title">
            Only True <span className="reviews-hero__highlight">Feedback Counts</span>
          </h1>
          <p className="reviews-hero__desc">
            See what our clients from around the world have to say about working with Navra. We take pride in building long-lasting partnerships.
          </p>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="reviews-section">
        <div className="container">
          <div className="reviews-grid">
            {reviews.map((review, idx) => (
              <div key={idx} className="reviews-card">
                <div className="reviews-card-header">
                  <h3 className="reviews-card-name">{review.name}</h3>
                  <p className="reviews-card-location">{review.location}</p>
                </div>
                <div className="reviews-card-body">
                   <h4 className="reviews-card-title">"{review.title}"</h4>
                   <p className="reviews-card-content">
                     "{review.content}"
                   </p>
                </div>
                <div className="reviews-card-footer">
                  {'★'.repeat(5)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CustomerReviewsPage;
