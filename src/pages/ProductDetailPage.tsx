import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './ProductDetailPage.css';

// Import local images
import fullSleeve1 from '../assets/products/mens-full-sleeve-1.jpg';
import fullSleeve2 from '../assets/products/mens-full-sleeve-2.jpg';
import fullSleeve3 from '../assets/products/mens-full-sleeve-3.jpg';

import mensOversized1 from '../assets/products/mens-oversized-tshirt-1.jpg';
import mensOversized2 from '../assets/products/mens-oversized-tshirt-2.jpg';
import mensOversized3 from '../assets/products/mens-oversized-tshirt-3.jpg';

import womensOversized1 from '../assets/products/womens-oversized-white-1.jpg';
import womensOversized2 from '../assets/products/womens-oversized-white-2.jpg';
import womensOversized3 from '../assets/products/womens-oversized-white-3.jpg';

import classicPiquePolo1 from '../assets/products/classic-pique-polo-1.jpg';
import classicPiquePolo2 from '../assets/products/classic-pique-polo-2.jpg';
import classicPiquePolo3 from '../assets/products/classic-pique-polo-3.jpg';

import performancePolo1 from '../assets/products/performance-polo-1.jpg';
import performancePolo2 from '../assets/products/performance-polo-2.jpg';
import performancePolo3 from '../assets/products/performance-polo-3.jpg';

import mensHoodie1 from '../assets/products/mens-hoodie-1.jpg';
import mensHoodie2 from '../assets/products/mens-hoodie-2.jpg';
import mensHoodie3 from '../assets/products/mens-hoodie-3.jpg';

import womensHoodie1 from '../assets/products/womens-hoodie-1.jpg';
import womensHoodie2 from '../assets/products/womens-hoodie-2.jpg';
import womensHoodie3 from '../assets/products/womens-hoodie-3.jpg';

import mensSweatshirt1 from '../assets/products/mens-sweatshirt-1.jpg';
import mensSweatshirt2 from '../assets/products/mens-sweatshirt-2.jpg';
import mensSweatshirt3 from '../assets/products/mens-sweatshirt-3.jpg';

import mensTrackPants1 from '../assets/products/mens-track-pants-1.jpg';
import mensTrackPants2 from '../assets/products/mens-track-pants-2.jpg';

import joggers1 from '../assets/products/joggers-1.jpg';
import joggers2 from '../assets/products/joggers-2.jpg';

import bioWash1 from '../assets/products/bio-wash-tshirt-1.jpg';
import bioWash2 from '../assets/products/bio-wash-tshirt-2.jpg';
import bioWash3 from '../assets/products/bio-wash-tshirt-3.jpg';

import unisexPlain1 from '../assets/products/unisex-plain-tshirt-1.jpg';
import unisexPlain2 from '../assets/products/unisex-plain-tshirt-2.jpg';
import unisexPlain3 from '../assets/products/unisex-plain-tshirt-3.jpg';

import womensPlain1 from '../assets/products/womens-plain-tshirt-1.jpg';
import womensPlain2 from '../assets/products/womens-plain-tshirt-2.jpg';
import womensPlain3 from '../assets/products/womens-plain-tshirt-3.jpg';

import womensTrackSuit1 from '../assets/products/womens-track-suit-1.jpg';
import womensTrackSuit2 from '../assets/products/womens-track-suit-2.jpg';
import womensTrackSuit3 from '../assets/products/womens-track-suit-3.jpg';

/**
 * ProductDetailPage Component
 * Replicates the product detail page structure of hongyuapparel.com
 */
