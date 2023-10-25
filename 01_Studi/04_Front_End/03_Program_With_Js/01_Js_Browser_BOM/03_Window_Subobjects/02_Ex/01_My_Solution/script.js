// Ma solution 1
/*
console.log(window.screen.width);
console.log(window.screen.height);
console.log(window.screen.availWidth);
console.log(window.screen.availHeight);
console.log(window.screen.colorDepth);
console.log(window.screen.pixelDepth);
*/

console.log('-----------------------------------')

// Ma solution 2
/*
let open = document.createElement('button');

open.innerHTML = "open";

document.body.appendChild(open);

// code
open.addEventListener('click', () => {
  window.location.assign('https://www.google.com/')
})
*/

console.log('-----------------------------------')

// Ma solution 3
/*
let open = document.createElement('button');

open.innerHTML = "open";

document.body.appendChild(open);

// code
open.addEventListener('click', () => {
  window.location.replace('https://www.google.com/')
})
*/

console.log('-----------------------------------')

// Ma solution 4
// code
/*
let expirationDate = new Date();
expirationDate.setHours(expirationDate.getHours() + 1);

document.cookie = "username=user1; expires=" + expirationDate.toUTCString();

console.log(document.cookie);
*/

console.log('-----------------------------------')

// Ma solution 5
/*
let expirationDate = new Date();
expirationDate.setHours(expirationDate.getHours() + 1);

document.cookie = "username=user1; expires=" + expirationDate.toUTCString();

let valeurDuCookie;

// code

console.log(valeurDuCookie);
*/

console.log('-----------------------------------')
