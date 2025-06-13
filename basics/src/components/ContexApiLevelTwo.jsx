import React from 'react';
import ContextLevelThree from './ContextApiLevelThree';

function ContexLevelTwo() {
  return (
    <div style={{ border: '1px solid green', padding: '1rem' }}>
      <h3>Level 2 Component</h3>
      <ContextLevelThree />
    </div>
  );
}

export default ContexLevelTwo;
