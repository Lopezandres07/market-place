import React, { useState } from 'react'
import { Card, Row, Col, Button, Modal } from 'react-bootstrap'
import Favorites from './Favorites'
import '../App.css'

const Products = () => {
  const [showDetails, setShowDetails] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [favorites, setFavorites] = useState([])

  const handleDetailsClick = (product) => {
    setSelectedProduct(product)
    setShowDetails(true)
  }

  const handleCloseDetails = () => {
    setShowDetails(false)
  }

  const addToFavorites = (product) => {
    if (isFavorite(product)) {
      setFavorites(favorites.filter((fav) => fav.id !== product.id))
    } else {
      setFavorites([...favorites, product])
    }
  }

  const isFavorite = (product) => {
    return favorites.some((fav) => fav.id === product.id)
  }

  const removeFromFavorites = (product) => {
    setFavorites(favorites.filter((fav) => fav.id !== product.id))
  }

  const products = [
    {
      id: 1,
      name: 'smartphone',
      description:
        'smartphone de vanguardia Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat ad amet aspernatur iusto quam sit accusamus error eum expedita autem dicta facere cumque doloribus, laboriosam repellat quia nulla, asperiores odit?',
      price: 2000000,
      urlimage:
        'https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 2,
      name: 'BMW',
      description:
        'auto de vanguardia Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat ad amet aspernatur iusto quam sit accusamus error eum expedita autem dicta facere cumque doloribus, laboriosam repellat quia nulla, asperiores odit?',
      price: 2000000,
      urlimage:
        'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 3,
      name: 'NES',
      description:
        'comsola retro Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat ad amet aspernatur iusto quam sit accusamus error eum expedita autem dicta facere cumque doloribus, laboriosam repellat quia nulla, asperiores odit?',
      price: 2000000,
      urlimage:
        'https://images.pexels.com/photos/9100862/pexels-photo-9100862.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 4,
      name: 'NES',
      description:
        'comsola retro Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat ad amet aspernatur iusto quam sit accusamus error eum expedita autem dicta facere cumque doloribus, laboriosam repellat quia nulla, asperiores odit?',
      price: 2000000,
      urlimage:
        'https://images.pexels.com/photos/9100862/pexels-photo-9100862.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 5,
      name: 'NES',
      description:
        'comsola retro Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat ad amet aspernatur iusto quam sit accusamus error eum expedita autem dicta facere cumque doloribus, laboriosam repellat quia nulla, asperiores odit?',
      price: 2000000,
      urlimage:
        'https://images.pexels.com/photos/9100862/pexels-photo-9100862.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
  ]

  return (
    <>
      <Row
        xs={1}
        sm={2}
        md={4}
      >
        {products.map((item) => (
          <Col key={item.id}>
            <div className='homeCard'>
              <Card>
                <Card.Img
                  variant='top'
                  src={item.urlimage}
                  className='product-image'
                />
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>

                  <Card.Text>
                    Descripción: <br />{' '}
                    {item.description.length > 20
                      ? item.description.substring(0, 20) + '...'
                      : item.description}{' '}
                  </Card.Text>

                  <Card.Text className='precio'>
                    {' '}
                    Precio: $ {item.price}
                  </Card.Text>
                  <div className='buttons'>
                    <Button
                      id='btn-detalles'
                      key={item.id}
                      onClick={() => handleDetailsClick(item)}
                    >
                      Detalles 👀
                    </Button>
                    <Button
                      id='btn-favorite'
                      onClick={() => addToFavorites(item)}
                    >
                      <i
                        className={
                          isFavorite(item)
                            ? 'fas fa-heart favorite-heart'
                            : 'far fa-heart'
                        }
                      ></i>
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </Col>
        ))}
      </Row>
      {/* vista superpuesta */}
      <Modal
        show={showDetails}
        onHide={handleCloseDetails}
      >
        <Modal.Header closeButton>
          <Modal.Title>{selectedProduct && selectedProduct.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body className='text-center'>
          <img
            src={selectedProduct && selectedProduct.urlimage}
            alt={selectedProduct && selectedProduct.name}
            className='modal-image'
          />
          <p className='text-justify'>
            {selectedProduct && selectedProduct.description}
          </p>
          <p className='text-center h4'>
            Precio: $ {selectedProduct && selectedProduct.price}
          </p>
        </Modal.Body>
      </Modal>

      {/* Vista de Favoritos */}
      <Favorites
        favorites={favorites}
        removeFromFavorites={removeFromFavorites}
      />
    </>
  )
}

export default Products
