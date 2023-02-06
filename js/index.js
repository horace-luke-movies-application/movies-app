
// const items = document.querySelectorAll('.item');
//
// items.forEach(item => {
//     item.addEventListener('click', function() {
//         this.classList.toggle('flipped');
//     });
// });
//
// (async () => {
//     const moviesContainer = document.querySelector('.movies-container');
//    let movies = await getMovies()
//     console.log(movies)
// console.log(getMovies())
//     for (let card of cards) {
//     }
//         card.innerHTML =
//             `<img src="https://m.media-amazon.com/images/I/714ZOEiVNtL._RI_.jpg" alt="Describe Image" class="image">
//                 <div class="movie" data-movieId=${movie.id}><p class="title">${movie.title}</p> <p>Genre:
//                     ${movie.genre}</p> <p>Date of Release: ${movie.year}</p> <p>Runtime: ${movie.runtime} minutes</p>
//                     <p>Director: ${movie.director}</p> <p>Cast: ${movie.actors}</p> <p>Rating: ${movie.rating}</p>
//                     <button class="edit-btn">Edit</button>
//                     <button class="delete-btn">Delete</button>
//                 </div>`
//                 ;
//                 console.log(card);
// }
//
//
// })();
const items = document.querySelectorAll('.item');

items.forEach(item => {
    item.addEventListener('click', function () {
        this.classList.toggle('flipped');
    });
});

(async () => {
    const moviesContainer = document.querySelector('.movie');
    let movies = await getMovies();

    const thirdMovie = movies[2]; // get the third array from the database
    if (thirdMovie) {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML =
            `<img src="https://m.media-amazon.com/images/I/714ZOEiVNtL._RI_.jpg" alt="Describe Image" class="image">
        <div class="movie" data-movieId=${thirdMovie.id}><p class="title">${thirdMovie.title}</p> <p>Genre:
            ${thirdMovie.genre}</p> <p>Date of Release: ${thirdMovie.year}</p> <p>Runtime: ${thirdMovie.runtime} minutes</p>
            <p>Director: ${thirdMovie.director}</p> <p>Cast: ${thirdMovie.actors}</p> <p>Rating: ${thirdMovie.rating}</p>
            <button class="edit-btn">Edit</button>
            <button class="delete-btn">Delete</button>
        </div>`;
        moviesContainer.appendChild(card);
    }
})();
