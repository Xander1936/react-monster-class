import React from 'react'

// Returning infos coming from object dynamically
const ProductInfo = () => {
    const product = {
        name: "Laptop",
        price: "1200",
        availability:"In Stock",
    };
  return (
    <div>
        <h1>The product name is: {product.name}.</h1>
        <h2>The product price is: ${product.price}.</h2>
        <h2>The product availability is: {product.availability}.</h2>
    </div>
  )
}

export default ProductInfo;