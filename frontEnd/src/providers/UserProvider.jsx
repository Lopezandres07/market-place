import React, { createContext, useEffect, useState } from 'react'
import { jwtDecode } from 'jwt-decode'
import { useNavigate } from 'react-router-dom'

export const UserContext = createContext()

const initialStateToken = localStorage.getItem('token') || null
const initialStateUserData =
  JSON.parse(localStorage.getItem('userData')) || null

const UserProvider = ({ children }) => {
  const [token, setToken] = useState(initialStateToken)
  const [userData, setUserData] = useState(initialStateUserData)
  const navigate = useNavigate()

  useEffect(() => {
    if (token) {
      localStorage.setItem('token', token)
    } else {
      localStorage.removeItem('token')
    }

    if (userData) {
      localStorage.setItem('userData', JSON.stringify(userData))
    } else {
      localStorage.removeItem('userData')
    }
  }, [token, userData])

  const createUser = async (data) => {
    console.log('new user: ', data)

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

    setToken(user.token)
    setUserData(user.userData)

    if (user.userData) {
      navigate(user.userData.role_id === 1 ? '/admin/products' : '/homeUser')
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

    setToken(googleUser.token)
    setUserData(googleUser.userData)

    if (googleUser.userData) {
      navigate(
        googleUser.userData.role_id === 1 ? '/admin/products' : '/homeUser'
      )
    }

    return googleUser
  }

  const updateUserProfile = async (newData) => {
    const response = await fetch(
      `http://localhost:3000/api/v1/user/${userData.id}`,
      {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ newData }),
      }
    )
    const updateUser = await response.json()

    console.log('provider: ', updateUser)

    setUserData(updateUser)

    return updateUser
  }

  const logout = () => {
    setToken(null)
    setUserData(null)
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
        userData,
        setUserData,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider
