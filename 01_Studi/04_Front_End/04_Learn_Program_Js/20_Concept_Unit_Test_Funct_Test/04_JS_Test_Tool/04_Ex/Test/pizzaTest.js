const pizza = require('../Pizza.js')
const assert = require(`assert`)

describe(`Calcul du pourcentage de part d'une personne`, function(){
    it(`Devrait renvoyer 100%`, function(){
        assert.equal(pizza(1), 100)
    })
})