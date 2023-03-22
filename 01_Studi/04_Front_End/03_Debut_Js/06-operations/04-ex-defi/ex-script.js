console.log(`--------------------------------------------------- -------------------------------------------------------
`);

// On assigne les valeurs à des variables
let ballsPierre = 10;
let ballsJeanne = 15;
let ballsPaul = 5;

console.log(`Avant de commencer a jouer chaque joueurs possèdent: 

    Pierre : ${ballsPierre} billes;
    Jeanne : ${ballsJeanne} billes;
    Paul : ${ballsPaul} billes;`);

console.log(`
--------------------------------------------------- -------------------------------------------------------
`);

console.log(`Partie 1 et 2 remporté par Pierre`);

// Parties 1 et 2 remporter par Pierre
ballsPierre += 4;
ballsJeanne -= 2;
ballsPaul -= 2;

console.log(`
--------------------------------------------------- -------------------------------------------------------
`);

console.log(`Après les 2 premières parties chaque joueurs possèdent : 

    Pierre : ${ballsPierre} billes;
    Jeanne : ${ballsJeanne} billes;
    Paul : ${ballsPaul} billes;`);

console.log(`
--------------------------------------------------- -------------------------------------------------------
`);

console.log(`Partie 3 remporté par Jeanne`);

// Parties 3 remporter par Jeanne
ballsPierre--;
ballsJeanne += 2;
ballsPaul--;

console.log(`
--------------------------------------------------- -------------------------------------------------------
`);

console.log(`Après la 3ème partie chaque joueurs possèdent : 

    Pierre : ${ballsPierre} billes;
    Jeanne : ${ballsJeanne} billes;
    Paul : ${ballsPaul} billes;`);

console.log(`
--------------------------------------------------- -------------------------------------------------------
`);

console.log(`Partie 4 remporté par Paul`);

// Parties 4 remporter par Paul
ballsPierre--;
ballsJeanne--;
ballsPaul += 2;

console.log(`
--------------------------------------------------- -------------------------------------------------------
`);

console.log(`Après la 4ème partie chaque joueurs possèdent : 

    Pierre : ${ballsPierre} billes;
    Jeanne : ${ballsJeanne} billes;
    Paul : ${ballsPaul} billes;`);

console.log(`
--------------------------------------------------- -------------------------------------------------------
`);

console.log(`Partie 5 remporté par Jeanne`);

// Parties 5 remporter par Jeanne
ballsPierre--;
ballsJeanne += 2;
ballsPaul--;

console.log(`
--------------------------------------------------- -------------------------------------------------------
`);

console.log(`Après la 5ème partie chaque joueurs possèdent : 

    Pierre : ${ballsPierre} billes;
    Jeanne : ${ballsJeanne} billes;
    Paul : ${ballsPaul} billes;`);

console.log(`
--------------------------------------------------- -------------------------------------------------------
`);

// L'échange avec Pierre 
const remainingBallsPierre = ballsPierre % 4; // Reste 3 billes
const ballsExchangePierre = (ballsPierre - remainingBallsPierre); // Echange 8 billes
const calotsPierre = ballsExchangePierre / 4; // Obtient 2 calots

console.log(`Pierre échange ${ballsExchangePierre} billes sur ${ballsPierre} à Jéremy pour obtenir ${calotsPierre} calots et il lui reste ${remainingBallsPierre} billes`);

console.log(`
--------------------------------------------------- -------------------------------------------------------
`);

// L'échange avec Jeanne
const remainingBallsJeanne = ballsJeanne % 2; // Reste 0 billes
const ballsExchangeJeanne = (ballsJeanne - remainingBallsJeanne); // Echange 16 billes
const calotsJeanne = ballsExchangeJeanne / 2; // Obtient 8 calots

console.log(`Jeanne échange ${ballsExchangeJeanne} billes sur ${ballsJeanne} à Jéremy pour obtenir ${calotsJeanne} calots et il lui reste ${remainingBallsJeanne} billes`);

console.log(`
--------------------------------------------------- -------------------------------------------------------
`);

// L'échange avec Paul
const remainingBallsPaul = ballsPaul % 3; // Reste 0 billes
const ballsExchangePaul = (ballsPaul - remainingBallsPaul); // Echange 3 billes
const calotsPaul = ballsExchangePaul / 3; // Obtient 1 calots

console.log(`Paul échange ${ballsExchangePaul} billes sur ${ballsPaul} à Jéremy pour obtenir ${calotsPaul} calots et il lui reste ${remainingBallsPaul} billes`);

console.log(`
--------------------------------------------------- -------------------------------------------------------
`);