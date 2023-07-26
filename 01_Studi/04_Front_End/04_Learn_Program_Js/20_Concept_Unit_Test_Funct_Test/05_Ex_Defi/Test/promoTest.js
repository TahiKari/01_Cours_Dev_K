const promo = require('../promo.js')
const assert = require(`assert`)

describe(`Calcul d'une promo`, function() {
    it(`Devrait renvoyer 0`, function() {
        assert.equal(promo(0,10), 0)
    })
    it(`Devrait renvoyer le résultat`, function(){
        assert.equal(promo(35,15), 29.75)
    })
})
describe(`Test de l'exception de type`, function(){
    it(`Devrait renvoyer false`, function(){
        assert.equal(promo('hello world',10), false)
    })
})