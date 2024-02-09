import publicBase from "./public.service";
import { WP_POSTS_EP } from "@/config/endpoints.config";

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

export { fetchPosts };
