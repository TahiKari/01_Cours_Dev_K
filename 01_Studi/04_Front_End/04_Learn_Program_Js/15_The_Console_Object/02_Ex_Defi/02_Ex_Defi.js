/*const nbrMaxInvit = 50;
let personInvit = 60;
if (personInvit <= nbrMaxInvit) {
    console.log(`Il y a ${personInvit} sur ${nbrMaxInvit} dans la salle.`)
} else {
    let message = `Le nombre d'invité est trop important.`
    console.assert(personInvit <= nbrMaxInvit, {personInvit , nbrMaxInvit , message})
}*/
const peakNumber = 50;
let guestsNumber = 60;
if (guestsNumber <= peakNumber ) {
    console.log(true);
} else {
    console.log(false);
}
const message = 'Le nombre d’invités est trop important';
console.assert(guestsNumber <= peakNumber , {guestsNumber , peakNumber , message});

console.log(guestsNumber);
     