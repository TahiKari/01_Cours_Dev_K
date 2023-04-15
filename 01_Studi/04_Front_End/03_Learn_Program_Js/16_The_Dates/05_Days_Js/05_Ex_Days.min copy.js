import * as dayjs from 'dayjs'
import * as isLeapYear from 'dayjs/plugin/isLeapYear' // import plugin
import 'dayjs/locale/FR-fr' // import locale

dayjs.extend(isLeapYear) // use plugin
dayjs.locale('FR-fr') // use locale

const orderedAt = dayjs('2019-12-22 10:45');
const specialOfferStartedAt = moment('2019-12-18 18:00');
const specialOfferEndedAt = specialOfferStartedAt.clone().add(10, 'days');
const hasReducedPrice = orderedAt.isBetween(specialOfferStartedAt, specialOfferEndedAt);

if (hasReducedPrice) {
  console.log('La commande a bénéficié du tarif réduit !')
} else {
  console.log('La commande a été effectuée en dehors de la période promotionnelle.')
}





