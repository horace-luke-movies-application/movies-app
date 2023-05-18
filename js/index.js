//printing all movies
function newHTML(movies) {
    const existingDiv = document.querySelector(".item");

    // Clear the existing movie cards
    existingDiv.innerHTML = "";

    let movieHTML = `<div class="row">`;

    for (let i = 0; i < movies.length; i++) {
        movieHTML += `
        <div class="col-md-4">
            <div class="card text-white bg-dark mb-3">
                <div class="card-body">
                    <h5 class="card-title">${movies[i].title}</h5>
                    <p class="card-text">Year: ${movies[i].year}</p>
                    <p class="card-text">Director: ${movies[i].director}</p>
                    <p class="card-text">Rating: ${movies[i].rating}</p>
                    <p class="card-text">Runtime: ${movies[i].runtime}</p>
                    <p class="card-text">Genre: ${movies[i].genre}</p>
                    <p class="card-text">Actors: ${movies[i].actors}</p>
                </div>
            </div>
        </div>
        `;
    }

    movieHTML += `</div>`;
    existingDiv.insertAdjacentHTML("beforeend", movieHTML);
}


getMovies().then(function(movies){
    newHTML(movies);
});

//add movie w listeners
document.querySelector("#addSubmit").addEventListener("click", async function(event) {
    event.preventDefault();
    const movie = {
        title: document.querySelector("#title").value,
        year: document.querySelector("#year").value,
        director: document.querySelector("#director").value,
        rating: document.querySelector("#rating").value,
        runtime: document.querySelector("#runtime").value,
        genre: document.querySelector("#genre").value,
        actors: document.querySelector("#actors").value
    };
    console.log(movie);

    // Add the movie to the database
    const addedMovie = await addMovie(movie);
    console.log(addedMovie); // This is the movie with the id

    // Get the updated movies list after adding the movie
    const movies = await getMovies();

    // Clear the existing movie cards
    const existingDiv = document.querySelector(".item");
    existingDiv.innerHTML = "";

    // Render the updated movies
    newHTML(movies);
});

//delete movie
document.querySelector("#deleteButton").addEventListener("click", async function(e){
    e.preventDefault();
    const movieTitle = document.querySelector("#movieSearch").value;

    // Get movies from the database
    const movies = await getMovies();

    // Find the movie by title
    const movieToDelete = movies.find(movie => movie.title === movieTitle);

    if (movieToDelete) {
        // Delete the movie from the database
        await deleteMovie(movieToDelete);
        alert("Movie deleted successfully!");

        // Remove the movie from the movies array
        const updatedMovies = movies.filter(movie => movie.id !== movieToDelete.id);

        // Clear the existing movie cards
        const existingDiv = document.querySelector(".item");
        existingDiv.innerHTML = "";

        // Render the updated movies
        newHTML(updatedMovies);
    } else {
        alert("Movie not found!");
    }
});




//search button
document.querySelector("#search").addEventListener("input", async function(e) {
    e.preventDefault();
    let userSearch = e.target.value;
    let moviesFetch = await getMovies();
    let searchedMovies = [];

    for (let i = 0; i < moviesFetch.length; i++) {
        if (moviesFetch[i].title.includes(userSearch)) {
            searchedMovies.push(moviesFetch[i]);
        }
    }

    // Clear the existing movie cards
    const existingDiv = document.querySelector(".item");
    existingDiv.innerHTML = "";

    // Render the searched movies
    newHTML(searchedMovies);
});



