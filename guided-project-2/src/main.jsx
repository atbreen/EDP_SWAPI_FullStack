import React from 'react'
import ReactDOM from 'react-dom/client'
import {  RouterProvider } from 'react-router-dom'
import Router from './Routers'
// import App from './App.jsx'
// import './index.css'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={Router} /> 
  </React.StrictMode>,
)


