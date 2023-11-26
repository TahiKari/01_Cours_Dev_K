import React from 'react'
import PropTypes from 'prop-types'

const Menu = props => {
  const { restaurantName, dishes } = props

  return (
    <div>
      <h1>{restaurantName}</h1>
      <ul>
        {dishes.map(dish => (
          <li key={dish.id}>
            <h2>{dish.name}</h2>
            <p>{dish.description}</p>
            <p>{dish.price} €</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

// TODO : compléter les propTypes
Menu.propTypes = {
  restaurantName: PropTypes.string.isRequired,
  dishes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired
    })
  ).isRequired,
}

export default Menu
