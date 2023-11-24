import React from 'react'

export default class ClassCardComponent extends React.Component {
  render () {
    const { id, rgbValue } = this.props
    return (
      <div style={{ backgroundColor: rgbValue }}>
        <h1>Composant de type classe numéro : {id}</h1>
      </div>
    )
  }
}
