let ballsPierre = 10;
let ballsJeanne = 15;
let ballsPaul = 5;

// Partie 1 et 2
ballsPierre += 4;
ballsJeanne -= 2;
ballsPaul -= 2;

//parties 3 et 5
ballsJeanne += 4;
ballsPierre -= 2;
ballsPaul -= 2;

// Partie 4
ballsPaul += 2;
ballsPierre -= 1;
ballsJeanne -= 1;

console.log(ballsPierre); // Possède 11 billes
console.log(ballsJeanne); // Possède 16 billes
console.log(ballsPaul); // Possède 3 billes

// L'échange avec pierre
const remainingBallsPierre = ballsPierre % 4; // Reste 3 billes
const ballsExchangePierre = (ballsPierre - remainingBallsPierre); // Echange 8 billes
const calotsPierre = ballsExchangePierre / 4; // Obtient 2 calots

// Concaténation
console.log('Pierre échange ' + ballsExchangePierre + ' billes sur ' + ballsPierre + ' à Jeremy pour obtenir ' + calotsPierre + ' calots et il lui reste ' + remainingBallsPierre + ' billes');

// Littéraux de gabarits
console.log(`Pierre échange ${ballsExchangePierre} billes sur ${ballsPierre} à Jéremy pour obtenir ${calotsPierre} calots et il lui reste ${remainingBallsPierre} billes`);


// L'échange avec Jeanne
const remainingBallsJeanne = ballsJeanne % 2; // Reste 0 billes
const ballsExchangeJeanne = (ballsJeanne - remainingBallsJeanne); // Echange 16 billes
const calotsJeanne = ballsExchangeJeanne / 2; // Obtient 8 calots 

// Concaténation
console.log('Jeanne échange ' + ballsExchangeJeanne + ' billes sur ' + ballsJeanne + ' à Jeremy pour obtenir ' + calotsJeanne + ' calots et il lui reste ' + remainingBallsJeanne + ' billes');

// Littéraux de gabarits
console.log(`Jeanne échange ${ballsExchangeJeanne} billes sur ${ballsJeanne} à Jéremy pour obtenir ${calotsJeanne} calots et il lui reste ${remainingBallsJeanne} billes`);

// L'échange avec Paul
const remainingBallsPaul = ballsPaul % 3; // Reste 0 billes
const ballsExchangePaul = (ballsPaul - remainingBallsPaul); // Echange 3 billes
const calotsPaul = ballsExchangePaul / 3; // Obtient 1 calots

// Concaténation
console.log('Paul échange ' + ballsExchangePaul + ' billes sur ' + ballsPaul + ' à Jeremy pour obtenir ' + calotsPaul + ' calots et il lui reste ' + remainingBallsPaul + ' billes');

// Littéraux de gabarits
console.log(`Paul échange ${ballsExchangePaul} billes sur ${ballsPaul} à Jéremy pour obtenir ${calotsPaul} calots et il lui reste ${remainingBallsPaul} billes`);