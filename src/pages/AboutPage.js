import React from 'react'
import '../styles/styles-pages/AboutPage.scss'
import Banner from '../components/Banner'
import homeBannerImage from '../assets/img-about.jpg'
import Dropdown from '../components/Dropdown'

const AboutPage = () => {
    return (
      <>
      <Banner 
          backgroundImage={homeBannerImage}
          className="about-banner"
      />
      <Dropdown title="Fiabilité" customClass="about-dropdown">
        <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.</p>
      </Dropdown>
      <Dropdown title="Respect" customClass="about-dropdown">
        <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
      </Dropdown>
      <Dropdown title="Service" customClass="about-dropdown">
        <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
      </Dropdown>
      <Dropdown title="Sécurité" customClass="about-dropdown">
        <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
      </Dropdown>
  </>
    )
}

export default AboutPage 