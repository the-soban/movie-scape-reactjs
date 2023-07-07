import { useEffect } from "react";
import './App.css';
import searchIcon from './search.svg'

// 1cdcba83

const apiUrl = 'http://www.omdbapi.com?apikey=1cdcba83';

const App = () => {
    const searchMovie = async (title) => {
        const response = await fetch(`${apiUrl}&s=${title}`);
        const data = await response.json();

        console.log(data.Search);
    }
    useEffect(() => {
        searchMovie('superman');
    }, []);
    return (
        <div className="app">
            <h1>Moviescape</h1>
        </div>
    );
}

export default App;