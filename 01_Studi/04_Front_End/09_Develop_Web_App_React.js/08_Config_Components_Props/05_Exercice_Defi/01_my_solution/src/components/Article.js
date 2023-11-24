import React from 'react'

export default function Article({article}) {
  return <>
        <h1>Nom de l'article : {article.nom}</h1>
        <p>Prix : {article.prix}</p>
        <p>Quantité : {article.quantite}</p>
  </>
}