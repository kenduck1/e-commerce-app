'use client';

import { useState, useEffect } from 'react';
import ProductCard from './ProductCard';

export default function SimilarProducts({ productId }) {
  const [similarProducts, setSimilarProducts] = useState([]);

  useEffect(() => {
    async function fetchSimilarProducts() {
      const response = await fetch(`/api/product/similar/${productId}`);
      const data = await response.json();
      setSimilarProducts(data);
    }

    fetchSimilarProducts();
  }, [productId]);

  if (!similarProducts.length) {
    return <div>No similar products found.</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {similarProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}