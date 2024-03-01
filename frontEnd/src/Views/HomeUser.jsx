import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import Products from "../components/Products";

function HomeUser() {
  return (
    <div className="container">
      <header className="header">
        <h1>MarketPlace</h1>
      </header>
      <div className="content">
        <aside className="sidebar">
          <h2>Filtrar por categorías</h2>
          <ul>
            <li>
              <Link to="/category/ropa" className="link">
                Ropa
              </Link>
            </li>
            <li>
              <Link to="/category/tecnologia" className="link">
                Tecnología
              </Link>
            </li>
            <li>
              <Link to="/category/hogar" className="link">
                Hogar
              </Link>
            </li>
            {/* Agrega más categorías según sea necesario */}
          </ul>
        </aside>
        <main className="main-content">
          <Products />
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

export default HomeUser;
