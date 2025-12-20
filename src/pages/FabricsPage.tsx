import React from 'react';
import { Link } from 'react-router-dom';
import './FabricsPage.css';

// Import all fabric images
import terryImg from '../assets/fabrics/terry.jpg';
import fleeceImg from '../assets/fabrics/fleece.jpg';
import cottonTshirtImg from '../assets/fabrics/cotton-tshirt.jpg';
import acrylicImg from '../assets/fabrics/acrylic.jpg';
import bambooImg from '../assets/fabrics/bamboo.jpg';
import brocadeImg from '../assets/fabrics/brocade.jpg';
import canvasImg from '../assets/fabrics/canvas.jpg';
import chambrayImg from '../assets/fabrics/chambray.jpg';
import chiffonImg from '../assets/fabrics/chiffon.jpg';
import corduroyImg from '../assets/fabrics/corduroy.jpg';
import crepeImg from '../assets/fabrics/crepe.jpg';
import crochetImg from '../assets/fabrics/crochet.jpg';
import cuproImg from '../assets/fabrics/cupro.jpg';
import denimImg from '../assets/fabrics/denim.jpg';
import dobbyImg from '../assets/fabrics/dobby.jpg';
import doubleWeaveImg from '../assets/fabrics/double-weave.jpg';
import drillImg from '../assets/fabrics/drill.jpg';
import gabardineImg from '../assets/fabrics/gabardine.jpg';
import gauzeImg from '../assets/fabrics/gauze.jpg';
import georgetteImg from '../assets/fabrics/georgette.jpg';
import ginghamImg from '../assets/fabrics/gingham.jpg';
import interlockImg from '../assets/fabrics/interlock.jpg';
import jacquardImg from '../assets/fabrics/jacquard.jpg';
import jerseyImg from '../assets/fabrics/jersey.jpg';
import laceImg from '../assets/fabrics/lace.jpg';
import leatherImg from '../assets/fabrics/leather.jpg';
import linenImg from '../assets/fabrics/linen.jpg';
import lurexImg from '../assets/fabrics/lurex.jpg';
import meshImg from '../assets/fabrics/mesh.jpg';
import microfiberImg from '../assets/fabrics/microfiber.jpg';
import modalImg from '../assets/fabrics/modal.jpg';
import muslinImg from '../assets/fabrics/muslin.jpg';
import neopreneImg from '../assets/fabrics/neoprene.jpg';
import nylonImg from '../assets/fabrics/nylon.jpg';
import organzaImg from '../assets/fabrics/organza.jpg';
import oxfordImg from '../assets/fabrics/oxford.jpg';
import pbtImg from '../assets/fabrics/pbt.jpg';
import pimaCottonImg from '../assets/fabrics/pima-cotton.jpg';
import piqueImg from '../assets/fabrics/pique.jpg';
import plainWeaveImg from '../assets/fabrics/plain-weave.jpg';
import plushImg from '../assets/fabrics/plush.jpg';
import pongeeImg from '../assets/fabrics/pongee.jpg';
import ponteImg from '../assets/fabrics/ponte.jpg';
import poplinImg from '../assets/fabrics/poplin.jpg';
import puLeatherImg from '../assets/fabrics/pu-leather.jpg';
import rayonImg from '../assets/fabrics/rayon.jpg';
import ribKnitImg from '../assets/fabrics/rib-knit.jpg';
import ripstopImg from '../assets/fabrics/ripstop.jpg';
import satinImg from '../assets/fabrics/satin.jpg';
import silkImg from '../assets/fabrics/silk.jpg';
import seersuckerImg from '../assets/fabrics/seersucker.jpg';
import slubImg from '../assets/fabrics/slub.jpg';
import suedeImg from '../assets/fabrics/suede.jpg';
import taslanImg from '../assets/fabrics/taslan.jpg';
import tencelImg from '../assets/fabrics/tencel.jpg';
import tricotImg from '../assets/fabrics/tricot.jpg';
import tweedImg from '../assets/fabrics/tweed.jpg';
import twillImg from '../assets/fabrics/twill.jpg';
import velourImg from '../assets/fabrics/velour.jpg';
import velvetImg from '../assets/fabrics/velvet.jpg';
import viscoseImg from '../assets/fabrics/viscose.jpg';
import voileImg from '../assets/fabrics/voile.jpg';
import woolImg from '../assets/fabrics/wool.jpg';


