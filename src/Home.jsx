import './App.css'

const Home = () => {
    return (
        <>
            <main className="main">
                <section className="hero-section">
                    <div className="hero-images">
                        <img
                            className="hero-poster"
                            src="/posters/poster-1917.jfif"
                            alt="hero"
                        />
                        <img
                            className="hero-poster"
                            src="/posters/poster-drive.jfif"
                            alt="hero"
                        />
                    </div>
                    <h2>Discover the World of Movies with Our App! 🎬🍿</h2>
                    <p>
                        Whether you're a die-hard cinephile or just looking for
                        a cozy movie night, we've got you covered. Introducing
                        the easiest way to explore, search, and dive into the
                        captivating world of cinema.
                    </p>
                </section>
            </main>
        </>
    )
}

export default Home
