import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import UserProvider from "./providers/UserProvider.jsx";
import { FavoritesProvider } from "./providers/FavoritesContext.jsx";
import { ProductsProvider } from "./providers/productsContext.jsx";
import { GoogleOAuthProvider } from "@react-oauth/google";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
        <UserProvider>
          <ProductsProvider>
            <FavoritesProvider>
              <App />
            </FavoritesProvider>
          </ProductsProvider>
        </UserProvider>
      </GoogleOAuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
