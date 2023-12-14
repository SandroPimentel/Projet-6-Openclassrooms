import React, { useState } from 'react'
import '../styles/styles-components/Dropdown.scss'
import arrowDown from '../assets/arrow-dropdown.svg'

const Dropdown = ({ title, children, customClass }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleDropdown = () => setIsOpen(!isOpen)

  return (
    <div className={`dropdown ${customClass}`}>
      <button className="dropdown-title" onClick={toggleDropdown}>
        {title}
        <img 
          src={arrowDown} 
          className={`arrow ${isOpen ? 'open' : ''}`} 
          alt="Open/close dropdown"
        />
      </button>
      {isOpen && <div className="dropdown-content">{children}</div>}
    </div>
  )
}

export default Dropdown
