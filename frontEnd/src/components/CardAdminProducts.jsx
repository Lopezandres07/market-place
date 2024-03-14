import React, { useContext, useState } from "react";
import { Card, Button, Modal, Form } from "react-bootstrap";
import { productsContext } from "../providers/productsContext";
import axios from "axios";
import Swal from "sweetalert2";
import "./componentsStyle/CardStyle.css";

const CardAdminProducts = ({ product, handleDetailsClick }) => {
  const { deleteProduct } = useContext(productsContext);
  const [showModal, setShowModal] = useState(false);
  const [editingProduct, setEditingProduct] = useState({
    name: product.name,
    description: product.description,
    price: product.price,
    imageurl: product.imageurl,
  });

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

  const handleEdit = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSaveChanges = async () => {
    try {
      console.log("Guardando cambios:", editingProduct);
      const { name, description, price } = editingProduct;

      const response = await axios.put(
        `http://localhost:3000/api/v1/products/${product.id}`,
        { name, description, price }
      );

      if (response.status === 200) {
        setShowModal(false);
        Swal.fire({
          icon: "success",
          title: "Cambios guardados",
          text: "Los cambios se han guardado correctamente.",
          timer: 1500,
          showConfirmButton: false,
        }).then(() => {
          window.location.reload();
        });
      }
    } catch (error) {
      console.error("Error al guardar cambios:", error.message);
      Swal.fire({
        icon: "error",
        title: "Error al guardar cambios",
        text: "Hubo un error al guardar los cambios. Por favor, inténtalo de nuevo más tarde.",
        timer: 1500,
        showConfirmButton: false,
      });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditingProduct({ ...editingProduct, [name]: value });
  };

  return (
    <section>
      <div className="homeCard">
        <Card className="shadow">
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
                <Button id="btn-detalles" onClick={handleEdit}>
                  ✏️ Editar
                </Button>
                <Button id="btn-detalles" onClick={handleDelete}>
                  ❌ Eliminar
                </Button>
              </section>
            </div>
          </Card.Body>
        </Card>
      </div>

      {/* Modal para editar el producto */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Editar Producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formProductName">
              <Form.Label>Nombre del Producto</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese el nombre"
                name="name"
                value={editingProduct.name}
                onChange={handleInputChange}
              />
              <Form.Label>Descripción</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese la nueva descripción"
                name="description"
                value={editingProduct.description}
                onChange={handleInputChange}
              />
              <Form.Label>Precio</Form.Label>
              <Form.Control
                type="number"
                placeholder="Ingrese el nuevo precio"
                name="price"
                value={editingProduct.price}
                onChange={handleInputChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button id="btn-detalles" onClick={handleCloseModal}>
            Cancelar
          </Button>
          <Button id="btn-detalles" onClick={handleSaveChanges}>
            Guardar Cambios
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
};

export default CardAdminProducts;
