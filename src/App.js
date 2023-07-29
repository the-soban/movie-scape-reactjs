import { useState, useEffect } from "react";
import './App.css';
import searchIcon from './search.svg'
import MovieItem from "./MovieItem";

// 1cdcba83

const apiUrl = 'http://www.omdbapi.com?apikey=1cdcba83';

const movie1 = {
    "Title": "Batman Begins",
    "Year": "2005",
    "imdbID": "tt0372784",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
}

const App = () => {
    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState("");

    const searchMovie = async (title) => {
        const response = await fetch(`${apiUrl}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search);
    }

    useEffect(() => {
        searchMovie('batman');
    }, []);

    return (
        <div className="app">
            <h1>Moviescape</h1>
            <div className="search">
                <input type="text" value={search} onChange={(event) => {
                    setSearch(event.target.value)
                }} placeholder="Search for a movie..." />
                <img src={searchIcon} alt="search icon" onClick={() => {
                    searchMovie(search)
                }} />
            </div>

            {
                movies?.length > 0
                    ? (<div className="container">
                        {movies.map((movie) => (
                            <MovieItem movie={movie} />
                        ))}
                    </div>) : (
                        <div className="empty">
                            <h2>No movies found</h2>
                        </div>
                    )
            }


        </div>

    );
}

export default App;