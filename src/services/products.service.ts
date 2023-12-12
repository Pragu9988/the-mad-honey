import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import config from "@/config/api.config";

const fetchProducts = async () => {
  const response = await axios.get(`${config.baseUrl}/products`, {
    auth: {
      username: config.consumerKey ?? "",
      password: config.consumerSecret ?? "",
    },
  });
  console.log("res", response);
  return response.data;
};

const useProducts = () => {
  return useQuery({ queryKey: ["products"], queryFn: fetchProducts });
};

export { useProducts, fetchProducts };
