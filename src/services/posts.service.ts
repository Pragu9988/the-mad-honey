import { UseQueryResult, useQuery } from "@tanstack/react-query";
import publicBase from "./public.service";
import { WP_POSTS_EP } from "@/config/endpoints.config";
import { IPost } from "@/types";

const fetchPosts = async (params: Record<string, any>): Promise<any> => {
  try {
    const response = await publicBase.get(WP_POSTS_EP, {
      params: params,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

const usePosts = (
  initialData?: any,
  params: Record<string, any> = {}
): UseQueryResult<IPost[], Error> => {
  return useQuery({
    queryKey: ["posts", params],
    queryFn: () => fetchPosts(params),
    initialData: initialData !== null ? initialData : undefined,
  });
};

export { fetchPosts, usePosts };
