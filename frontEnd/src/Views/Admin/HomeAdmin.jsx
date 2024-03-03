import React from "react";
import { Link } from "react-router-dom";
import ProductsAdmin from "../../components/ProductsAdmin";
import "../../App.css";

function HomeAdmin() {
  return (
    <div className="container">
      <div className="content">
        <aside className="sidebar">
          <h2>Menu</h2>
          <ul>
            <li>
              <Link to="/admin/home" className="link">
                Mis publicaciones.
              </Link>
            </li>
            <li>
              <Link to="/admin/publications/create" className="link">
                Crear publicación.
              </Link>
            </li>
            <li>
              <Link to="/admin/contact" className="link">
                Datos de contacto.
              </Link>
            </li>
          </ul>
        </aside>
        <main className="main-content">
          <ProductsAdmin />
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
        </div>
        <p>
          MarketPlace - Todos los derechos reservados &copy;{" "}
          {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
}

export default HomeAdmin;
