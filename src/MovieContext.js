import React, { createContext, useContext, useState } from 'react';

const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
    const [movies, setMovies] = useState([]);

    // 1cdcba83
    const apiUrl = 'http://www.omdbapi.com?apikey=1cdcba83'

    const searchMovie = async (title) => {
        const response = await fetch(`${apiUrl}&s=${title}`)
        const data = await response.json()

        setMovies(data.Search)
    }

    return (
        <MovieContext.Provider value={{ movies, setMovies, searchMovie }}>
            {children}
        </MovieContext.Provider>
    );
};

export const useMovieContext = () => useContext(MovieContext);