import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import UserProvider from "./providers/UserProvider.jsx";
import { FavoritesProvider } from "./providers/FavoritesContext.jsx";
import { ProductsProvider } from "./providers/productsContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ProductsProvider>
      <FavoritesProvider>
        <UserProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </UserProvider>
      </FavoritesProvider>
    </ProductsProvider>
  </React.StrictMode>
);
