
// const items = document.querySelectorAll('.item');
//
// items.forEach(item => {
//     item.addEventListener('click', function() {
//         this.classList.toggle('flipped');
//     });
// });

// const items = document.querySelectorAll('.item');
//
// items.forEach(item => {
//     item.addEventListener('click', function () {
//         this.classList.toggle('flipped');
//     });
// });
//
// (async () => {
//     const moviesContainer = document.querySelector('.movie');
//     let movies = await getMovies();
//
//     const thirdMovie = movies[2]; // get the third array from the database
//     if (thirdMovie) {
//         const card = document.createElement('div');
//         card.classList.add('card');
//         card.innerHTML =
//             `<img src="https://m.media-amazon.com/images/I/714ZOEiVNtL._RI_.jpg" alt="Describe Image" class="image">
//         <div class="movie" data-movieId=${thirdMovie.id}><p class="title">${thirdMovie.title}</p> <p>Genre:
//             ${thirdMovie.genre}</p> <p>Date of Release: ${thirdMovie.year}</p> <p>Runtime: ${thirdMovie.runtime} minutes</p>
//             <p>Director: ${thirdMovie.director}</p> <p>Cast: ${thirdMovie.actors}</p> <p>Rating: ${thirdMovie.rating}</p>
//             <button class="edit-btn">Edit</button>
//             <button class="delete-btn">Delete</button>
//         </div>`;
//         moviesContainer.appendChild(card);
//     }
// })();



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
    let addedMoviePromise = await addMovie(movie);
    // let addedMovie = await addedMoviePromise.json();

    console.log(addedMovie);
});


// function newHTML(movies) {
//     for (let i = 0; i < movies.length; i++) {
//         let newDiv = document.createElement("div");
//         newDiv.classList.add("item");
//         newDiv.innerHTML = `
// <!--        <img src="https://flxt.tmsimg.com/assets/p15987_p_v8_ai.jpg" alt="Describe Image" class="image">-->
//         <div class="movie">
//             <h2 class="title">${movies[i].title}</h2>
//             <p class="year">${movies[i].year}</p>
//             <p class="director">${movies[i].director}</p>
//             <p class="rating">${movies[i].rating}</p>
//             <p class="runtime">${movies[i].runtime}</p>
//             <p class="genre">${movies[i].genre}</p>
//             <p class="actors">${movies[i].actors}</p>
//         </div>
//       `;
//         document.body.appendChild(newDiv);
//     }
// }

function newHTML(movies) {
    const existingDiv = document.querySelector(".item");

    for (let i = 0; i < movies.length; i++) {
        let movieHTML = `
      <div class="movie text-light">
        <h2 class="title">${movies[i].title}</h2>
        <p class="year">${movies[i].year}</p>
        <p class="director">${movies[i].director}</p>
        <p class="rating">${movies[i].rating}</p>
        <p class="runtime">${movies[i].runtime}</p>
        <p class="genre">${movies[i].genre}</p>
        <p class="actors">${movies[i].actors}</p>
      </div>
    `;

        existingDiv.insertAdjacentHTML("beforebegin", movieHTML);
    }
}


getMovies().then(function(movies){
    // console.log(movies)
    newHTML(movies);
});



//delete movie

// document.querySelector("#deleteButton").addEventListener("click", async function (){
//     const movie = { id: document.getElementById('movie-search').value};
//     console.log(movie);
//     const deletedMovie = await deleteMovie(movie);
//     console.log(deletedMovie);
// });


document.querySelector("#deleteButton").addEventListener("click", async function(e){
    e.preventDefault()
    let id = ""
    let moviesFetch = await getMovies();
    for(let i = 0; i < moviesFetch.length; i++){
        if(document.querySelector("#movieSearch").value === moviesFetch[i].title ){
            id = moviesFetch[i].id
        }
    }
    let movie =  {id};
    await deleteMovie(movie);
});


