import { useState, useEffect } from "react";
import './App.css';
import MovieItem from "./MovieItem";

// 1cdcba83
const apiUrl = 'http://www.omdbapi.com?apikey=1cdcba83';

const Search = () => {
    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState("");

    const searchMovie = async (title) => {
        const response = await fetch(`${apiUrl}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search);
    }

    useEffect(() => {
        searchMovie('');
    }, []);

    return (
        <div className="app">
            <h1>Moviescape</h1>
            <div className="search">
                <input type="text" value={search} onChange={(event) => {
                    setSearch(event.target.value)
                }} placeholder="Search for a movie..." />
                <p onClick={() => {
                    searchMovie(search)
                }}>
                    <svg width="35" height="35" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" /></svg>
                </p>
            </div>

            {
                movies?.length > 0
                    ? (<div className="container">
                        {movies.map((movie) => (
                            <MovieItem movie={movie} />
                        ))}
                    </div>) : (
                        <div className="empty">
                            <h2>No movies found. Please search again.</h2>
                        </div>
                    )
            }


        </div>

    );
}

export default Search;