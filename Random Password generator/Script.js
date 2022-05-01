let password = document.getElementById("password")
let password2 = document.getElementById("password-2")
let password3 = document.getElementById("password-3")
let password4 = document.getElementById("password-4")

function genPassword() {
    let chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let passwordLength = 12
    let password = ""
    for (let i = 0; i <= passwordLength; i++) {
        let randomNumber = Math.floor(Math.random() * chars.length)
         password += chars.substring(randomNumber, randomNumber + 1)
    }

    document.getElementById("password").value = password
    let password2 = ""
    for (let i = 0; i <= passwordLength; i++) {
        let randomNumber = Math.floor(Math.random() * chars.length)
         password2 += chars.substring(randomNumber, randomNumber + 1)
    }

    document.getElementById("password-2").value = password2

    let password3 = ""
    for (let i = 0; i <= passwordLength; i++) {
        let randomNumber = Math.floor(Math.random() * chars.length)
         password3 += chars.substring(randomNumber, randomNumber + 1)
    }

    document.getElementById("password-3").value = password3

    let password4 = ""
    for (let i = 0; i <= passwordLength; i++) {
        let randomNumber = Math.floor(Math.random() * chars.length)
         password4 += chars.substring(randomNumber, randomNumber + 1)
    }

    document.getElementById("password-4").value = password4
}


