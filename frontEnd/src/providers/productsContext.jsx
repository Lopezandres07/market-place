import React, { createContext, useContext, useEffect, useState } from "react";
import { UserContext } from "./UserProvider"; // Importa el contexto de usuario

const productsContext = createContext();

const ProductsProvider = ({ children }) => {
  const { userData } = useContext(UserContext);
  const [productData, setProductData] = useState(null);
  const [userId, setUserId] = useState(null);
  useEffect(() => {
    if (userData && userData.id) {
      setUserId(userData.id);
    }
  }, [userData]);

  const createProduct = async (name, description, price, imageURL) => {
    if (!userId) {
      console.error(
        "No se puede crear el producto: ID del usuario no disponible"
      );
      return;
    }

    console.log(name, description, price, imageURL);

    try {
      const adminRoleId = 1;
      const response = await fetch(`http://localhost:3000/api/v1/products`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          product: {
            role_id: adminRoleId,
            user_id: userId,
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

  const deleteProduct = async (productId) => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/v1/products/${productId}`,
        {
          method: "DELETE",
        }
      );
      if (response.ok) {
        const deletedProduct = await response.json();
        console.log("Producto eliminado:", deletedProduct);
        return deletedProduct;
      } else {
        throw new Error("Error al eliminar el producto");
      }
    } catch (error) {
      console.error("Error al eliminar el producto:", error.message);
      throw error;
    }
  };

  return (
    <productsContext.Provider
      value={{ productData, createProduct, deleteProduct }}
    >
      {children}
    </productsContext.Provider>
  );
};

export { productsContext, ProductsProvider };
