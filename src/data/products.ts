// Import product images
import mensOversized1 from '../assets/products/mens-oversized-tshirt-1.jpg';
import womensOversized1 from '../assets/products/womens-oversized-white-1.jpg';
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

export interface Product {
  id: string;
  name: string;
  image: string;
  category: string;
  description?: string;
  colors?: string[];
}

export const products: Product[] = [
  // T-Shirts
  { 
    id: 'mens-full-sleeve', 
    name: 'Men’s Full Sleeve T Shirt', 
    image: mensFullSleeve1, 
    category: 'T-Shirts',
    description: 'Premium cotton long sleeve t-shirt designed for comfort and durability. Features a classic fit suitable for casual wear or layering.',
    colors: ['Black', 'White', 'Navy', 'Grey', 'Maroon']
  },
  { 
    id: 'bio-wash-tshirt', 
    name: 'Bio-Wash T-Shirt', 
    image: bioWash1, 
    category: 'T-Shirts',
    description: 'Ultra-soft bio-washed cotton fabric that prevents pilling and maintains color vibrancy wash after wash. Smooth finish.',
    colors: ['Red', 'Blue', 'Green', 'Yellow', 'Black', 'White']
  },
  { 
    id: 'unisex-plain-tshirt', 
    name: 'Unisex Plain T-Shirt', 
    image: unisexPlain1, 
    category: 'T-Shirts',
    description: 'Versatile unisex fit made from 100% combed cotton. Breathable fabric perfect for custom printing and everyday use.',
    colors: ['White', 'Black', 'Heather Grey', 'Royal Blue', 'Red']
  },
  { 
    id: 'womens-tshirt', 
    name: 'Women’s T-Shirt', 
    image: womensTshirt1, 
    category: 'T-Shirts',
    description: 'Tailored fit for women with shorter sleeves and a slightly tapered waist. Soft, stretchable fabric for maximum comfort.',
    colors: ['Pink', 'White', 'Black', 'Lavender', 'Teal']
  },

  // Oversized
  { 
    id: 'mens-oversized', 
    name: 'Men’s Oversized T-Shirt', 
    image: mensOversized1, 
    category: 'Oversized',
    description: 'Trendy streetwear fit with dropped shoulders and a relaxed silhouette. Heavyweight cotton for a structured look.',
    colors: ['Beige', 'Black', 'Olive', 'Charcoal', 'White']
  },
  { 
    id: 'womens-oversized', 
    name: 'Women’s Oversized White T-Shirt', 
    image: womensOversized1, 
    category: 'Oversized',
    description: 'Chic oversized fit for women, offering a relaxed and effortless style. Perfect for pairing with leggings or denim.',
    colors: ['White', 'Black', 'Cream', 'Sage Green']
  },

  // Polo T-Shirts
  { 
    id: 'classic-pique-polo', 
    name: 'Classic Pique Polo', 
    image: polo1, 
    category: 'Polo T-Shirts',
    description: 'Traditional pique knit fabric offering texture and breathability. Ribbed collar and cuffs for a smart-casual appearance.',
    colors: ['Navy', 'White', 'Black', 'Sky Blue', 'Red']
  },
  { 
    id: 'performance-polo', 
    name: 'Performance Sport Polo', 
    image: polo3, 
    category: 'Polo T-Shirts',
    description: 'Moisture-wicking polyester blend designed for active performance. Lightweight, quick-drying, and odor-resistant.',
    colors: ['Neon Green', 'Electric Blue', 'Black', 'Grey']
  },

  // Hoodies
  { 
    id: 'mens-hoodie', 
    name: 'Men’s Hoodie', 
    image: mensHoodie1, 
    category: 'Hoodies',
    description: 'Classic pullover hoodie with a kangaroo pocket and adjustable drawstring hood. Fleece-lined for warmth.',
    colors: ['Grey', 'Black', 'Navy', 'Burgundy']
  },
  { 
    id: 'womens-hoodie', 
    name: 'Women’s Hoodie', 
    image: womensHoodie1, 
    category: 'Hoodies',
    description: 'Cozy and stylish hoodie with a relaxed fit. Soft interior fabric keeps you warm during chilly days.',
    colors: ['Peach', 'Light Grey', 'Black', 'Mint']
  },

  // Sweatshirts
  { 
    id: 'mens-sweatshirt', 
    name: 'Men’s Sweatshirt Full Sleeve', 
    image: mensSweatshirt1, 
    category: 'Sweatshirts',
    description: 'Crew neck sweatshirt essential for any wardrobe. Ribbed cuffs and hem provide a secure fit and retain warmth.',
    colors: ['Black', 'Grey Melange', 'Navy', 'Olive']
  },

  // Track Pants
  { 
    id: 'mens-track-pants', 
    name: 'Men’s Track Pants', 
    image: mensTrackPants1, 
    category: 'Track Pants',
    description: 'Comfortable athletic track pants with an elastic waistband and side pockets. Ideal for workouts or lounging.',
    colors: ['Black', 'Navy', 'Grey']
  },
  { 
    id: 'joggers', 
    name: 'Joggers', 
    image: joggers1, 
    category: 'Track Pants',
    description: 'Modern tapered fit joggers with ribbed cuffs. Soft cotton blend allows for easy movement and all-day comfort.',
    colors: ['Khaki', 'Black', 'Camouflage', 'Grey']
  },

  // Track Suits
  { 
    id: 'womens-track-suit', 
    name: 'Women’s Track Suit', 
    image: womensTrackSuit1, 
    category: 'Track Suits',
    description: 'Full matching set including a jacket and pants. Sleek design suitable for gym sessions or casual outings.',
    colors: ['Pink/Black', 'All Black', 'Grey/White']
  },
];

export const categories = [
  { name: 'T-Shirts' },
  { name: 'Oversized' },
  { name: 'Polo T-Shirts' },
  { name: 'Hoodies' },
  { name: 'Sweatshirts' },
  { name: 'Track Suits' },
  { name: 'Track Pants' },
  { name: 'Trousers' },
  { name: 'Jersey' },
];
