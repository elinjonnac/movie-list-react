import Movie from "./Movie";

function MovieList({ movies, onMovieRemove }) {
    /*
    Innehåller callback-funktionen "onMovieRemove" som ges som prop till Movie
    Index av filmen som klickats på tas som argument för att kunna identifiera
    den specifika filmen som ska tas bort.
    State uppdateras i pages.js
    */

    return (
        <div id="movie-list">
            <h2>Inlagda filmer</h2>
            {movies.map((movie, index) => (
                <Movie 
                    key={index} 
                    title={movie.title} 
                    rating={movie.rating}
                    onRemove={() => onMovieRemove(index)}
                 />
            ))}
        </div>

    );
}

export default MovieList;