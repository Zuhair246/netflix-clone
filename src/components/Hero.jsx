function Hero({ movie }) {
    if(!movie) {
        return null;
    }

    const backdropUrl = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`;

    return(
        <section 
            className="hero"
            style={{
                backgroundImage: `url(${backdropUrl})`,
            }}
            >
                <div className="hero-content">
                    <h1>{movie.title}</h1>

                    <p>
                        {movie.overview}
                    </p>

                    <div className="hero-buttons">
                        <button className="play-button">
                            ▶ Play
                        </button>

                        <button className="info-button">
                            More Info
                        </button>
                    </div>
                </div>
        </section>
    )
}

export default Hero;