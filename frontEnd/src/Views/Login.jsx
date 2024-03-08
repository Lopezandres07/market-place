import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { UserContext } from '../providers/UserProvider'
import GoogleLoginButton from '../components/GoogleLoginButton'

const Login = () => {
  const { loginWithEmailAndPassword, googleLoginSuccess, googleLoginFailure } =
    useContext(UserContext)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const onSubmit = handleSubmit(async (data) => {
    const response = await loginWithEmailAndPassword(data)
    console.log(response)

    reset()
  })

  return (
    <section className='login'>
      <h1>Login</h1>
      <form onSubmit={onSubmit}>
        <label htmlFor='email'>Email</label>
        <input
          type='email'
          {...register('email', {
            required: {
              value: true,
              message: 'Correo es requerido',
            },
          })}
        />

        {errors.Email && <span>{errors.Email.message}</span>}

        <label htmlFor='password'>Contraseña</label>
        <input
          type='password'
          {...register('password', {
            required: {
              value: true,
              message: 'Contraseña es requerida',
            },
          })}
        />

        {errors.Contraseña && <span>{errors.Contraseña.message}</span>}

        <button
          id='btnEnviar'
          className='mt-2'
        >
          Enviar
        </button>
      </form>
      <div>
        <h6>O puedes iniciar sesión con tu cuenta de Google</h6>
        <div className='btn'>
          <GoogleLoginButton
            onSuccess={googleLoginSuccess}
            onFailure={googleLoginFailure}
          />
        </div>
      </div>
    </section>
  )
}

export default Login
