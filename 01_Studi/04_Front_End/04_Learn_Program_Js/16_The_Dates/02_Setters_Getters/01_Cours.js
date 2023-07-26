/*const date = new Date()

date.setFullYear(2020)
date.setMonth(11)
date.setDate(31)

console.log(date)
// Thu Dec 31 2020 09:29:10 GMT+0100 (heure normale d’Europe centrale)*/

/*const date = new Date(2020, 1, 29)

date.setHours(22)
date.setMinutes(30)
date.setSeconds(45)
date.setMilliseconds(500)

console.log(date)
// Sat Feb 29 2020 22:30:45 GMT+0100 (heure normale d’Europe centrale)*/

/*const date = new Date()
// Le nombre 1572303600000 correspond au nombre de millisecondes écoulées entre le 1er janvier 1970 à minuit et le 29 octobre 2019 à minuit
date.setTime(1572303600000)		
 
console.log(date)
// Tue Oct 29 2019 00:00:00 GMT+0100 (heure normale d’Europe centrale)*/

/*const date = new Date(2020, 1, 29)

console.log(date.getFullYear()) // 2020
console.log(date.getMonth()) // 1
console.log(date.getDate()) // 29*/

/*const date = new Date(2020, 1, 29, 22, 30, 45, 500)

console.log(date.getHours()) // 22
console.log(date.getMinutes()) // 30
console.log(date.getSeconds()) // 45
console.log(date.getMilliseconds()) // 500*/

/*const date = new Date(2020, 1, 29)

console.log(date.getDay()) // 6*/

/*const date = new Date(2020, 1, 29)

console.log(date.getTime()) // 1582930800000*/

const date = Date.now()

console.log(date) // 1583751043304