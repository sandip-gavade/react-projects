import React, { useContext } from 'react';
import UserContext from '../context/UserContext';

function DisplayUser() {
  const username = useContext(UserContext);

  return (
    <div
      style={{ border: '1px solid blue', padding: '1rem', marginTop: '1rem' }}
    >
      <h4>DisplayUser Component</h4>
      <p>
        Welcome, <strong>{username}</strong>!
      </p>
    </div>
  );
}

export default DisplayUser;
