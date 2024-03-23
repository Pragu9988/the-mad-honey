import config from "@/config/api.config";
import { ML_SUBSCRIBERS_EP, ML_API_KEY } from "@/config/endpoints.config";
import axios, { AxiosResponse } from "axios";

export const mlApi = axios.create({
  baseURL: config.mlUrl,
  timeout: 1000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "X-MailerLite-ApiDocs": "true",
    "X-MailerLite-ApiKey": ML_API_KEY,
  },
});

export const newsletterSubscribe = async (email: string) => {
  try {
    const body = {
      email: email,
      resubscribe: false,
      type: "null",
    };
    const response: AxiosResponse = await mlApi.post(ML_SUBSCRIBERS_EP, body);
    return response.data;
  } catch (error) {
    console.log("Mailerlite error:", error);
    throw error;
  }
};
