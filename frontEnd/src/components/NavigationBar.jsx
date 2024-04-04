import { useContext } from 'react'
import { Nav, Navbar, NavbarText } from 'react-bootstrap'
import { NavLink, useNavigate } from 'react-router-dom'
import { UserContext } from '../providers/UserProvider'

const setActiveClass = ({ isActive }) => (isActive ? 'active' : 'noActive')

const NavigationBar = () => {
  const { token, logout, userData } = useContext(UserContext)

  const navigate = useNavigate()

  return (
    <>
      <Navbar className='navigation px-4 py-0 justify-content-between align-items-center'>
        <Navbar.Brand onClick={() => navigate(token ? '/homeUser' : '/')}>
          <img
            alt='Logo'
            src='/img/newLogo.png'
            className='logo'
          />
        </Navbar.Brand>
        {token && userData ? (
          <Nav className='link ml-auto'>
            <NavLink
              className={setActiveClass}
              to='/homeUser'
            >
              Inicio
            </NavLink>
            <NavLink
              className={setActiveClass}
              to={`/user/${userData.id}`}
            >
              Mi Perfil
            </NavLink>
            <NavLink
              className={setActiveClass}
              to='/favoritesUser'
            >
              Favoritos
            </NavLink>
            <NavLink
              className={setActiveClass}
              onClick={logout}
              to='/'
            >
              Cerrar Sesión
            </NavLink>
          </Nav>
        ) : (
          <Nav className='link'>
            <NavLink
              className={setActiveClass}
              to='/aboutUs'
            >
              Conóceme
            </NavLink>
            <NavLink
              to='/login'
              className={setActiveClass}
            >
              Iniciar Sesión
            </NavLink>
            <NavLink
              to='/register'
              className={setActiveClass}
            >
              Registrarse
            </NavLink>
          </Nav>
        )}
      </Navbar>
    </>
  )
}

export default NavigationBar
