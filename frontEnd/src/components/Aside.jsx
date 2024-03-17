import React, { useState } from 'react'

const Aside = ({ onFilter }) => {
  const [nameFilter, setNameFilter] = useState('')

  const handleNameFilterChange = (event) => {
    const newNameFilter = event.target.value
    setNameFilter(newNameFilter)
    onFilter(newNameFilter)
  }

  return (
    <aside className='sidebar'>
      <h2>Buscar Por Nombre </h2>
      <input
        type='text'
        placeholder='Nombre del Producto'
        value={nameFilter}
        onChange={handleNameFilterChange}
      />
    </aside>
  )
}

export default Aside
