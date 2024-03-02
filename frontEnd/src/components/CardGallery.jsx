import React from "react";
import { Card } from "react-bootstrap";
import "./componentsStyle/CardStyle.css";

const CardGallery = ({ product }) => {
  return (
    <section>
      <div className="cardGallery">
        <Card>
          <Card.Img
            variant="top"
            src={product.urlimage}
            className="product-image"
          />
          <Card.Body>
            <Card.Title>{product.name}</Card.Title>
          </Card.Body>
        </Card>
      </div>
    </section>
  );
};

export default CardGallery;
