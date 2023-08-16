// Ma solution 1
/*
onst date = new Date(2023, 2, 1)

console.log(date.toString());
*/

console.log("---------------------------------------")

// Ma solution 2
/*
const date = new Date (2023, 2, 1);

const FormatedDate = date.toLocaleDateString()

console.log(FormatedDate);
*/

console.log("---------------------------------------")

// Ma solution 3
/*
const date = new Date (2023, 2, 1);

let options = {weekday: 'long', day: '2-digit', month: 'long', year: 'numeric'}

const FormatedDate = date.toLocaleDateString("fr-Fr", options)

console.log(FormatedDate);
*/

console.log("---------------------------------------")

// Ma solution 4
/*
const date = new Date (2023, 2, 1, 10, 30, 12);

let options = {hour: 'numeric', minute: 'numeric'}

const FormatedTime = date.toLocaleTimeString("fr-FR", options)

console.log(FormatedTime);
*/

console.log("---------------------------------------")

// Ma solution 5
/*
const date = new Date (2023, 2, 1, 10, 30, 12);

console.log(date.toUTCString());
*/