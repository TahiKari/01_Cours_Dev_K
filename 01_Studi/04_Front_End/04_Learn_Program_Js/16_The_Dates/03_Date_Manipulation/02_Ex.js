/*À partir de la date du 25 décembre 2020 à 20 h 30, nous voulons calculer une nouvelle date qui sera 
dans 5 ans, 6 mois et 12 heures de plus (vous devez effectuer des calculs en JavaScript) et l'afficher 
dans la console.*/

let date = new Date(2020, 11, 25, 20, 30)
const date2 = new Date(
    date.getFullYear() + 5,
    date.getMonth() + 6,
    date.getDate(),
    date.getHours() + 12,
    date.getMinutes()

)

console.log(date)
console.log(date2)



