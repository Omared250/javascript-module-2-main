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

const checkingForm = document.querySelectorAll('div .form-group')
checkingForm.addEventListener('submit', (event) => {
    event.preventDefault()
    const text = event.target.elements.text.value

    if (text.length > 0) {
        
    }
})