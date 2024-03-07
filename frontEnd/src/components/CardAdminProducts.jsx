import React from "react";
import { Card, Button } from "react-bootstrap";
import "./componentsStyle/CardStyle.css";

const CardAdminProducts = ({ product, handleDetailsClick }) => {
  return (
    <section>
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
            <Card.Text className="precio">Precio: $ {product.price}</Card.Text>{" "}
            <div className="buttons">
              <section className="btnAdmin">
                <Button
                  id="btn-detalles"
                  onClick={() => handleDetailsClick(product)}
                >
                  Detalles 👀
                </Button>
                <Button id="btn-detalles">✏️ Editar</Button>
                <Button id="btn-detalles">❌ Eliminar</Button>

                {/* Al darle click a estos botones podemos desplegar un modal con la ccapacidad de editar la info  */}
              </section>
            </div>
          </Card.Body>
        </Card>
      </div>
    </section>
  );
};

export default CardAdminProducts;
