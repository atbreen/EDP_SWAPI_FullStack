import { useState } from 'react'
import { Outlet } from 'react-router-dom'

// import { useState } from 'react'
import './App.css'

export default function App() {
  return (
    <div>
      <h1>hello</h1>
      <Outlet />
    </div>
  )

}
