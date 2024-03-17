import React, { useState } from 'react'
import '../../App.css'
import Products from '../../components/Products'
import Aside from '../../components/Aside'
import NavigationBar from '../../components/NavigationBar'

function HomeUser() {
  const [nameFilter, setNameFilter] = useState('')

  const handleFilterByName = (nameFilter) => {
    setNameFilter(nameFilter)
  }

  return (
    <>
      <NavigationBar />
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
