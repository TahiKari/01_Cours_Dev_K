import React, { Component } from 'react'                                                         ;
import PropTypes from "prop-types"

class Carte extends Component {
  render() {
	const { restaurantName, menus } = this.props;

	return (
  	<div>
    	<h1>{restaurantName}</h1>
    	<ul>
      	{menus.map((menu) => (
        	<li key={menu.id}>
          	<h2>{menu.name}</h2>
          	<p>{menu.description}</p>
        	</li>
      	))}
    	</ul>
  	</div>
	);
  }
}

// TODO : compléter les propTypes
Carte.propTypes = {
  restaurantName: PropTypes.string.isRequired,
  menus: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

Carte.defaultProps = {
  restaurantName: "Mon restautrant"
}

export default Carte;