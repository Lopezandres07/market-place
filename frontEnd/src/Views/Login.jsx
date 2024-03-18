import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../providers/UserProvider";
import { GoogleLogin } from "@react-oauth/google";
import NavigationBar from "../components/NavigationBar";
import Swal from "sweetalert2";

const Login = () => {
  const { loginWithEmailAndPassword, loginWithGoogle } =
    useContext(UserContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  });

  const onSubmit = handleSubmit(async (data) => {
    try {
      const response = await loginWithEmailAndPassword(data);
      if (response.success) {
        Toast.fire({
          icon: "success",
          title: `¡Saludos ${response.userData.firstname} ${response.userData.lastname}!`,
        });
        reset();
      } else {
        Toast.fire({
          icon: "warning",
          text: "Usuario o contraseña incorrectos.",
        });
      }
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
    }
  });

  const handleGoogleLoginSuccess = async (data) => {
    const { credential } = data;
    const response = await loginWithGoogle(credential);
    return response;
  };

  const handleGoogleLoginFailure = () => {
    console.log("Login de Google fallido");
  };

  return (
    <>
      <NavigationBar />
      <section className="login">
        <h1>Login</h1>
        <form onSubmit={onSubmit}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            {...register("email", {
              required: {
                value: true,
                message: "Correo es requerido",
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
            })}
          />

          {errors.password && <span>{errors.password.message}</span>}

          <button id="btnEnviar" className="mt-2">
            Enviar
          </button>
        </form>
        <div>
          <h6>O puedes iniciar sesión con tu cuenta de Google</h6>
          <div className="btn">
            <GoogleLogin
              onSuccess={handleGoogleLoginSuccess}
              onFailure={handleGoogleLoginFailure}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
