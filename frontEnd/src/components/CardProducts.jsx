import React from "react";
import { Card, Button } from "react-bootstrap";

const CardProduct = ({
  product,
  handleDetailsClick,
  addToFavorites,
  isFavorite,
}) => {
  return (
    <div className="homeCard">
      <Card>
        <Card.Img
          variant="top"
          src={product.urlimage}
          className="product-image"
        />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>
            Descripción: <br />
            {product.description.length > 20
              ? product.description.substring(0, 20) + "..."
              : product.description}
          </Card.Text>
          <Card.Text className="precio">Precio: $ {product.price}</Card.Text>
          <div className="buttons">
            <Button
              id="btn-detalles"
              onClick={() => handleDetailsClick(product)}
            >
              Detalles 👀
            </Button>
            <Button id="btn-favorite" onClick={() => addToFavorites(product)}>
              <i
                className={
                  isFavorite(product)
                    ? "fas fa-heart favorite-heart"
                    : "far fa-heart"
                }
              ></i>
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardProduct;
