import { createContext, useEffect, useState } from 'react'

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

  const createUser = async (data) => {
    console.log(data)

    const response = await fetch('http://localhost:3000/api/v1/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ data }),
    })

    const user = await response.json()
    console.log(user)

    return user
  }

  const loginWithEmailAndPassword = async (data) => {
    console.log(data)

    const response = await fetch('http://localhost:3000/api/v1/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ data }),
    })

    const user = await response.json()
    console.log(user)

    setToken(user.token || null)

    return user
  }

  const googleLoginSuccess = async (response) => {
    console.log('Google login success', response)
    const { tokenId } = response
    console.log(tokenId)

    const backendResponse = await fetch(
      'http://localhost:3000/api/v1/googleLogin',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ tokenId }),
      }
    )

    const backendData = await backendResponse.json()
    console.log(backendData)
  }

  const googleLoginFailure = (error) => {
    console.error('Google login failure', error)
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
        loginWithEmailAndPassword,
        googleLoginSuccess,
        googleLoginFailure,
        token,
        logout,
        createUser,
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
