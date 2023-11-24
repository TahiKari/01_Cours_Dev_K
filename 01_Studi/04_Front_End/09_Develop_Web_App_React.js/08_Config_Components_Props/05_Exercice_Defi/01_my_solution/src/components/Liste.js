import React from 'react'
import Article from './Article.js'

export default function Liste () {
  let article1 = { nom: 'Tomate', prix: 1.5, quantite: 5 },
    article2 = { nom: 'Salade', prix: 0.99, quantite: 1 },
    article3 = { nom: 'Pain', prix: 1, quantite: 1 }

  return (
    <>
      <Article article={article1} />
      <Article article={article2} />
      <Article article={article3} />
    </>
  )
}
