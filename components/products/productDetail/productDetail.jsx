import React from "react";

const ProductDetail = ({ product }) => {
  return (
    <div>
      <h2>{product.name}</h2>
      <p>Brand: {product.brand}</p>
      <p>Price: {product.price}</p>
      {/* Render more details of the product */}
    </div>
  );
};

export default ProductDetail;
