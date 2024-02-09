import config from "@/config/api.config";
import axios from "axios";

const publicBase = axios.create({
  baseURL: config.wpUrl,
  timeout: 10000,
});

export default publicBase;
