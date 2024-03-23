import { UseQueryResult, useQuery } from "@tanstack/react-query";
import publicBase from "./public.service";
import { WP_PAGES_EP } from "@/config/endpoints.config";

const fetchPageById = async (id?: number): Promise<any> => {
  try {
    const response = await publicBase.get(WP_PAGES_EP + "/" + id);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const fetchPages = async (params: Record<string, any>): Promise<any> => {
  try {
    const response = await publicBase.get(WP_PAGES_EP, {
      params: params,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

const usePageById = (
  initialData?: any,
  id?: number
): UseQueryResult<any, Error> => {
  return useQuery({
    queryKey: ["pages", id],
    queryFn: () => fetchPageById(id),
    initialData: initialData !== null ? initialData : undefined,
  });
};

export { fetchPageById, usePageById, fetchPages };
