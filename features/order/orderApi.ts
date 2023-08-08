import { Order, OrderInput } from "@/types/Order";
import axios, { AxiosResponse } from "axios";

interface createOrderResponse {
  order: Order;
}

export async function createOrder( order: OrderInput): Promise<Order> {
  const response = await axios.post<createOrderResponse>("http://localhost:8080/api/orders", order, { withCredentials: true });
  return response.data.order
}