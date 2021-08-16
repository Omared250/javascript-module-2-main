/*
================
You are given the following list of movies

Task 1
Create a function called "showMovies" that
- iterates through the "movies" array and
- for each movie, it creates a <p> element with the movie title and director and append it to the #all-movies div.
- it sets the innerText of the #movies-number element to the total number of the movies in the array "movies"

Task 2
Amend your function above to only show movies after 1 second. Remember to use setTimeout to achieve that
Create a new function called "addMovie"
- it receives a movie object as an argument - your can create a new object for your favorite movie following using the "myMovies" objects as a guide 
- it adds the new movie to the list of movies after 2 seconds. Remember to setTimeout to achieve that
Call addMovies to add the new movie to the list and then showMovies to see the movies added on the screen.
How many movies can you see on your page?

Task 3
Can you make sure the new movie you just added is showing on the screen? 
TIP: use callbacks

Task 4
Create a form anywhere on your page. The form should have
- 4 input text fields, one for each property of your movie object
- a "save" button.
When the button is clicked
- The field values should be used to create a new movie object literal
- The new movie is then added to the list of movies and gets displayed on your page
TIP: Use the functions you created on tasks 1-3

================
*/
var movies = [
  {
    title: "Color Out of Space",
    director: "Richard Stanley",
    type: "sci-fi",
    haveWatched: true,
  },
  {
    title: "A Twelve-Year Night",
    director: "Álvaro Brechner",
    type: "horror",
    haveWatched: false,
  },
  {
    title: "The Whistlers",
    director: "Corneliu Porumboiu",
    type: "comedy",
    haveWatched: true,
  },
  {
    title: "The Invisible Man",
    director: "Leigh Whannell",
    type: "horror",
    haveWatched: false,
  },
];

// create showMovies function
var movieCounter = 0;

const allMoviesEl = document.getElementById("all-movies")
const moviesCountEl = document.getElementById("movies-number")

// create showMovies function
function showMovies(movies) {
  if (!Array.isArray(movies)) return

  movies.forEach(movie => addMovie(movie))
}

// create a new movie object for your favorite movie

const myFvaoriteMovie = {
  title: "Joker",
  director: "Todd Phillips",
  type: "psychological suspense",
  haveWatched: true
}

// create addMovies function

function addMovie(movie) {
  const pEl = document.createElement("p");
  const { title, director } =  movie
  pEl.textContent = `${title}, - ${director}`

  allMoviesEl.appendChild(pEl)

  moviesCountEl.textContent = ++movieCounter;
}

setTimeout(() => showMovies(movies), 1000)
setTimeout(() => addMovie(myFvaoriteMovie), 2000)

// Form
const formEl = document.createElement("form")
allMoviesEl.before(formEl)

const sampleMovie = movies[0]
Object.keys(sampleMovie).forEach(key => {
  const inputEL = document.createElement("input")
  inputEL.setAttribute("id", `${key}`)
  inputEL.placeholder = key
  formEl.appendChild(inputEL)
})
const submitButton = document.createElement("button")
submitButton.textContent = "Save"
formEl.appendChild(submitButton)
formEl.addEventListener("submit", onSave)

function onSave(ev) {
  ev.preventDefault()

  const newMovie = {}

  // console.log(ev.target.elements)

  Object.keys(sampleMovie).forEach(key => {
    newMovie[key] = ev.target.elements[key].value
  })

  addMovie(newMovie)

  // console.log("new one: ", newMovie)
}