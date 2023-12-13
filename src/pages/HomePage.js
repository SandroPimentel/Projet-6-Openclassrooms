import React from 'react'
import '../styles/styles-pages/HomePage.scss'
import Banner from '../components/Banner'
import homeBannerImage from '../assets/img-accueil.jpg'
import { Link } from 'react-router-dom'
import PropertyCard from '../components/PropertyCard'
import properties from '../data/properties.json'
import NotFoundPage from '../pages/NotFoundPage'

const HomePage = () => {
  return (
    <>
      <Banner 
        backgroundImage={homeBannerImage}
        heading="Chez vous, partout et ailleurs"
        className="home-banner"
      />
      <section className="properties-section">
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
        <Link to="/une-route-inexistante" className="fake-property-card">
          <div className="properties-section">
            <p>NotFoundPage</p>
          </div>
        </Link>
      </section>
    </>
  )
}

export default HomePage
