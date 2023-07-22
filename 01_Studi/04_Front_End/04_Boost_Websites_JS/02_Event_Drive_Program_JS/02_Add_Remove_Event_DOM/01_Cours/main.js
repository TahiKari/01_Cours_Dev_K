/*let elementId = document.getElementById('btn');

let elementName = document.getElementsByName('text');

let elementTagName = document.getElementsByTagName('span');

let elementClassName = document.getElementsByClassName('title');*/

/*let elementSelector = document.querySelector('.class-css').querySelector('#span');*/
/*let elementSelector = document.querySelector('.class-css').getElementById('span');*/

/*const btn = document.getElementById('btn');
const callback = () => {
  alert('click');
};

btn.addEventListener('click', callback, {
  capture: true,
  once: true,
  passive: true
});

btn.removeEventListener('click', callback);*/

const element = document.getElementById('event');

element.addEventListener('click', (e) => {
  let initElement = e.target;

  if (initElement.className == 'no-event') {
    return;
  }
  alert('Actif seulement sur délégation 2');
})