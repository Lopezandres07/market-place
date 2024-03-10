import { createContext, useEffect, useState } from 'react'
import { jwtDecode } from 'jwt-decode'
import { useNavigate } from 'react-router-dom'

export const UserContext = createContext()

const initialStateToken = localStorage.getItem('token') || null

const UserProvider = ({ children }) => {
  const [token, setToken] = useState(initialStateToken)
  console.log(token)

  const [userData, setUserData] = useState(null)

  useEffect(() => {
    if (token) {
      localStorage.setItem('token', token)
    } else {
      localStorage.removeItem('token')
      setUserData(null)
    }
  }, [token])

  const navigate = useNavigate()

  const createUser = async (data) => {
    const response = await fetch('http://localhost:3000/api/v1/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ data }),
    })

    const user = await response.json()

    return user
  }

  const loginWithEmailAndPassword = async (data) => {
    const response = await fetch('http://localhost:3000/api/v1/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ data }),
    })

    const user = await response.json()
    console.log(user)

    setToken(user.token || null)

    if (user.token && user.userData) {
      if (user.userData.role_id === 1) {
        navigate('/admin/products')
      } else if (user.userData.role_id === 2) {
        navigate('/homeUser')
      } else {
        navigate('/')
      }
    }

    if (response && response.token) {
    }

    return user
  }

  const loginWithGoogle = async (user) => {
    const data = jwtDecode(user)

    const response = await fetch('http://localhost:3000/api/v1/googleLogin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ data }),
    })

    const googleUser = await response.json()
    console.log(googleUser)

    setToken(googleUser.token || null)

    if (googleUser.token && googleUser.userData) {
      if (googleUser.userData.role_id === 1) {
        navigate('/admin/products')
      } else if (googleUser.userData.role_id === 2) {
        navigate('/homeUser')
      } else {
        navigate('/')
      }
    }

    return googleUser
  }

  const logout = () => {
    setToken(null)
    setUserData(null)
  }

  const getUserData = async (userId) => {
    const response = await fetch(`http://localhost:5000/users/${userId}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    })

    const user = await response.json()
    setUserData(user)
  }

  const updateUserProfile = async (userId, newData) => {
    const response = await fetch(`http://localhost:5000/users/${userId}`, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newData),
    })

    const updateUser = await response.json()
    setUserData(updateUser)
  }

  return (
    <UserContext.Provider
      value={{
        createUser,
        loginWithEmailAndPassword,
        loginWithGoogle,
        token,
        logout,
        updateUserProfile,
        getUserData,
        userData,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider
