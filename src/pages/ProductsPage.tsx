import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './ProductsPage.css';

// Import product images
import mensOversized1 from '../assets/products/mens-oversized-tshirt-1.jpg';
import mensOversized2 from '../assets/products/mens-oversized-tshirt-2.jpg';
import womensOversized1 from '../assets/products/womens-oversized-white-1.jpg';
import womensOversized2 from '../assets/products/womens-oversized-white-2.jpg';
import polo1 from '../assets/products/classic-pique-polo-1.jpg';
import polo3 from '../assets/products/performance-polo-1.jpg';
import mensHoodie1 from '../assets/products/mens-hoodie-1.jpg';
import womensHoodie1 from '../assets/products/womens-hoodie-1.jpg';
import mensSweatshirt1 from '../assets/products/mens-sweatshirt-1.jpg';
import mensFullSleeve1 from '../assets/products/mens-full-sleeve-1.jpg';
import bioWash1 from '../assets/products/bio-wash-1.jpg';
import unisexPlain1 from '../assets/products/unisex-plain-1.jpg';
import womensTshirt1 from '../assets/products/womens-tshirt-1.jpg';
import mensTrackPants1 from '../assets/products/mens-track-pants-1.jpg';
import joggers1 from '../assets/products/joggers-1.jpg';
import womensTrackSuit1 from '../assets/products/womens-track-suit-1.jpg';

/**
 * ProductsPage Component
 * Replicates the "Products and Categories" page of hongyuapparel.com
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

  // Mock data for products with category field for filtering
  const products = [
    // T-Shirts
    { 
      id: 'mens-full-sleeve', 
      name: 'Men’s Full Sleeve T Shirt', 
      image: mensFullSleeve1, 
      category: 'T-Shirts' 
    },
    { 
      id: 'bio-wash-tshirt', 
      name: 'Bio-Wash T-Shirt', 
      image: bioWash1, 
      category: 'T-Shirts' 
    },
    { 
      id: 'unisex-plain-tshirt', 
      name: 'Unisex Plain T-Shirt', 
      image: unisexPlain1, 
      category: 'T-Shirts' 
    },
    { 
      id: 'womens-tshirt', 
      name: 'Women’s T-Shirt', 
      image: womensTshirt1, 
      category: 'T-Shirts' 
    },

    // Oversized
    { 
      id: 'mens-oversized', 
      name: 'Men’s Oversized T-Shirt', 
      image: mensOversized1, 
      category: 'Oversized' 
    },
    { 
      id: 'womens-oversized', 
      name: 'Women’s Oversized White T-Shirt', 
      image: womensOversized1, 
      category: 'Oversized' 
    },

    // Polo T-Shirts
    { 
      id: 'classic-pique-polo', 
      name: 'Classic Pique Polo', 
      image: polo1, 
      category: 'Polo T-Shirts' 
    },
    { 
      id: 'performance-polo', 
      name: 'Performance Sport Polo', 
      image: polo3, 
      category: 'Polo T-Shirts' 
    },

    // Hoodies
    { 
      id: 'mens-hoodie', 
      name: 'Men’s Hoodie', 
      image: mensHoodie1, 
      category: 'Hoodies' 
    },
    { 
      id: 'womens-hoodie', 
      name: 'Women’s Hoodie', 
      image: womensHoodie1, 
      category: 'Hoodies' 
    },

    // Sweatshirts
    { 
      id: 'mens-sweatshirt', 
      name: 'Men’s Sweatshirt Full Sleeve', 
      image: mensSweatshirt1, 
      category: 'Sweatshirts' 
    },

    // Track Pants
    { 
      id: 'mens-track-pants', 
      name: 'Men’s Track Pants', 
      image: mensTrackPants1, 
      category: 'Track Pants' 
    },
    { 
      id: 'joggers', 
      name: 'Joggers', 
      image: joggers1, 
      category: 'Track Pants' 
    },

    // Track Suits
    { 
      id: 'womens-track-suit', 
      name: 'Women’s Track Suit', 
      image: womensTrackSuit1, 
      category: 'Track Suits' 
    },
  ];

  const categories = [
    { name: 'T-Shirts' },
    { name: 'Oversized' },
    { name: 'Polo T-Shirts' },
    { name: 'Hoodies' },
    { name: 'Sweatshirts' },
    { name: 'Trousers' },
    { name: 'Track Pants' },
    { name: 'Track Suits' },
    { name: 'Jersey' },
  ];

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
    </div>
  );
};

export default ProductsPage;
