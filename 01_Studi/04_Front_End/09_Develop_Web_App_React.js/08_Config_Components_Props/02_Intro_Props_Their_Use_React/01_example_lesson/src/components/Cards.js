export default function Card(props) {
  return(
    <div style={{backgroundColor : props.rgbValue}}>
      <h1>Carte numéro : {props.id}</h1>
      <button onClick={props.createNewColor}></button>
    </div>
  )
}