import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import CardGallery from './CardGallery'
import axios from 'axios'
const dataAPI = './products.json'

const Gallery = () => {
  const [products, setProducts] = useState([])

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

  return (
    <>
      <Row
        xs={1}
        sm={2}
        md={3}
        lg={3}
      >
        {products.slice(0, 3).map((item) => (
          <Col key={item.id}>
            <CardGallery product={item} />
          </Col>
        ))}
      </Row>
    </>
  )
}

export default Gallery
