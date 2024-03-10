import React from 'react'
import { useGoogleLogin } from 'react-google-login'

const GoogleLoginButton = ({ onSuccess, onFailure }) => {
  const googleId =
    '532934723345-md1l4accaej51e91i140vcqbegrp7bv0.apps.googleusercontent.com'

  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId: googleId,
    isSignedIn: true,
  })

  return (
    <>
      <button
        onClick={signIn}
        className='google-login-button'
      >
        <i class='fa-brands fa-google'></i>
      </button>
    </>
  )
}

export default GoogleLoginButton
