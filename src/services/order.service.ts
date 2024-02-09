import { cache } from "react";
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import config from "@/config/api.config";
import wooAuth from "./wooAuth.service";
import { WOO_ORDER_EP, WOO_COUPON_EP } from "@/config/endpoints.config";

export const createOrder = cache(async (values: any) => {
  try {
    const response = await wooAuth.post(WOO_ORDER_EP, values);
    return response.data;
  } catch (error) {
    console.error("Create order error:", error);
    throw error;
  }
});

export const retriveCoupon = async (value: any) => {
  try {
    const response = await wooAuth.get(WOO_COUPON_EP + "/" + 120);
    return response.data;
  } catch (error) {
    console.error("Retrive coupon error: ", error);
    throw error;
  }
};

export const createOrderNote = async (
  orderID: number | string,
  values: any
) => {
  try {
    const response = await wooAuth.post(WOO_ORDER_EP + "/" + orderID, values);
    return response.data;
  } catch (error) {
    console.error("Create order note error: ", error);
    throw error;
  }
};
