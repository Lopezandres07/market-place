import React from "react";
import { Link } from "react-router-dom";
import Gallery from "../components/Gallery";
import "../App.css";

function Home() {
  return (
    <div className="container">
      <div className="content">
        <main className="main-content">
          <h2>Bienvenido a MarketPlace</h2>
          <p>
            Descubre una amplia variedad de productos de diferentes categorías.
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
      <footer className="footer">
        <div className="social-links">
          <a
            href="https://www.instagram.com/rustico.kids/?next=%2F"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/instagram-icon.png" alt="Instagram" />
          </a>
          {/* Agrega más enlaces según sea necesario */}
        </div>
        <p>
          MarketPlace - Todos los derechos reservados &copy;{" "}
          {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
}

export default Home;
