import React from 'react';

function LevelThree({ message }) {
  return (
    <div style={{ border: '1px solid blue', padding: '1rem', marginTop: '1rem' }}>
      <h4>Level 3 Component</h4>
      <p>Message: {message}</p>
    </div>
  );
}

export default LevelThree;
