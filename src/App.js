import { useEffect } from "react";
import './App.css';
import searchIcon from './search.svg'

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
    const searchMovie = async (title) => {
        const response = await fetch(`${apiUrl}&s=${title}`);
        const data = await response.json();

        console.log(data.Search);
    }
    useEffect(() => {
        searchMovie('batman');
    }, []);
    return (
        <div className="app">
            <h1>Moviescape</h1>


            <div className="search">
                <input type="text" value="batman" onChange={() => { }} placeholder="Search for a movie..." />
                <img src={searchIcon} alt="search icon" onClick={() => { }} />
            </div>

            <div className="container">
                <div className="movie">
                    <div>
                        <p>{movie1.Year}</p>
                    </div>
                    <div>
                        <img src={movie1.Poster !== 'N/A' ? movie1.Poster : 'https://via.placeholder.com/400'} alt={movie1.Title} />
                    </div>
                    <div>
                        <span>{movie1.Type}</span>
                        <h3>{movie1.Title}</h3>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default App;