import { useState, useEffect } from "react";
import './App.css';

const Home = () => {
    return(
        <main>
            <nav>
            <h1>Moviescape</h1>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Search</a></li>
                <li><a href="#">About</a></li>
            </ul>
            </nav>

            <section>
                <h2>Search for any Movies</h2>
            </section>
        </main>
    );
}

export default Home;