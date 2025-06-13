import React, { useState, useEffect } from 'react';

function UserFetcher() {
  const [user, setUser] = useState(null);
  const [id, setId] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchUser = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${id}`,
          {
            signal: signal,
          }
        );
        const data = await response.json();
        setUser(data);
      } catch (error) {
        if (error.name === 'AbortError') {
          console.log('Fetch aborted 🚫');
        } else {
          console.error('Error fetching user:', error);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchUser();

    return () => {
      controller.abort(); // 🧹 Cancel the fetch request if component unmounts or id changes
    };
  }, [id]);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Fetch User by ID</h2>
      <button
        onClick={() => setId((prev) => prev + 1)}
        style={{ marginBottom: '1rem' }}
      >
        Load Next User
      </button>

      {loading ? (
        <p>Loading...</p>
      ) : (
        user && (
          <div>
            <p>
              <strong>ID:</strong> {user.id}
            </p>
            <p>
              <strong>Name:</strong> {user.name}
            </p>
            <p>
              <strong>Email:</strong> {user.email}
            </p>
          </div>
        )
      )}
    </div>
  );
}

export default UserFetcher;
