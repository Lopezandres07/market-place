import React from 'react'
import { Row, Col, Button, Modal } from 'react-bootstrap'
import CardFavorite from './CardFavorite'
import { useFavorites } from '../providers/FavoritesContext.jsx'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Favorites = () => {
  const { favorites, removeFromFavorites } = useFavorites()
  const [showModal, setShowModal] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState(null)

  console.log(favorites)

  const handleShowModal = (product) => {
    setSelectedProduct(product)
    setShowModal(true)
  }

  const handleCloseModal = () => {
    setShowModal(false)
  }
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
      <h2 className='text-center mb-4'>Favoritos</h2>
      <Link
        to='/homeUser'
        className='text-decoration-none text-dark'
      >
        Volver a Productos
      </Link>
      <Row
        xs={1}
        sm={2}
        md={3}
        className='mb-4'
      >
        {favorites.map((item) => (
          <Col key={item.id}>
            <CardFavorite
              favorite={item}
              removeFromFavorites={removeFromFavorites}
              handleShowModal={handleShowModal}
            />
          </Col>
        ))}
      </Row>

      <Modal
        show={showModal}
        onHide={handleCloseModal}
      >
        <Modal.Header closeButton>
          <Modal.Title>{selectedProduct && selectedProduct.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body className='text-center '>
          <p className='text-justify'>
            {selectedProduct && selectedProduct.description}
          </p>
          <p className='h4'>
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

export default Favorites
