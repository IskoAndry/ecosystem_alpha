import React from 'react';

import ProductCard from '../ProductCard/ProductCard';

interface ProductListProps {
  products: {
    id: number;
    title: string;
    price: number;
    image: string;
    isLiked: boolean;
  }[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <div className="cards-container">
      {products.map(product => (
        <div key={product.id}>
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
};

export default ProductList;