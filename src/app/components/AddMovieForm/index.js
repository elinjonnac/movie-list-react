import { useState } from "react";
//import Button from "../Button";

function AddMovieForm({ updateMovies }) {
    const [title, setTitle] = useState("");
    const [rating, setRating] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        console.log('Title:', title);
        console.log('Rating:', rating);
        //TODO: Skicka data till MovieList
        //setMovies([...movies, { title, rating }]);
        updateMovies({ title, rating })

        //Nollställer formulärsfälten
        setTitle("");
        setRating("");
    }

    function handleTitleChange(event) {
        setTitle(event.target.value);
    }

    function handleRatingChange(event) {
        setRating(event.target.value);
    }

    return (
        <div>
            <h2>Lägg till en film</h2>
            <form id="add-movie-form" onSubmit={handleSubmit}>
                
            <fieldset>
                <label htmlFor="title-field">Titel:</label>
                <input
                    type="text"
                    id="title-field"
                    className="form-control"
                    value={title}
                    onChange={handleTitleChange}
                    required
                />
        
                <label htmlFor="rating-field">Betyg:</label>
                <select
                    id="rating-field"
                    className="form-control"
                    value={rating}
                    onChange={handleRatingChange}
                    required
                >
                    <option value="">Välj betyg här...</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
        
                <input type="submit" value="Spara film"/>
            </fieldset>
        </form>
      </div>
    );
}


export default AddMovieForm;