import React, { useContext } from "react";
import { Card, Button } from "react-bootstrap";
import { productsContext } from "../providers/productsContext";
import Swal from "sweetalert2";
import "./componentsStyle/CardStyle.css";

const CardAdminProducts = ({ product, handleDetailsClick }) => {
  const { deleteProduct } = useContext(productsContext);
  const handleDelete = async () => {
    try {
      console.log("ID del producto a eliminar:", product.id);
      const response = await deleteProduct(product.id);

      if (response) {
        Swal.fire({
          icon: "success",
          title: "Publicación eliminada con éxito",
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          window.location.reload();
        });
        // Actualizar la interfaz de usuario según corresponda
      } else {
        Swal.fire({
          icon: "error",
          title: "Error al eliminar la publicación",
          text: "Hubo un problema al intentar eliminar la publicación. Por favor, inténtalo de nuevo más tarde.",
        });
      }
    } catch (error) {
      console.error("Error al eliminar la publicación:", error.message);
      Swal.fire({
        icon: "error",
        title: "Error al eliminar la publicación",
        text: "Hubo un problema al intentar eliminar la publicación. Por favor, inténtalo de nuevo más tarde.",
      });
    }
  };
  return (
    <section>
      <div className="homeCard">
        <Card>
          <Card.Img
            variant="top"
            src={product.imageurl}
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
                <Button id="btn-detalles" onClick={handleDelete}>
                  ❌ Eliminar
                </Button>

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
