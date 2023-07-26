/*const button = document.getElementById('button')
const body = document.getElementsByTagName('body')[0]

function evenement(event) {
  event.stopPropagation()
  console.log(event.target)
}

button.addEventListener('click', evenement)
body.addEventListener('click', evenement)*/

/*window.addEventListener('load', function (event) {
  console.log('Tout est bien chargé')
})*/


//Les évènements souris
/*const button = document.getElementById('button')

function evenement() {
  alert('Vous avez cliqué sur le bouton')
}

button.addEventListener('click', evenement)*/

/*const button = document.getElementById('button')

function evenement() {
  alert('Vous survolez le bouton')
}

button.addEventListener('mouseenter', evenement)*/

/*const button = document.getElementById('button')

function evenement() {
  alert('Vous avez quitté')
}

button.addEventListener('mouseleave', evenement)*/


/*const button = document.getElementById('button')

function evenement() {
  alert('Vous avez relaché le click')
}

button.addEventListener('mouseup', evenement)*/


// Les évènements clavier

/*const input = document.getElementById('input')

function keyboard() {
  alert('Vous venez d\'appyuer sur une touche du clavier')
}

input.addEventListener('keydown', keyboard)*/

/*const input = document.getElementById('input')

function keyboard() {
  alert('Vous avez relaché la touche du clavier')
}

input.addEventListener('keyup', keyboard)*/

// Les évènements de formulaire

/*const formulaire = document.getElementById('form')

function form(event) {
  event.preventDefault()
  alert('Vous êtes sur le point de soumettre un formulaire')
}

formulaire.addEventListener('submit', form)*/

/*const button = document.getElementById('button')

button.addEventListener('click', debounce(function (e) {
  alert('Click')
}, 2000))

function debounce(callback, delay) {
  let timer;
  return function () {
    const args = arguments 
    const context = this
    clearTimeout(timer)
    timer = setTimeout(function () {
      callback.apply(context,args)
    },delay)
  }
}*/


// Report d'appel a une fonction
const button = document.getElementById('button')

button.addEventListener('click', throttle(function (e) {
  alert('Click')
}, 5000))

function throttle(callback, delay) {
  let last;
  let timer;
  return function () { 
    const context = this
    let now = +new Date
    let args = arguments
    if(last && now < last + delay) {
      clearTimeout(timer)
      timer = setTimeout(function () {
        last = now
        callback.apply(context,args)
      }, delay)
    } else {
      last = now
      callback.apply(context,args)
    }
  }
}