import React from "react";
import { Link } from "react-router-dom";
import Gallery from "../components/Gallery";
import "../App.css";
import NavigationBar from "../components/NavigationBar";

function Home() {
  return (
    <>
      <NavigationBar />
      <div className="container">
        <div className="content">
          <main className="main-content">
            <h2>Bienvenido a Rústico Kids</h2>
            <p>
              Descubre una amplia variedad de productos de diferentes
              categorías.
            </p>
            <Gallery />
            <p>
              ¿Ya tienes una cuenta?{" "}
              <Link to="/login" className="link">
                Inicia sesión
              </Link>
            </p>
            <p>
              ¿Eres nuevo aquí?{" "}
              <Link to="/register" className="link">
                Regístrate
              </Link>
            </p>
          </main>
        </div>
      </div>
    </>
  );
}

export default Home;
