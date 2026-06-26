import { getProducts } from "@/entities/product/api/get-products.ts";
import { Button } from "@/shared/ui/button.tsx";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shared/ui/card.tsx";
import type { Product } from "@/types/response.type.ts";
import { useEffect, useState } from "react";

const ProductBlock = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isError, setIsError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    getProducts()
      .then(setProducts)
      .catch(() => setIsError(true))
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isError) return "Error";
  if (isLoading) return "Loading";
  return (
    <div
      className="grid gap-4 font-bold 
                grid-cols-1 
                sm:grid-cols-2 
                md:grid-cols-3 
                lg:grid-cols-4
                mt-4
                "
    >
      {products.map((product) => (
        <Card key={product.id}>
          <CardHeader>
            <CardTitle className="text-xl">{product.title}</CardTitle>
            <CardDescription className="text-lg">
              Category: {product.category}
            </CardDescription>
            <CardAction>
              Rating: {product.rating.rate} ({product.rating.count})
            </CardAction>
          </CardHeader>
          <CardContent className="h-full flex items-center justify-center">
            <img src={product.image} alt={product.title} />
          </CardContent>
          <CardFooter className="flex justify-between">
            <p>Price: ${product.price}</p>
            <Button type="submit" className="w-15">
              Buy
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default ProductBlock;
