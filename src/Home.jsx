import './App.css'
import { useEffect } from 'react'
import { useMovieContext } from './MovieContext'
import HomeMovieItem from './HomeMovieItem'

const Home = () => {
    const { movies, searchMovie } = useMovieContext()
    searchMovie('islam')

    useEffect(() => {
        searchMovie('')
    }, [])

    return (
        <>
            <main className="main">
                <section className="hero-section">
                    <div className="hero-images">
                        <h2>Discover the World of Movies with Our App! 🎬🍿</h2>
                        <p>
                            Whether you're a die-hard cinephile or just looking
                            for a cozy movie night, we've got you covered.
                            Introducing the easiest way to explore, search, and
                            dive into the captivating world of cinema.
                        </p>
                        {movies?.length > 0 ? (
                            <div className="home-container">
                                {movies.map((movie) => (
                                    <HomeMovieItem movie={movie} />
                                ))}
                            </div>
                        ) : (
                            <div className="home-empty">
                                <h2>Search for Movies!</h2>
                            </div>
                        )}
                    </div>
                </section>
            </main>
        </>
    )
}

export default Home
