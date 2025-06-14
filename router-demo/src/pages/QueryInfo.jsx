import React from 'react';
import { useLocation } from 'react-router-dom';

function QueryInfo() {
  const location = useLocation();

  return (
    <div>
      <h2>Query Info</h2>
      <p>Current pathname: <strong>{location.pathname}</strong></p>
      <p>Full URL (string): <strong>{location.search}</strong></p>
    </div>
  );
}

export default QueryInfo;
