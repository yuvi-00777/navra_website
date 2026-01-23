import React from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import CatalogDocument from '../components/CatalogDocument';
import { products, categories } from '../data/products';
import { fabrics } from '../data/fabrics';
import { technologies } from '../data/technologies';
import navraLogo from '../assets/navra_final_logo_crop.png';
import './CatalogPage.css';

const CatalogPage: React.FC = () => {
  // Group products by category
  const productsByCategory = categories.map(cat => {
    const categoryProducts = products.filter(p => p.category === cat.name);
    if (categoryProducts.length === 0) return null;
    return {
      name: cat.name,
      products: categoryProducts
    };
  }).filter(Boolean);

  return (
    <div className="catalog-page">
      <div className="catalog-container">
        {/* Header */}
        <header className="catalog-header">
          <img src={navraLogo} alt="Navra Logo" className="catalog-logo" />
          <h1 className="catalog-title">Product Catalog</h1>
          <p className="catalog-subtitle">Premium Apparel Manufacturing & Sourcing</p>
          
          <div style={{ marginTop: '20px' }}>
            <PDFDownloadLink 
              document={<CatalogDocument />} 
              fileName="navra-catalog.pdf"
              style={{
                textDecoration: 'none',
                padding: '10px 20px',
                color: '#fff',
                backgroundColor: '#000',
                borderRadius: '4px',
                fontWeight: 'bold'
              }}
            >
              {({ loading }) => (loading ? 'Generating PDF...' : 'Download PDF Catalog')}
            </PDFDownloadLink>
          </div>
        </header>

        {/* Intro */}
        <section className="catalog-section">
          <p style={{ fontSize: '1.1rem', lineHeight: '1.6', maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            We are a premier apparel exporter delivering high-quality, sustainable men’s and women’s wear. 
            From concept to creation, we offer end-to-end solutions including fabric sourcing, 
            sample development, bulk production, and global shipping.
          </p>
        </section>

        {/* Products Section */}
        <section className="catalog-section">
          <h2 className="catalog-section-title">Our Products</h2>
          
          {productsByCategory.map((category) => (
            <div key={category?.name} className="catalog-subsection">
              <h3 className="catalog-subsection-title">{category?.name}</h3>
              <div className="catalog-grid">
                {category?.products.map((product) => (
                  <div key={product.id} className="catalog-item">
                    <div className="catalog-item-image-wrapper">
                      <img src={product.image} alt={product.name} className="catalog-item-image" />
                    </div>
                    <div className="catalog-item-title">{product.name}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* Fabrics Section */}
        <section className="catalog-section">
          <h2 className="catalog-section-title">Fabrics Collection</h2>
          <div className="catalog-grid">
            {fabrics.map((fabric, index) => (
              <div key={index} className="catalog-item">
                <div className="catalog-item-image-wrapper">
                  <img src={fabric.image} alt={fabric.name} className="catalog-item-image" />
                </div>
                <div className="catalog-item-title">{fabric.name}</div>
                <div className="catalog-item-desc">{fabric.description}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Technology Section */}
        <section className="catalog-section">
          <h2 className="catalog-section-title">Manufacturing Technology</h2>
          <div className="catalog-grid">
            {technologies.map((tech, index) => (
              <div key={index} className="catalog-item">
                <div className="catalog-item-image-wrapper">
                  <img src={tech.image} alt={tech.name} className="catalog-item-image" />
                </div>
                <div className="catalog-item-title">{tech.name}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="catalog-footer">
          <h3>Contact Us</h3>
          <div className="catalog-contact-info">
            <div className="catalog-contact-item">
              <strong>Email:</strong> admin@thenavra.in
            </div>
            <div className="catalog-contact-item">
              <strong>Phone:</strong> +91 7680943044
            </div>
            <div className="catalog-contact-item">
              <strong>Website:</strong> www.thenavra.in
            </div>
          </div>
          <p style={{ marginTop: '2rem', fontSize: '0.9rem', color: '#888' }}>
            © {new Date().getFullYear()} Navra. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default CatalogPage;

