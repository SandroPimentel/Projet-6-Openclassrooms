import React from 'react'
import { useParams, Navigate } from 'react-router-dom'
import properties from '../data/properties.json'
import Carousel from '../components/Carousel'
import StarFull from '../assets/star-full.svg' 
import StarEmpty from '../assets/star-empty.svg' 
import '../styles/styles-pages/PropertyDetailPage.scss'
import Dropdown from '../components/Dropdown'

const PropertyDetailPage = () => {
  let { id } = useParams()
  let property = properties.find(p => p.id === id)

  if (!property) {
    return <Navigate to="/not-found" replace />
  }

  const generateRating = (rating) => {
    const totalStars = 5;
    let stars = [];
    for (let i = 0; i < totalStars; i++) {
      stars.push(
        i < rating ? <img key={i} src={StarFull} alt="Full star" /> : <img key={i} src={StarEmpty} alt="Empty star" />
      );
    }
    return stars;
  };

  return (
    <div className="property-detail-page">
      <Carousel pictures={property.pictures} />
      <div className="property-information">
        <div className="title-and-host">
          <h1 className="property-title">{property.title}</h1>
          <div className="host-info">
            <div className="host-name">{property.host.name}</div>
            <img src={property.host.picture} alt={`Host ${property.host.name}`} className="host-picture" />
          </div>
        </div>
        <h2 className='property-location'>{property.location}</h2>
        <div className="property-tags-and-rating">
          <div className="property-tags">
          {property.tags.map((tag, index) => <span key={index} className="tag">{tag}</span>)}
          </div>
          <div className="property-rating">
          {generateRating(Number(property.rating))}
          </div>
        </div>
      <div className="detail-page-dropdown">
        <Dropdown title="Description" customClass="description-dropdown">
          <p>{property.description}</p>
        </Dropdown>
        <Dropdown title="Équipements" customClass="equipements-dropdown">
          <ul>
            {property.equipments.map((equipment, index) => (
              <li key={index}>{equipment}</li>
            ))}
          </ul>
        </Dropdown>
      </div>
      </div>
    </div>
  )
}

export default PropertyDetailPage
