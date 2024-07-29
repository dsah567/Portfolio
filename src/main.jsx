import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {createBrowserRouter,createRoutesFromElements,Route,RouterProvider} from "react-router-dom"

import Header from './components/Header.jsx'
import Home from './components/Home.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'
import Error from './components/Error.jsx'

const route = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Header/>} errorElement={<Error/>}>
    <Route index element={<Home/>} />
    <Route path="skills" element={<Skills/>} />
    <Route path="projects" element={<Projects/>} />
    <Route path='contact' element={<Contact/>}/>
    
  </Route>
))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={route}/>
  </React.StrictMode>,
)
