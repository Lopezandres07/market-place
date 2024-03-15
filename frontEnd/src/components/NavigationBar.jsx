import { useContext } from 'react'
import { Nav, Navbar, NavbarText } from 'react-bootstrap'
import { NavLink, useNavigate } from 'react-router-dom'
import { UserContext } from '../providers/UserProvider'

const setActiveClass = ({ isActive }) => (isActive ? 'active' : 'noActive')

const NavigationBar = () => {
  const { token, logout, userData } = useContext(UserContext)
  console.log(token)
  console.log(userData)

  const navigate = useNavigate()

  return (
    <>
      <Navbar
        className='d-flex justify-content-between px-4 py-0 '
        style={{
          backgroundColor: 'white',
          borderBottom: '5px solid #eabf3fb1',
        }}
      >
        <Navbar.Brand
          onClick={() => navigate('/')}
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
          <div>
            {token && userData ? (
              <>
                <section className='navLink'>
                  <NavLink
                    className={setActiveClass}
                    to='/homeUser'
                  >
                    Inicio
                  </NavLink>
                </section>
                <section className='navLink'>
                  <NavLink
                    className={setActiveClass}
                    onClick={logout}
                    to={`/user/${userData.id}`}
                  >
                    Mi Perfil
                  </NavLink>
                </section>
                <section className='navLink'>
                  <NavLink
                    className={setActiveClass}
                    onClick={logout}
                    to='/'
                  >
                    Cerrar Sesión
                  </NavLink>
                </section>
              </>
            ) : (
              <>
                <section className='navLink'>
                  <NavLink
                    to='/login'
                    className={setActiveClass}
                  >
                    Iniciar Sesión
                  </NavLink>
                </section>
                <section className='navLink'>
                  <NavLink
                    to='/register'
                    className={setActiveClass}
                  >
                    Registrarse
                  </NavLink>
                </section>
              </>
            )}
          </div>
        </Nav>
      </Navbar>
    </>
  )
}

export default NavigationBar
