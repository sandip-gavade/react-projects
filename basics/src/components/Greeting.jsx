import React from 'react';

function Greeting({ name, age, isMember, hobbies, user, greet, children }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', margin: '1rem' }}>
      <h3>Hello, {name}!</h3>
      <p>Age: {age}</p>
      <p>Status: {isMember ? 'Member' : 'Guest'}</p>

      <h4>Hobbies:</h4>
      <ul>
        {hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>

      <h4>User Info:</h4>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>

      <button onClick={greet}>Say Hi</button>

      <div
        style={{ marginTop: '1rem', padding: '0.5rem', background: '#f9f9f9' }}
      >
        <strong>Children:</strong>
        {children}
      </div>
    </div>
  );
}

export default Greeting;
