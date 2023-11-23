import React from 'react'
import ChildComponent from './ChildComponent.js'

/*
  Notez qu’il est possible de déstructurer l’import en utilisant la ligne de code suivante :
  Notre composant « ClassComponent.js » hérite de la classe « Component » de React, ce qui signifie qu'elle peut utiliser les méthodes et les propriétés de cette classe pour gérer l'état et les actions de ce composant.
*/
//import { Component } from 'react'

export default class ClassComponents extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      count: props.initialValue
    }
  }

  componentDidMount () {
    console.log('composant monté')
  }

  componentDidUpdate (prevProps, prevState) {
    console.log('composant mis à jour')
    if (this.state.count !== prevState.count) {
      console.log('La valeur de count a été modifiée')
    }
  }

  componentWillUnmount () {
    console.log('le composant va être démonté')
  }

  handleClick = () => {
    this.setState(prevState => ({ count: prevState.count + 1 }))

    if (this.state.count >= 10) {
      this.props.updateState()
    }
  }

  render () {
    return (
      <>
        <div>
          <h1>Mon composant de type classe</h1>
          <p>Ce composant utilise la syntaxe des classes</p>
          <p>Compteur : {this.state.count} </p>
          <button onClick={this.handleClick}> Incrémenter le compteur </button>
        </div>
        <ChildComponent count={this.state.count} />
      </>
    )
  }
}
