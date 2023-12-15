import axios from "axios";
import config from "@/config/api.config";

const jwtAuth = axios.create({
  baseURL: config.siteUrl,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer YOUR_JWT_TOKEN`,
  },
});

export const authenticateUser = async (username: string, password: string) => {
  try {
    const response = await jwtAuth.post("/jwt-auth/v1/token", {
      username,
      password,
    });

    const { token } = response.data;
    localStorage.setItem("authToken", token);
    return token;
  } catch (error) {
    console.error("Authentication error:", error);
    throw error;
  }
};

export const isAuthenticated = () => {
  const authToken = localStorage.getItem("authToken");
  return !!authToken;
};

export const logout = () => {
  localStorage.remove("authToken");
  // Additional cleanup
};
