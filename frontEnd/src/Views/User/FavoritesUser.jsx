import React from 'react'
import { Link } from 'react-router-dom'
import '../../App.css'
import Favorites from '../../components/Favorites'

function FavoritesUser() {
  return (
    <div className='container'>
      <div className='content'>
        <aside className='sidebar'>
          <h2>Filtrar por categorías</h2>
          <ul>
            <li>
              <Link
                to='/category/ropa'
                className='link'
              >
                Ropa
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
          </ul>
        </aside>
        <main className='main-content'>
          <Favorites />
        </main>
      </div>
    </div>
  )
}

export default FavoritesUser
