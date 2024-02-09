import axios from "axios";
import config from "@/config/api.config";
import Cookies from "js-cookie";
import { JWT_AUTH_EP, WOO_CUSTOMERS_EP } from "@/config/endpoints.config";
import generateFormData from "@/utils/generateFormData.utils";
import wooAuth from "./wooAuth.service";

const jwtAuth = axios.create({
  baseURL: config.siteUrl,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export const authenticateUser = async (username: string, password: string) => {
  const formData = new FormData();
  formData.append("username", username);
  formData.append("password", password);

  try {
    const response = await jwtAuth.post(JWT_AUTH_EP, formData);
    const { token, id } = response.data.data;
    Cookies.set("authToken", token);
    Cookies.set("userId", id);
    return { token, id };
  } catch (error) {
    console.error("Authentication error:", error);
    throw error;
  }
};

export const isAuthenticated = () => {
  const authToken = Cookies.get("authToken");
  return !!authToken;
};

export const logout = () => {
  Cookies.remove("authToken");
  Cookies.remove("userId");
  // Additional cleanup
};

export const signup = async (values: any) => {
  const formData = generateFormData(values);

  try {
    const response = await wooAuth.post(WOO_CUSTOMERS_EP, formData);
    return response.data;
  } catch (error) {
    console.error("User Registration Error:", error);
    throw error;
  }
};
