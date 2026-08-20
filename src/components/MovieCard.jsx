function MovieCard ({ movie }) {
    const imageUrl = movie.poster_path 
                    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` 
                    : "/placeholder.jpg";

    return (
        <div className="movie-card">
            <img src={imageUrl} 
                alt={movie.title || movie.name} />

            <div className="movie-card-info">
                <h3>{movie.title || movie.name}</h3>

                <p>⭐{movie.vote_average?.toFixed(1)}</p>   
            </div>
        </div>
    )
}

export default MovieCard;