import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { UserContext } from '../providers/UserProvider'

const Login = () => {
  const { loginWithEmailAndPassword } = useContext(UserContext)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const onSubmit = handleSubmit(async (data) => {
    const { email, password } = data
    console.log(email, password)

    const response = await loginWithEmailAndPassword(email, password)

    console.log(response)

    reset()
  })

  return (
    <>
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

        <button className='mt-2'>Enviar</button>
      </form>
    </>
  )
}

export default Login
