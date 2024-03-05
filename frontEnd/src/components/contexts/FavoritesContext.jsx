import React, { createContext, useContext, useState } from "react";

const FavoritesContext = createContext();

export const useFavorites = () => useContext(FavoritesContext);

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (Products) => {
    setFavorites((prevFavorites) => [...prevFavorites, Products]);
  };

  const removeFromFavorites = (ProductsId) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((Products) => Products.id !== ProductsId)
    );
  };

  const toggleFavorite = (Products) => {
    if (isFavorite(Products)) {
      removeFromFavorites(Products.id);
    } else {
      addToFavorites(Products);
    }
  };

  const isFavorite = (Products) => {
    return favorites.some((fav) => fav.id === Products.id);
  };

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addToFavorites,
        removeFromFavorites,
        toggleFavorite,
        isFavorite,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
