import React from 'react'
import '../styles/styles-pages/NotFoundPage.scss'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <div className="not-found-page">
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <Link className="link-to-home"to="/">Retourner sur la page d’accueil</Link>
    </div>
  )
}


export default NotFoundPage