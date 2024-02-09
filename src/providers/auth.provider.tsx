"use client";

import React from "react";
import { AuthContext } from "@/context/auth.context";
import { useState, useEffect, ReactNode } from "react";
import {
  authenticateUser,
  isAuthenticated,
  logout,
  signup,
} from "@/services/auth.service";
import { fetchCustomerData } from "@/services/customer.service";
import { AuthContextProps, IUser } from "@/types";
import Cookies from "js-cookie";
import { isEmpty, isNull } from "lodash";

const userId = Number(Cookies.get("userId"));

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<IUser | null>(null);
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
      const { token, id } = await authenticateUser(
        data.username,
        data.password
      );
      // Fetch user data if needed
      if (!isNull(id)) {
        const userData = await fetchCustomerData(id);
        setUser(userData);
      }
      return token;
    } catch (error) {
      throw error;
    }
  };

  const signupUser = async (values: any) => {
    try {
      const userData = await signup(values);
      setUser(userData);

      if (!isNull(userData) && !isEmpty(userData)) {
        const token = await authenticateUser(
          userData.username,
          values.password
        );
        return token;
      }
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
    setUser,
    login,
    signup: signupUser,
    logout: logoutUser,
    isAuthenticated: !!user,
    loading,
    setLoading
  };

  return (
    <AuthContext.Provider value={authValues}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
