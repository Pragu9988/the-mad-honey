"use client";

import React from "react";
import { AuthContext } from "@/context/auth.context";
import { useState, useEffect, ReactNode } from "react";
import {
  authenticateUser,
  isAuthenticated,
  logout,
} from "@/services/auth.service";
import { fetchCustomerData } from "@/services/customer.service";
import { AuthContextProps, User } from "@/types";
import Cookies from "js-cookie";
import { isNull } from "lodash";

const userId = Number(Cookies.get("userId"));

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      if (isAuthenticated()) {
        // Implement logic to fetch user data if needed
        if (!isNull(userId)) {
          const userData = await fetchCustomerData(userId);
          setUser(userData);
        }
      }
      setLoading(false);
    };

    checkAuth();
  }, []);

  const login = async (data: { username: string; password: string }) => {
    try {
      const token = await authenticateUser(data.username, data.password);
      // Fetch user data if needed
      if (!isNull(userId)) {
        const userData = await fetchCustomerData(userId);
        setUser(userData);
      }
      return token;
    } catch (error) {
      throw error;
    }
  };

  const logoutUser = () => {
    logout();
    setUser(null);
  };

  const authValues: AuthContextProps = {
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

export default AuthProvider;
