/*
================
EXERCISE 1

Task 1
Using setTimeout, change the background colour of the page after 5 seconds (5000 milliseconds). Hint: try searching for setTimeout. (https://www.w3schools.com/jsref/met_win_settimeout.asp)

Task 2
Update your code to make the colour change every 5 seconds to something different. Hint: try searching for setInterval. (https://www.w3schools.com/jsref/met_win_setinterval.asp)
================
*/

const colors = ["black", "blue", "brown", "green"]
let i = -1

function change() {
    let containerEl = document.querySelector('#main')
    containerEl.style.backgroundColor = colors[i]
    i++;
    if(i > colors.length - 1) {
        i = -1
    }
}
setInterval(change, 1000)