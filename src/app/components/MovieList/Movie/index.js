function Movie({ title, rating, onRemove }) {

    //Funktion för att visa stjärnor baserat på betyg
    function getRatingStars(rating) {
        const stars = [];
        for (let i = 0; i < rating; i++) {
            stars.push(<img key={i} src="/star.png" alt="Stjärna" />);
        }
        return stars;
    }

    return (
        <div>
            <p>Title: {title}</p>
            <div>
                {getRatingStars(rating)}
            </div>
            <img src="/delete.png" alt="Ta bort film" onClick={onRemove}></img>
        </div>
    );
}

export default Movie;