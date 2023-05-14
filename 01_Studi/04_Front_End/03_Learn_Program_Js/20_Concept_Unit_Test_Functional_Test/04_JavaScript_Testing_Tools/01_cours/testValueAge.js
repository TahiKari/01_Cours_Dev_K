function testValueAge (input) {
    if (isNaN(input)){
            return false
    }
    if (input < 18 ){
        return false
    }
    return true
    }
    module.exports = testValueAge

