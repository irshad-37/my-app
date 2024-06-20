import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Auth = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/auth/user`, { withCredentials: true });
        if (res.data.user) {
          navigate('/dashboard');
        }
      } catch (err) {
        console.log(err);
      }
    };
    getUser();
  }, [navigate]);

  const handleLogin = () => {
    window.open(`${process.env.REACT_APP_BACKEND_URL}/auth/google`, "_self");
  };

  return (
    <div>
      <h2>Login</h2>
      <button onClick={handleLogin}>Login with Google</button>
    </div>
  );
};

export default Auth;

