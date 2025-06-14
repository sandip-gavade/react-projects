import React from 'react';
import { useNavigate } from 'react-router-dom';

function NotFound() {
  const navigate = useNavigate();

  const goHome = () => {
    navigate('/');
  };

  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h2>404 - Page Not Found</h2>
      <p>The page you’re looking for doesn’t exist.</p>
      <button onClick={goHome} style={{ marginTop: '1rem' }}>Go to Home</button>
    </div>
  );
}

export default NotFound;
