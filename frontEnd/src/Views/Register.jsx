import React from 'react'
import { useForm } from 'react-hook-form'

const Register = () => {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm()

  console.log(errors)

  const onSubmit = handleSubmit((data) => {
    console.log(data)

    alert('Usuario registrado con éxito')

    reset()
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
          required: {
            value: true,
            message: 'Apellido es requerido',
          },
          minLength: {
            value: 2,
            message: 'Apellido debe tener al menos 2 caracteres',
          },
        })}
      />

      {errors.Apellido && <span>{errors.Apellido.message}</span>}

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

      <label htmlFor='Password'>Contraseña</label>
      <input
        type='password'
        {...register('Contraseña', {
          required: {
            value: true,
            message: 'Contraseña es requerida',
          },
          minLength: {
            value: 6,
            message: 'Contraseña debe tener al menos 6 caracteres',
          },
        })}
      />

      {errors.Contraseña && <span>{errors.Contraseña.message}</span>}

      <label htmlFor='Password'>Confirmar contraseña</label>
      <input
        type='password'
        {...register('confirmarContraseña', {
          required: {
            value: true,
            message: 'Contraseña es requerida',
          },
          validate: (value) =>
            value === watch('Contraseña') || 'Las contraseñas no coinciden',
        })}
      />

      {errors.confirmarContraseña && (
        <span>{errors.confirmarContraseña.message}</span>
      )}

      <label htmlFor='Foto'>Foto de perfil</label>
      <input
        type='file'
        onChange={(e) => {
          setValue('avatarURL', e.target.files[0].name)
        }}
      />

      <button className='mt-2'>Enviar</button>
    </form>
  )
}

export default Register
