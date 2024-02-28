import React, { useState } from "react";
import { Card, Row, Col, Button, Modal } from "react-bootstrap";

const Favorites = ({ favorites, removeFromFavorites }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleShowModal = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <h2 className="text-center mb-4">Favoritos</h2>
      <Row xs={1} sm={2} md={3} lg={4} className="mb-4">
        {favorites.map((item) => (
          <Col key={item.id}>
            <div className="homeCardFavorites">
              <Card>
                <Card.Img
                  className="product-image-fav"
                  variant="top"
                  src={item.urlimage}
                  onClick={() => handleShowModal(item)}
                />
                <Card.Body>
                  <div className="d-flex justify-content-between align-items-center">
                    <Card.Title>{item.name}</Card.Title>
                    <Button
                      variant="outline"
                      onClick={() => removeFromFavorites(item)}
                    >
                      <i className="fas fa-heart"></i>
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </Col>
        ))}
      </Row>

      {/* Modal para mostrar la descripción y precio del producto seleccionado */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedProduct && selectedProduct.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center ">
          <p className="text-justify">
            {selectedProduct && selectedProduct.description}
          </p>
          <p className="h4">
            Precio: $ {selectedProduct && selectedProduct.price}
          </p>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Favorites;
