import React, { useState } from 'react';
import './PrintOptions.css';

// Import technology images
import dtfImg from '../assets/technology/dtf-printing.jpg';
import dtgImg from '../assets/technology/dtg-printing.jpg';
import puffImg from '../assets/technology/puff-printing.jpg';
import screenPrintImg from '../assets/technology/screen-printing.jpg';
import flatEmbroideryImg from '../assets/technology/flat-embroidery.jpg';
import threeDEmbroideryImg from '../assets/technology/3d-embroidery.jpg';
import terryEmbroideryImg from '../assets/technology/terry-embroidery.jpg';
import appliqueEmbroideryImg from '../assets/technology/applique-embroidery.jpg';
import embroideryPatchImg from '../assets/technology/embroidery-patch.jpg';
import rhinestoneImg from '../assets/technology/rhinestone.jpg';
import rubberPrintImg from '../assets/technology/rubber-printing.jpg';
import flockingImg from '../assets/technology/flocking.jpg';
import embossingImg from '../assets/technology/embossing.jpg';
import reflectivePrintImg from '../assets/technology/reflective-printing.jpg';
import metallicPrintImg from '../assets/technology/metallic-printing.jpg';
import laserImg from '../assets/technology/laser.jpg';
import glitterImg from '../assets/technology/glitter.jpg';

const PrintOptions: React.FC = () => {
  const technologies = [
    { name: 'DTF Printing', image: dtfImg },
    { name: 'DTG Printing', image: dtgImg },
    { name: 'Puff Printing', image: puffImg },
    { name: 'Screen Printing', image: screenPrintImg },
    { name: 'Flat Embroidery', image: flatEmbroideryImg },
    { name: '3D Embroidery', image: threeDEmbroideryImg },
    { name: 'Terry Embroidery', image: terryEmbroideryImg },
    { name: 'Applique Embroidery', image: appliqueEmbroideryImg },
    { name: 'Embroidery Patch', image: embroideryPatchImg },
    { name: 'Rhinestone', image: rhinestoneImg },
    { name: 'Rubber Printing', image: rubberPrintImg },
    { name: 'Flocking', image: flockingImg },
    { name: 'Embossing', image: embossingImg },
    { name: 'Reflective Printing', image: reflectivePrintImg },
    { name: 'Metallic Printing', image: metallicPrintImg },
    { name: 'Laser', image: laserImg },
    { name: 'Glitter', image: glitterImg },
  ].slice(0, 4);

  const [activeIndex, setActiveIndex] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section className="our-teams-section">
      <div className="wrapper">
        <h2 className="section-headline">
          What We Have
          <i></i>
        </h2>
        
        <div className="print-options-container">
          {/* Left Side: List of Technologies */}
          <div className="print-options-list">
            <div className="print-options-scroll">
              {technologies.map((tech, index) => (
                <h3 
                  key={index}
                  className={`print-option-item ${activeIndex === index ? 'active' : ''}`}
                  onClick={() => handleTabClick(index)}
                  tabIndex={0}
                  role="button"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') handleTabClick(index);
                  }}
                >
                  {tech.name}
                </h3>
              ))}
            </div>
          </div>

          {/* Right Side: Image Display */}
          <div className="print-options-display">
             <div className="print-image-container fade-in">
                <img 
                  src={technologies[activeIndex].image} 
                  alt={technologies[activeIndex].name} 
                  key={activeIndex}
                />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrintOptions;
