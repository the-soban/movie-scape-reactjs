import Home from "./Home";
import Search from "./Search";
import { Link, Route, Routes } from 'react-router-dom';

const App = () => {
    return (
        <>
            <nav>
                <li><Link to="/">Home Page</Link></li>
                <li><Link to="/search">Search Page</Link></li>
            </nav>
            {/* <Home /> */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/search" element={<Search />} />
            </Routes>
        </>
    );
}

export default App;