const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [activeTab, setActiveTab] = useState('description');
  const [activeImage, setActiveImage] = useState(0);

  // --- Product Data Definitions ---
  const products = [
    // 1. Men's Full Sleeve T Shirt
    {
      id: 'mens-full-sleeve',
      name: "Men's Full Sleeve T Shirt",
      description: "Price only for this stock blank design, add Logo need extra charge, not including shipping",
      images: [fullSleeve1, fullSleeve2, fullSleeve3],
      features: [
        { label: 'Fit', value: 'Regular fit' },
        { label: 'Size', value: 'S, M, L, XL, 2XL' },
        { label: 'Material', value: '100% Cotton' },
        { label: 'Weight', value: '180Gsm' },
        { label: 'MOQ', value: '50 Pieces, mix color and size' },
      ],
      weight: '0.25 kg',
      dimensions: '25 × 35 × 2 cm',
      sku: 'MFS-001',
      category: 'T-Shirts',
      longDescription: (
        <div className="pd-description-content">
          <p>This men's full sleeve t-shirt is made from high-quality 100% cotton fabric, ensuring comfort and durability. The regular fit design is perfect for casual wear, and the 180gsm weight provides a substantial feel without being too heavy. Available in a range of sizes from S to 2XL.</p>
          <p><strong>Key Features:</strong></p>
          <ul>
            <li>100% Cotton</li>
            <li>Regular Fit</li>
            <li>Full Sleeves</li>
            <li>Soft and comfortable</li>
            <li>Durable stitching</li>
          </ul>
        </div>
      )
    },
    // 2. Men's Oversized T-Shirt
    {
      id: 'mens-oversized',
      name: "Men’s Oversized T-Shirt",
      description: "Trendy oversized cotton T-shirt with heavy 220 GSM build and soft, streetwear-inspired finish.",
      images: [mensOversized1, mensOversized2, mensOversized3],
      features: [
        { label: 'Fit', value: 'Oversized Relaxed Fit' },
        { label: 'Size', value: 'S, M, L, XL' },
        { label: 'Material', value: '100% Cotton, Ringspun combed cotton' },
        { label: 'Weight', value: '220 GSM' },
        { label: 'MOQ', value: '50 Pieces, mix color and size' },
      ],
      weight: '0.35 kg', 
      dimensions: '30 × 40 × 3 cm',
      sku: 'MOS-001',
      category: 'Oversized',
      longDescription: (
        <div className="pd-description-content">
          <p>This Men’s Oversized T-Shirt delivers comfort and fashion-forward appeal. Crafted from 220 GSM premium cotton, it provides a substantial hand feel and relaxed drape. Bio-washed and pre-shrunk, it retains shape and color even after multiple washes. A perfect fit for modern casual and streetwear collections.</p>
          <p><strong>Key Highlights:</strong></p>
          <ul>
            <li>Heavyweight cotton fabric</li>
            <li>Soft bio-washed texture</li>
            <li>Retains shape and color</li>
            <li>Ideal for fashion and branding</li>
          </ul>
        </div>
      )
    },
    // 3. Women's Oversized White T-Shirt
    {
      id: 'womens-oversized',
      name: "Women’s Oversized White T-Shirt",
      description: "Premium oversized white T-shirt for women, designed with a relaxed fit and soft, breathable cotton.",
      images: [womensOversized1, womensOversized2, womensOversized3],
      features: [
        { label: 'Fit', value: 'Oversized Fit' },
        { label: 'Size', value: 'S, M, L, XL' },
        { label: 'Material', value: '100% Cotton' },
        { label: 'Weight', value: '200 GSM' },
        { label: 'MOQ', value: '50 Pieces, mix color and size' },
      ],
      weight: '0.30 kg',
      dimensions: '28 × 38 × 3 cm',
      sku: 'WOS-001',
      category: 'Oversized',
      longDescription: (
        <div className="pd-description-content">
          <p>The Women’s Oversized White T-Shirt offers a chic, relaxed look perfect for everyday wear. Made from high-quality 200 GSM cotton, it ensures breathability and softness against the skin. Its clean design serves as an excellent canvas for custom printing or embroidery, making it a favorite for brands and personal wardrobes alike.</p>
          <p><strong>Key Highlights:</strong></p>
          <ul>
            <li>Premium 100% cotton fabric</li>
            <li>Relaxed, trendy oversized fit</li>
            <li>Breathable and soft</li>
            <li>Versatile white color for styling</li>
          </ul>
        </div>
      )
    },
    // 4. Classic Pique Polo T-Shirt
    {
      id: 'classic-pique-polo',
      name: "Classic Pique Polo T-Shirt",
      description: "Classic 220 GSM cotton polo with structured collar, breathable comfort, and refined finishing for versatile wear.",
      images: [classicPiquePolo1, classicPiquePolo2, classicPiquePolo3],
      features: [
        { label: 'Fit', value: 'Regular Structured Fit' },
        { label: 'Size', value: 'S, M, L, XL, XXL' },
        { label: 'Material', value: '100% Cotton Piqué' },
        { label: 'Weight', value: '220 GSM' },
        { label: 'MOQ', value: '50 Pieces, mix color and size' },
      ],
      weight: '0.28 kg',
      dimensions: '28 × 35 × 2 cm',
      sku: 'CPP-001',
      category: 'Polo T-Shirts',
      longDescription: (
        <div className="pd-description-content">
          <p>This Polo T-Shirt is crafted from 220 GSM combed cotton, offering structure, softness, and long-term durability. The ribbed collar and cuffs add a premium look, while reinforced stitching ensures shape retention. Perfect for formal, casual, or uniform applications.</p>
          <p><strong>Key Highlights:</strong></p>
          <ul>
            <li>Breathable combed cotton</li>
            <li>Ribbed collar and sleeve hems</li>
            <li>Shape-retaining knit</li>
            <li>Ideal for export and uniform supply</li>
          </ul>
        </div>
      )
    },
    // 5. Performance Polo T-Shirt
    {
      id: 'performance-polo',
      name: "Performance Polo T-Shirt",
      description: "Premium 240 GSM cotton polo combining classic style, structure, and lasting comfort. Designed for durability and everyday sophistication.",
      images: [performancePolo1, performancePolo2, performancePolo3],
      features: [
        { label: 'Fit', value: 'Regular Structured Fit' },
        { label: 'Size', value: 'S, M, L, XL, XXL' },
        { label: 'Material', value: '100% Cotton, Combed and bio-washed' },
        { label: 'Weight', value: '240 GSM' },
        { label: 'MOQ', value: '50 Pieces, mix color and size' },
      ],
      weight: '0.30 kg',
      dimensions: '28 × 35 × 2 cm',
      sku: 'PP-001',
      category: 'Polo T-Shirts',
      longDescription: (
        <div className="pd-description-content">
          <p>Tailored from 240 GSM combed cotton, this Polo T-Shirt offers a refined, breathable, and soft texture. Its structured collar and double-stitched finish ensure a polished look, ideal for retail and export markets. Durable yet comfortable, this timeless polo retains its form and color after repeated use.</p>
          <p><strong>Key Highlights:</strong></p>
          <ul>
            <li>Breathable combed cotton for comfort</li>
            <li>Reinforced collar and sleeve hems</li>
            <li>Retains shape after washing</li>
            <li>Versatile for formal and casual use</li>
          </ul>
        </div>
      )
    },
    // 6. Men's Hoodie
    {
      id: 'mens-hoodie',
      name: "Men’s Hoodie",
      description: "Heavyweight cotton hoodie offering premium warmth, soft texture, and lasting durability — built for comfort in every season.",
      images: [mensHoodie1, mensHoodie2, mensHoodie3],
      features: [
        { label: 'Fit', value: 'Regular Relaxed Fit' },
        { label: 'Size', value: 'S, M, L, XL, XXL' },
        { label: 'Material', value: '100% Cotton Fleece' },
        { label: 'Weight', value: '300 GSM' },
        { label: 'MOQ', value: '50 Pieces, mix color and size' },
      ],
      weight: '0.50 kg',
      dimensions: '35 × 45 × 5 cm',
      sku: 'MH-001',
      category: 'Hoodies',
      longDescription: (
        <div className="pd-description-content">
          <p>Made from dense 300 GSM cotton fleece, this Men’s Hoodie delivers superior insulation and comfort. With double-stitched seams, ribbed hems, and an adjustable drawstring hood, it’s perfect for winterwear or lifestyle collections demanding high-quality craftsmanship.</p>
          <p><strong>Key Highlights:</strong></p>
          <ul>
            <li>Heavyweight warmth with soft fleece lining</li>
            <li>Durable stitching for long life</li>
            <li>Ribbed cuffs and hem for snug feel</li>
            <li>Perfect for premium export lines</li>
          </ul>
        </div>
      )
    },
    // 7. Women's Hoodie
    {
      id: 'womens-hoodie',
      name: "Women’s Hoodie",
      description: "Midweight cotton hoodie for women offering warmth, softness, and everyday versatility — perfect for modern casual and athleisure collections.",
      images: [womensHoodie1, womensHoodie2, womensHoodie3],
      features: [
        { label: 'Fit', value: 'Relaxed Comfort Fit' },
        { label: 'Size', value: 'S, M, L, XL' },
        { label: 'Material', value: '100% Cotton Fleece' },
        { label: 'Weight', value: '280 GSM' },
        { label: 'MOQ', value: '50 Pieces, mix color and size' },
      ],
      weight: '0.45 kg',
      dimensions: '35 × 40 × 4 cm',
      sku: 'WH-001',
      category: 'Hoodies',
      longDescription: (
        <div className="pd-description-content">
          <p>This 280 GSM Women’s Hoodie combines cozy comfort with a clean, export-quality finish. Crafted from soft cotton fleece, it delivers warmth without bulk. The adjustable hood, ribbed cuffs, and reinforced seams make it both durable and fashionable for all-day wear.</p>
          <p><strong>Key Highlights:</strong></p>
          <ul>
            <li>Soft cotton fleece interior</li>
            <li>Ribbed cuffs and waist for snug fit</li>
            <li>Warm yet breathable</li>
            <li>Ideal for layering and winterwear</li>
          </ul>
        </div>
      )
    },
    // 8. Men's Sweatshirt Full Sleeve
    {
      id: 'mens-sweatshirt',
      name: "Men’s Sweatshirt Full Sleeve",
      description: "Lightweight cotton sweatshirt offering warmth, comfort, and everyday versatility — ideal for layering and year-round wear.",
      images: [mensSweatshirt1, mensSweatshirt2, mensSweatshirt3],
      features: [
        { label: 'Fit', value: 'Regular Comfort Fit' },
        { label: 'Size', value: 'S, M, L, XL, XXL' },
        { label: 'Material', value: '100% Cotton Knit' },
        { label: 'Weight', value: '180 GSM' },
        { label: 'MOQ', value: '50 Pieces, mix color and size' },
      ],
      weight: '0.30 kg',
      dimensions: '30 × 40 × 2 cm',
      sku: 'MSS-001',
      category: 'Sweatshirts',
      longDescription: (
        <div className="pd-description-content">
          <p>Crafted from 180 GSM premium cotton, this full-sleeve sweatshirt offers a soft, breathable feel with a clean finish. Designed for casual wear or light winter layering, it combines a smooth outer surface with a brushed inner texture. Ribbed cuffs and hems ensure a snug fit and durable structure.</p>
          <p><strong>Key Highlights:</strong></p>
          <ul>
            <li>Lightweight warmth for all-day wear</li>
            <li>Soft brushed interior</li>
            <li>Durable stitching and ribbed edges</li>
            <li>Suitable for casual and semi-formal looks</li>
          </ul>
        </div>
      )
    },
    // 9. Men's Track Pants
    {
      id: 'mens-track-pants',
      name: "Men’s Track pants",
      description: "Lightweight cotton track pants designed for comfort and mobility — perfect for sports, casual wear, or export-ready collections.",
      images: [mensTrackPants1, mensTrackPants2],
      features: [
        { label: 'Fit', value: 'Slim Tapered Fit' },
        { label: 'Size', value: 'S, M, L, XL, XXL' },
        { label: 'Material', value: '100% Cotton, 240 GSM' },
        { label: 'Materials Used', value: 'Combed cotton yarn, soft-touch bio-wash finish' },
        { label: 'MOQ', value: '50 Pieces, mix color and size' },
      ],
      weight: '0.35 kg',
      dimensions: '30 × 40 × 3 cm',
      sku: 'MTP-001',
      category: 'Track Pants',
      longDescription: (
        <div className="pd-description-content">
          <p>These men’s track pants are made from 240 GSM pure cotton, ensuring breathability and all-day comfort. Featuring a tapered fit, elastic waistband with drawstring, and reinforced stitching, they provide both style and durability. Perfect for workouts or leisure, these pants are versatile essentials for casual and activewear collections.</p>
          <p><strong>Key Highlights:</strong></p>
          <ul>
            <li>Breathable 240 GSM cotton</li>
            <li>Tapered leg design for a modern look</li>
            <li>Elastic waistband with drawstring</li>
            <li>Durable stitching for long-lasting wear</li>
          </ul>
        </div>
      )
    },
    // 10. Joggers
    {
      id: 'joggers',
      name: "Joggers",
      description: "Premium poly-cotton joggers designed for comfort and style — perfect for casual wear, gym sessions, or export-ready apparel collections.",
      images: [joggers1, joggers2],
      features: [
        { label: 'Fit', value: 'Relaxed Athletic Fit' },
        { label: 'Size', value: 'S, M, L, XL, XXL' },
        { label: 'Material', value: '65% Cotton, 35% Polyester, 280 GSM' },
        { label: 'Materials Used', value: 'Premium poly-cotton yarn blend, soft bio-wash finish' },
        { label: 'MOQ', value: '50 Pieces, mix color and size' },
      ],
      weight: '0.40 kg',
      dimensions: '30 × 40 × 4 cm',
      sku: 'JOG-001',
      category: 'Track Pants',
      longDescription: (
        <div className="pd-description-content">
          <p>These joggers are crafted from 280 GSM high-quality poly-cotton blend, combining durability with a soft, breathable feel. Featuring an elastic waistband with adjustable drawstrings, ribbed cuffs, and spacious side pockets, they offer ultimate comfort and functionality. Suitable for both active and casual wear, these joggers are an ideal addition to modern apparel lines.</p>
          <p><strong>Key Highlights:</strong></p>
          <ul>
            <li>Soft and durable poly-cotton fabric</li>
            <li>Elastic waistband with drawstring</li>
            <li>Ribbed ankle cuffs for a snug fit</li>
            <li>Convenient side pockets for storage</li>
          </ul>
        </div>
      )
    },
    // 11. Bio-Wash T-Shirt
    {
      id: 'bio-wash-tshirt',
      name: "Bio-Wash T-Shirt",
      description: "Bio-washed cotton T-shirt with soft texture, premium color retention, and durable structure for daily comfort and branding use.",
      images: [bioWash1, bioWash2, bioWash3],
      features: [
        { label: 'Fit', value: 'Regular Everyday Fit' },
        { label: 'Size', value: 'S, M, L, XL, XXL' },
        { label: 'Material', value: '100% Cotton Knit' },
        { label: 'Weight', value: '180 GSM' },
        { label: 'MOQ', value: '50 Pieces, mix color and size' },
      ],
      weight: '0.20 kg',
      dimensions: '25 × 30 × 2 cm',
      sku: 'BW-001',
      category: 'T-Shirts',
      longDescription: (
        <div className="pd-description-content">
          <p>Made from 180 GSM bio-washed cotton, this T-shirt offers a luxurious hand feel and excellent breathability. The bio-wash process ensures vibrant color life and minimal shrinkage. Ideal for fashion brands, promotions, or casualwear collections seeking reliable quality.</p>
          <p><strong>Key Highlights:</strong></p>
          <ul>
            <li>Bio-wash treated for extra softness</li>
            <li>Fade and shrink-resistant</li>
            <li>Tailored for comfort and longevity</li>
            <li>Ideal for printing and embroidery</li>
          </ul>
        </div>
      )
    },
    // 12. Unisex Plain T-Shirt
    {
      id: 'unisex-plain-tshirt',
      name: "Unisex Plain T-Shirt",
      description: "Classic unisex plain T-shirt offering a relaxed fit and soft cotton feel — a versatile essential for every wardrobe.",
      images: [unisexPlain1, unisexPlain2, unisexPlain3],
      features: [
        { label: 'Fit', value: 'Relaxed Unisex Fit' },
        { label: 'Size', value: 'XS, S, M, L, XL, XXL' },
        { label: 'Material', value: '100% Cotton' },
        { label: 'Weight', value: '180 GSM' },
        { label: 'MOQ', value: '50 Pieces, mix color and size' },
      ],
      weight: '0.22 kg',
      dimensions: '25 × 30 × 2 cm',
      sku: 'UP-001',
      category: 'T-Shirts',
      longDescription: (
        <div className="pd-description-content">
          <p>Crafted from 180 GSM combed cotton, this Unisex Plain T-Shirt combines simplicity with superior comfort. Its pre-shrunk fabric and double-stitched hems ensure it holds up well against daily wear and washing. A blank canvas perfect for custom branding or minimalist style.</p>
          <p><strong>Key Highlights:</strong></p>
          <ul>
            <li>Soft and breathable combed cotton</li>
            <li>Pre-shrunk fabric to maintain fit</li>
            <li>Double-stitched hems for durability</li>
            <li>Perfect for custom branding or casual wear</li>
          </ul>
        </div>
      )
    },
    // 13. Women's Plain T-Shirt
    {
      id: 'womens-tshirt',
      name: "Women’s T-Shirt",
      description: "Soft, breathable cotton T-shirt for women — ideal for casual wear, layering, or export-ready fashion collections.",
      images: [womensPlain1, womensPlain2, womensPlain3],
      features: [
        { label: 'Fit', value: 'Regular Slim Fit' },
        { label: 'Size', value: 'S, M, L, XL, XXL' },
        { label: 'Material', value: '100% Cotton' },
        { label: 'Weight', value: '180 GSM' },
        { label: 'MOQ', value: '50 Pieces, mix color and size' },
      ],
      weight: '0.18 kg',
      dimensions: '24 × 28 × 2 cm',
      sku: 'WPT-001',
      category: 'T-Shirts',
      longDescription: (
        <div className="pd-description-content">
          <p>This women’s T-shirt is made from 180 GSM pure cotton, offering comfort and breathability for all-day wear. The T-shirt features a classic round neck, short sleeves, and a flattering regular fit. With soft fabric and durable stitching, it is perfect for casual, leisure, or branded apparel collections.</p>
          <p><strong>Key Highlights:</strong></p>
          <ul>
            <li>Soft 180 GSM cotton fabric</li>
            <li>Classic round neck and short sleeves</li>
            <li>Durable stitching for long-lasting wear</li>
            <li>Ideal for casual and everyday use</li>
          </ul>
        </div>
      )
    },
    // 14. Women's Track Suit
    {
      id: 'womens-track-suit',
      name: "Women’s Track Suit",
      description: "Comfort-oriented women’s tracksuit made from breathable 220 GSM cotton — perfect blend of softness, flexibility, and durability for daily or active wear.",
      images: [womensTrackSuit1, womensTrackSuit2, womensTrackSuit3],
      features: [
        { label: 'Fit', value: 'Slim Athletic Fit' },
        { label: 'Size', value: 'S, M, L, XL' },
        { label: 'Fabric Type', value: 'Cotton Knit, 220 GSM' },
        { label: 'Materials Used', value: 'Natural cotton fibers with minimal synthetic blend for flexibility' },
        { label: 'MOQ', value: '50 Pieces, mix color and size' },
      ],
      weight: '0.65 kg', // Estimated
      dimensions: '35 × 45 × 5 cm', // Estimated
      sku: 'WTS-001',
      category: 'Track Suits',
      longDescription: (
        <div className="pd-description-content">
          <p>Crafted from premium 220 GSM cotton, this ladies’ tracksuit offers balanced warmth, stretch, and breathability. The coordinated top and bottom ensure flexibility and a flattering fit. Designed for comfort and movement, it’s ideal for activewear, loungewear, or travel apparel.</p>
          <p><strong>Key Highlights:</strong></p>
          <ul>
            <li>Soft, stretchable cotton fabric</li>
            <li>Flexible waistband and cuffs</li>
            <li>Perfect for active and leisure wear</li>
            <li>Durable stitching and finish</li>
          </ul>
        </div>
      )
    },
  ];

  // --- Logic to select product ---
  let product = products.find(p => p.id === id);

  if (!product) {
    // Fallback generic product
    product = {
      id: id || 'unknown',
      name: `Product ${id}`,
      description: "Product description placeholder",
      images: [],
      features: [],
      weight: "N/A",
      dimensions: "N/A",
      sku: "N/A",
      category: "Uncategorized",
      longDescription: <div>No description available.</div>
    };
  }

  // Related Products Logic
  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="product-detail-page">
      {/* Breadcrumb */}
      <div className="pd-breadcrumb">
        <div className="container">
          <Link to="/">Home</Link>
          <span>/</span>
          {/* Update Products Link to pass state */}
          <Link to="/products" state={{ category: product.category }}>Products</Link>
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
              {product.images.length > 0 ? (
                <img src={product.images[activeImage]} alt={product.name} className="pd-gallery__img" />
              ) : (
                <span className="pd-gallery__placeholder">No Image</span>
              )}
            </div>
            <div className="pd-gallery__thumbs">
              {product.images.map((img, idx) => (
                <div 
                  key={idx} 
                  className={`pd-gallery__thumb ${activeImage === idx ? 'active' : ''}`}
                  onClick={() => setActiveImage(idx)}
                >
                  <img src={img} alt={`Thumbnail ${idx}`} className="pd-gallery__thumb-img" />
                </div>
              ))}
            </div>
          </div>

          {/* Info */}
          <div className="pd-info">
            <h1 className="pd-info__title">{product.name}</h1>
            
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

            <div className="pd-actions">
              <Link to="/contact-us" className="pd-btn pd-btn--outline">Inquiry Now</Link>
            </div>
            
            <div className="pd-meta-footer">
               <div className="pd-meta__item">
                  <span className="pd-meta__label">SKU:</span>
                  <span>{product.sku}</span>
                </div>
                <div className="pd-meta__item">
                  <span className="pd-meta__label">Category:</span>
                  <span>{product.category}</span>
                </div>
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
            {activeTab === 'description' && product.longDescription}
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
                  <tr>
                    <th>Size</th>
                    <td>{product.features.find(f => f.label === 'Size')?.value || 'N/A'}</td>
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
            {relatedProducts.length > 0 ? (
              relatedProducts.map((relatedProd) => (
                <Link 
                  to={`/product/${relatedProd.id}`} 
                  key={relatedProd.id} 
                  className="product-card group"
                  // Maintain category state when navigating to related product
                  state={{ category: relatedProd.category }}
                >
                  <div className="product-card__image">
                    <div className="product-card__placeholder">
                      {relatedProd.images && relatedProd.images.length > 0 ? (
                        <img 
                          src={relatedProd.images[0]} 
                          alt={relatedProd.name} 
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                      ) : (
                        <span className="text-gray-400">No Image</span>
                      )}
                    </div>
                  </div>
                  <div className="product-card__details">
                    <h3 className="product-card__title">{relatedProd.name}</h3>
                  </div>
                </Link>
              ))
            ) : (
              <div className="col-span-full text-center text-gray-500">
                No related products found in this category.
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Contact Section */}
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
