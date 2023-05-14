const testValueAge = require('../testValueAge.js')
const assert = require(`assert`)

describe(`test de Value de l’input âge`, function(){
    it(`devrait tester la valeur si majeur`, function(){
        assert.equal(testValueAge(20), true)
        assert.equal(testValueAge(50), true)
        assert.equal(testValueAge(44), true)
    })
    it(`devrait tester la valeur si mineur`, function(){
        assert.equal(testValueAge(12), false)
        assert.equal(testValueAge(8), false)
    })
    it(`devrait tester la valeur si chaine de caractère`, function(){
        assert.equal(testValueAge('Hello World'), false, 'échoue car nous avons une erreur dans testValueAge')
    })
})

