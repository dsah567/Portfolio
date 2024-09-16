import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {createBrowserRouter,createRoutesFromElements,Route,RouterProvider} from "react-router-dom"

import Header from './components/Header.jsx'
import Error from './components/Error.jsx'

const route = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Header/>} errorElement={<Error/>}>
  </Route>
))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={route}/>
  </React.StrictMode>,
)
