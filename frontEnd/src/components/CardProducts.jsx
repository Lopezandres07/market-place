import React from 'react'
import { Card, Button } from 'react-bootstrap'
import './componentsStyle/CardStyle.css'

const CardProducts = ({
  product,
  handleDetailsClick,
  isFavorite,
  addToFavorites,
  userData,
}) => {
  const handleAddToFavorites = () => {
    addToFavorites(product, userData)
  }

  return (
    <section>
      <div className='homeCard'>
        <Card className='shadow'>
          <Card.Img
            variant='top'
            src={product.imageurl}
            className='product-image'
          />
          <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>
              Descripción: <br />
              {product.description.length > 20
                ? product.description.substring(0, 20) + '...'
                : product.description}
            </Card.Text>
            <Card.Text className='precio'>Precio: $ {product.price}</Card.Text>{' '}
            <div className='buttons'>
              <Button
                id='btn-detalles'
                onClick={() => handleDetailsClick()}
              >
                Detalles 👀
              </Button>
              <Button
                id='btn-favorite'
                onClick={handleAddToFavorites}
              >
                <i
                  className={
                    isFavorite(product)
                      ? 'fas fa-heart favorite-heart'
                      : 'far fa-heart'
                  }
                ></i>
              </Button>
            </div>
          </Card.Body>
        </Card>
      </div>
    </section>
  )
}

export default CardProducts
