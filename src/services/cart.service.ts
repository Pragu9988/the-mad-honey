import axios, { AxiosResponse } from "axios";
import config from "@/config/api.config";
import {
  COO_ADD_ITEM_EP,
  COO_CLEAR_CART_EP,
  COO_GET_CART_EP,
  COO_CART_ITEM,
} from "@/config/endpoints.config";
import { isArray, isEmpty } from "lodash";
import generateFormData from "@/utils/generateFormData.utils";
import { AddToCartProps } from "@/types";

export const cooApi = axios.create({
  baseURL: config.cooUrl,
  timeout: 10000,
  withCredentials: true,
});

export const fetchCartData = async (values: AddToCartProps) => {
  const formData = generateFormData(values);

  try {
    const response: AxiosResponse = await cooApi.post(
      COO_ADD_ITEM_EP,
      formData
    );
    return response.data;
  } catch (error) {
    console.error("Authentication error:", error);
    throw error;
  }
};

export const getCartData = async () => {
  try {
    const response: AxiosResponse = await cooApi.get(COO_GET_CART_EP);
    return response.data;
  } catch (error) {
    console.error("Get Cart Error", error);
    throw error;
  }
};

export const clearCartData = async () => {
  try {
    const response: AxiosResponse = await cooApi.post(COO_CLEAR_CART_EP);
    return response.data;
  } catch (error) {
    console.error("Clear Cart Error", error);
    throw error;
  }
};

export const updateCartItem = async (data: any) => {
  const formData = generateFormData(data);
  try {
    const response: AxiosResponse = await cooApi.post(
      COO_CART_ITEM + "/" + data.id,
      formData
    );
    return response.data;
  } catch (error) {
    console.error("Update Cart Item", error);
    throw error;
  }
};

// export const viewCart = (setCart: any, setProcessing: any) => {
//   const addOrViewCartConfig = getApiCartConfig();

//   axios
//     .get(WOO_CART_EP, addOrViewCartConfig)
//     .then((res) => {
//       const formattedCartData = getFormattedCartData(res?.data ?? []);
//       setCart(formattedCartData);
//       setProcessing(false);
//     })
//     .catch((err) => {
//       setProcessing(false);
//     });
// };

// const getFormattedCartData = (cartData: any) => {
//   if (!cartData.length) {
//     return null;
//   }
//   const cartTotal = calculateCartQtyAndPrice(cartData || []);
//   return {
//     cartItems: cartData || [],
//     ...cartTotal,
//   };
// };

// const calculateCartQtyAndPrice = (cartItems: any) => {
//   const qtyAndPrice = {
//     totalQty: 0,
//     totalPrice: 0,
//   };

//   if (!isArray(cartItems) || !cartItems?.length) {
//     return qtyAndPrice;
//   }

//   cartItems.forEach((item, index) => {
//     qtyAndPrice.totalQty += item?.quantity ?? 0;
//     qtyAndPrice.totalPrice += item?.line_total ?? 0;
//   });

//   return qtyAndPrice;
// };
