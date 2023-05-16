
let movies = [];

//printing all movies
function newHTML(movies) {
    const existingDiv = document.querySelector(".item");

    for (let i = 0; i < movies.length; i++) {
        let movieHTML = `
        <div class="card text-white bg-dark mb-3" style="max-width: 18rem;">
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
        `;
        existingDiv.insertAdjacentHTML("beforebegin", movieHTML);
    }
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

    // Add the movie to the database
    const addedMovie = await addMovie(movie);
    console.log(addedMovie);

    // Add the movie to the movies array
    movies.push(addedMovie);

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
document.querySelector("#searchButton").addEventListener("click", async function(e){
    e.preventDefault();
    let userSearch = document.querySelector("#search").value;
    let moviesFetch = await getMovies();
    let searchedMovie = [];

    for(let i = 0; i < moviesFetch.length; i++) {
        if(userSearch === moviesFetch[i].title) {
            searchedMovie.push(moviesFetch[i]);
        }
    }

    newHTML(searchedMovie);
});


//load screen
// $(window).on('load', function () {
//     $('#loadingScreen').fadeIn(1000);
//     $('#contentContainer').hide();
//     setTimeout(function () {
//         $('#loadingScreen').fadeOut(1000);
//         $('#contentContainer').fadeIn(1000);
//         const wrapper = document.querySelector('.wrapper');
//         const section1 = document.createElement('section');
//         section1.id = 'section1';
//         const prevLink = document.createElement('a');
//         prevLink.href = '#section1';
//         prevLink.textContent = '‹';
//         section1.appendChild(prevLink);
//
//         const images = [
//             {
//                 src: "https://m.media-amazon.com/images/I/714ZOEiVNtL.RI.jpg",
//                 alt: "Describe Image",
//             },
//             {
//                 src: "https://flxt.tmsimg.com/assets/p15987_p_v8_ai.jpg",
//                 alt: "Describe Image",
//             },
//             {
//                 src: "./images/godfatherpart2.jpg",
//                 alt: "Describe Image",
//             }
//         ];
//
//         images.forEach(image => {
//             const item = document.createElement('div');
//             item.classList.add('item');
//             const button = document.createElement('button');
//             const img = document.createElement('img');
//             img.src = image.src;
//             img.alt = image.alt;
//             img.classList.add('image');
//             button.appendChild(img);
//             item.appendChild(button);
//             section1.appendChild(item);
//         });
//
//         const nextLink = document.createElement('a');
//         nextLink.href = '#section2';
//         nextLink.textContent = '›';
//         section1.appendChild(nextLink);
//
//         wrapper.appendChild(section1);
//     }, 2000);
// });