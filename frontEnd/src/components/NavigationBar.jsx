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
      <Navbar
        className='d-flex justify-content-between px-4'
        style={{
          borderBottom: '5px solid #eabf3fb1',
        }}
      >
        <Navbar.Brand
          onClick={() => navigate(token ? '/homeUser' : '/')}
          className='d-flex align-items-center'
        >
          <img
            alt='Logo'
            style={{ width: '6rem' }}
            src='/img/logo.png'
            className='logo'
          />
          <NavbarText style={{ color: 'black' }}>
            <h4>Rústico Kids</h4>
          </NavbarText>
        </Navbar.Brand>
        <Nav>
          {token && userData ? (
            <div className='link'>
              <NavLink
                className={setActiveClass}
                to='/homeUser'
              >
                Inicio
              </NavLink>
              <NavLink
                className={setActiveClass}
                to='/aboutUs'
              >
                Conóceme
              </NavLink>
              <NavLink
                className={setActiveClass}
                to={`/user/${userData.id}`}
              >
                Mi Perfil
              </NavLink>
              <NavLink
                className={setActiveClass}
                onClick={logout}
                to='/'
              >
                Cerrar Sesión
              </NavLink>
            </div>
          ) : (
            <div>
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
            </div>
          )}
        </Nav>
      </Navbar>
    </>
  )
}

export default NavigationBar
