import React from "react";
import { Card, Button } from "react-bootstrap";
import "./componentsStyle/CardStyle.css";

const CardFavorite = ({ favorite, removeFromFavorites, handleShowModal }) => {
  return (
    <section>
      <div className="CardFavorites">
        <Card>
          <Card.Img
            className="product-image-fav"
            variant="top"
            src={favorite.urlimage}
            onClick={() => handleShowModal(favorite)}
          />
          <Card.Body>
            <div className="d-flex justify-content-between align-items-center">
              <Card.Title>{favorite.name}</Card.Title>
              <Button
                variant="outline"
                onClick={() => removeFromFavorites(favorite.id)}
              >
                <i className="fas fa-heart"></i>
              </Button>
            </div>
          </Card.Body>
        </Card>
      </div>
    </section>
  );
};

export default CardFavorite;