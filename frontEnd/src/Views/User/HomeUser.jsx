import React, { useState } from "react";
import "../../App.css";
import Products from "../../components/Products";
import Aside from "../../components/Aside";
import NavigationBar from "../../components/NavigationBar";

function HomeUser() {
  const [nameFilter, setNameFilter] = useState(""); // Estado para almacenar el filtro por nombre

  // Función para manejar el cambio en el filtro por nombre
  const handleFilterByName = (nameFilter) => {
    setNameFilter(nameFilter);
  };

  return (
    <>
      <NavigationBar />
      <div className="container">
        <div className="content">
          <Aside onFilter={handleFilterByName} />{" "}
          {/* Pasamos la función de filtro por nombre al componente Aside */}
          <main className="main-content">
            <Products nameFilter={nameFilter} />{" "}
            {/* Pasamos el filtro por nombre al componente Products */}
          </main>
        </div>
      </div>
    </>
  );
}

export default HomeUser;
