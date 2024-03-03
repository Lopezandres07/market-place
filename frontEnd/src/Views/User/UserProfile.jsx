import React from 'react'
import { Link } from 'react-router-dom'
import '../../App.css'

function FavoritesUser() {
  return (
    <div className='container'>
      <div className='content'>
        <aside className='sidebar'>
          <h2>Filtrar por categorías</h2>
          <ul>
            <li>
              <Link
                to=''
                className='link'
              >
                Crear publicación
              </Link>
            </li>
            <li>
              <Link
                to='/category/tecnologia'
                className='link'
              >
                Tecnología
              </Link>
            </li>
            <li>
              <Link
                to='/category/hogar'
                className='link'
              >
                Hogar
              </Link>
            </li>
            {/* Agrega más categorías según sea necesario */}
          </ul>
        </aside>
        <main className='main-content'>{/* <COMPONENTE /> */}</main>
      </div>
    </div>
  )
}

export default FavoritesUser
