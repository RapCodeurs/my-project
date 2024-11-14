import React from 'react'
import { Link } from 'react-router-dom'

function ErrorPage() {
  return (
    <div className="mt-40">
        <h1 className="text-4xl font-bold text-red-800 text-center">
          Je sens qu'on a un probleme....
        </h1>

        <Link to="/"><p className="text-center text-xl  text-blue-500">Retour à la page d'accueil</p></Link>
    </div>
  )
}

export default ErrorPage
