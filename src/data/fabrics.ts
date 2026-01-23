// Import all fabric images
import terryImg from '../assets/fabrics/terry.jpg';
import fleeceImg from '../assets/fabrics/fleece.jpg';
import cottonTshirtImg from '../assets/fabrics/cotton-tshirt.jpg';
import bambooImg from '../assets/fabrics/bamboo.jpg';
import interlockImg from '../assets/fabrics/interlock.jpg';
import jerseyImg from '../assets/fabrics/jersey.jpg';
import lurexImg from '../assets/fabrics/lurex.jpg';
import meshImg from '../assets/fabrics/mesh.jpg';
import microfiberImg from '../assets/fabrics/microfiber.jpg';
import modalImg from '../assets/fabrics/modal.jpg';
import nylonImg from '../assets/fabrics/nylon.jpg';
import pbtImg from '../assets/fabrics/pbt.jpg';
import pimaCottonImg from '../assets/fabrics/pima-cotton.jpg';
import piqueImg from '../assets/fabrics/pique.jpg';
import plushImg from '../assets/fabrics/plush.jpg';
import rayonImg from '../assets/fabrics/rayon.jpg';
import ribKnitImg from '../assets/fabrics/rib-knit.jpg';
import slubImg from '../assets/fabrics/slub.jpg';
import taslanImg from '../assets/fabrics/taslan.jpg';
import tencelImg from '../assets/fabrics/tencel.jpg';
import tricotImg from '../assets/fabrics/tricot.jpg';
import velourImg from '../assets/fabrics/velour.jpg';
import viscoseImg from '../assets/fabrics/viscose.jpg';
import woolImg from '../assets/fabrics/wool.jpg';

export const fabrics = [
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

