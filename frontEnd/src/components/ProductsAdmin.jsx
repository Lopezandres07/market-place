import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Button } from "react-bootstrap";
import CardProduct from "./CardProducts";
import { Modal } from "react-bootstrap";
import axios from "axios";
const dataAPI = "./products.json";

const ProductsAdmin = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(dataAPI);
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchData();
  }, []);

  const handleDetailsClick = (product) => {
    setSelectedProduct(product);
    setShowDetails(true);
  };

  const handleCloseDetails = () => {
    setShowDetails(false);
  };

  return (
    <>
      <h2 className="text-center mb-4">Productos</h2>
      <Link to="/FavoritesUser" className="text-decoration-none text-dark">
        Ir a Favoritos
      </Link>
      <Row xs={1} sm={2} md={3} lg={4}>
        {products.map((item) => (
          <Col key={item.id}>
            <CardProduct
              product={item}
              handleDetailsClick={handleDetailsClick}
            />
          </Col>
        ))}
      </Row>
      {/* Modal para ver mas detalles */}
      <Modal show={showDetails} onHide={handleCloseDetails}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedProduct && selectedProduct.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <img
            src={selectedProduct && selectedProduct.urlimage}
            alt={selectedProduct && selectedProduct.name}
            className="modal-image"
          />
          <p className="text-justify">
            {selectedProduct && selectedProduct.description}
          </p>
          <p className="text-center h4">
            Precio: $ {selectedProduct && selectedProduct.price}
          </p>
          <div className="buttons">
            <Button
              id="btn-detalles"
              onClick={() => handleDetailsClick(product)}
            >
              Detalles 👀
            </Button>
            <Button>❌</Button> <Button>✏️</Button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ProductsAdmin;
