import React, { useState } from 'react';
import './FabricOptions.css';

// Import fabric images
import cottonImg from '../assets/fabrics/cotton-tshirt.jpg';
import polyesterImg from '../assets/fabrics/pique.jpg';
import fleeceImg from '../assets/fabrics/fleece.jpg';
import jerseyImg from '../assets/fabrics/jersey.jpg';
import frenchTerryImg from '../assets/fabrics/terry.jpg';
import bambooImg from '../assets/fabrics/bamboo.jpg';
import silkImg from '../assets/fabrics/silk.jpg';
import linenImg from '../assets/fabrics/linen.jpg';

const FabricOptions: React.FC = () => {
  const menu = [
    'Cotton', 
    'Polyester', 
    'Fleece', 
    'Jersey', 
    'French Terry', 
    'Bamboo',
    'Silk',
    'Linen'
  ].slice(0, 4);
  
  const images = [
    cottonImg,
    polyesterImg,
    fleeceImg,
    jerseyImg,
    frenchTerryImg,
    bambooImg,
    silkImg,
    linenImg
  ].slice(0, 4);

  const [activeIndex, setActiveIndex] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section className="technology-section black" id="fabric-options">
      <h2 className="section-headline">
        Fabric Option
        <i></i>
      </h2>
      <span className="description">
        Didn't find the fabric options you want? Dont hesitate to contact us.
      </span>

      <div className="wrapper">
        <div className="technology-pagination-wrap">
          <div className="technology-black">
            {menu.map((item, index) => (
              <h3 
                key={item}
                className={activeIndex === index ? 'active' : ''}
                onClick={() => handleTabClick(index)}
                tabIndex={0}
                role="button"
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') handleTabClick(index);
                }}
              >
                {item}
              </h3>
            ))}
          </div>
        </div>

        <div className="technology-display-area">
          <div className="technology-image-container fade-in">
             <img 
               src={images[activeIndex]} 
               alt={menu[activeIndex]} 
               key={activeIndex} /* Key forces re-render for animation */
             />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FabricOptions;
