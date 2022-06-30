import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Path } from '../../../utils/types';
import * as LS from '../../../utils/local-storage';


export const AuthContext = React.createContext(null);

const checkAuth = () => {
  const userEmail = LS.getAuth();
  return userEmail || null;
};


export function AuthProvider({ children }) {
  const
    [user, setUser] = useState(checkAuth),
    navigate = useNavigate();

  
  const login = (form, callback) => {
    console.log(`Login:`, form);

    setUser(form);
    LS.setAuth(form.email);
    typeof callback === `function` ? callback() : navigate(Path.MAIN);
  };


  const register = (form, callback) => {
    console.log(`Register:`, form);

    setUser(form);
    LS.setAuth(form.email);
    typeof callback === `function` ? callback() : navigate(Path.MAIN);
  };

  
  const logout = (callback) => {
    setUser(null);
    LS.clearAuth(); 
    typeof callback === `function` ? callback() : navigate(Path.LOGIN);
  };


  const value = {
    user,
    login,
    register,
    logout
  };

  return <AuthContext.Provider value={value}>
    {children}
  </AuthContext.Provider>
}
