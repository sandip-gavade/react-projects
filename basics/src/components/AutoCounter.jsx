import React, { useState, useEffect } from 'react';

function AutoCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Effect started ✅');

    const intervalId = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000); // Increase count every 1 sec

    // 🧹 Cleanup function
    return () => {
      clearInterval(intervalId);
      console.log('Interval cleared 🧹');
    };
  }, []); // Runs only once on mount

  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h2>Auto Incrementing Counter</h2>
      <p style={{ fontSize: '2rem' }}>{count}</p>
    </div>
  );
}

export default AutoCounter;
