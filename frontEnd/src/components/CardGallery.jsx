import React from 'react'
import { Card } from 'react-bootstrap'
import './componentsStyle/CardStyle.css'

const CardGallery = ({ product }) => {
  return (
    <section>
      <div className='cardGallery'>
        <Card className='shadow '>
          <Card.Img
            variant='top'
            src={product.urlimage}
            className='product-image'
          />
        </Card>
      </div>
    </section>
  )
}

export default CardGallery
