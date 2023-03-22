// Fonction d'inscription
function subscribe(email, username, password)
{
  // Insertion des informations en base de données
  console.log('utilisateur ' +username+' inscrit');
}

function login(username, password)
{
  // Vérification base de données
  console.log('Bonjour ' +username+ ' comment allez-vous ?');
}

let username = 'taka';
let email = 'taka@example.com';
let password = 'mdp1234';

subscribe(email, username, password);
login(username, password);