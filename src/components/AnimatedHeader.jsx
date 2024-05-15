import React from 'react';
import murphyusaLogo from '../../src/murphylogo.jpeg';  // Assuming logo is in public

const AnimatedHeader = () => {
  return (
    <header className="header">
      <img 
        src={murphyusaLogo} 
        alt="Murphy USA Logo"
        className="logo"  
      />
      {/* Add animation logic with CSS transitions or a library like Framer Motion */}
    </header>
  );
};

export default AnimatedHeader;