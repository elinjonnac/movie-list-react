import Button from "../../Button"

function Movie({ title, rating, onRemove }) {

    function getRatingStars(rating) {
        const stars = [];
        for (let i = 0; i < rating; i++) {
            stars.push(<img key={i} src="/star.png" alt="Star" />);
        }
        return stars;
    }

    return (
        <div>
            <p>Title: {title}</p>
            <p>Rating: {rating}</p>
            <div>
                {getRatingStars(rating)}
            </div>
            <Button type="button" label="Ta bort" onClick={onRemove} />
            <img src="/delete.png" alt="delete-icon" onclick={onRemove}></img>
        </div>
    );
}

export default Movie;