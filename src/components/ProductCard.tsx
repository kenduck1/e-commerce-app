"use client";

import Link from "next/link";
import { Button, Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { useCart } from "../context/CartContext";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.stopPropagation();
    addToCart(product.id, 1);
  };

  return (
    <Link href={`/product/${product.id}`} passHref>
      <Card
        // variant="bordered"
        css={{
          mw: "400px",
          cursor: "pointer",
          display: "flex",
          flexDirection: "column",
          padding: "12px",
        }}
      >
        <div className="h-1/2 mb-4" style={{ padding: "8px" }}>
          <Image
            src={product.imageUrl}
            alt={product.name}
            width="100%"
            height="100%"
            css={{
              borderRadius: "var(--nextui-radii-md)",
              padding: "4px",
              backgroundColor: "#f9f9f9",
            }}
          />
        </div>
        <CardBody className="h-1/2">
          <h4 className="text-lg font-semibold">{product.name}</h4>
          <p className="text-gray-500">{product.description}</p>
        </CardBody>
        <CardFooter>
          <div className="flex justify-between w-full items-center">
            <span className="text-m w-1/3">${product.price.toFixed(2)}</span>
            <Button
              auto
              onClick={(e) => {
                e.preventDefault();
                handleAddToCart(e);
              }}
              className="w-2/3"
            >
              Add to Cart
            </Button>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
