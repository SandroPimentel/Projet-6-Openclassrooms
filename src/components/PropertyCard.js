import React from 'react';
import '../styles/styles-components/PropertyCard.scss'; 
import { Link } from 'react-router-dom'

const PropertyCard = ({ property }) => {
  return (
    <Link to={`/property/${property.id}`} className="property-card">
    <img src={property.cover} alt={`Cover for ${property.title}`} />
    <h3>{property.title}</h3>
    </Link>
  );
};

export default PropertyCard;
