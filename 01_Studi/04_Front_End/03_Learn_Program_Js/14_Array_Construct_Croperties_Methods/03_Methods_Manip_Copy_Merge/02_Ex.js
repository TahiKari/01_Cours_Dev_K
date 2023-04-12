let webBrowsers = ['Internet Explorer', 'Edge']

/*console.log(webBrowsers.unshift('Opera', 'Safari'))*/
console.log(webBrowsers.splice(0, 0, 'Opera', 'Safari' ))
console.log(webBrowsers)

/*webBrowsers.push('Vivaldi')*/

webBrowsers.splice(4, 0, 'Vivaldi')
console.log(webBrowsers)

webBrowsers.splice(1, 3, 'Firefox, Chrome')
console.log(webBrowsers)

let animals = ['Lion', 'Chat', 'Chien', 'Chat', 'Ours']

console.log(animals.lastIndexOf('Chat'))





