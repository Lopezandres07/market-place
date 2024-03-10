import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { UserContext } from '../providers/UserProvider'
import { useNavigate } from 'react-router-dom'
import { GoogleLogin } from '@react-oauth/google'

const Login = () => {
  const { loginWithEmailAndPassword, loginWithGoogle } = useContext(UserContext)
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const onSubmit = handleSubmit(async (data) => {
    const response = await loginWithEmailAndPassword(data)
    console.log(response)

    if (response && response.token) {
      navigate('/homeUser')
    }

    reset()
  })

  const handleGoogleLoginSuccess = async (credentialResponse) => {
    const user = credentialResponse.credential

    try {
      const googleUser = await loginWithGoogle(user)

      console.log(googleUser)

      if (googleUser && googleUser.token) {
        navigate('/homeUser')
      }
    } catch (error) {
      console.error('Error en el proceso de inicio de sesión con Google', error)
    }
  }

  const handleGoogleLoginFailure = () => {
    console.log('Login de Google fallido')
  }

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
          <GoogleLogin
            onSuccess={handleGoogleLoginSuccess}
            onFailure={handleGoogleLoginFailure}
          />
        </div>
      </div>
    </section>
  )
}

export default Login
