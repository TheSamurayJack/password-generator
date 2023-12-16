const numbers = '0123456789'
const symbols = '!@#$%^&*()_-+=<>?{}[]|'
const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'

let passLenght = 8

function generator(largo) {
    let passStrings = ''

    passStrings += numbers
    passStrings += symbols
    passStrings += letters

    let password = ''
    for (let index = 0; index < largo; index++) {
        let random
        random = Math.floor(Math.random() * passStrings.length)
        password += passStrings[random]
        console.log(random)
    }
    console.log(`Caracteres: ${passStrings}`)
    console.log(`Contraseña: ${password}`)
}

generator(passLenght)
