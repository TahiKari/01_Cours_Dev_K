// Ma solution

function wait() {
  return new Promise((resolve) => {
    setTimeout(resolve, 10000);
  });
}

function chargedFile() {
    console.log('Le fichier est chargé')
}

async function chargement(callbackFileWhenLoaded) {
  await wait();
  callbackFileWhenLoaded();
}

chargement(chargedFile);

console.log("Plateforme de dépôt");
