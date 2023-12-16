//Este archivo es usado para ejecutar pequeñas pruebas de las funciones y/o metodos usados
const numbers = '0123456789'
const symbols = '!@#$%^&*()_-+=<>?{}[]|'
const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'

let passStrings = ''

passStrings += letters
passStrings += numbers

let count = 0
for (let index = 0; index < passStrings.length; index++) {
    count += 1
}
console .log(count)