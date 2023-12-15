// authContext.js
import React, { createContext, useContext, useState, useEffect } from "react";
import { authenticateUser, isAuthenticated, logout } from "./woocommerce"; // Use your authentication functions

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      if (isAuthenticated()) {
        // Implement logic to fetch user data if needed
        // const userData = await fetchUserData();
        // setUser(userData);
        setUser({
          /* user data */
        });
      }
      setLoading(false);
    };

    checkAuth();
  }, []);

  const login = async (username, password) => {
    try {
      const token = await authenticateUser(username, password);
      // Fetch user data if needed
      // const userData = await fetchUserData();
      // setUser(userData);
      setUser({
        /* user data */
      });
      return token;
    } catch (error) {
      throw error;
    }
  };

  const logoutUser = () => {
    logout();
    setUser(null);
  };

  const authValues = {
    user,
    login,
    logout: logoutUser,
    isAuthenticated: !!user,
    loading,
  };

  return (
    <AuthContext.Provider value={authValues}>{children}</AuthContext.Provider>
  );
};
