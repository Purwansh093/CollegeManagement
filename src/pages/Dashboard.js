import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();
  const [token, setToken] = useState('');

  useEffect(() => {
    const savedToken = localStorage.getItem('token');
    if (!savedToken) {
      navigate('/login');
    } else {
      setToken(savedToken);
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div className="container">
      <h1>Welcome to the Dashboard</h1>
      <p>Your token: {token.slice(0, 10)}...</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Dashboard;
