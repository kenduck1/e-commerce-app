import ProductCard from "../components/ProductCard";
import { getProducts } from "../lib/products";
import { Card, Image } from "@nextui-org/react";
import Link from "next/link";

export default async function HomePage() {
  const products = await getProducts();

  // Select a random product to feature
  const featuredProduct = products[Math.floor(Math.random() * products.length)];

  return (
    <div className="container mx-auto p-4">
      {/* Featured Product Section */}
      <div className="mb-8 max-w-screen-lg mx-auto">
        {" "}
        {/* Same max width as grid */}
        <Link href={`/product/${featuredProduct.id}`} passHref>
          <Card className="rounded-lg shadow-lg overflow-hidden cursor-pointer">
            <div className="relative w-full h-0 pb-[50%] overflow-hidden">
              <Image
                src={featuredProduct.imageUrl}
                alt={featuredProduct.name}
                className="object-cover w-full h-full transform scale-110"
              />
            </div>
          </Card>
        </Link>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-screen-lg mx-auto">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
