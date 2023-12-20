import React from 'react'
import '../styles/styles-components/Banner.scss'

const Banner = ({ backgroundImage, heading, className}) => {
  const bannerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }

  return (
    <div className={`banner ${className}`} style={bannerStyle}>
      <div className='overlay'></div>
      <p className="banner-heading">{heading}</p>
    </div>
  )
}

export default Banner
