import React, { useEffect, useContext } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { UserContext } from "../../providers/UserProvider";
import Swal from "sweetalert2";
import NavigationBar from "../../components/NavigationBar";

const UserProfile = () => {
  const { userId } = useParams();
  console.log(userId);
  const { getUserData, updateUserProfile, userData } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    getUserData(userId);
  }, [getUserData, userId]);

  const onSubmit = async (data) => {
    const { firstName, lastName, email, password, avatarURL } = data;

    const response = await updateUserProfile(
      userId,
      firstName,
      lastName,
      email,
      password,
      avatarURL
    );
    getUserData(userId);
    reset();

    console.log(response);

    if (response.success) {
      Swal.fire({
        icon: "success",
        title: "Usuario actualizado con éxito",
        showConfirmButton: false,
        timer: 1500,
      });
      reset();
    } else {
      Swal.fire({
        icon: "error",
        title: "Error al actualizar usuario",
        text: response.message,
      });
    }
  };

  return (
    <>
      <NavigationBar />
      <h1>Actualización de datos de usuario</h1>
      {userData ? (
        <>
          <div>
            <h2>Datos actuales del usuario:</h2>
            <p>Nombre: {userData.firstName}</p>
            <p>Apellido: {userData.lastName}</p>
            <p>Correo: {userData.email}</p>
            {userData.avatarURL && (
              <img
                src={userData.avatarURL}
                alt={`${userData.firstName} ${userData.lastName}`}
              />
            )}
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="firstName">Nuevo Nombre</label>
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

            <label htmlFor="lastName">Nuevo Apellido</label>
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

            <label htmlFor="email">Nuevo Correo</label>
            <input
              type="email"
              {...register("email", {
                required: {
                  value: true,
                  message: "Correo es requerido",
                },
                pattern: {
                  value: /[a-z0-9]+@[a-z]+\.[a-z]{2,4}$/,
                  message: "Correo no válido",
                },
              })}
            />
            {errors.email && <span>{errors.email.message}</span>}

            <label htmlFor="password">Nueva Contraseña</label>
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

            <label htmlFor="photo">Nueva Foto de perfil</label>
            <input
              type="file"
              onChange={(e) => {
                setValue("avatarURL", e.target.files[0].name);
              }}
            />
            {errors.avatarURL && <span>{errors.avatarURL.message}</span>}

            <button className="mt-2">Guardar cambios</button>
          </form>
        </>
      ) : (
        <p>Cargando datos del usuario...</p>
      )}
    </>
  );
};

export default UserProfile;
