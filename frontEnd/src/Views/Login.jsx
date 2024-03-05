import React, { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../providers/UserProvider";
import { gapi } from "gapi-script";
import GoogleLogin from "react-google-login";

const Login = () => {
  const { loginWithEmailAndPassword } = useContext(UserContext);

  const googleId =
    "532934723345-md1l4accaej51e91i140vcqbegrp7bv0.apps.googleusercontent.com";

  useEffect(() => {
    const start = () => {
      gapi.client.init({ clientId: googleId });
    };

    gapi.load("client:auth2", start);
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit(async (data) => {
    const { email, password } = data;
    console.log(email, password);

    const response = await loginWithEmailAndPassword(email, password);

    console.log(response);

    reset();
  });

  const onSuccess = (response) => {
    console.log(response);
  };

  const onFailure = () => {
    console.log("Error al iniciar sesión");
  };

  return (
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

        {errors.Email && <span>{errors.Email.message}</span>}

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

        {errors.Contraseña && <span>{errors.Contraseña.message}</span>}

        <button id="btnEnviar" className="mt-2">
          Enviar
        </button>
      </form>
      <div>
        <h6>O puedes iniciar sesión con tu cuenta de Google</h6>
        <div className="btn">
          <GoogleLogin
            clientId={googleId}
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={"single_host_origin"}
            isSignedIn={true}
          />
        </div>
      </div>
    </section>
  );
};

export default Login;
