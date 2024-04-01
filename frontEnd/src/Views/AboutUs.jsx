import React, { useContext } from 'react'
import { UserContext } from '../providers/UserProvider'

const AboutUs = () => {
  const { userData } = useContext(UserContext)
  const isAdmin = userData && userData.role_id === 1

  const vendedorData = {
    firstName: 'Brayan',
    lastName: 'Vargas',
    avatarurl: '/img/brayan.png',
  }

  return (
    <div className='about'>
      <article>
        <h4>¿Quiénes Somos?</h4>
        <p className='aboutUsParagraph'>
          Rústico Kids es tu tienda en línea especializada en ofrecer productos
          de calidad para la diversión y seguridad de los más pequeños. Nuestros
          columpios para bebés son diseñados con materiales duraderos y seguros,
          pensados para brindar momentos de alegría y entretenimiento a tu hijo
          mientras desarrolla habilidades motoras y de coordinación.
        </p>
        <h4>Acerca de mi:</h4>
        <p className='aboutUsParagraph'>
          Me llamo {vendedorData.firstName} {vendedorData.lastName}, el fundador
          de Rústico Kids, apasionado por el cuidado y el bienestar de los
          niños. Con años de experiencia en el diseño de productos infantiles,
          me dedico a ofrecer soluciones innovadoras que satisfacen las
          necesidades de los padres preocupados por la diversión y la seguridad
          de sus hijos.
        </p>
        <p className='aboutUsParagraph'>
          La motivación detrás de nuestros columpios para bebés surge de la
          creencia de que cada momento de juego es una oportunidad para el
          crecimiento y la felicidad de los niños. Queremos fomentar la
          exploración, la diversión y el aprendizaje a través de nuestros
          productos, contribuyendo así al desarrollo integral de los más
          pequeños de la casa.
        </p>
      </article>
      <section>
        <img
          src={vendedorData.avatarurl}
          alt='Vendedor'
          className='aboutAvatar'
        />
      </section>
      {isAdmin && (
        <Button
          variant='primary'
          onClick={handleEdit}
        >
          Editar
        </Button>
      )}
    </div>
  )
}

export default AboutUs
