import express from 'express'
import {
  addToFavorites,
  createNewProduct,
  getAllProductsController,
  removeFromFavorites,
  removeProduct,
  updateProductController,
} from '../../src/API/V1/Controllers/productsControllers.js'

const router = express.Router()

router.get('/products', getAllProductsController)
router.post('/products', createNewProduct)
router.delete('/products/:productId', removeProduct)
router.put('/products/:productId', updateProductController)
router.post('/like_Product', addToFavorites)
router.delete('/remove_like/:product_id', removeFromFavorites)

export default router
