"use client";

import React, { createContext, useContext } from "react";

import { AuthContextProps } from "@/types";

export const AuthContext = createContext<AuthContextProps>({
  user: null,
  setUser: () => "",
  login: async () => "",
  logout: () => {},
  signup: async () => "",
  isAuthenticated: false,
  loading: true,
  setLoading: () => "",
});

export const useAuth = () => {
  return useContext(AuthContext);
};
