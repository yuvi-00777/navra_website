import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ProductsPage.css';

/**
 * ProductsPage Component
 * Replicates the "Products and Categories" page of hongyuapparel.com
 */
const ProductsPage: React.FC = () => {
  // Set default active category to 'T-Shirts'
  const [activeCategory, setActiveCategory] = useState<string | null>('T-Shirts');

  // Mock data for products with category field for filtering
  const products = [
    { id: '1237', name: '#1237 Cotton 250GSM Vintage Washed Oversized T-Shirt', price: 7.99, image: 'tshirt', category: 'T-Shirts' },
    { id: '1240', name: '#1240 Acid Wash 275GSM Cotton Oversized T-Shirt', price: 8.99, image: 'tshirt', category: 'T-Shirts' },
    { id: '1243', name: '#1243 Terry 330GSM Acid Wash Distressed Raw Edge Reglan Sleeve T-Shirt', price: 11.99, image: 'tshirt', category: 'T-Shirts' },
    { id: 'DX8809', name: '#DX8809 Cotton 230gsm Oversized High Neck T-Shirt', price: 7.99, image: 'tshirt', category: 'T-Shirts' },
    { id: 'DX8805', name: '#DX8805 Cotton 260gsm Light Wash Oversized Boxy T-Shirt', price: 8.99, image: 'tshirt', category: 'T-Shirts' },
    { id: 'S8280', name: '#S8280 Oversize Long-Staple Cotton 280Gsm T-Shirt', price: 5.99, image: 'tshirt', category: 'T-Shirts' },
    { id: 'S8320', name: '#S8320 Long-Staple Cotton 320Gsm Oversize T-Shirt', price: 5.99, image: 'tshirt', category: 'T-Shirts' },
    { id: 'S9240', name: '#S9240 Cotton 240Gsm Basic Fit Unisex T-Shirt', price: 4.99, image: 'tshirt', category: 'T-Shirts' },
    { id: 'S8220', name: '#S8220 Sorona Cooling 220Gsm Slightly Oversized T-Shirt', price: 3.99, image: 'tshirt', category: 'T-Shirts' },
    { id: 'S3150', name: '#S3150 Quick Dry 180Gsm Polyester Sports T-Shirt', price: 3.99, image: 'tshirt', category: 'T-Shirts' },
    { id: 'S1006', name: '#S1006 Long-Staple 240Gsm Cotton Unisex Vest', price: 4.99, image: 'vest', category: 'T-Shirts' },
    { id: 'A9210', name: '#A9210 Siro-Spun 20s 210g Cotton Basic Fit T-Shirt', price: 4.99, image: 'tshirt', category: 'T-Shirts' },
    { id: 'A8210', name: '#A8210 Oversized 20s Cotton 210Gsm Unisex T-Shirt', price: 4.99, image: 'tshirt', category: 'T-Shirts' },
    { id: 'BX8108', name: '#BX8108 Quick-Dry 260Gsm Color Block Sports Vest', price: 7.99, image: 'vest', category: 'T-Shirts' },
    { id: '1012T', name: '#1012T Stretch Ctton 220g Slim Fit Women T-shirt', price: 4.99, image: 'tshirt', category: 'T-Shirts' },
    { id: '2349', name: '#2349 Silk Short Sleeve shorts Pajamas For Women', price: 12.99, image: 'pajamas', category: 'Sleepwear' },
    { id: 'TZ2062', name: '#TZ2062 Silk Elegant Long Sleeve Pajama Set', price: 15.99, image: 'pajamas', category: 'Sleepwear' },
    { id: '66818', name: '#66818 Soft Modal Long Sleeve Pajamas Set', price: 18.99, image: 'pajamas', category: 'Sleepwear' },
    { id: 'Bikini1', name: 'Bikini Manufactures Floral Bikinis With Strings', price: 8.00, image: 'swimwear', category: 'Swimwear' },
    { id: 'Swimwear1', name: 'Swimwear Suppliers Sexy Print Bikini', price: 8.00, image: 'swimwear', category: 'Swimwear' },
    { id: 'Hat1', name: 'Custom Snapback Manufacturer', price: 6.00, image: 'hat', category: 'Accessories' },
    { id: 'Hat2', name: 'Custom African Print Hat Manufacturer', price: 6.00, image: 'hat', category: 'Accessories' },
    // Add dummy products for other categories to demonstrate filtering
    { id: 'Hoodie1', name: 'Fleece Hoodie', price: 19.99, image: 'hoodie', category: 'Hoodies' },
    { id: 'Hoodie2', name: 'Terry Hoodie', price: 21.99, image: 'hoodie', category: 'Hoodies' },
    { id: 'Sweater1', name: 'Wool Sweater', price: 25.99, image: 'sweater', category: 'Sweater' },
    { id: 'Pants1', name: 'Cargo Pants', price: 29.99, image: 'pants', category: 'Pants' },
    { id: 'Dress1', name: 'Summer Dress', price: 15.99, image: 'dress', category: 'Dresses' },
  ];

  const categories = [
    { name: 'T-Shirts' },
    { name: 'Hoodies' },
    { name: 'Sweater' },
    { name: 'Pants' },
    { name: 'Y2K Fashion' },
    { name: 'Kids Wear' },
    { name: 'Outdoor Clothing' },
    { name: 'Jersey' },
    { name: 'Accessories' },
    { name: 'Dresses' },
    { name: 'Swimwear' },
    { name: 'Sleepwear' },
  ];

  // Filter products based on active category
  // If no category is selected (though we default to T-Shirts), show all (or could show none/T-Shirts)
  // Logic: if activeCategory is null, show all. If set, filter by it.
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
          <span className="products-hero__badge">
              Our Collection
            </span>
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
              <Link to={`/product/${product.id}`} key={product.id} className="product-card">
                <div className="product-card__image">
                  <div className="product-card__placeholder">
                    {/* Placeholder for product image */}
                    <span className="text-gray-400">{product.image}</span>
                  </div>
                </div>
                <div className="product-card__details">
                  <h3 className="product-card__title">{product.name}</h3>
                  <p className="product-card__price">
                    {typeof product.price === 'number' ? `$${product.price.toFixed(2)}` : product.price}
                  </p>
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
