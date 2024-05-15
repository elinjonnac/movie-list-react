"use client";
import { useState } from "react";
import AddMovieForm from "./components/AddMovieForm";
import MovieList from "./components/MovieList";
import Button from "./components/Button";
import styles from "./styles.css";


export default function Home() {
  const [movies, setMovies] = useState([]);

  //Funktion för att uppdatera array av filmer
  function updateMovies(newMovie) {
    setMovies([...movies, newMovie]);
  }

  //Funktion för att ta bort film
  function removeMovie(index) {
    const updatedMovies = [...movies];
    //Ta bort film baserat på index
    updatedMovies.splice(index, 1);
    //Uppdatera state med ny array
    setMovies(updatedMovies);
  }

  //Funktion för alfabetisk sortering
  function sortByTitle() {
    const sortedMovies = [...movies].sort(sortByTitleComparison);
    setMovies(sortedMovies);
  }

  //Funktion för sortering baserat på betyg
  function sortByRating() {
    const sortedMovies = [...movies].sort(sortByRatingComparison);
    setMovies(sortedMovies);
  }

  //Funktion för att jämföra filmer inför alfabetisk sortering
  function sortByTitleComparison(movieA, movieB) {
    if (movieA.title < movieB.title) {
      return -1;
    } else if (movieA.title > movieB.title) {
      return 1;
    } else {
      return 0;
    }
  }

  //Funktion för att jämföra filmer inför sortering på betyg
  function sortByRatingComparison(movieA, movieB) {
    return movieB.rating - movieA.rating;
  }

  return (
    <div className="main">
      <h1>Min Filmlista</h1>
      <AddMovieForm updateMovies={updateMovies} />
      <MovieList movies={movies} onMovieRemove={removeMovie} />
      <Button type="button" label="Sortera alfabetiskt" onClick={sortByTitle} />
      <Button type="button" label="Sortera efter betyg" onClick={sortByRating} />
    </div>
  )
};