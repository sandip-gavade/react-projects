import React from 'react';
import LevelThree from './PropsLevelThree';

function LevelTwo({ message }) {
  return (
    <div style={{ border: '1px solid green', padding: '1rem' }}>
      <h3>Level 2 Component</h3>
      {/* Pass the prop down to Level 3 */}
      <LevelThree message={message} />
    </div>
  );
}

export default LevelTwo;
