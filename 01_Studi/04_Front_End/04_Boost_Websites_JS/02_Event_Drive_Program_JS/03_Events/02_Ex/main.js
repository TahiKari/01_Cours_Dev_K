const connexion = document.getElementById('connexion')

const getMessage = () => {
  alert('Vous avez cliqué sur le bouton de connexion')
}

const selectColorGreen = () => {
  connexion.style.background = 'green'
}

const selectColorRed = () => {
  connexion.style.background ='red'
}

connexion.addEventListener('mouseenter', selectColorRed)
connexion.addEventListener('mouseleave', selectColorGreen)

