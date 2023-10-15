// Ma solution

let urls = [
  'https://reqres.in/api/users/2',
  'https://reqres.in/api/users/3',
  'https://reqres.in/api/users/6'
  ]
  
  function fetchUrl(url) {
    fetch(url)
      .then((response) => {
        if(response.ok) {
          return response.json()
        } else {
          // Traitement de l'erreur dans la réponse
          console.error("Une erreur est survenue, code erreur " + response.status)
        }
      })
      .then((data) => {
        console.log(data)
      })
      .catch((error) => {
        console.error(error) //Traitement de l'erreur dans l'appel
      })
  }
  
  urls.forEach(url => fetchUrl(url))