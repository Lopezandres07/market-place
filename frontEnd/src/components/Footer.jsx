import React from 'react'
import '../App.css'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='social-links'>
        <a
          href='https://www.instagram.com/rustico.kids/?next=%2F'
          target='_blank'
          rel='noopener noreferrer'
        >
          <i className='fab fa-instagram'></i>
        </a>
        <span className='social-text'>Síguenos en redes sociales</span>
        <p>
          Contáctanos al{' '}
          <a
            href='tel:+56971597559'
            className='llamanos'
          >
            +56971597559
          </a>
        </p>
      </div>
      <p>
        Rústico Kids - Todos los derechos reservados &copy;{' '}
        {new Date().getFullYear()}
      </p>
    </footer>
  )
}

export default Footer
