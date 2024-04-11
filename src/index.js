// Your code here
console.log("The page has finished loading");
const BASE_URL = "http://localhost:3000/films";
document.addEventListener("DOMContentLoaded", () => {
  fetchMovies();
});

function fetchMovies() {
  fetch(`${BASE_URL}`, {
    method: "GET",
    Headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((movie) => {
      (movie) => renderMovie(movie);
    })
    .catch((err) => console.log(err));
}
function appendMovieTitles() {
  const filmList = document.getElementById("films");
  var movies = movies.forEach((movies) => {
    const listItem = document.createElement("li");
    listItem.classList.add("film", "item");
    listItem.textContent = movies.title;
    filmList.appendChild(listItem);
  });
}
function updatePoster(movie) {
  const posterImage = document.getElementById("poster");
  posterImage.src = movie.poster;
  posterImage.alt = movie.title;
}
function updateShowingInfo(movie) {
  const titleElement = document.getElementById("title");
  const runtimeElement = document.getElementById("runtime");
  const filmInfoElement = document.getElementById("film-info");
  const showtimeElement = document.getElementById("showtime");
  const ticketNumElement = document.getElementById("ticket-num");

  titleElement.textContent = movie.title;
  runtimeElement.textContent = `${movie.runtime} minutes`;
  filmInfoElement.textContent = movie.description;
  showtimeElement.textContent = movie.showtime;
  ticketNumElement.textContent = movie.tickets;
}
document.addEventListener("DOMContentLoaded", () => {
  appendMovieTitles();

  const filmItems = document.querySelectorAll(".film.item");
  filmItems.forEach((item, index) => {
    item.addEventListener("click", () => {
      updatePoster(movies[index]);
      updateShowingInfo(movies[index]);
    });
  });
});
