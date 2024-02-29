import React from 'react'
import { useForm } from 'react-hook-form'

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  console.log(errors)

  const onSubmit = handleSubmit((data) => {
    console.log(data)
  })

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor='Nombre'>Nombre</label>
      <input
        type='text'
        {...register('Nombre', {
          required: {
            value: true,
            message: 'Nombre es requerido',
          },
          minLength: {
            value: 2,
            message: 'Nombre debe tener al menos 2 caracteres',
          },
        })}
      />
      {errors.Nombre && <span>{errors.Nombre.message}</span>}

      <label htmlFor='Apellido'>Apellido</label>
      <input
        type='text'
        {...register('Apellido', {
          required: true,
        })}
      />

      <label htmlFor='Email'>Correo</label>
      <input
        type='email'
        {...register('Email', {
          required: {
            value: true,
            message: 'Correo es requerido',
          },
          pattern: {
            value: /[a-z0-9]+@[a-z]+\.[a-z]{2,4}$/,
            message: 'Correo no valido',
          },
        })}
      />

      {errors.Email && <span>{errors.Email.message}</span>}

      <label htmlFor='Password'>contraseña</label>
      <input
        type='password'
        {...register('Contraseña', {
          required: true,
        })}
      />

      <label htmlFor='Password'>Confirmar contraseña</label>
      <input
        type='password'
        {...register('Password', {
          required: true,
        })}
      />

      <label htmlFor='Foto'>Foto de perfil</label>
      <input
        type='file'
        {...register('Foto', {
          required: true,
        })}
      />

      <button>Enviar</button>
    </form>
  )
}

export default Login
