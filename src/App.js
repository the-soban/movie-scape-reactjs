import Home from "./Home";
import Search from "./Search";
import About from "./About";
import { Link, Route, Routes } from 'react-router-dom';
import { useState } from "react";

const App = () => {
    const [light, setLight] = useState(false);

    const handleClick = () => {
        setLight(!light);
        document.body.classList.toggle('light-body')
    }

    return (
        <>
            <nav>
                <Link className="link" to="/"><h1>Moviescape</h1></Link>
                <ul>
                    <li className="theme-btn" onClick={handleClick}>Dark Mode</li>
                    <li><Link className="link" to="/">Home Page</Link></li>
                    <li><Link className="link" to="/search">Search Page</Link></li>
                    <li><Link className="link" to="/about">About</Link></li>
                </ul>
            </nav>
            {/* <Home /> */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/search" element={<Search />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </>
    );
}

export default App;