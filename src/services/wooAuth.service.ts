import config from "@/config/api.config";
import axios from "axios";

const wooAuth = axios.create({
  baseURL: config.baseUrl,
  timeout: 10000,
  auth: {
    username: config.consumerKey || "",
    password: config.consumerSecret || "",
  },
});

export default wooAuth;
