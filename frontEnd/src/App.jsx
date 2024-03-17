import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import { UserContext } from './providers/UserProvider'
import { useContext, useState } from 'react'
import NotFound from './Views/NotFound'
import Home from './Views/Home'
import Register from './Views/Register'
import Login from './Views/Login'
import HomeUser from './Views/User/HomeUser'
import FavoritesUser from './Views/User/FavoritesUser'
import AdminCreatePublication from './Views/Admin/AdminCreatePublication'
import HomeAdmin from './Views/Admin/HomeAdmin'
import Footer from './components/Footer'
import ProfileUser from './Views/User/ProfileUser'

function App() {
  const { token, userData } = useContext(UserContext)
  console.log(userData)
  console.log(token)

  const [favorites, setFavorites] = useState([])

  const addToFavorites = (product) => {
    setFavorites([...favorites, product])
  }

  const removeFromFavorites = (product) => {
    setFavorites(favorites.filter((fav) => fav.id !== product.id))
  }

  return (
    <>
      <main>
        <Routes>
          <Route
            path='/'
            element={<Home />}
          />
          <Route
            path='/login'
            element={<Login />}
          />
          <Route
            path='/register'
            element={<Register />}
          />
          <Route
            path='/homeUser'
            element={token ? <HomeUser /> : <Navigate to='/login' />}
          />
          {token && userData ? (
            <Route
              path={`/user/:id`}
              element={<ProfileUser />}
            />
          ) : (
            <Route
              path='/login'
              element={<Login />}
            />
          )}
          <Route
            path='/favoritesUser'
            element={
              token ? (
                <FavoritesUser
                  favorites={favorites}
                  removeFromFavorites={removeFromFavorites}
                />
              ) : (
                <Navigate to='/login' />
              )
            }
          />
          <Route
            path='/admin/publications/create'
            element={
              token ? (
                userData && userData.role_id == 1 ? (
                  <AdminCreatePublication />
                ) : (
                  <Navigate to='/' />
                )
              ) : (
                <Navigate to='/login' />
              )
            }
          />
          <Route
            path='/admin/products'
            element={
              token ? (
                userData && userData.role_id == 1 ? (
                  <HomeAdmin />
                ) : (
                  <Navigate to='/' />
                )
              ) : (
                <Navigate to='/login' />
              )
            }
          />
          <Route
            path='*'
            element={<NotFound />}
          />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
