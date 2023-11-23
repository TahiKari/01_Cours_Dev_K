import React from 'react'

/*
  Notez qu’il est possible de déstructurer l’import en utilisant la ligne de code suivante :
  Notre composant « ClassComponent.js » hérite de la classe « Component » de React, ce qui signifie qu'elle peut utiliser les méthodes et les propriétés de cette classe pour gérer l'état et les actions de ce composant.
*/
//import { Component } from « react »


export default class ClassComponents extends React.Component {
  render() {
    return(
      <div>
        <h1>Mon composant de type classe</h1>
        <p>Ce composant uilise la syntaxe des classes</p>
      </div>
    )
  }
}