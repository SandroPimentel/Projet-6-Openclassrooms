import React from 'react'
import '../styles/styles-pages/AboutPage.scss'
import Banner from '../components/Banner'
import homeBannerImage from '../assets/img-about.jpg'

const AboutPage = () => {
    return (
        <>
        <Banner 
          backgroundImage={homeBannerImage}
          className="about-banner"
        />
      </>
    )
}

export default AboutPage