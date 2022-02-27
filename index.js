const lowerChars = 'abcdefghijklmnopqrstuvwxyz'
const upperChars ='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const numberChars = '1234567890'
const symbolChars = '!@#$%^&*=+?<>'


const genPwEl = document.getElementById("gen_pw")
const checkboxErrorEl = document.getElementById("checkbox-error")
const pwEl1 = document.getElementById("pw_el_1")
const pwEl2 = document.getElementById("pw_el_2")
const pwEl3 = document.getElementById("pw_el_3")
const pwEl4 = document.getElementById("pw_el_4")
const upperEl = document.getElementById("uppercase")
const lowerEl = document.getElementById("lowercase")
const numberEl = document.getElementById("numbers")
const symbolEl = document.getElementById("symbols")
const lengthEl = document.getElementById("length")
const lengthValueEl = document.getElementById("length-value")

lengthValueEl.innerText = lengthEl.value
lengthEl.oninput = function() { lengthValueEl.innerHTML = this.value }

genPwEl.addEventListener('click', () => {
    checkboxErrorEl.textContent = ""
    let passwordChars = ""
    passwordChars = buildChars(passwordChars)
    passwordChars = passwordChars.split("")
    const passwordLength = lengthEl.value
    
    pwEl1.value = createPasword(passwordChars, passwordLength)
    pwEl2.value = createPasword(passwordChars, passwordLength)
    pwEl3.value = createPasword(passwordChars, passwordLength)
    pwEl4.value = createPasword(passwordChars, passwordLength)
})

function createPasword(chars, len) {
    let newPassword = []
    for (let i = 0; i < len; i++) {
        let newChar = chars[ Math.floor( Math.random() * chars.length)]
        newPassword.push(newChar)
    }
   return newPassword.join('')
}

function buildChars(passChars) {
    let check = false
    if (upperEl.checked) {
        passChars += upperChars
        check = true
    } 
    if (lowerEl.checked) {
        passChars += lowerChars
        check = true
    } 
    if (numberEl.checked) {
        passChars += numberChars
        check = true
    } 
    if (symbolEl.checked) {
        passChars += symbolChars
        check = true
    } 
    if (!check) {
        checkboxErrorEl.textContent = "Must select at least one character type"
    }
    return passChars
}