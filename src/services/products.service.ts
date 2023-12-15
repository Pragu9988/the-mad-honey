import axios from "axios";
import { cache } from "react";
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import config from "@/config/api.config";
import wooAuth from "./wooAuth.service";
import { IProduct } from "@/types";

const fetchProducts = cache(
  async (params: Record<string, any>): Promise<IProduct[]> => {
    const response = await wooAuth.get("/products", {
      params: params,
    });
    console.log("res", response);
    return response.data;
  }
);

const useProducts = (
  initialData?: IProduct[],
  params: Record<string, any> = {}
): UseQueryResult<IProduct[], Error> => {
  return useQuery({
    queryKey: ["products", params],
    queryFn: () => fetchProducts(params),
    initialData: initialData !== null ? initialData : undefined,
  });
};

export { useProducts, fetchProducts };
