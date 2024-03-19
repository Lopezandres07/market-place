import React, { useContext, useEffect } from 'react'
import { Row, Col, Button, Modal } from 'react-bootstrap'
import CardFavorite from './CardFavorite'
import { FavoritesContext } from '../providers/FavoritesContext.jsx'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Favorites = (handleWhatsAppClick) => {
  /*   const { favorites } = useFavorites() */
  const [showModal, setShowModal] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState(null)
  const { getFavorites, favorites, removeFromFavorites } =
    useContext(FavoritesContext)

  useEffect(() => {
    getFavorites()
  }, [])

  const handleShowModal = (product) => {
    setSelectedProduct(product)
    setShowModal(true)
  }

  const handleCloseModal = () => {
    setShowModal(false)
  }

  const handleRemoveFavorite = async (favoriteId) => {
    try {
      await removeFromFavorites(favoriteId)
    } catch (error) {
      console.log(error)
    }
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
              handleShowModal={handleShowModal}
              handleRemoveFavorite={handleRemoveFavorite}
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
