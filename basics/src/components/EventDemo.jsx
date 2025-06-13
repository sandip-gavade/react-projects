import React from 'react'

import  { useState } from 'react';


function EventDemo() {
  const [bgColor, setBgColor] = useState('white');

  const handleClick = () => {
    // Toggle between two colors
    setBgColor(prev => (prev === 'white' ? 'lightblue' : 'white'));
  };

  return (
    <div style={{ height: '100vh', backgroundColor: bgColor, transition: '0.5s' }}>
      <div style={{ textAlign: 'center', paddingTop: '20%' }}>
        <button   onClick={handleClick} style={{ padding: '10px 20px', fontSize: '16px' }}>
          Change Background
        </button>
      </div>
    </div>
  );
}


export default EventDemo