import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Navigate } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import { UserContext } from "./providers/UserProvider";
import { useContext, useState } from "react";
import NotFound from "./Views/NotFound";
import Home from "./Views/Home";
import Register from "./Views/Register";
import Login from "./Views/Login";
import Products from "./Views/Products";
import Favorites from "./Views/Favorites";

function App() {
  const { token } = useContext(UserContext);

  // Estado para almacenar la lista de favoritos
  const [favorites, setFavorites] = useState([]);

  // Función para agregar un producto a la lista de favoritos
  const addToFavorites = (product) => {
    setFavorites([...favorites, product]);
  };

  // Función para eliminar un producto de la lista de favoritos
  const removeFromFavorites = (product) => {
    setFavorites(favorites.filter((fav) => fav.id !== product.id));
  };

  return (
    <main>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/products" element={<Products />} />
        <Route path="*" element={<NotFound />} />
        <Route
          path="/favorites"
          element={
            <Favorites
              favorites={favorites}
              removeFromFavorites={removeFromFavorites}
            />
          }
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
        /> 
        <Route
          path="/admin/products"
          element={token ? <Products /> : <Navigate to="/login" />}
        />*/}

        {/* User Routes */}

        {/*   <Route
          path='/user/profile'
          element={token ? <UserProfile /> : <Navigate to='/login' />}
        />
        <Route
          path='/user/favorites'
          element={token ? <Favorites /> : <Navigate to='/login' />}
        /> 
        <Route
          path="/user/products"
          element={token ? <Products /> : <Navigate to="/login" />}
        />*/}
      </Routes>
    </main>
  );
}

export default App;
