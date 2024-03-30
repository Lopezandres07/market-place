import React, { useState } from 'react'
import '../../App.css'
import Products from '../../components/Products'
import Aside from '../../components/Aside'

function HomeUser() {
  const [nameFilter, setNameFilter] = useState('')

  const handleFilterByName = (nameFilter) => {
    setNameFilter(nameFilter)
  }

  return (
    <>
      <div className='container'>
        <div className='content'>
          <Aside onFilter={handleFilterByName} />
          <main className='main-content'>
            <Products nameFilter={nameFilter} />
          </main>
        </div>
      </div>
    </>
  )
}

export default HomeUser
