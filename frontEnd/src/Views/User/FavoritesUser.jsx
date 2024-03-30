import React from 'react'
import '../../App.css'
import Favorites from '../../components/Favorites'

function FavoritesUser() {
  return (
    <>
      <div className='container'>
        <div className='content'>
          <main className='main-content'>
            <Favorites />
          </main>
        </div>
      </div>
    </>
  )
}

export default FavoritesUser
