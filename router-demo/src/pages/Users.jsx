import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function Users() {
  const userIds = [101, 102, 103];

  return (
    <div>
      <h2>Users Page</h2>
      <ul>
        {userIds.map((id) => (
          <li key={id}>
            <Link to={`/users/${id}`}>User {id}</Link>
          </li>
        ))}
      </ul>

      {/* Renders child routes */}
      <Outlet />
    </div>
  );
}

export default Users;
