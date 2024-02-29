import React from 'react'
import { useForm } from 'react-hook-form'

const Login = () => {
  const { register, handleSubmit } = useForm()
  const onSubmit = handleSubmit((data) => {
    console.log(data)
  })

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor='Nombre'>Nombre</label>
      <input
        type='text'
        {...register('Nombre')}
      />

      <label htmlFor='Apellido'>Apellido</label>
      <input
        type='text'
        {...register('Apellido')}
      />

      <label htmlFor='Email'>Correo</label>
      <input
        type='email'
        {...register('Email')}
      />

      <label htmlFor='Password'>contraseña</label>
      <input
        type='password'
        {...register('Contraseña')}
      />

      <label htmlFor='Password'>Confirmar contraseña</label>
      <input
        type='password'
        {...register('Password')}
      />

      <label htmlFor='Foto'>Foto de perfil</label>
      <input
        type='file'
        {...register('Foto')}
      />

      <button>Enviar</button>
    </form>
  )
}

export default Login
