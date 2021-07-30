/*
Task 1
=======
Write JavaScript below that logs:
    1. all the "p" element nodes of the document,
    --> should log a list of nodes with a length of 6 */

    const listOfP = document.querySelectorAll('p')
    console.log(listOfP);

/*  2. the first div element node
    --> should log the ".site-header" node */

    const firstDiv = document.querySelector('div.site-header')
    console.log(firstDiv);

/*  3. the element with id "jumbotron-text"
    --> should log the "#jumbotron-text" node */

    const jumboEl = document.querySelector('#jumbotron-text')
    console.log(jumboEl);

/*  4. all the "p" elements of contained inside  the .primary-content element node
    --> should log a list of nodes with a length of 3*/

    const primaryEl = document.querySelectorAll('.primary-content p')
    console.log(primaryEl);


/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/
    const pupUpAlert = document.querySelector('#alertBtn')
    pupUpAlert.addEventListener('click', () => {
        alert("Thanks for visiting Bikes for Refugees!")
    })

/*
Task 3
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/

    const changeColor = document.getElementById('bgrChangeBtn')
    changeColor.addEventListener('click', () => {
        let bgColorPage = document.querySelector('body')
        bgColorPage.style.backgroundColor = "gray"
    })


/*
Task 4
======

When a user clicks the ‘Add some text’ button, a new paragraph should be added inside the section that says “LEARN MORE”
*/

    const someTextBtn = document.querySelector('#addTextBtn')
    const generateP = () => {
        const p = document.createElement('p')
        p.textContent = "I am the punishment of God, if you had not committed great sins, God would not have sent a punishment like me on you"
        const newArticle = document.getElementById('mainArticles')
        newArticle.appendChild(p)
    }
    someTextBtn.addEventListener('click', generateP)

/*
Task 5
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/

    const largerLinks = document.querySelector('#largerLinksBtn')
    largerLinks.addEventListener('click', () => {
        let allLinks = document.querySelectorAll('a')

        for (i = 0; i < allLinks.length; i++) {
            allLinks[i].style.fontSize = '30px'
        }
    })


/*
Task 6
======

Using the same function in Task 4,
When the 'Add' button is clicked, get the text inside the input field and create a new paragraph in the "LEARN MORE" section
Also clear the text inside the input field
*/
    const addButton = document.querySelector('#addArticleBtn')
    const addingArticle = () => {
        const creatingP = document.createElement('p')
        const addArticle = document.querySelector('#addArticle')
        creatingP.textContent = addArticle.innerHTML
        const learningArea = document.querySelector('#mainArticles')
        learningArea.appendChild(creatingP)
    }
    addButton.addEventListener('click', addingArticle)

/*
Task 7
======

Create an array of 5 different colors.
Using the same function in Task 3, every time the 'Change colour' button is clicked, the background color will be changed with the next color in the array.
The next color when you are in the last color of the array will be the first color again.
*/

