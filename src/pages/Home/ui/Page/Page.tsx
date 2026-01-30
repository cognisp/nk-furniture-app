// src/pages/Home/Home.tsx
import React from "react";
import ProductCard from "./ProductCard";
import { products } from "./data";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-6xl px-4 py-10">
        {/* Heading */}
        <header className="mb-8 text-center">
          <h1 className="text-2xl md:text-3xl font-semibold text-gray-900">
            Living and Bedroom Furniture and more
          </h1>
          <p className="mt-2 text-sm text-gray-600">
            Explore premium furniture for your living room, bedroom, office and kitchen.
          </p>
        </header>

        {/* Product Grid */}
        <section>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
