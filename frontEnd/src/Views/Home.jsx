import React from 'react'

const Home = () => {
  return (
    <div>
      {/* Header */}
      <header className='header'>
        <div className='header-left'>
          {/* Logo */}
          <img
            src='/ruta/a/tu/logo.png'
            alt='Logo'
            className='logo'
          />
          {/* Nombre del marketplace */}
          <h1>Nombre del Marketplace</h1>
        </div>
      </header>

      {/* Contenido principal */}
      <div className='main-content'>
        <h1>Bienvenido a nuestro Marketplace</h1>
        <p>Explora nuestros productos y encuentra lo que necesitas.</p>
      </div>
    </div>
  )
}

export default Home
