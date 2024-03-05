import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../providers/UserProvider";
import Swal from "sweetalert2";

const Register = () => {
  const { createUser } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit(async (data) => {
    const { firstName, lastName, email, password, avatarURL } = data;

    const response = await createUser(
      firstName,
      lastName,
      email,
      password,
      avatarURL
    );

    console.log(response);

    if (response.success) {
      Swal.fire({
        icon: "success",
        title: "Usuario creado con éxito",
        showConfirmButton: false,
        timer: 1500,
      });
      reset();
    } else {
      Swal.fire({
        icon: "error",
        title: "Error al crear usuario",
        text: response.message,
      });
    }
  });

  return (
    <section className="register">
      <h1>Creación de usuario</h1>
      <form onSubmit={onSubmit}>
        <label htmlFor="firstName">Nombre</label>
        <input
          type="text"
          {...register("firstName", {
            required: {
              value: true,
              message: "Nombre es requerido",
            },
            minLength: {
              value: 2,
              message: "Nombre debe tener al menos 2 caracteres",
            },
          })}
        />
        {errors.firstName && <span>{errors.firstName.message}</span>}

        <label htmlFor="lastName">Apellido</label>
        <input
          type="text"
          {...register("lastName", {
            required: {
              value: true,
              message: "Apellido es requerido",
            },
            minLength: {
              value: 2,
              message: "Apellido debe tener al menos 2 caracteres",
            },
          })}
        />

        {errors.lastName && <span>{errors.lastName.message}</span>}

        <label htmlFor="email">Correo</label>
        <input
          type="email"
          {...register("email", {
            required: {
              value: true,
              message: "Correo es requerido",
            },
            pattern: {
              value: /[a-z0-9]+@[a-z]+\.[a-z]{2,4}$/,
              message: "Correo no valido",
            },
          })}
        />

        {errors.email && <span>{errors.email.message}</span>}

        <label htmlFor="password">Contraseña</label>
        <input
          type="password"
          {...register("password", {
            required: {
              value: true,
              message: "Contraseña es requerida",
            },
            minLength: {
              value: 6,
              message: "Contraseña debe tener al menos 6 caracteres",
            },
          })}
        />

        {errors.password && <span>{errors.password.message}</span>}

        <label htmlFor="password">Confirmar contraseña</label>
        <input
          type="password"
          {...register("passwordConfirm", {
            required: {
              value: true,
              message: "Contraseña es requerida",
            },
            validate: (value) =>
              value === watch("password") || "Las contraseñas no coinciden",
          })}
        />

        {errors.passwordConfirm && (
          <span>{errors.passwordConfirm.message}</span>
        )}

        <label htmlFor="photo">Foto de perfil</label>
        <input
          type="file"
          onChange={(e) => {
            setValue("avatarURL", e.target.files[0].name);
          }}
        />

        <button id="btnEnviar" className="mt-2">
          Crear usuario
        </button>
      </form>
    </section>
  );
};

export default Register;
