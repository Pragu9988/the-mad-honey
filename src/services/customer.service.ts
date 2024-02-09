import { IUser } from "@/types";
import wooAuth from "./wooAuth.service";
import { WOO_CUSTOMERS_EP } from "@/config/endpoints.config";
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { authenticateUser } from "./auth.service";
import generateFormData from "@/utils/generateFormData.utils";
import Cookies from "js-cookie";

const fetchCustomerData = async (id?: number) => {
  try {
    const response = await wooAuth.get(WOO_CUSTOMERS_EP + "/" + id);
    return response.data;
  } catch (error) {
    console.error("Fetch customer error:", error);
    throw error;
  }
};

const createCustomer = async (values: IUser) => {
  const formData = new FormData();
  try {
    const response = await wooAuth.post(WOO_CUSTOMERS_EP, formData);
    const { username, password } = response.data.data;

    const token = await authenticateUser(username, password);
  } catch (error) {
    console.error("Create customer error:", error);
    throw error;
  }
};

const updateCustomer = async (values: IUser) => {
  try {
    const userId = Number(Cookies.get("userId"));
    const response = await wooAuth.put(WOO_CUSTOMERS_EP + "/" + userId, values);
    return response;
  } catch (error) {
    console.error("Update customer error:", error);
    throw error;
  }
};

const useCustomers = (
  initialData?: IUser[],
  id?: number
): UseQueryResult<IUser[], Error> => {
  return useQuery({
    queryKey: ["customers", id],
    queryFn: () => fetchCustomerData(id),
    initialData: initialData !== null ? initialData : undefined,
  });
};

export { fetchCustomerData, useCustomers, updateCustomer };
