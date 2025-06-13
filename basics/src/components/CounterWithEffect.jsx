import React, { useState, useEffect } from 'react';

function CounterWithEffect() {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);

  useEffect(() => {
    console.log(`Count changed: ${count}`);
    // Optional side effect simulation
    document.title = `Count: ${count}`;

    // Cleanup function (runs before the next effect or on unmount)
    return () => {
      console.log('Cleanup before next useEffect or unmount');
    };
  }, [count]); // 👈 Dependency array: only runs when `count` changes


  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h2>useEffect Counter Example</h2>
      <p style={{ fontSize: '2rem' }}>{count}</p>
      <button onClick={increment} style={{ marginRight: '1rem' }}>
        Increment
      </button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default CounterWithEffect;
