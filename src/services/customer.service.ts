import wooAuth from "./wooAuth.service";
import { WOO_CUSTOMERS_EP } from "@/config/endpoints.config";

const fetchCustomerData = async (id: number) => {
  console.log("id", id);
  try {
    const response = await wooAuth.get(WOO_CUSTOMERS_EP + "/" + id);
    return response.data;
  } catch (error) {
    console.error("Customer error:", error);
    throw error;
  }
};

export { fetchCustomerData };
