import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import UserProvider from './providers/UserProvider.jsx'
import { FavoritesProvider } from './providers/FavoritesContext.jsx'
import { ProductsProvider } from './providers/productsContext.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId='532934723345-md1l4accaej51e91i140vcqbegrp7bv0.apps.googleusercontent.com'>
      <ProductsProvider>
        <FavoritesProvider>
          <UserProvider>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </UserProvider>
        </FavoritesProvider>
      </ProductsProvider>
    </GoogleOAuthProvider>
  </React.StrictMode>
)
