import React from 'react'

export default class ClassComponent extends React.Component {
  constructor (props) {
    super(props)
    console.log('constructor')
  }

  componentDidMount () {
    console.log('composant monté')
  }

  componentDidUpdate (prevProps) {
    console.log('composant mis à jour')
    console.log(prevProps)
    console.log(this.props)
  }

  componentWillUnmount () {
    console.log('composant va être démonté')
  }

  render () {
    return <h2>{this.props.value}</h2>
  }
}
