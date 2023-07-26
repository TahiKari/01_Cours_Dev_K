function pizza (input) {
    if (isNaN(input)){
    return false
    }
    if (input == 0 || input == 1) {
    return 100
    }
    return 1 * 100 / input
    }
    module.exports = pizza
