import { Outlet } from 'react-router-dom'
// import { useState } from 'react'
import Films from './components/Films'
import './App.css'



function App() {
  return (
    <div>
      <h1>hello</h1>
      <Outlet/>
    </div>
  )

}

export default App
