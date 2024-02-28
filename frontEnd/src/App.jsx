import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Products from './Views/Products'
import { Routes, Route, Navigate } from 'react-router-dom'
import NavigationBar from './components/NavigationBar'
import { UserContext } from './providers/UserProvider'
import { useContext } from 'react'
import NotFound from './Views/NotFound'
import Home from './Views/Home'
import Register from './Views/Register'
import Login from './Views/Login'

function App() {
  const { token } = useContext(UserContext)

  return (
    <main>
      <NavigationBar />
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
          path='/products'
          element={<Products />}
        />
        <Route
          path='*'
          element={<NotFound />}
        />

        {/* Admin Routes */}

        {/*  <Route
          path='/admin/profile'
          element={token ? <AdminProfile /> : <Navigate to='/login' />}
        />
        <Route
          path='/admin/publications'
          element={token ? <AdminPublications /> : <Navigate to='/login' />}
        />
        <Route
          path='/admin/publications/create'
          element={token ? <CreatePublication /> : <Navigate to='/login' />}
        /> */}
        <Route
          path='/admin/products'
          element={token ? <Products /> : <Navigate to='/login' />}
        />

        {/* User Routes */}

        {/*   <Route
          path='/user/profile'
          element={token ? <UserProfile /> : <Navigate to='/login' />}
        />
        <Route
          path='/user/favorites'
          element={token ? <Favorites /> : <Navigate to='/login' />}
        /> */}
        <Route
          path='/user/products'
          element={token ? <Products /> : <Navigate to='/login' />}
        />
      </Routes>
    </main>
  )
}

export default App
