import Home from "./Home";
import Search from "./Search";
import About from "./About";
import { Link, Route, Routes } from 'react-router-dom';

const App = () => {
    return (
        <>
            <nav>
                <h1>Moviescape</h1>
                <ul>
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