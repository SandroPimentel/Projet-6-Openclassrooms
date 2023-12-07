import React from 'react'
import '../styles/styles-pages/HomePage.scss'
import Banner from '../components/Banner'
import homeBannerImage from '../assets/img-accueil.jpg'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <>
    <Banner 
      backgroundImage={homeBannerImage}
      heading="Chez vous, partout et ailleurs"
      className="home-banner"
    />
    <Link to="*">404</Link>
  </>
  )
}

export default HomePage
