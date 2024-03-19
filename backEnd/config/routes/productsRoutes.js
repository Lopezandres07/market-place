import express from 'express'
import {
  addToFavorites,
  createNewProduct,
  getAllProductsController,
  getFavoritesWithDetails,
  removeFromFavorites,
  removeProduct,
  updateProductController,
} from '../../src/API/V1/Controllers/productsControllers.js'

const router = express.Router()

router.get('/products', getAllProductsController)
router.get('/favorites/:id', getFavoritesWithDetails)
router.post('/products', createNewProduct)
router.delete('/products/:productId', removeProduct)
router.put('/products/:productId', updateProductController)
router.post('/like_Product', addToFavorites)
router.delete('/removeFavorite/:id', removeFromFavorites)

export default router
