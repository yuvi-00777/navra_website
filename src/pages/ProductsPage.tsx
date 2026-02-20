import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './ProductsPage.css';
import ContactCTA from '../components/ContactCTA';
import { products, categories } from '../data/products';

/**
 * ProductsPage Component
 * Products and Categories page for Navra
 */
const ProductsPage: React.FC = () => {
  const location = useLocation();
  // Set default active category to 'T-Shirts'
  const [activeCategory, setActiveCategory] = useState<string | null>('T-Shirts');

  // Effect to update active category from navigation state
  useEffect(() => {
    if (location.state && location.state.category) {
      setActiveCategory(location.state.category);
    }
  }, [location.state]);

  // Filter products based on active category
  const filteredProducts = activeCategory 
    ? products.filter(product => product.category === activeCategory)
    : products;

  return (
    <div className="products-page">
      {/* Hero Banner */}
      <section className="products-hero">
        <div className="products-hero__decorations">
          <div className="products-hero__decoration"></div>
        </div>
        <div className="container products-hero__content">
          <h1 className="products-hero__title">
            Products and Categories
            </h1>
          <p className="products-hero__subtitle">
            Explore our wide range of high-quality apparel products and categories.
            </p>
          <div className="mt-8">
            <Link to="/contact-us" className="products-hero__cta">
              Get Started
            </Link>
          </div>
        </div>
      </section>

      <div className="container products-layout">
        {/* Sidebar Categories */}
        <aside className="products-sidebar">
          <h2 className="products-sidebar__title">Products and categories</h2>
          <ul className="category-list">
                  {categories.map((cat) => (
              <li key={cat.name} className="category-item">
                <div 
                  className={`category-item__header ${activeCategory === cat.name ? 'active' : ''}`}
                        onClick={() => setActiveCategory(cat.name)}
                >
                  {cat.name}
                </div>
                            </li>
                          ))}
                        </ul>
        </aside>

        {/* Product Grid */}
        <main className="products-grid">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              // Pass category state when clicking a product
              <Link to={`/product/${product.id}`} state={{ category: activeCategory }} key={product.id} className="product-card group">
                <div className="product-card__image">
                  <div className="product-card__placeholder">
                    {/* Primary Image */}
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="product-card__details">
                  <h3 className="product-card__title">{product.name}</h3>
                </div>
                      </Link>
            ))
          ) : (
            <div className="col-span-full text-center py-10 text-gray-500">
              No products found in this category.
                    </div>
          )}
            </main>
          </div>

      {/* Contact CTA Section */}
      <div className="products-contact-cta">
        <ContactCTA 
          title="You've already taken the first step? Now what? Talk to us."
          subtitle=""
          buttonText="Sure. Why Not!"
        />
      </div>
    </div>
  );
};

export default ProductsPage;
