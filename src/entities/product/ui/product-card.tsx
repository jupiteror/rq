import {Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/shared/ui/card.tsx";
import {Button} from "@/shared/ui/button.tsx";
import type {Product} from "@/types/response.type.ts";

const ProductCard = ({ product }: { product: Product }) => (
    <Card>
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
    </Card>
);

export default ProductCard;