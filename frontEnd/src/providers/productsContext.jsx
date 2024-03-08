import React, { createContext, useState } from "react";

const productsContext = createContext();

const ProductsProvider = ({ children }) => {
  const [productData, setProductData] = useState(null);

  const createProduct = async (name, description, price, imageURL) => {
    console.log(name, description, price, imageURL);

    try {
      const response = await fetch(`http://localhost:3000/api/v1/products`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          product: {
            user_id: 1, //definido de manera estatica. recuerden que solo el id de admin puede hacer posts
            name,
            description,
            price,
            imageURL,
          },
        }),
      });

      const createdProduct = await response.json();
      console.log("Producto creado:", createdProduct);
      return createdProduct;
    } catch (error) {
      console.error("Error al crear el producto:", error.message);
      throw error;
    }
  };
  return (
    <productsContext.Provider value={{ productData, createProduct }}>
      {children}
    </productsContext.Provider>
  );
};

export { productsContext, ProductsProvider };
