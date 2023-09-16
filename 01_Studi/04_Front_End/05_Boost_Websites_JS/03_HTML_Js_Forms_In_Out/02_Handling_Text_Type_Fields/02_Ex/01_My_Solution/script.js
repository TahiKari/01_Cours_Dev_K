// Ma solution
let allinputs = document.getElementsByClassName('inputPinkOnFocus')

Array.from(allinputs).forEach(function (input) {
  input.addEventListener('focus', event => {
    event.target.style.background = 'pink'
    event.target.style.color = 'blue'
  })

  input.addEventListener('blur', () => {
    event.target.style.background = ''
    event.target.style.color = ''
  })
})
