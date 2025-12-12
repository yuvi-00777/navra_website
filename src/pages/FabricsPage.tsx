import React from 'react';
import { Link } from 'react-router-dom';
import './FabricsPage.css';

/**
 * FabricsPage Component
 * Replicates the fabrics page of hongyuapparel.com
 * Displays a grid of available fabric types with descriptions.
 */
const FabricsPage: React.FC = () => {
  const fabrics = [
    { name: 'Terry Fabric', description: 'Cotton or polyester blend, different thickness from 200gsm-500gsm, use for hoodies, tshirts, loungewear' },
    { name: 'Fleece Fabric', description: 'Fleece fabric is soft, warm, and cozy, providing excellent insulation for jackets, blankets, and cold-weather accessories.' },
    { name: 'Cotton Tshirt', description: '100% Cotton, different thickness from 180-400gsm' },
    { name: 'Acrylic Fabric', description: 'Acrylic fabric is soft, lightweight, and durable, making it perfect for cozy sweaters and blankets.' },
    { name: 'Bamboo Fabric', description: 'Bamboo fabric is breathable, hypoallergenic, and eco-friendly, offering a silky smooth feel against the skin.' },
    { name: 'Brocade Fabric', description: 'Brocade fabric features detailed patterns woven into its surface, adding a touch of elegance and sophistication to any garment or décor.' },
    { name: 'Canvas Fabric', description: 'Canvas fabric is rugged, sturdy, and versatile, ideal for durable bags, tents, and sturdy workwear.' },
    { name: 'Chambray Fabric', description: 'Chambray fabric is lightweight, breathable, and casual, perfect for relaxed shirts and comfortable summer attire.' },
    { name: 'Chiffon Fabric', description: 'Chiffon fabric is delicate, sheer, and flowing, creating elegant drapes and ethereal garments for special occasions.' },
    { name: 'Corduroy Fabric', description: 'Corduroy fabric is plush, ribbed, and cozy, adding texture and warmth to jackets, pants, and home furnishings.' },
    { name: 'Crepe Fabric', description: 'Crepe fabric is lightweight, textured, and subtly crinkled, which makes it flow beautifully for fancy dresses and tops.' },
    { name: 'Crochet Fabric', description: 'Crochet fabric is intricate, openwork, and breathable, perfect for lightweight tops and accessories with a handmade charm.' },
    { name: 'Cupro Fabric', description: 'Cupro fabric is soft, breathable, and luxurious, with a silky feel and excellent drape, ideal for elegant blouses and dresses.' },
    { name: 'Denim Fabric', description: 'Denim fabric is rugged, durable, and versatile, perfect for casual jeans, jackets, and timeless fashion staples.' },
    { name: 'Dobby Fabric', description: 'Dobby fabric is characterized by small geometric patterns, adding subtle texture and interest to garments and home textiles.' },
    { name: 'Double Weave Fabric', description: 'Double weave fabric, with two layers interlaced, creates a thicker, reversible textile perfect for jackets, coats, and structured garments.' },
    { name: 'Drill Fabric', description: 'Drill fabric is sturdy, durable, and tightly woven, making it ideal for workwear, uniforms, and heavy-duty apparel.' },
    { name: 'Gabardine Fabric', description: 'Gabardine fabric is durable, tightly woven, and wrinkle-resistant, making it ideal for tailored suits, trousers, and outerwear with a polished finish.' },
    { name: 'Gauze Fabric', description: 'Gauze fabric is lightweight, sheer, and airy, perfect for breathable summer clothing, curtains, and medical dressings.' },
    { name: 'Georgette Fabric', description: 'Georgette fabric is lightweight, sheer, and subtly crinkled, ideal for elegant dresses, blouses, and scarves with a graceful drape.' },
    { name: 'Gingham Fabric', description: 'Gingham fabric is characterized by checkered patterns, often in two colors, creating a classic and timeless look for shirts, dresses, and home décor.' },
    { name: 'Interlock Fabric', description: 'Interlock fabric is double-knit, smooth, and stretchy, providing excellent drape and comfort for activewear, loungewear, and fitted garments.' },
    { name: 'Jacquard Fabric', description: 'Jacquard fabric features intricate woven patterns, adding texture and dimension to clothing, upholstery, and decorative textiles.' },
    { name: 'Jersey Fabric', description: 'Jersey fabric is soft, stretchy, and comfortable, perfect for casual t-shirts, dresses, and activewear with a relaxed fit.' },
    { name: 'Lace Fabric', description: 'Lace fabric is delicate, intricate, and sheer, adding a touch of elegance and romance to dresses, lingerie, and bridal attire.' },
    { name: 'Leather Fabric', description: 'Leather is a durable and flexible material made from animal skins, commonly used for jackets, bags, shoes, and furniture due to its strength.' },
    { name: 'Linen Fabric', description: 'Linen fabric is lightweight, breathable, and crisp, perfect for summer clothing and casual home textiles with a relaxed, natural look.' },
    { name: 'Lurex Fabric', description: 'Lurex fabric is woven with metallic threads, adding sparkle and shine to garments and accessories for a glamorous touch.' },
    { name: 'Mesh Fabric', description: 'Mesh fabric is lightweight, breathable, and open-knit, offering ventilation and a sporty aesthetic for activewear, lingerie, and breathable layers.' },
    { name: 'Microfiber Polyester Fabric', description: 'Microfiber polyester fabric, smooth and lightweight, wicks moisture away, ideal for athletic wear, activewear, and quick-drying garments.' },
    { name: 'Modal Fabric', description: 'Modal fabric is soft, breathable, with a silky feel and excellent moisture absorption, perfect for underwear, loungewear, and flowy dresses.' },
    { name: 'Muslin Fabric', description: 'Muslin fabric is lightweight, plain-woven, and breathable, perfect for garments, quilting, and home decor.' },
    { name: 'Neoprene Fabric', description: 'Neoprene fabric is thick, durable, and water-resistant, often used in wetsuits, athletic gear, and laptop sleeves for protection.' },
    { name: 'Nylon Fabric', description: 'Nylon fabric, lightweight and strong, dries quickly, perfect for activewear, swimwear, and high-performance outerwear.' },
    { name: 'Organza Fabric', description: 'Organza fabric is sheer, lightweight, and crisp, perfect for elegant overlays, bridal gowns, and decorative accents with a delicate quality.' },
    { name: 'Oxford Fabric', description: 'Oxford fabric is durable, tightly woven, and slightly coarse, ideal for casual shirts, sturdy bags, and upholstery with a classic, textured appearance.' },
    { name: 'PBT Fabric', description: 'PBT fabric, stretchy and lightweight, wicks moisture away, ideal for athletic wear, swimwear, and activewear, maintaining excellent shape.' },
    { name: 'Pima Cotton Fabric', description: 'Pima cotton fabric is soft, luxurious, and boasts long fibers, ideal for premium shirts, bedding, and garments with a smooth, silky feel.' },
    { name: 'Pique Fabric', description: 'Pique fabric, textured and durable, showcases a waffle-like pattern, often found in polo shirts, sportswear, and casual apparel.' },
    { name: 'Plain Weave Fabric', description: 'Plain weave fabric is simple, balanced, and versatile, perfect for garments and home textiles, offering durability and easy care.' },
    { name: 'Plush Fabric', description: 'Plush fabric is soft, dense, and velvety, providing luxurious warmth and comfort in blankets, stuffed toys, and cozy apparel.' },
    { name: 'Pongee Fabric', description: 'Pongee fabric is lightweight, smooth, and wrinkle-resistant, commonly used in outerwear, linings, and lightweight apparel.' },
    { name: 'Ponte Fabric', description: 'Ponte fabric is stable, stretchy, and smooth, with a double-knit construction, perfect for structured garments like pants, skirts, and dresses.' },
    { name: 'Poplin Fabric', description: 'Poplin fabric is lightweight, tightly woven, with a smooth surface, perfect for shirts, dresses, and casual wear with a polished finish.' },
    { name: 'PU Leather Fabric', description: 'PU leather mimics real leather, offering durability and water resistance. Popular in bags, jackets, and upholstery for its affordability and versatility.' },
    { name: 'Rayon Fabric', description: 'Rayon fabric is soft, lightweight, breathable, and smooth-textured, ideal for flowing dresses, blouses, and linings, offering a luxurious feel.' },
    { name: 'Rib Knit Fabric', description: 'Rib knit fabric, stretchy and textured with vertical ribs, is commonly used in cuffs, collars, and trim for its elasticity and shape retention.' },
    { name: 'Ripstop Fabric', description: 'Ripstop fabric is lightweight, durable, and tear-resistant, ideal for outdoor gear, tents, and backpacks.' },
    { name: 'Satin Fabric', description: 'Satin fabric is smooth, shiny, and luxurious, with a glossy surface and a soft, flowing drape, perfect for elegant evening gowns, lingerie, and formal attire.' },
    { name: 'Silk Fabric', description: 'Silk fabric is smooth, lustrous, and luxurious, with a soft, flowing drape and natural sheen, ideal for elegant dresses, blouses, and high-end lingerie.' },
    { name: 'Seersucker Fabric', description: 'Seersucker fabric is lightweight, puckered, and breathable, ideal for summer suits, shirts, and casual attire with a relaxed, textured look.' },
    { name: 'Slub Fabric', description: 'Slub fabric is textured, with irregularly thick and thin areas, adding depth and interest to garments and home textiles for a casual, rustic look.' },
    { name: 'Suede Fabric', description: 'Suede fabric is soft, plush, and velvety, resembling leather with a napped surface, used in jackets, shoes, and upholstery for its luxurious feel.' },
    { name: 'Taslan Fabric', description: 'Taslan fabric is durable, water-resistant, and quick-drying, commonly used in outdoor and activewear for its performance properties and rugged appeal.' },
    { name: 'Tencel Fabric', description: 'Tencel fabric is soft, breathable, eco-friendly, sustainably sourced, ideal for comfortable clothing, bedding, and drapery with a smooth feel.' },
    { name: 'Tricot Fabric', description: 'Tricot fabric is smooth, stretchy, and tightly knit, commonly used in sportswear, lingerie, and swimwear for its elasticity and comfort.' },
    { name: 'Tweed Fabric', description: 'Tweed fabric is textured, durable, and coarse, ideal for tailored jackets, skirts, and outerwear with a timeless, classic look.' },
    { name: 'Twill Fabric', description: 'Twill fabric, durable and diagonal woven with a rib pattern, common in pants, jackets, and workwear for strength and flexibility.' },
    { name: 'Velour Fabric', description: 'Velour fabric, plush and soft, resembling velvet with a rich pile, is used in loungewear, upholstery, and eveningwear for its luxurious feel.' },
    { name: 'Velvet Fabric', description: 'Velvet fabric is luxurious, soft, and plush, with a dense pile creating a rich texture, ideal for formal dresses, upholstery, and decorative accents.' },
    { name: 'Viscose Fabric', description: 'Viscose fabric is smooth, lightweight, breathable, with a silky feel, ideal for comfortable clothing, drapery, and linings with a luxurious touch.' },
    { name: 'Voile Fabric', description: 'Voile fabric is lightweight, sheer, and airy, with a smooth, crisp finish, commonly used in curtains, dresses, and scarves for its delicate appearance.' },
    { name: 'Wool Fabric', description: 'Wool fabric is warm, soft, and insulating with natural moisture-wicking properties, ideal for coats, sweaters, and blankets in cold weather.' },
  ];

  return (
    <div className="fabrics-page">
      {/* Hero Banner */}
      <section className="fabrics-hero">
        <div className="fabrics-hero__decorations">
          <div className="fabrics-hero__decoration"></div>
        </div>
        <div className="container fabrics-hero__content">
          <span className="fabrics-hero__badge">
            Premium Materials
          </span>
          <h1 className="fabrics-hero__title">
            Fabrics Collection
          </h1>
          <p className="fabrics-hero__subtitle">
            Discover our extensive range of high-quality fabrics suitable for any garment or application.
          </p>
          <div className="mt-8">
            <Link to="/about" className="fabrics-hero__cta">
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* Fabrics Grid */}
      <section className="fabrics-content">
        <div className="container">
          <div className="fabrics-header">
            <h2 className="fabrics-header__title">What We Have</h2>
            <div className="fabrics-header__line"></div>
          </div>
          
          <div className="fabrics-grid">
            {fabrics.map((fabric, index) => (
              <div key={index} className="fabric-card">
                <div className="fabric-card__icon">
                  <span className="text-xl font-bold text-[#c8a96a]">
                    {fabric.name.charAt(0)}
                  </span>
                </div>
                <h3 className="fabric-card__title">{fabric.name}</h3>
                <p className="fabric-card__desc">{fabric.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="fabrics-cta-section">
        <div className="container">
          <div className="fabrics-cta-box">
            <h2>Need a specific fabric not listed here?</h2>
            <p>We can source any material for your custom clothing line.</p>
            <Link to="/about" className="fabrics-cta-btn">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FabricsPage;
