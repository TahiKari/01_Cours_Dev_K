import Button from './Button.js'

export default function Card({id, rgbValue, ...otherProps}) {
  return(
    <div style={{backgroundColor : rgbValue}}>
      <h1>Carte numéro : {id}</h1>
      <Button {...otherProps}/>
    </div>
  )
}