import React from 'react'

export default class ChildComponent extends React.Component {
  componentDidUpdate () {
    console.log('Nouvelle valeur du compteur :', this.props.count)
  }

  render () {
    return (
      <>
        <p>Ceci est le composant enfant</p>
        <p>{this.props.count}</p>
      </>
    )
  }
}
