import React, { useEffect } from 'react'
import { useGoogleLogin } from 'react-google-login'
import { gapi } from 'gapi-script'

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
    <button
      onClick={signIn}
      className='google-login-button'
    >
      Iniciar sesión con Google
    </button>
  )
}

export default GoogleLoginButton