/**
 * FabricsPage Component
 * Replicates the fabrics page of hongyuapparel.com
 * Displays a grid of available fabric types with descriptions.
 */
const FabricsPage: React.FC = () => {
  const fabrics = [
    // --- T-Shirts / Oversized T-Shirts ---
    { name: 'Cotton T-shirt', description: '100% Cotton, different thickness from 180-400gsm', image: cottonTshirtImg },
    { name: 'Pima Cotton Fabric', description: 'Pima cotton fabric is soft, luxurious, and boasts long fibers, ideal for premium shirts, bedding, and garments with a smooth, silky feel.', image: pimaCottonImg },
    { name: 'Jersey Fabric', description: 'Jersey fabric is soft, stretchy, and comfortable, perfect for casual t-shirts, dresses, and activewear with a relaxed fit.', image: jerseyImg },
    { name: 'Interlock Fabric', description: 'Interlock fabric is double-knit, smooth, and stretchy, providing excellent drape and comfort for activewear, loungewear, and fitted garments.', image: interlockImg },
    { name: 'Rib Knit Fabric', description: 'Rib knit fabric, stretchy and textured with vertical ribs, is commonly used in cuffs, collars, and trim for its elasticity and shape retention.', image: ribKnitImg },
    { name: 'Slub Fabric', description: 'Slub fabric is textured, with irregularly thick and thin areas, adding depth and interest to garments and home textiles for a casual, rustic look.', image: slubImg },
    { name: 'Modal Fabric', description: 'Modal fabric is soft, breathable, with a silky feel and excellent moisture absorption, perfect for underwear, loungewear, and flowy dresses.', image: modalImg },
    { name: 'Bamboo Fabric', description: 'Bamboo fabric is breathable, hypoallergenic, and eco-friendly, offering a silky smooth feel against the skin.', image: bambooImg },
    { name: 'Tencel Fabric', description: 'Tencel fabric is soft, breathable, eco-friendly, sustainably sourced, ideal for comfortable clothing, bedding, and drapery with a smooth feel.', image: tencelImg },
    { name: 'Viscose Fabric', description: 'Viscose fabric is smooth, lightweight, breathable, with a silky feel, ideal for comfortable clothing, drapery, and linings with a luxurious touch.', image: viscoseImg },
    { name: 'Rayon Fabric', description: 'Rayon fabric is soft, lightweight, breathable, and smooth-textured, ideal for flowing dresses, blouses, and linings, offering a luxurious feel.', image: rayonImg },
    // Using Cotton Tshirt image for Mercerized Cotton as a fallback since no direct image was provided
    { name: 'Mercerized Cotton', description: 'Cotton treated to increase luster and affinity for dye, offering a smooth, silk-like finish and improved durability.', image: cottonTshirtImg },
    { name: 'Lurex Fabric', description: 'Lurex fabric is woven with metallic threads, adding sparkle and shine to garments and accessories for a glamorous touch.', image: lurexImg },
    
    // --- Polo T-Shirts (Additional) ---
    { name: 'Pique Fabric', description: 'Pique fabric, textured and durable, showcases a waffle-like pattern, often found in polo shirts, sportswear, and casual apparel.', image: piqueImg },
    { name: 'Microfiber Polyester Fabric', description: 'Microfiber polyester fabric, smooth and lightweight, wicks moisture away, ideal for athletic wear, activewear, and quick-drying garments.', image: microfiberImg },

    // --- Hoodies / Sweatshirts (Additional) ---
    { name: 'Fleece Fabric', description: 'Fleece fabric is soft, warm, and cozy, providing excellent insulation for jackets, blankets, and cold-weather accessories.', image: fleeceImg },
    { name: 'Terry Fabric', description: 'Cotton or polyester blend, different thickness from 200gsm-500gsm, use for hoodies, tshirts, loungewear', image: terryImg },
    { name: 'Plush Fabric', description: 'Plush fabric is soft, dense, and velvety, providing luxurious warmth and comfort in blankets, stuffed toys, and cozy apparel.', image: plushImg },
    { name: 'Velour Fabric', description: 'Velour fabric, plush and soft, resembling velvet with a rich pile, is used in loungewear, upholstery, and eveningwear for its luxurious feel.', image: velourImg },
    { name: 'Wool Fabric', description: 'Wool fabric is warm, soft, and insulating with natural moisture-wicking properties, ideal for coats, sweaters, and blankets in cold weather.', image: woolImg },

    // --- Trackpants / Joggers / Sportswear (Additional) ---
    { name: 'PBT Fabric', description: 'PBT fabric, stretchy and lightweight, wicks moisture away, ideal for athletic wear, swimwear, and activewear, maintaining excellent shape.', image: pbtImg },
    { name: 'Taslan Fabric', description: 'Taslan fabric is durable, water-resistant, and quick-drying, commonly used in outdoor and activewear for its performance properties and rugged appeal.', image: taslanImg },
    { name: 'Nylon Fabric', description: 'Nylon fabric, lightweight and strong, dries quickly, perfect for activewear, swimwear, and high-performance outerwear.', image: nylonImg },
    { name: 'Mesh Fabric', description: 'Mesh fabric is lightweight, breathable, and open-knit, offering ventilation and a sporty aesthetic for activewear, lingerie, and breathable layers.', image: meshImg },
    { name: 'Tricot Fabric', description: 'Tricot fabric is smooth, stretchy, and tightly knit, commonly used in sportswear, lingerie, and swimwear for its elasticity and comfort.', image: tricotImg },
  ];

  /* Full original list commented out
  const allFabrics = [
    { name: 'Terry Fabric', description: 'Cotton or polyester blend, different thickness from 200gsm-500gsm, use for hoodies, tshirts, loungewear', image: terryImg },
    { name: 'Fleece Fabric', description: 'Fleece fabric is soft, warm, and cozy, providing excellent insulation for jackets, blankets, and cold-weather accessories.', image: fleeceImg },
    { name: 'Cotton Tshirt', description: '100% Cotton, different thickness from 180-400gsm', image: cottonTshirtImg },
    { name: 'Acrylic Fabric', description: 'Acrylic fabric is soft, lightweight, and durable, making it perfect for cozy sweaters and blankets.', image: acrylicImg },
    { name: 'Bamboo Fabric', description: 'Bamboo fabric is breathable, hypoallergenic, and eco-friendly, offering a silky smooth feel against the skin.', image: bambooImg },
    { name: 'Brocade Fabric', description: 'Brocade fabric features detailed patterns woven into its surface, adding a touch of elegance and sophistication to any garment or décor.', image: brocadeImg },
    { name: 'Canvas Fabric', description: 'Canvas fabric is rugged, sturdy, and versatile, ideal for durable bags, tents, and sturdy workwear.', image: canvasImg },
    { name: 'Chambray Fabric', description: 'Chambray fabric is lightweight, breathable, and casual, perfect for relaxed shirts and comfortable summer attire.', image: chambrayImg },
    { name: 'Chiffon Fabric', description: 'Chiffon fabric is delicate, sheer, and flowing, creating elegant drapes and ethereal garments for special occasions.', image: chiffonImg },
    { name: 'Corduroy Fabric', description: 'Corduroy fabric is plush, ribbed, and cozy, adding texture and warmth to jackets, pants, and home furnishings.', image: corduroyImg },
    { name: 'Crepe Fabric', description: 'Crepe fabric is lightweight, textured, and subtly crinkled, which makes it flow beautifully for fancy dresses and tops.', image: crepeImg },
    { name: 'Crochet Fabric', description: 'Crochet fabric is intricate, openwork, and breathable, perfect for lightweight tops and accessories with a handmade charm.', image: crochetImg },
    { name: 'Cupro Fabric', description: 'Cupro fabric is soft, breathable, and luxurious, with a silky feel and excellent drape, ideal for elegant blouses and dresses.', image: cuproImg },
    { name: 'Denim Fabric', description: 'Denim fabric is rugged, durable, and versatile, perfect for casual jeans, jackets, and timeless fashion staples.', image: denimImg },
    { name: 'Dobby Fabric', description: 'Dobby fabric is characterized by small geometric patterns, adding subtle texture and interest to garments and home textiles.', image: dobbyImg },
    { name: 'Double Weave Fabric', description: 'Double weave fabric, with two layers interlaced, creates a thicker, reversible textile perfect for jackets, coats, and structured garments.', image: doubleWeaveImg },
    { name: 'Drill Fabric', description: 'Drill fabric is sturdy, durable, and tightly woven, making it ideal for workwear, uniforms, and heavy-duty apparel.', image: drillImg },
    { name: 'Gabardine Fabric', description: 'Gabardine fabric is durable, tightly woven, and wrinkle-resistant, making it ideal for tailored suits, trousers, and outerwear with a polished finish.', image: gabardineImg },
    { name: 'Gauze Fabric', description: 'Gauze fabric is lightweight, sheer, and airy, perfect for breathable summer clothing, curtains, and medical dressings.', image: gauzeImg },
    { name: 'Georgette Fabric', description: 'Georgette fabric is lightweight, sheer, and subtly crinkled, ideal for elegant dresses, blouses, and scarves with a graceful drape.', image: georgetteImg },
    { name: 'Gingham Fabric', description: 'Gingham fabric is characterized by checkered patterns, often in two colors, creating a classic and timeless look for shirts, dresses, and home décor.', image: ginghamImg },
    { name: 'Interlock Fabric', description: 'Interlock fabric is double-knit, smooth, and stretchy, providing excellent drape and comfort for activewear, loungewear, and fitted garments.', image: interlockImg },
    { name: 'Jacquard Fabric', description: 'Jacquard fabric features intricate woven patterns, adding texture and dimension to clothing, upholstery, and decorative textiles.', image: jacquardImg },
    { name: 'Jersey Fabric', description: 'Jersey fabric is soft, stretchy, and comfortable, perfect for casual t-shirts, dresses, and activewear with a relaxed fit.', image: jerseyImg },
    { name: 'Lace Fabric', description: 'Lace fabric is delicate, intricate, and sheer, adding a touch of elegance and romance to dresses, lingerie, and bridal attire.', image: laceImg },
    { name: 'Leather Fabric', description: 'Leather is a durable and flexible material made from animal skins, commonly used for jackets, bags, shoes, and furniture due to its strength.', image: leatherImg },
    { name: 'Linen Fabric', description: 'Linen fabric is lightweight, breathable, and crisp, perfect for summer clothing and casual home textiles with a relaxed, natural look.', image: linenImg },
    { name: 'Lurex Fabric', description: 'Lurex fabric is woven with metallic threads, adding sparkle and shine to garments and accessories for a glamorous touch.', image: lurexImg },
    { name: 'Mesh Fabric', description: 'Mesh fabric is lightweight, breathable, and open-knit, offering ventilation and a sporty aesthetic for activewear, lingerie, and breathable layers.', image: meshImg },
    { name: 'Microfiber Polyester Fabric', description: 'Microfiber polyester fabric, smooth and lightweight, wicks moisture away, ideal for athletic wear, activewear, and quick-drying garments.', image: microfiberImg },
    { name: 'Modal Fabric', description: 'Modal fabric is soft, breathable, with a silky feel and excellent moisture absorption, perfect for underwear, loungewear, and flowy dresses.', image: modalImg },
    { name: 'Muslin Fabric', description: 'Muslin fabric is lightweight, plain-woven, and breathable, perfect for garments, quilting, and home decor.', image: muslinImg },
    { name: 'Neoprene Fabric', description: 'Neoprene fabric is thick, durable, and water-resistant, often used in wetsuits, athletic gear, and laptop sleeves for protection.', image: neopreneImg },
    { name: 'Nylon Fabric', description: 'Nylon fabric, lightweight and strong, dries quickly, perfect for activewear, swimwear, and high-performance outerwear.', image: nylonImg },
    { name: 'Organza Fabric', description: 'Organza fabric is sheer, lightweight, and crisp, perfect for elegant overlays, bridal gowns, and decorative accents with a delicate quality.', image: organzaImg },
    { name: 'Oxford Fabric', description: 'Oxford fabric is durable, tightly woven, and slightly coarse, ideal for casual shirts, sturdy bags, and upholstery with a classic, textured appearance.', image: oxfordImg },
    { name: 'PBT Fabric', description: 'PBT fabric, stretchy and lightweight, wicks moisture away, ideal for athletic wear, swimwear, and activewear, maintaining excellent shape.', image: pbtImg },
    { name: 'Pima Cotton Fabric', description: 'Pima cotton fabric is soft, luxurious, and boasts long fibers, ideal for premium shirts, bedding, and garments with a smooth, silky feel.', image: pimaCottonImg },
    { name: 'Pique Fabric', description: 'Pique fabric, textured and durable, showcases a waffle-like pattern, often found in polo shirts, sportswear, and casual apparel.', image: piqueImg },
    { name: 'Plain Weave Fabric', description: 'Plain weave fabric is simple, balanced, and versatile, perfect for garments and home textiles, offering durability and easy care.', image: plainWeaveImg },
    { name: 'Plush Fabric', description: 'Plush fabric is soft, dense, and velvety, providing luxurious warmth and comfort in blankets, stuffed toys, and cozy apparel.', image: plushImg },
    { name: 'Pongee Fabric', description: 'Pongee fabric is lightweight, smooth, and wrinkle-resistant, commonly used in outerwear, linings, and lightweight apparel.', image: pongeeImg },
    { name: 'Ponte Fabric', description: 'Ponte fabric is stable, stretchy, and smooth, with a double-knit construction, perfect for structured garments like pants, skirts, and dresses.', image: ponteImg },
    { name: 'Poplin Fabric', description: 'Poplin fabric is lightweight, tightly woven, with a smooth surface, perfect for shirts, dresses, and casual wear with a polished finish.', image: poplinImg },
    { name: 'PU Leather Fabric', description: 'PU leather mimics real leather, offering durability and water resistance. Popular in bags, jackets, and upholstery for its affordability and versatility.', image: puLeatherImg },
    { name: 'Rayon Fabric', description: 'Rayon fabric is soft, lightweight, breathable, and smooth-textured, ideal for flowing dresses, blouses, and linings, offering a luxurious feel.', image: rayonImg },
    { name: 'Rib Knit Fabric', description: 'Rib knit fabric, stretchy and textured with vertical ribs, is commonly used in cuffs, collars, and trim for its elasticity and shape retention.', image: ribKnitImg },
    { name: 'Ripstop Fabric', description: 'Ripstop fabric is lightweight, durable, and tear-resistant, ideal for outdoor gear, tents, and backpacks.', image: ripstopImg },
    { name: 'Satin Fabric', description: 'Satin fabric is smooth, shiny, and luxurious, with a glossy surface and a soft, flowing drape, perfect for elegant evening gowns, lingerie, and formal attire.', image: satinImg },
    { name: 'Silk Fabric', description: 'Silk fabric is smooth, lustrous, and luxurious, with a soft, flowing drape and natural sheen, ideal for elegant dresses, blouses, and high-end lingerie.', image: silkImg },
    { name: 'Seersucker Fabric', description: 'Seersucker fabric is lightweight, puckered, and breathable, ideal for summer suits, shirts, and casual attire with a relaxed, textured look.', image: seersuckerImg },
    { name: 'Slub Fabric', description: 'Slub fabric is textured, with irregularly thick and thin areas, adding depth and interest to garments and home textiles for a casual, rustic look.', image: slubImg },
    { name: 'Suede Fabric', description: 'Suede fabric is soft, plush, and velvety, resembling leather with a napped surface, used in jackets, shoes, and upholstery for its luxurious feel.', image: suedeImg },
    { name: 'Taslan Fabric', description: 'Taslan fabric is durable, water-resistant, and quick-drying, commonly used in outdoor and activewear for its performance properties and rugged appeal.', image: taslanImg },
    { name: 'Tencel Fabric', description: 'Tencel fabric is soft, breathable, eco-friendly, sustainably sourced, ideal for comfortable clothing, bedding, and drapery with a smooth feel.', image: tencelImg },
    { name: 'Tricot Fabric', description: 'Tricot fabric is smooth, stretchy, and tightly knit, commonly used in sportswear, lingerie, and swimwear for its elasticity and comfort.', image: tricotImg },
    { name: 'Tweed Fabric', description: 'Tweed fabric is textured, durable, and coarse, ideal for tailored jackets, skirts, and outerwear with a timeless, classic look.', image: tweedImg },
    { name: 'Twill Fabric', description: 'Twill fabric, durable and diagonal woven with a rib pattern, common in pants, jackets, and workwear for strength and flexibility.', image: twillImg },
    { name: 'Velour Fabric', description: 'Velour fabric, plush and soft, resembling velvet with a rich pile, is used in loungewear, upholstery, and eveningwear for its luxurious feel.', image: velourImg },
    { name: 'Velvet Fabric', description: 'Velvet fabric is luxurious, soft, and plush, with a dense pile creating a rich texture, ideal for formal dresses, upholstery, and decorative accents.', image: velvetImg },
    { name: 'Viscose Fabric', description: 'Viscose fabric is smooth, lightweight, breathable, with a silky feel, ideal for comfortable clothing, drapery, and linings with a luxurious touch.', image: viscoseImg },
    { name: 'Voile Fabric', description: 'Voile fabric is lightweight, sheer, and airy, with a smooth, crisp finish, commonly used in curtains, dresses, and scarves for its delicate appearance.', image: voileImg },
    { name: 'Wool Fabric', description: 'Wool fabric is warm, soft, and insulating with natural moisture-wicking properties, ideal for coats, sweaters, and blankets in cold weather.', image: woolImg },
  ];
  */

  return (
    <div className="fabrics-page">
      {/* Hero Banner */}
      <section className="fabrics-hero">
        <div className="fabrics-hero__decorations">
          <div className="fabrics-hero__decoration"></div>
        </div>
        <div className="container fabrics-hero__content">
          <h1 className="fabrics-hero__title">
            Fabrics Collection
          </h1>
          <p className="fabrics-hero__subtitle">
            Discover our extensive range of high-quality fabrics suitable for any garment or application.
          </p>
          <div className="mt-8">
            <Link to="/contact-us" className="fabrics-hero__cta">
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
              <div 
                key={index} 
                className="fabric-card"
                style={{
                  backgroundImage: `url(${fabric.image})`,
                }}
              >
                <div className="fabric-card__overlay">
                  <h3 className="fabric-card__title">{fabric.name}</h3>
                  <p className="fabric-card__desc">{fabric.description}</p>
                </div>
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
            <Link to="/contact-us" className="fabrics-cta-btn">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FabricsPage;
