import React from 'react'
import '../styles/styles-components/Banner.scss'

const Banner = ({ backgroundImage, heading, className}) => {
  const bannerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }

  return (
    <header className={`banner ${className}`} style={bannerStyle}>
      <div className='overlay'></div>
      <h1 className="banner-heading">{heading}</h1>
    </header>
  )
}

export default Banner
