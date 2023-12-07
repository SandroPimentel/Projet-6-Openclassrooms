import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/LOGO.svg'
import logoMobile from '../assets/LOGO-mobile.svg'
import '../styles/styles-components/Navbar.scss'

const Navbar = () => {
    return (
      <nav>
        <img src={logo} className="logo-desktop" alt="Logo Kasa" />
        <img src={logoMobile} className="logo-mobile" alt="Logo Kasa"/>
        <ul>
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/about">À Propos</Link></li>
        </ul>
      </nav>
    )
  }
  
  export default Navbar;