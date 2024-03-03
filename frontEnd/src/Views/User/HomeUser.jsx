import React from 'react'
import { Link } from 'react-router-dom'
import '../../App.css'
import Products from '../../components/Products'

function HomeUser() {
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
          <Products />
        </main>
      </div>
    </div>
  )
}

export default HomeUser
