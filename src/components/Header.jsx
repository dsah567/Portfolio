import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Header() {
  return (
  <>
    <a href="mailto:sahd7929@gmail.com">Send Mail :</a> <>sahd7929@gmail.com</>
    <a href="tel:+917892957459">Call Now. :</a> <> +91 7892957459</>
    
    <br />
    <Link to="/">Home</Link>
    <Link to="skills">Skills</Link>
    <Link to="projects">Projects</Link>
    <Link to="contact">contact</Link>
    <br/>

    <Link to="https://www.linkedin.com/in/sahd7929/" target="_blank">Linkedin</Link>
    <Link to="https://github.com/dsah567/" target="_blank">Github</Link>
    <div>Header</div>
    <Outlet/>
  </>
  )
}
