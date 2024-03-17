import React, { useContext, useState } from 'react'
import { UserContext } from '../../providers/UserProvider'
import NavigationBar from '../../components/NavigationBar'
import {
  Modal,
  Button,
  Card,
  ListGroup,
  ListGroupItem,
  Form,
} from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import Swal from 'sweetalert2'

const ProfilePage = () => {
  const { updateUserProfile, userData, setUserData } = useContext(UserContext)
  const [showModal, setShowModal] = useState(false)
  console.log(userData)

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    reset,
  } = useForm()

  const handleCloseModal = () => setShowModal(false)
  const handleShowModal = () => setShowModal(true)

  const onSubmit = async (data) => {
    if (
      data.avatarURL.length == 0 &&
      !data.firstname &&
      !data.lastname &&
      !data.email &&
      !data.password
    ) {
      Swal.fire({
        icon: 'warning',
        title: 'Por favor ingresa algún dato a modificar',
        allowOutsideClick: false,
      })

      reset()
      return
    }

    const newData = { ...data }
    console.log(newData)

    newData.firstname = newData.firstname || userData.firstname
    newData.lastname = newData.lastname || userData.lastname
    newData.email = newData.email || userData.email

    if (!newData.password) {
      delete newData.password
    }

    if (newData.avatarURL.length > 0) {
      const file = data.avatarURL[0]
      const formData = new FormData()
      formData.append('avatar', file)

      try {
        const response = await fetch(
          'http://localhost:3000/api/v1/uploadAvatar',
          {
            method: 'POST',
            body: formData,
          }
        )

        const imageUrl = await response.json()
        newData.avatarURL = imageUrl.fileUrl
      } catch (error) {
        console.error('Error uploading avatar:', error)
      }
    } else {
      newData.avatarURL = userData.avatarurl
    }

    try {
      const response = await updateUserProfile(newData)
      console.log('Respuesta: ', response)

      if (response.success) {
        setUserData(response.userUpdated)
        Swal.fire({
          icon: 'success',
          title: 'Usuario actualizado con éxito',
          allowOutsideClick: false,
        })
        reset()
        handleCloseModal()
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error al actualizar usuario',
          allowOutsideClick: false,
        })
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
          <div className='d-flex justify-content-center'>
            <Card>
              <Card.Img
                src={userData.avatarurl}
                style={{ width: '200px', height: '180px' }}
                className='mx-auto'
              />
              <Card.Body>
                <Card.Title>
                  {userData.firstname} {userData.lastname}
                </Card.Title>
              </Card.Body>
              <ListGroup className='list-group-flush'>
                <ListGroupItem>Email: {userData.email}</ListGroupItem>
              </ListGroup>
              <Card.Body>
                <Button
                  id='btn-detalles'
                  onClick={handleShowModal}
                >
                  Editar perfil
                </Button>
              </Card.Body>
            </Card>

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
                      {...register('firstname')}
                    />
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Apellido</Form.Label>
                    <Form.Control
                      type='text'
                      {...register('lastname')}
                    />
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Correo electrónico</Form.Label>
                    <Form.Control
                      type='email'
                      {...register('email')}
                    />
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
                    <Button
                      id='btn-detalles'
                      onClick={handleCloseModal}
                    >
                      Cancelar
                    </Button>
                    <Button
                      id='btnGuardar'
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
