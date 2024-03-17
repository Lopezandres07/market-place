import React from 'react'
import { Link } from 'react-router-dom'
import '../../App.css'
import CreatePublication from '../../components/CreatePublication'
import NavigationBarAdmin from '../../components/NavigationBarAdmin'

function AdminCreatePublication() {
  return (
    <>
      <NavigationBarAdmin />
      <div className='container'>
        <div className='content'>
          <aside className='sidebar'>
            <h2>Menu</h2>
            <ul>
              <li>
                <Link
                  to='/admin/products'
                  className='link'
                >
                  Mis publicaciones.
                </Link>
              </li>
              <li>
                <Link
                  to='/admin/publications/create'
                  className='link'
                >
                  Crear publicación.
                </Link>
              </li>
            </ul>
          </aside>
          <main className='main-content'>
            <CreatePublication />
          </main>
        </div>
      </div>
    </>
  )
}

export default AdminCreatePublication
