import React, { useContext } from 'react';
import MessageContext from './MessageContext';

function ContextLevelThree() {
  const message = useContext(MessageContext);

  return (
    <div
      style={{ border: '1px solid blue', padding: '1rem', marginTop: '1rem' }}
    >
      <h4>Level 3 Component</h4>
      <p>Message from Context: {message}</p>
    </div>
  );
}

export default ContextLevelThree;
