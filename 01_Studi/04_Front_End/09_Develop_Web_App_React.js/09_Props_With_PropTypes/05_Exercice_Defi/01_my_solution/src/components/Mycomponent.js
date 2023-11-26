import React from 'react'
import PropTypes from 'prop-types';

const MyComponent = ({ name, age }) => {
  return (
	<div>
  	<p>{name}</p>
  	<p>{age}</p>
	</div>
  );
};

// TODO : compléter les propTypes
MyComponent.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired
}

export default MyComponent;