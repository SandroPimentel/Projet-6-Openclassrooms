import React from 'react'
import logo from '../assets/LOGO-footer.svg'
import '../styles/styles-components/Footer.scss'

const Footer = () => {
  return (
    <footer>
      <img src={logo} alt="Logo Kasa" />
      <p>© 2020 Kasa. All rights reserved.</p>
    </footer>
  )
}

export default Footer