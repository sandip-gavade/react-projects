import React from 'react';
import LevelTwo from './PropsLevelTwo';

function LevelOne() {
  const message = 'Hello from Parent!';

  return (
    <div style={{ border: '1px solid black', padding: '1rem' }}>
      <h2>Level 1 (Parent) Component</h2>
      {/* Pass message to Level 2 */}
      <LevelTwo message={message} />
    </div>
  );
}

export default LevelOne;
