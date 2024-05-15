"use client";
import { useState } from "react";
import AddMovieForm from "./components/AddMovieForm";
import MovieList from "./components/MovieList";
import Movie from "./components/MovieList/Movie";
import Button from "./components/Button";
//import Image from "next/image";
//import styles from "./page.module.css";
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

  return (
    <div className="main">
      <h1>Min Filmlista</h1>
      <AddMovieForm updateMovies={updateMovies} />
      <MovieList movies={movies} onMovieRemove={removeMovie} />
      <Button type="button" label="Sortera alfabetiskt" />
      <Button type="button" label="Sortera efter betyg" />
    </div>
  )
}

//TODO
//Buttons för sortering

/*
export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>src/app/page.js</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className={styles.grid}>
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Docs <span>-&gt;</span>
          </h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Learn <span>-&gt;</span>
          </h2>
          <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Templates <span>-&gt;</span>
          </h2>
          <p>Explore starter templates for Next.js.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Deploy <span>-&gt;</span>
          </h2>
          <p>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
  );
}
*/