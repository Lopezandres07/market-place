import { useContext } from 'react'
import { Nav, Navbar, NavbarText } from 'react-bootstrap'
import { NavLink, useNavigate } from 'react-router-dom'
import { UserContext } from '../providers/UserProvider'

const setActiveClass = ({ isActive }) => (isActive ? 'active' : 'noActive')

const NavigationBar = () => {
  const { token, logout } = useContext(UserContext)
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
            <h4>Market Place</h4>
          </NavbarText>
        </Navbar.Brand>
        <Nav>
          <div>
            {token ? (
              <>
                <section className='navLink'>
                  <NavLink
                    className={setActiveClass}
                    onClick={logout}
                    to='/'
                  >
                    Inicio
                  </NavLink>
                </section>
                <section className='navLink'>
                  <NavLink
                    to={`/user/profile/${userId}`}
                    className={setActiveClass}
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
                <section className='navLink'>
                  <NavLink
                    to='/UserProfile'
                    className={setActiveClass}
                  >
                    Mi Perfil
                  </NavLink>
                </section>
              </>
            )}
          </div>
        </Nav>
      </Navbar>
    </>
    /* <div className='navbar navbar-dark bg-dark'>
      <div className='container'>
        <span className='navbar-brand'>Market Place</span>
        <div>
          {token ? (
            <>
              <Link
                to='/'
                className='btn btn-sm btn-outline-light me-2'
              >
                Home
              </Link>
              <button
                className='btn btn-sm btn-outline-danger'
                onClick={logout}
              >
                logout
              </button>
            </>
          ) : (
            <>
              <Link
                to='/login'
                className='btn btn-sm btn-outline-light me-2'
              >
                Login
              </Link>
              <Link
                to='/register'
                className='btn btn-sm btn-outline-light'
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </div> */
  )
}

export default NavigationBar
