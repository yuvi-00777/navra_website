import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './ProductDetailPage.css';

/**
 * ProductDetailPage Component
 * Replicates the product detail page structure of hongyuapparel.com
 */
const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');

  // Mock product data (in a real app, fetch based on ID)
  // Default to the specific shirt if ID matches or generic if not
  const product = {
    id: id,
    name: id === '1237' ? '#1237 Cotton 250GSM Vintage Washed Oversized T-Shirt' : `Product ${id}`,
    price: 7.99,
    description: 'Price only for this stock blank design, add Logo need extra charge, not including shipping',
    images: ['Image 1', 'Image 2', 'Image 3'],
    features: [
      { label: 'Fit', value: 'Unisex Loose fit' },
      { label: 'Size', value: 'S, M, L, XL, 2XL' },
      { label: 'Material', value: '100% Cotton' },
      { label: 'Weight', value: '250Gsm' },
      { label: 'MOQ', value: '50 Pieces, mix color and size' },
    ],
    weight: '0.35 kg',
    dimensions: '25 × 35 × 5 cm',
  };

  const handleQuantityChange = (delta: number) => {
    setQuantity(Math.max(1, quantity + delta));
  };

  return (
    <div className="product-detail-page">
      {/* Breadcrumb */}
      <div className="pd-breadcrumb">
        <div className="container">
          <Link to="/">Home</Link>
          <span>/</span>
          <Link to="/products">Products</Link>
          <span>/</span>
          <span className="text-gray-900">{product.name}</span>
        </div>
      </div>

      <div className="container">
        {/* Main Layout */}
        <div className="pd-layout">
          {/* Gallery */}
          <div className="pd-gallery">
            <div className="pd-gallery__main">
              <span className="pd-gallery__placeholder">{product.images[0]}</span>
            </div>
            <div className="pd-gallery__thumbs">
              {product.images.map((img, idx) => (
                <div key={idx} className={`pd-gallery__thumb ${idx === 0 ? 'active' : ''}`}>
                  <span className="text-xs text-gray-400">{img}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Info */}
          <div className="pd-info">
            <h1 className="pd-info__title">{product.name}</h1>
            <span className="pd-info__price">${product.price.toFixed(2)}</span>
            
            <div className="pd-info__desc">
              <p>{product.description}</p>
            </div>

            <div className="pd-meta">
              {product.features.map((feature, idx) => (
                <div key={idx} className="pd-meta__item">
                  <span className="pd-meta__label">{feature.label}:</span>
                  <span>{feature.value}</span>
                </div>
              ))}
            </div>

            <div className="pd-customize-note">
              <strong>Don’t like this design?</strong> Navra T-shirt manufacturer customizes for you, send us your design, make the sizes colors material all according to your request, MOQ 100 pieces per color per design.
            </div>

            <table className="pd-specs-table">
              <tbody>
                <tr>
                  <th>Weight</th>
                  <td>{product.weight}</td>
                </tr>
                <tr>
                  <th>Dimensions</th>
                  <td>{product.dimensions}</td>
                </tr>
              </tbody>
            </table>

            <div className="pd-actions">
              <div className="pd-quantity">
                <button className="pd-quantity__btn" onClick={() => handleQuantityChange(-1)}>-</button>
                <input type="text" className="pd-quantity__input" value={quantity} readOnly />
                <button className="pd-quantity__btn" onClick={() => handleQuantityChange(1)}>+</button>
              </div>
              <button className="pd-btn pd-btn--primary">Add to cart</button>
              <Link to="/contact-us" className="pd-btn pd-btn--outline">Inquiry Now</Link>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="pd-tabs">
          <div className="pd-tabs__header">
            <button 
              className={`pd-tab-btn ${activeTab === 'description' ? 'active' : ''}`}
              onClick={() => setActiveTab('description')}
            >
              Description
            </button>
            <button 
              className={`pd-tab-btn ${activeTab === 'additional' ? 'active' : ''}`}
              onClick={() => setActiveTab('additional')}
            >
              Additional information
            </button>
          </div>
          <div className="pd-tab-content">
            {activeTab === 'description' && (
              <div>
                <p>Detailed description and more images would go here.</p>
              </div>
            )}
            {activeTab === 'additional' && (
              <table className="pd-specs-table" style={{ maxWidth: '600px' }}>
                <tbody>
                  <tr>
                    <th>Weight</th>
                    <td>{product.weight}</td>
                  </tr>
                  <tr>
                    <th>Dimensions</th>
                    <td>{product.dimensions}</td>
                  </tr>
                </tbody>
              </table>
            )}
          </div>
        </div>

        {/* Related Products */}
        <div className="pd-related">
          <h2 className="pd-related__title">Related Products</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {/* Mock Related Products */}
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="product-card">
                 <div className="product-card__image">
                    <span className="text-gray-400">Related {i}</span>
                 </div>
                 <div className="product-card__details">
                    <h3 className="product-card__title">Related Product Name</h3>
                    <p className="product-card__price">$12.99</p>
                 </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Contact Section Reuse from HomePage styles if possible, or simple replica */}
      <section className="bg-gray-50 py-16">
        <div className="container text-center">
            <h2 className="text-3xl font-bold mb-4 font-playfair">You've already taken the first step? Now what? Talk to us.</h2>
            <p className="text-gray-600 mb-8">Sure. Why Not!</p>
             <Link to="/contact-us" className="pd-btn pd-btn--primary">Contact Us</Link>
        </div>
      </section>
    </div>
  );
};

export default ProductDetailPage;

