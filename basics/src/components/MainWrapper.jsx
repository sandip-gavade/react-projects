import React from 'react';
import UserContext from '../context/UserContext';
import Intermediate from './Intermediate';

function MainWrapper() {
  const username = 'sandip.gavade';

  return (
    <UserContext.Provider value={username}>
      <div style={{ border: '1px solid black', padding: '1rem' }}>
        <h2>MainWrapper (Top Level)</h2>
        <Intermediate />
      </div>
    </UserContext.Provider>
  );
}

export default MainWrapper;
