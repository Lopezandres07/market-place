import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const CreatePublication = () => {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm();

  console.log("Login errors: ", errors);

  const onSubmit = handleSubmit(async (data) => {
    const { name, description, price, URLImage } = data;
    console.log(name, description, price, URLImage);

    const response = await createProduct(name, description, price, URLImage);

    console.log(response);

    if (response.success) {
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
          type="description"
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
          type="text"
          {...register("price", {
            required: {
              value: true,
              message: "Precio requerido",
            },
          })}
        />

        {errors.price && <span>{errors.price.message}</span>}

        <label htmlFor="photo">Foto del producto</label>
        <input
          type="file"
          onChange={(e) => {
            setValue("URLImage", e.target.files[0].name);
          }}
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
