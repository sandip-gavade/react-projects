import React from 'react';
import MessageContext from './MessageContext';
import ContexLevelTwo from './ContexApiLevelTwo';

function ContextLevelOne() {
  const message = 'Hello from Context!';

  return (
    <MessageContext.Provider value={message}>
      <div style={{ border: '1px solid black', padding: '1rem' }}>
        <h2>Level 1 (Parent) Component</h2>
        <ContexLevelTwo />
      </div>
    </MessageContext.Provider>
  );
}

export default ContextLevelOne;
