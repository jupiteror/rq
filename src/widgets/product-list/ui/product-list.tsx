import { getProducts } from "@/entities/product/api/get-products.ts";
import { useQuery } from "@tanstack/react-query";
import ProductCard from "@/entities/product/ui/product-card.tsx";

const ProductList = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  if (isError) return "Error";
  if (isLoading) return "Loading";

  return (
    <div className="grid ...">
      {data?.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
