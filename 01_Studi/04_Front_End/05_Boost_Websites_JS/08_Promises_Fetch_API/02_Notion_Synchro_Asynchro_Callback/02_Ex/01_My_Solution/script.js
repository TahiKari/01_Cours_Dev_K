// Ma solution

let mySandwich = (param1, param2, callback) => {
  alert('Je mange un sandwich à : ' + param1 + ', ' + param2)
  callback()
}

const endSandwich = () => { alert('Fini de manger!')  }

mySandwich('jambon', 'fromage', endSandwich); 
