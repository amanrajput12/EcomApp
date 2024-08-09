import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from "js-cookie"

const AuthCheck = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = Cookies.get('token');
    const user = Cookies.get('user');

    if (!token || !user) {
      navigate('/'); 
    }
  }, [navigate]);

  return <>{children}</>;
};

export default AuthCheck;
