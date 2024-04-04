import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Button } from 'react-bootstrap'
import CardProduct from './CardProducts'
import { Modal } from 'react-bootstrap'
import axios from 'axios'

import { FavoritesContext } from '../providers/FavoritesContext.jsx'
import { UserContext } from '../providers/UserProvider.jsx'
const dataAPI = 'http://localhost:3000/API/V1/products'

const Products = ({ nameFilter }) => {
  const { favorites, addToFavorites } = useContext(FavoritesContext)
  const { userData } = useContext(UserContext)
  const [showDetails, setShowDetails] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [products, setProducts] = useState([])

  console.log(userData)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(dataAPI)
        setProducts(response.data)
      } catch (error) {
        console.error('Error fetching products:', error)
      }
    }

    fetchData()
  }, [])

  const handleDetailsClick = (product) => {
    setSelectedProduct(product)
    setShowDetails(true)
  }

  const handleCloseDetails = () => {
    setShowDetails(false)
  }

  const isFavorite = (product) => {
    return favorites.some((fav) => fav.id === product.id)
  }

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(nameFilter.toLowerCase())
  )

  const handleWhatsAppClick = () => {
    const phoneNumber = '+56971597559'
    const message =
      '¡Hola! Estoy interesado en comprar el producto: ' + selectedProduct.name
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`
    window.open(whatsappURL, '_blank')
  }

  return (
    <>
      <Row
        xs={1}
        sm={2}
        md={3}
        lg={4}
      >
        {filteredProducts.map((item) => (
          <Col key={item.id}>
            <CardProduct
              product={item}
              handleDetailsClick={handleDetailsClick}
              addToFavorites={addToFavorites}
              /*               toggleFavorite={toggleFavorite} */
              isFavorite={isFavorite}
              userData={userData}
              handleWhatsAppClick={handleWhatsAppClick}
            />
          </Col>
        ))}
      </Row>
      {/* Modal para ver mas detalles */}
      <Modal
        show={showDetails}
        onHide={handleCloseDetails}
      >
        <Modal.Header closeButton>
          <Modal.Title>{selectedProduct && selectedProduct.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body className='text-center'>
          <img
            src={selectedProduct && selectedProduct.imageurl}
            alt={selectedProduct && selectedProduct.name}
            className='modal-image'
          />
          <p className='text-justify'>
            {selectedProduct && selectedProduct.description}
          </p>
          <p className='text-center h4'>
            Precio: $ {selectedProduct && selectedProduct.price}
          </p>
          <h5>Interesado en comprar?</h5>
          <p>
            Hablemos{' '}
            <Button
              id='btn-detalles'
              onClick={handleWhatsAppClick}
            >
              <i className='fa-brands fa-whatsapp'></i>
            </Button>{' '}
          </p>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default Products
