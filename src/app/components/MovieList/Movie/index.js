function Movie({ title, rating, onRemove }) {

    //Funktion för att visa stjärnor baserat på betyg
    function getRatingStars(rating) {
        const stars = [];
        for (let i = 0; i < rating; i++) {
            stars.push(<img key={i} id="star" src="/star.png" alt="Stjärna" />);
        }
        return stars;
    }

    return (
        <div className="movie">
            <p id="movie-title">Titel: {title}</p>
            <div>
                {getRatingStars(rating)}
            </div>
            <img id="delete-img" src="/delete.png" alt="Ta bort film" onClick={onRemove}></img>
        </div>
    );
}

export default Movie;