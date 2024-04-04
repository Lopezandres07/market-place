import React from 'react'
import { Link } from 'react-router-dom'
import Gallery from '../components/Gallery'
import '../App.css'

function Home() {
  return (
    <>
      <div className='container'>
        <div className='content'>
          <main className='main-content'>
            <h2>Bienvenido a Rústico Kids</h2>
            <p>
              Descubre una amplia variedad de productos de diferentes
              categorías.
            </p>
            <Gallery />
          </main>
        </div>
      </div>
    </>
  )
}

export default Home
