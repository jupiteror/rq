import { api } from "@/shared/api/instance.ts";
import type { Product } from "@/types/response.type.ts";

export async function getProducts(): Promise<Product[]> {
  const res = await api.get<Product[]>("/products");
  console.log("getProducts res", res.config, res.data);
  return res.data;
}
