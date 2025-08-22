import React, { useState } from 'react';
import designerCoderImage from '../../editable-stuff/adham-dannaway-designer-coder.jpg';
import './Header.css';

const Header = () => {
  const [designerStyle, setDesignerStyle] = useState({ left: '100px', opacity: 1, width: '420px' });
  const [coderStyle, setCoderStyle] = useState({ right: '100px', opacity: 1, width: '420px' });

  const handleMouseMove = (event) => {
    const section = event.currentTarget;
    const rect = section.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const sectionWidth = rect.width;
    const centerX = sectionWidth / 2;
    
    // Calculate position and opacity based on mouse position relative to section
    const designerLeft = Math.max(50, Math.min(150, 100 + (x - centerX) / 20));
    const coderRight = Math.max(50, Math.min(150, 100 - (x - centerX) / 20));
    const designerOpacity = Math.max(0.3, Math.min(1, 1 - (x - centerX) / sectionWidth));
    const coderOpacity = Math.max(0.3, Math.min(1, 1 + (x - centerX) / sectionWidth));

    setDesignerStyle({
      left: `${designerLeft}px`,
      opacity: designerOpacity,
      width: '420px'
    });

    setCoderStyle({
      right: `${coderRight}px`,
      opacity: coderOpacity,
      width: '420px'
    });
  };

  return (
    <section onMouseMove={handleMouseMove} id="section" className="light nopad-t nopad-b">
        <div className="row">
            <div className="col-12">
                <div id="face" className="face">
                    <a href="/portfolio">
                        <div id="designer" className="designer" style={{ opacity: 1 }}>
                            <div id="designer-desc" className="description">
                                <h1>designer</h1>
                                {/* <p>UI/UX Designer with a passion for designing beautiful and functional user experiences.</p> */}
                                <p>Product designer specialising in UI design and design systems.</p>
                            </div>
                        </div>
                    </a>

                    <a href="/about">
                        <div id="coder" className="coder" style={{ opacity: 1 }}>
                            <div id="coder-desc" className="description" style={{ opacity: 1 }}>
                                <h1><span className="chevron-left">&lt;</span>coder<span className="chevron-right">&gt;</span></h1>
                                <p>Front end developer who writes clean, elegant and efficient code.</p>
                            </div>
                        </div>
                    </a>

                    <img 
                        id="face-img" 
                        className="face-img" 
                        src={designerCoderImage}
                        alt="Adham Dannaway UI designer" 
                    />

                    <div id="designer-img" className="designer-img" style={designerStyle}></div>
                    <div id="coder-img" className="coder-img" style={coderStyle}></div>
                    <div id="designer-bg" className="designer-bg" style={{ left: '100px', opacity: 1 }}></div>
                    <div id="coder-bg" className="coder-bg" style={{ right: '100px', opacity: 1 }}></div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Header