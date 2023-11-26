import PropTypes from 'prop-types'

/*function MonComposant (props) {
  return <div>{props.maProp}</div>
}

MonComposant.propTypes = {
  maProp: PropTypes.string
}*/

/*const MonComposant = ({ monObjet }) => (
  <div>
	<h1>{monObjet.titre}</h1>
	<p>{monObjet.description}</p>
  </div>
);

MonComposant.propTypes = {
  monObjet: PropTypes.shape({
	titre: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
  }).isRequired,
};*/

function MonComposant(props) {
  return (
	<div>
  	{props.monTableau.map((element) => (
    	<p key={element}>{element}</p>
  	))}
	</div>
  );
}

MonComposant.propTypes = {
  monTableau: PropTypes.arrayOf(PropTypes.string),
};

export default MonComposant
