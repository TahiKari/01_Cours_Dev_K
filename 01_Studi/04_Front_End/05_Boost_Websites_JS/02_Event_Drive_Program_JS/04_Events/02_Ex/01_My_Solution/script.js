// Exemple 
let connexion = document.getElementById('connexion')

const message = () => {
  alert('Vous avez cliqué sur le boutton de connexion')
}

const setColorGreen = () => {
  connexion.style.background = 'green'
}

const setColorRed = () => {
  connexion.style.background = 'red'
}

connexion.addEventListener('click', message)
connexion.addEventListener('mouseenter', setColorRed)
connexion.addEventListener('mouseleave', setColorGreen)