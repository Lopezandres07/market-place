import React, { useState } from "react";
import { Link } from "react-router-dom";

const Aside = ({ onFilter }) => {
  const [nameFilter, setNameFilter] = useState(""); // Estado para almacenar el filtro por nombre

  // Función para manejar el cambio en el filtro por nombre
  const handleNameFilterChange = (event) => {
    const newNameFilter = event.target.value;
    setNameFilter(newNameFilter);
    onFilter(newNameFilter); // Llamamos a la función de filtro pasando el nuevo valor del filtro por nombre
  };

  return (
    <aside className="sidebar">
      <h2>Buscar Por Nombre </h2>
      <input
        type="text"
        placeholder="Nombre del Producto"
        value={nameFilter}
        onChange={handleNameFilterChange}
      />
    </aside>
  );
};

export default Aside;
