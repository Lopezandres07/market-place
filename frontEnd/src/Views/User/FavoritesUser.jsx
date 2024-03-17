import React from 'react'
import '../../App.css'
import Favorites from '../../components/Favorites'
import NavigationBar from '../../components/NavigationBar'

function FavoritesUser() {
  return (
    <>
      <NavigationBar />
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
