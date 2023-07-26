let userTemplate = { name: '', isAdmin: false }

function createUser(name, isAdmin) {
    let newUser = Object.assign({}, userTemplate)
    newUser.name = name
    newUser.isAdmin = isAdmin

    return newUser
}

let user = createUser('John', false)
let adminUser = createUser('Jane', true)

console.log(user)
console.log(adminUser)