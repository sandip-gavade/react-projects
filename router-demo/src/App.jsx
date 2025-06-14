import React from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Users from './pages/Users';
import UserProfile from './pages/UserProfile';
import QueryInfo from './pages/QueryInfo';
import NotFound from './pages/NotFound';

function App() {
  const activeStyle = {
    fontWeight: 'bold',
    color: 'blue',
    textDecoration: 'underline',
  };

  return (
    <BrowserRouter>
      <nav style={{ margin: '1rem' }}>
        <NavLink
          to="/"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          end
        >
          Home
        </NavLink>{' '}
        |{' '}
        <NavLink
          to="/about"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          About
        </NavLink>{' '}
        |{' '}
        <NavLink
          to="/contact"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Contact
        </NavLink>{' '}
        |{' '}
        <NavLink
          to="/users"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Users
        </NavLink>{' '}
        |{' '}
        <NavLink
          to="/queryinfo"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Query Info
        </NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/queryinfo" element={<QueryInfo />} />

        <Route path="/users" element={<Users />}>
          <Route path=":id" element={<UserProfile />} />
        </Route>

        {/* Catch-all route for 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
