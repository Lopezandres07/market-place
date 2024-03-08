import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { productsContext } from "../providers/productsContext";
import Swal from "sweetalert2";

const CreatePublication = () => {
  const { createProduct } = useContext(productsContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  console.log("Login errors: ", errors);

  const onSubmit = handleSubmit(async (data) => {
    const { name, description, price, imageURL } = data;

    console.log(data);

    const response = await createProduct(name, description, price, imageURL);
    console.log(response);

    if (response) {
      Swal.fire({
        icon: "success",
        title: "Producto creado con éxito",
        showConfirmButton: false,
        timer: 1500,
      });
      reset();
    } else {
      Swal.fire({
        icon: "error",
        title: "Error al crear el producto",
        text: response.message,
      });
    }

    reset();
  });

  return (
    <section className="createPublication">
      <h1>Creación de producto</h1>
      <form onSubmit={onSubmit}>
        <label htmlFor="name">Nombre del producto</label>
        <input
          type="text"
          {...register("name", {
            required: {
              value: true,
              message: "Nombre es requerido",
            },
          })}
        />

        {errors.name && <span>{errors.name.message}</span>}

        <label htmlFor="description">Descripción del producto</label>
        <input
          type="text"
          {...register("description", {
            required: {
              value: true,
              message: "Descripción requerida",
            },
          })}
        />

        {errors.description && <span>{errors.description.message}</span>}

        <label htmlFor="price">Precio del producto</label>
        <input
          type="number"
          {...register("price", {
            required: {
              value: true,
              message: "Precio requerido",
            },
          })}
        />

        {errors.price && <span>{errors.price.message}</span>}

        <label htmlFor="photo">URL de la imagen</label>
        <input
          type="text"
          {...register("imageURL", {
            required: {
              value: true,
              message: "URL de la imagen requerida",
            },
          })}
        />

        {errors.URLImage && <span>{errors.URLImage.message}</span>}

        <button id="btnEnviar" className="mt-2">
          Añadir producto
        </button>
      </form>
    </section>
  );
};

export default CreatePublication;
