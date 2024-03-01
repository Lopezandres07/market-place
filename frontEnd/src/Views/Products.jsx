import React, { useState } from "react";
import { Link } from "react-router-dom"; // Importa Link desde React Router
import { Row, Col } from "react-bootstrap";
import CardProduct from "../components/CardProducts";
import { Modal } from "react-bootstrap";
import { useFavorites } from "../components/contexts/FavoritesContext";

const Products = () => {
  const { favorites, addToFavorites, toggleFavorite } = useFavorites();
  const [showDetails, setShowDetails] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleDetailsClick = (product) => {
    setSelectedProduct(product);
    setShowDetails(true);
  };

  const handleCloseDetails = () => {
    setShowDetails(false);
  };

  const isFavorite = (product) => {
    return favorites.some((fav) => fav.id === product.id);
  };

  const products = [
    {
      id: 1,
      name: "smartphone",
      description:
        "smartphone de vanguardia Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat ad amet aspernatur iusto quam sit accusamus error eum expedita autem dicta facere cumque doloribus, laboriosam repellat quia nulla, asperiores odit?",
      price: 2000000,
      urlimage:
        "https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 2,
      name: "BMW",
      description:
        "auto de vanguardia Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat ad amet aspernatur iusto quam sit accusamus error eum expedita autem dicta facere cumque doloribus, laboriosam repellat quia nulla, asperiores odit?",
      price: 2000000,
      urlimage:
        "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 3,
      name: "NES",
      description:
        "comsola retro Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat ad amet aspernatur iusto quam sit accusamus error eum expedita autem dicta facere cumque doloribus, laboriosam repellat quia nulla, asperiores odit?",
      price: 2000000,
      urlimage:
        "https://images.pexels.com/photos/9100862/pexels-photo-9100862.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 4,
      name: "NES",
      description:
        "comsola retro Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat ad amet aspernatur iusto quam sit accusamus error eum expedita autem dicta facere cumque doloribus, laboriosam repellat quia nulla, asperiores odit?",
      price: 2000000,
      urlimage:
        "https://images.pexels.com/photos/9100862/pexels-photo-9100862.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 5,
      name: "NES",
      description:
        "comsola retro Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat ad amet aspernatur iusto quam sit accusamus error eum expedita autem dicta facere cumque doloribus, laboriosam repellat quia nulla, asperiores odit?",
      price: 2000000,
      urlimage:
        "https://images.pexels.com/photos/9100862/pexels-photo-9100862.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  return (
    <>
      <Link to="/favorites">Ir a Favoritos</Link>
      <Row xs={1} sm={2} md={4}>
        {products.map((item) => (
          <Col key={item.id}>
            <CardProduct
              product={item}
              handleDetailsClick={handleDetailsClick}
              addToFavorites={addToFavorites}
              toggleFavorite={toggleFavorite}
              isFavorite={isFavorite}
              favorites={favorites}
            />
          </Col>
        ))}
      </Row>
      {/* Vista superpuesta */}
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
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Products;
