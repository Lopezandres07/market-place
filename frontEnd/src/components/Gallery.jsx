import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import CardGallery from "./CardGallery";
import axios from "axios";
const dataAPI = "./products.json";

const Gallery = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Realizar solicitud a la API de manera asíncrona
        const response = await axios.get(dataAPI);
        // Actualizar el estado con los datos recibidos
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    // Llamar a la función fetchData al montar el componente
    fetchData();
  }, []);

  return (
    <>
      <Row xs={1} sm={2} md={4}>
        {products.map((item) => (
          <Col key={item.id}>
            <CardGallery product={item} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Gallery;
