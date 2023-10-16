// Exemple 1
/*
const fields = [
  {
    id: 2,
    label: "Terrain de foot",
    area: 200
  },
  {
    id: 5,
    label: "Terrain de rugby",
    area: null
  }
]

const data = {
  stadium: {
    id: 18,
    label: "Stade de France",
    fields: fields
  }
}

const json = JSON.stringify(data);

console.log(json);
*/

/*
const object = {
  today: new Date(),
};

const jsonObject = JSON.stringify(object);

console.log(object.today);
console.log(jsonObject);
*/

console.log('-----------------------------------------------')

// Exemple 2
/*
const json = '{"stadium":{"id":18,"label":"Stade de France","fields":[{"id":2,"label":"Terrain de foot","area":200},{"id":5,"label":"Terrain de rugby","area":null}]}}';

const data = JSON.parse(json);

console.log(data.stadium.id);
*/

/*
try {
  const json = '{"stadium:{"id":18,"label":"Stade de France","fields":[{"id":2,"label":"Terrain de foot","area":200},{"id":5,"label":"Terrain de rugby","area":null}]}}';

  const data = JSON.parse(json);

  console.log(data.stadium.id);
} catch(error) {
  console.log(error);
}
*/
/*
SyntaxError: Unexpected token i in JSON at position 12
    at JSON.parse (<anonymous>)
    at <anonymous>:4:21
*/

console.log('-----------------------------------------------')

// exemple 3
// Sérialisation
/*
const fields = [
  {
    id: 2,
    label: "Terrain de foot",
    area: 200
  },
  {
    id: 5,
    label: "Terrain de rugby",
    area: null
  },
]

const data = {
  stadium: {
    id: 18,
    label: "Stade de france",
    fields: fields
  }
}

const json = JSON.stringify(data)

console.log(json)
*/

console.log('-----------------------------------------------')

// exemple 4
// Désérialisation
/*
const json = '{"stadium":{"id":18,"label":"Stade de france","fields":[{"id":2,"label":"Terrain de foot","area":200},{"id":5,"label":"Terrain de rugby","area":null}]}}'

const data = JSON.parse(json)

console.log(data.stadium.fields[0].label)
*/

console.log('-----------------------------------------------')

// exemple 5
// En cas d'erreur
try {
  const json = '{"stadium":{"id":18,"label":"Stade de france","fields":[{"id":2,"label":"Terrain de foot","area":200},{"id":5,"label":"Terrain de rugby""area":null}]}}'

const data = JSON.parse(json)

console.log(data.stadium.fields[0].label)
} catch (error) {
  console.log(error)
}

