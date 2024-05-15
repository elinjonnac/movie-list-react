import Button from "../../Button"

function Movie({ title, rating, onRemove }) {
    return (
        <div>
            <p>Title: {title}</p>
            <p>Rating: {rating}</p>
            <Button type="button" label="Remove" onClick={onRemove} />
        </div>
    );
}

export default Movie;
//TODO: så att rating motsvarar antal stjärnor som visas via img