"use client";

import React, { createContext, useContext } from "react";

import { AuthContextProps, User } from "@/types";

export const AuthContext = createContext<AuthContextProps>({
  user: null,
  login: async () => "",
  logout: () => {},
  isAuthenticated: false,
  loading: true,
});

export const useAuth = () => {
  return useContext(AuthContext);
};
