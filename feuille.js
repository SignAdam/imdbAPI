document.getElementById('searchButton').addEventListener('click', function() {
    var searchQuery = document.getElementById('searchInput').value;
    if (searchQuery) {
        fetch(`http://www.omdbapi.com/?apikey=d0da5fb8&s=${encodeURIComponent(searchQuery)}`)
            .then(response => response.json())
            .then(data => {
                const movies = data.Search;
                const moviesList = document.getElementById('moviesList');
                moviesList.innerHTML = ''; 
                movies.forEach(movie => {
                    const movieElement = document.createElement('div');
                    movieElement.innerHTML = `
                        <div class="deux">
                        <img src="${movie.Poster}" alt="${movie.Title}">
                        <h3>${movie.Title}</h3>
                        <button onclick="showMovieDetails('${movie.imdbID}')">Voir plus</button>
                        </div>
                    `;
                    moviesList.appendChild(movieElement);
                });
            })
            .catch(error => console.error(error));
    }
});



function showMovieDetails(imdbID) {
    window.location.href = `details.html?imdbID=${imdbID}`;
}
