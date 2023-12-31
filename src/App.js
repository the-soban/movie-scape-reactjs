import Home from "./Home";
import Search from "./Search";
import About from "./About";
import { Link, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from "react";
import { MovieProvider } from './MovieContext';
import { useMovieContext } from "./MovieContext";

const App = () => {
    // const { light, setLight } = useMovieContext();
    const [light, setLight] = useState(false);

    const handleClick = () => {
        setLight(!light);
        document.body.classList.toggle('light-body')

    }
    return (
        <MovieProvider>
            <nav>
                <Link className="link" to="/"><h1 className="logo">Moviescape</h1></Link>
                <ul>
                    <li className="theme-btn" onClick={handleClick}>Light Mode</li>
                    <li><Link className="link" to="/">Home Page</Link></li>
                    <li><Link className="link" to="/search">Search Page</Link></li>
                    <li><Link className="link" to="/about">About</Link></li>
                </ul>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/search" element={<Search />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </MovieProvider>
    );
}

export default App;