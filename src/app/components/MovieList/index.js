import Movie from "./Movie";

function MovieList({ movies }) {
    return (
        <div>
            <h2>Inlagda filmer</h2>
            {movies.map((movie, index) => (
                <Movie key={index} title={movie.title} rating={movie.rating} />
            ))}
        </div>

    );
}

export default MovieList;