/**
 *
 * For each of the names in the array passed into this function
 *
 * - Add a <h1> tag to the website containing the name of the person
 * - Add a <h2> tag to the website containing the job of the person
 *
 * All of your HTML should go inside the Div tag with the id "content".
 *
 * <div id="content">
 *      <h1>{Name Here}</h1>
 *      <h2>{Job Here}</h2>
 *      .....
 * </div>
 */
function exerciseOne(arrayOfPeople) {
  const contentEl = document.querySelector('#content')
  arrayOfPeople.forEach(personObject => {
    const personName = document.createElement('h1')
    const personJob = document.createElement('h2')
    personName.textContent = personObject.name
    personJob.textContent = personObject.job  
    contentEl.append(personName)
    contentEl.append(personJob)
  });
}

/**
 *
 * Create a list of shopping items. You should use an unordered list.
 *
 * All of your HTML should go inside the Div tag with the id "content".
 *
 */
function exerciseTwo(shopping) {
  const contentEl = document.querySelector('#content')
  const unorderList = document.createElement('ul')
  contentEl.append(unorderList)
  shopping.map(shoppingItem => {
    const listItem = document.createElement('li')
    listItem.textContent = shoppingItem
    unorderList.append(listItem)
  })
}

/**
    I'd like to display my three favorite books inside a nice webpage!

    const books = [
        {
            title: "The Design of Everyday Things",
            author: "Don Norman",
            alreadyRead: false
        },
        {
            title: "The Most Human Human",
            author: "Brian Christian",
            alreadyRead: true
        },
        {
            title: "The Pragmatic Programmer",
            author: "Andrew Hunt",
            alreadyRead: true
        }
    ];

    Iterate through the array of books.
    - For each book, create a <p> element with the book title and author and append it to the page.
    - Use a <ul> and <li> to display the books.
    - Add an <img> to each book that links to a URL of the book cover.
    - Change the style of the book depending on whether you have read it (green) or not (red).

    The end result should look something like this: https://hyf-js2-week1-makeme-ex1-demo.herokuapp.com/
**/
function exerciseThree(books) {
  const contentEl = document.querySelector('#content')
  const bookContainer = document.createElement('div')
  contentEl.append(bookContainer)

  books.forEach(book => {
    // creating title and author of the book
    const titleAuthorBook = document.createElement('p')
    titleAuthorBook.textContent = book.title + " " + "-" + " " + book.author;


    // list of books
    const listOfBooks = document.createElement('ul')
    listOfBooks.classList.add('book-container')
    const bookItem = document.createElement('li')
    bookItem.classList.add('book-item')

    // append the tags
    bookItem.append(titleAuthorBook)
    listOfBooks.append(bookItem)

    // adding images
    const bookImg = document.createElement('img')
    bookImg.classList.add('book-image')
    bookImg.src = book.bookCover
    bookItem.append(bookImg)
    
    bookContainer.append(listOfBooks)

    if(book.alreadyRead) {
      return bookItem.style.backgroundColor = "green"
    } else {
      return bookItem.style.backgroundColor = "red"
    }
  });
}

//
//
//
//
// DO NOT EDIT BELOW HERE
//
//
//
//

let people = [
  { name: "Chris", job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" }
];

exerciseOne(people);

let shopping = ["Milk", "Break", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

exerciseTwo(shopping);

const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false,
    bookCover: "https://images-na.ssl-images-amazon.com/images/I/81zpLhP1gWL.jpg"
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
    bookCover: "https://images-na.ssl-images-amazon.com/images/I/71HMyqG6MRL.jpg"
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true,
    bookCover: "https://images-na.ssl-images-amazon.com/images/I/41as+WafrFL.jpg"
  }
];

exerciseThree(books);
