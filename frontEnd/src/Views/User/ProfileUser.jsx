import React, { useContext, useState } from 'react'
import { UserContext } from '../../providers/UserProvider'
import NavigationBar from '../../components/NavigationBar'
import { Modal, Button, Form, FormGroup } from 'react-bootstrap'
import { useForm } from 'react-hook-form'

const ProfilePage = () => {
  const { updateUserProfile, userData } = useContext(UserContext)
  const [showModal, setShowModal] = useState(false)
  console.log(userData)

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm()

  const handleCloseModal = () => setShowModal(false)
  const handleShowModal = () => setShowModal(true)

  const onSubmit = async (data) => {
    console.log(data)

    try {
      const response = await updateUserProfile(data) // Enviar datos al backend
      if (response.success) {
        alert('Perfil actualizado correctamente')
        handleCloseModal()
      } else {
        alert('Error al actualizar el perfil')
      }
    } catch (error) {
      console.error('Error al actualizar el perfil:', error)
      alert('Error al actualizar el perfil')
    }
  }

  return (
    <>
      <NavigationBar />
      <section className='login'>
        <h2>Mi perfil</h2>
        {userData ? (
          <div>
            <Form>
              <FormGroup controlId='avatarURL'>
                <img
                  src={userData.avatarurl}
                  alt='Foto de perfil'
                  style={{ width: '100px', height: '100px' }}
                />
              </FormGroup>

              <Form.Group controlId='firstName'>
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type='text'
                  defaultValue={userData.firstname}
                  disabled
                />
              </Form.Group>

              <Form.Group controlId='lastName'>
                <Form.Label>Apellido</Form.Label>
                <Form.Control
                  type='text'
                  defaultValue={userData.lastname}
                  disabled
                />
              </Form.Group>

              <Form.Group controlId='email'>
                <Form.Label>Correo electrónico</Form.Label>
                <Form.Control
                  type='email'
                  defaultValue={userData.email}
                  disabled
                />
              </Form.Group>
              <section>
                <Button
                  id='btn-detalles'
                  onClick={handleShowModal}
                >
                  Editar perfil
                </Button>
              </section>
            </Form>

            {/* Modal para editar perfil */}
            <Modal
              show={showModal}
              onHide={handleCloseModal}
              className='modal'
            >
              <Modal.Header closeButton>
                <Modal.Title>Editar perfil</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form onSubmit={handleSubmit(onSubmit)}>
                  <Form.Group>
                    <Form.Label>Foto de perfil</Form.Label>
                    <Form.Control
                      type='file'
                      {...register('avatarURL')}
                    />
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                      type='text'
                      {...register('firstName')}
                    />
                    {errors.firstName && (
                      <span>{errors.firstName.message}</span>
                    )}
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Apellido</Form.Label>
                    <Form.Control
                      type='text'
                      {...register('lastName')}
                    />
                    {errors.lastName && <span>{errors.lastName.message}</span>}
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Correo electrónico</Form.Label>
                    <Form.Control
                      type='email'
                      {...register('email')}
                    />
                    {errors.email && <span>{errors.email.message}</span>}
                  </Form.Group>

                  <Form.Group controlId='password'>
                    <Form.Label>Nueva contraseña</Form.Label>
                    <Form.Control
                      type='password'
                      {...register('password', { minLength: 6 })}
                    />
                    {errors.password && <span>{errors.password.message}</span>}
                  </Form.Group>

                  <Form.Group controlId='confirmPassword'>
                    <Form.Label>Confirmar nueva contraseña</Form.Label>
                    <Form.Control
                      type='password'
                      {...register('confirmPassword', {
                        validate: (value) =>
                          value === getValues('password') ||
                          'Las contraseñas no coinciden',
                      })}
                    />
                    {errors.confirmPassword && (
                      <span>{errors.confirmPassword.message}</span>
                    )}
                  </Form.Group>
                  <section className='d-flex'>
                    {' '}
                    <Button
                      id='btn-detalles'
                      onClick={handleCloseModal}
                    >
                      Cancelar
                    </Button>
                    <Button
                      id='btn-detalles'
                      type='submit'
                    >
                      Guardar cambios
                    </Button>
                  </section>
                </Form>
              </Modal.Body>
            </Modal>
          </div>
        ) : (
          <p>Cargando datos del usuario...</p>
        )}
      </section>
    </>
  )
}

export default ProfilePage
