import { api } from "@/config/instance";
import type { Product } from "@/types/response.type";

export async function getProducts(): Promise<Product[]> {
  const res = await api.get<Product[]>("/products");

  return res.data;
}
