const blueChange = document.querySelector('#blueBtn')
blueChange.addEventListener('click', () => {
    const jumbBg = document.querySelector('div .jumbotron');
    jumbBg.style.backgroundColor = "#588fbd"

    const donateBg = document.querySelector('#donateBtn');
    donateBg.style.backgroundColor = "#ffa500"

    const volunterBg = document.querySelector('#volunterBtn');
    volunterBg.style.backgroundColor = "black"
    volunterBg.style.color = "white"
})

const orangeChange = document.querySelector('#orangeBtn')
orangeChange.addEventListener('click', () => {
    const jumbBg = document.querySelector('div .jumbotron');
    jumbBg.style.backgroundColor = "#f0ad4e"

    const donateBg = document.querySelector('#donateBtn');
    donateBg.style.backgroundColor = "#5751fd"

    const volunterBg = document.querySelector('#volunterBtn');
    volunterBg.style.backgroundColor = "#31b0d5"
    volunterBg.style.color = "white"
})

const greenChange = document.querySelector('#greenBtn')
greenChange.addEventListener('click', () => {
    const jumbBg = document.querySelector('div .jumbotron');
    jumbBg.style.backgroundColor = "#87ca8a"

    const donateBg = document.querySelector('#donateBtn');
    donateBg.style.backgroundColor = "black"

    const volunterBg = document.querySelector('#volunterBtn');
    volunterBg.style.backgroundColor = "#8c9c08"
})

// part 2

const checkingForm = document.querySelector('form')

const emailEl = document.querySelector('#exampleInputEmail1')
const nameEl = document.querySelector('#example-text-input')
const descriptionEl = document.querySelector('#exampleTextarea')

checkingForm.addEventListener('submit', (e) => {
    e.preventDefault()

    let isValidEmail = emailEl.value.includes('@')
    let isValidName = nameEl.length.value.trim() > 0
    let isValidDescription = descriptionEl.value.length.trim() > 0

    if (isValidEmail && isValidName && isValidDescription) {
        emailEl.value = ''
        nameEl.value = ''
        descriptionEl.value = ''
        
        alert('thank you for filling out the form')

        emailEl.style.backgroundColor = "white"
        nameEl.style.backgroundColor = "white"
        descriptionEl.style.backgroundColor = "white"
    } else {
        if (!isValidEmail == 1) {
            emailEl.style.backgroundColor = "red"
        } else if (!isValidName) {
            nameEl.style.backgroundColor = "red"
        } else if (!isValidDescription) {
            descriptionEl.style.backgroundColor = "red"
        }
    }
})
