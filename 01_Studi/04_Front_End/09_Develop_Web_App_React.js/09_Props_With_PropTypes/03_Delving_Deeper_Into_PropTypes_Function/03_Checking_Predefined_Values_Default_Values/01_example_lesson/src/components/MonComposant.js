import React from 'react';
import PropTypes from 'prop-types';

const MyComponent = ({ text }) => {
  return (
	<div>
  	{text}
	</div>
  );
};

MyComponent.defaultProps = {
  text: 'Hello, world!'
};

MyComponent.propTypes = {
  text: PropTypes.string.isRequired
};

export default MyComponent;
