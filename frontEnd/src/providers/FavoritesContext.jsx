import React, { createContext, useContext, useState } from 'react'
import { UserContext } from './UserProvider'
import axios from 'axios'

export const FavoritesContext = createContext()

export const useFavorites = () => useContext(FavoritesContext)

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([])
  const { userData } = useContext(UserContext)
  console.log(userData)
  console.log(favorites)

  /*  const toggleFavorite = (Products) => {
    if (isFavorite(Products)) {
      removeFromFavorites(Products.id);
    } else {
      addToFavorites(Products);
    }
  }; */

  const getFavorites = async () => {
    const user = { ...userData }
    console.log(user)

    try {
      const response = await axios.get(
        `http://localhost:3000/api/v1/favorites/${user.id}`
      )
      setFavorites(response.data.favorites)
    } catch (error) {
      console.error('Error fetching favorites:', error)
    }
  }

  const addToFavorites = async (product, userData) => {
    console.log('Favorite provider: ', product, userData)
    try {
      const response = await axios.post(
        'http://localhost:3000/api/v1/like_Product',
        { productId: product.id, userId: userData.id }
      )
      if (response.status === 200) {
        let newFavorites = response.data.newFavorite
        if (!Array.isArray(newFavorites)) {
          newFavorites = [newFavorites]
        }
        setFavorites(newFavorites)
      }
    } catch (error) {
      console.error('Error al agregar producto a favoritos:', error)
    }
  }

  const removeFromFavorites = async (favoriteId) => {
    console.log('Delete: ', favoriteId)
    try {
      const response = await axios.delete(
        `http://localhost:3000/api/v1/removeFavorite/${favoriteId}`
      )
      if (response.status === 200) {
        const updatedFavorites = favorites.filter(
          (favorite) => favorite.id !== favoriteId
        )
        setFavorites(updatedFavorites)
        return response.data.removedFavorite
      }
    } catch (error) {
      console.error('Error al eliminar favorito:', error)
      throw error
    }
  }

  const isFavorite = (Products) => {
    return favorites.some((fav) => fav.id === Products.id)
  }

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        getFavorites,
        addToFavorites,
        removeFromFavorites,
        /*         toggleFavorite, */
        isFavorite,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  )
}
