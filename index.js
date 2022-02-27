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
const passwordAreaEls = document.querySelectorAll(".password_area")
const snackbarEl = document.getElementById("snackbar")


passwordAreaEls.forEach( item => {
  item.addEventListener('click', () => {
    /* Get the text field to copy to clip board */
    const copyText = item;

    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */

    /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.value);

    /* Snackbar notice of the copied text */
    snackbar(copyText.value)
  })
})

function snackbar(passwordText) {
  /* Get the snackbar element and change the text to the passwordText */
  snackbarEl.textContent = "Copied the text: " + passwordText
  snackbarEl.className = "show"
  setTimeout(function(){
    snackbarEl.className = snackbarEl.className.replace("show", "");
    }, 3000)
}

/* Set the length label to the value of the slider */
lengthValueEl.innerText = lengthEl.value
lengthEl.oninput = function() { lengthValueEl.innerHTML = this.value }

/* Functionality for the button to generate passwords */
genPwEl.addEventListener('click', () => {
    checkboxErrorEl.textContent = ""
    let passwordChars = ""
    passwordChars = buildChars(passwordChars)
    passwordChars = passwordChars.split("")
    const passwordLength = lengthEl.value

    pwEl1.value = createPassword(passwordChars, passwordLength)
    pwEl2.value = createPassword(passwordChars, passwordLength)
    pwEl3.value = createPassword(passwordChars, passwordLength)
    pwEl4.value = createPassword(passwordChars, passwordLength)
})

/* Create a password with the selected characters and length */
function createPassword(chars, len) {
    let newPassword = []
    for (let i = 0; i < len; i++) {
        let newChar = chars[ Math.floor( Math.random() * chars.length)]
        newPassword.push(newChar)
    }
   return newPassword.join('')
}

/* Return string of selected characters, or provide error warning. */
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
