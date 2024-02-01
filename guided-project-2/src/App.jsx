import { Outlet } from 'react-router-dom'
// import { useState } from 'react'
import Films from './components/GetAllFilms'
import './App.css'



function App() {
  return (
    <div>
      <Outlet/>
    </div>
  )

}

export default App
