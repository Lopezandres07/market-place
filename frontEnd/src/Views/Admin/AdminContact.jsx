import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";

function HomeAdmin() {
  return (
    <div className="container">
      <div className="content">
        <aside className="sidebar">
          <h2>Menu</h2>
          <ul>
            <li>
              <Link to="/admin/products" className="link">
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
        <main className="main-content"></main>
      </div>
    </div>
  );
}

export default HomeAdmin;
