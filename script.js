let movie1 = { name:'Citizen Kane', year: 1941, rating: 100 }
let movie2 = { name:'The Wizard of Oz', year: 1939, rating: 98 }
let movie3 = { name:'Casablanca', year: 1942, rating: 99 }
let movie4 = { name:'Modern Times', year: 1936, rating: 100 }
let movie5 = { name:'It Happened One Night', year: 1934, rating: 98 }
let movie6 = { name:'A Night at the Opera', year: 1935, rating: 97 }
let movie7 = { name:'The Third Man', year: 1949, rating: 99 }
let movie8 = { name:'Grand Illusion', year: 1938, rating: 97 }
let movie9 = { name:'Snow White and the Seven Dwarfs', year: 1937, rating: 98 }
let movie10 = { name:'Singin\' in the Rain', year: 1952, rating: 100 }

let state = {
  headerText: 'Movies',
  movies: [ movie1, movie2, movie3, movie4, movie5, movie6, movie7, movie8, movie9, movie10 ],
  sortBy: "rating",
};

const render = () => {
  let root = document.getElementById("root");
  let htmlString = `<h1>${state.headerText}</h1>`;
  htmlString += `<button id='add' onclick='addMovie()'>Add Movie</button>`;
  htmlString += `<p>Click a Movie to Update it</p>`
  htmlString += renderMovies();
  root.innerHTML = htmlString;
};

const renderMovies = () => {
  let htmlString = `<div class='list'>`;
  state.movies.forEach((movie, index) => {
  htmlString += `<div class='movie'>
                  <div onclick='updateMovie(${index})'>${index + 1}) ${movie.name}<br/>Year: ${movie.year}<br/>Rating: ${movie.rating}</div>
                  <button onclick='deleteMovie(${index})'>Delete</button>
                  </div>`;
  });
  htmlString += `</div>`;
  return htmlString;
};

const addMovie = () => {
  let name = prompt('Enter Movie Name');
  let year = prompt('Enter Movie Year');
  let rating = prompt('Enter Movie Rating');
  let newMovie = {name: name, year: year, rating: rating}
  state.movies.push(newMovie);
  render();
};

const updateMovie = (index) => {
  let name = prompt('Update Movie Name');
  let year = prompt('Update Movie Year');
  let rating = prompt('Update Movie Rating');
  state.movies[index].name = name;
  state.movies[index].year = year;
  state.movies[index].rating = rating;
  render();
};

const deleteMovie = (index) => {
  const filteredMovie = state.movies.filter((movie, currentIndex) => {
    return currentIndex !== index;
  });
  state.movies = filteredMovie;
  render();
};


render();
