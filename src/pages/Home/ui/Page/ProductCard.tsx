// src/components/ProductCard.tsx
import React from "react";
import { Card } from "antd";
import { useNavigate } from "react-router-dom";
import type { Product } from "./data";

const { Meta } = Card;

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const navigate = useNavigate();

  const handleImageClick = () => {
    // navigate to category page like /category/king-beds
    navigate(`/category/${product.slug}`);
  };

  return (
    <Card
      hoverable
      className="w-full max-w-sm mx-auto border-0 shadow-md rounded-xl overflow-hidden bg-white"
      cover={
        <div
          className="relative overflow-hidden cursor-pointer group"
          onClick={handleImageClick}
        >
          <img
            alt={product.name}
            src={product.imageUrl}
            className="h-56 w-full object-cover transform transition-transform duration-300 group-hover:scale-110"
          />
          {/* simple dark overlay on hover – feels like popover image */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
        </div>
      }
    >
      <Meta
        title={
          <span className="block text-base font-semibold text-gray-900">
            {product.name}
          </span>
        }
        description={
          <div className="mt-1 space-y-1">
            <p className="text-sm font-medium text-amber-700">
              ₹{product.minPrice.toLocaleString("en-IN")} - ₹
              {product.maxPrice.toLocaleString("en-IN")}
            </p>
            <p className="text-xs text-gray-600 line-clamp-2">
              {product.description}
            </p>
          </div>
        }
      />
    </Card>
  );
};

export default ProductCard;
