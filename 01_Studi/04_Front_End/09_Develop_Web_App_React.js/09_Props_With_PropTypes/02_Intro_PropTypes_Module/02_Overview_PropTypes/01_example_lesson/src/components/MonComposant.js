import React, { Component } from 'react'
import PropTypes from 'prop-types'

class MonComposant extends Component {
  static propTypes = {
    nom: PropTypes.string.isRequired, // une chaîne de caractères
    age: PropTypes.number.isRequired, // un nombre
    estConnecte: PropTypes.bool.isRequired // true ou false
  }

  render () {
    const { nom, age, estConnecte } = this.props

    // Utilisez les props validées dans votre composant...

    return (
      <div>
        <p>Nom : {nom}</p>
        <p>Âge : {age}</p>
        <p>Connecté : {estConnecte ? 'Oui' : 'Non'}</p>
      </div>
    )
  }
}

export default MonComposant
