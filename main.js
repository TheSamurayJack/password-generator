document.addEventListener('DOMContentLoaded', () => {
    maxLength.addEventListener("input", ()=>{
        spanLength.innerHTML = maxLength.value
    })
    btnGenerar.addEventListener('click', () => {
        generar()
    })
})



const generatePassword = (base, length)=>{
    let password = ''

    for (let index = 0; index < length; index++) {
        let random
        random = Math.floor(Math.random() * base.length)
        password += base[random]
    }

    output.innerHTML = password
}

const generar = () => {
    const numbers = '0123456789'
    const symbols = '!@#$%^&*()_-+=<>?{}[]|'
    const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'

    let length = maxLength.value

    let base = ''
    base += letters

    if (usenumbers.checked) base+=numbers
    if (usesymbols.checked) base+=symbols
    
    generatePassword(base, length)
}