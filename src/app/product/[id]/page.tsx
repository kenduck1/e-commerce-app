"use client";
import { useState, useEffect } from "react";
import { Card, CardBody, Button, Image } from "@nextui-org/react";
import { useCart } from "../../../context/CartContext";
import SimilarProducts from "../../../components/SimilarProducts";

export default function ProductPage({ params }) {
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  useEffect(() => {
    async function fetchProduct() {
      const response = await fetch(`/api/product/${params.id}`);
      const data = await response.json();
      setProduct(data);
    }

    fetchProduct();
  }, [params.id]);

  const handleAddToCart = () => {
    addToCart(product.id, quantity);
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <Card>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="col-span-1">
            <Image
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-[400px] rounded-lg object-cover"
            />
          </div>
          <CardBody className="col-span-1 flex flex-col justify-center items-start">
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <p className="text-2xl font-semibold mb-6">
              ${product.price.toFixed(2)}
            </p>
            <div className="flex items-center mt-4">
              <input
                className="w-20 text-sm p-2 mr-4 border rounded"
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value, 10))}
                min="1"
                max="10"
              />
              <Button onClick={handleAddToCart}>Add to Cart</Button>
            </div>
          </CardBody>
        </div>
      </Card>

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Similar Products</h2>
        <SimilarProducts productId={product.id} />
      </div>
    </div>
  );
}