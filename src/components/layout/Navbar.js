import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav style={{ backgroundColor: '#333', padding: '10px' }}>
    <Link to="/" style={{ color: '#fff', marginRight: '15px' }}>Leaderboard</Link>
    <Link to="/activities" style={{ color: '#fff', marginRight: '15px' }}>Activities</Link>
    <Link to="/rewards" style={{ color: '#fff', marginRight: '15px' }}>Rewards</Link>
    <Link to="/admin" style={{ color: '#fff', marginRight: '15px' }}>Admin</Link>
    <Link to="/analytics" style={{ color: '#fff', marginRight: '15px' }}>Analytics</Link>
    <Link to="/login" style={{ color: '#fff', marginRight: '15px' }}>Login</Link>
    <Link to="/logout" style={{ color: '#fff' }}>Logout</Link>
  </nav>
);

export default Navbar;
