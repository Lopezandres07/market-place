import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { UserContext } from '../../providers/UserProvider'
import NavigationBar from '../../components/NavigationBar'

const ProfilePage = () => {
  const { updateUserProfile, userData } = useContext(UserContext)
  console.log(userData)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    const response = await updateUserProfile(data)
    if (response.success) {
      reset()
      alert('Perfil actualizado correctamente')
    } else {
      alert('Error al actualizar el perfil')
    }
  }

  return (
    <>
      <NavigationBar />
      <div>
        <h2>Mi perfil</h2>
        {userData ? (
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <label>Nombre</label>
              <input
                type='text'
                {...register('firstName')}
                defaultValue={userData.firstName}
              />
              {errors.firstName && <span>{errors.firstName.message}</span>}

              <label>Apellido</label>
              <input
                type='text'
                {...register('lastName')}
                defaultValue={userData.lastName}
              />
              {errors.lastName && <span>{errors.lastName.message}</span>}

              <label>Correo electrónico</label>
              <input
                type='email'
                {...register('email')}
                defaultValue={userData.email}
              />
              {errors.email && <span>{errors.email.message}</span>}

              <label>Foto de perfil</label>
              <input
                type='text'
                {...register('avatarURL')}
                defaultValue={userData.avatarURL}
              />
              {errors.avatarURL && <span>{errors.avatarURL.message}</span>}

              <label>Nueva contraseña (opcional)</label>
              <input
                type='password'
                {...register('password', { minLength: 6 })}
              />
              {errors.newPassword && <span>{errors.newPassword.message}</span>}

              <button type='submit'>Guardar cambios</button>
            </form>
          </div>
        ) : (
          <p>Cargando datos del usuario...</p>
        )}
      </div>
    </>
  )
}

export default ProfilePage
