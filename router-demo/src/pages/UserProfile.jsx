import React from 'react';
import { useParams } from 'react-router-dom';

function UserProfile() {
  const { id } = useParams();

  return (
    <div style={{ marginTop: '1rem' }}>
      <h3>User Profile</h3>
      <p>Viewing user with ID: <strong>{id}</strong></p>
    </div>
  );
}

export default UserProfile;
