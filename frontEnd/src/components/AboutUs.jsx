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
    <div>
      <h2>Acerca de mi emprendimiento</h2>
      <div>
        <section>
          <img
            src={vendedorData.avatarurl}
            alt='Vendedor'
          />
          <h3>
            {vendedorData.firstName} {vendedorData.lastName}
          </h3>
          <p>Redes sociales:</p>
          <ul>
            <li>Instagram:</li>
            <a
              href='https://www.instagram.com/rustico.kids/?next=%2F'
              target='_blank'
              rel='noopener noreferrer'
            >
              @rustico.kids
            </a>
          </ul>
        </section>
        <article>
          <h4>Sobre Rústico Kids:</h4>
          <p>
            Rústico Kids es tu tienda en línea especializada en ofrecer
            productos de calidad para la diversión y seguridad de los más
            pequeños. Nuestros columpios para bebés son diseñados con materiales
            duraderos y seguros, pensados para brindar momentos de alegría y
            entretenimiento a tu hijo mientras desarrolla habilidades motoras y
            de coordinación.
          </p>
          <h4>Sobre el Vendedor:</h4>
          <p>
            {vendedorData.firstName} {vendedorData.lastName}, el fundador de
            Rústico Kids, es un apasionado por el cuidado y el bienestar de los
            niños. Con años de experiencia en el diseño de productos infantiles,
            se dedica a ofrecer soluciones innovadoras que satisfacen las
            necesidades de los padres preocupados por la diversión y la
            seguridad de sus hijos.
          </p>
          <h4>Motivación:</h4>
          <p>
            La motivación detrás de nuestros columpios para bebés surge de la
            creencia de que cada momento de juego es una oportunidad para el
            crecimiento y la felicidad de los niños. Queremos fomentar la
            exploración, la diversión y el aprendizaje a través de nuestros
            productos, contribuyendo así al desarrollo integral de los más
            pequeños de la casa.
          </p>
        </article>
        {isAdmin && (
          <Button
            variant='primary'
            onClick={handleEdit}
          >
            Editar
          </Button>
        )}
      </div>
    </div>
  )
}

export default AboutUs
