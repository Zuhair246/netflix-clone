import { useEffect, useState } from "react";

import { getPopularMovies } from '../services/movieService';

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import MovieRow from "../components/MovieRow";


function Home() {

    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const data = await getPopularMovies();
                setMovies(data);
            } catch (error) {
                console.error("Movie fetch error: ",error);
                setError("Failed to load movies...");
            }finally {
                setLoading(false);
            }
        };
        fetchMovies();
    },[]);

    if (loading) {
        return <h2>Loading movies...</h2>
    }

    if(error) {
        <h2>{error}</h2>
    }

    const featuredMovie = movies[0];
    
    return (
        <div className="home-page">
            <Navbar />
            
            <Hero movie={featuredMovie} />

            <main className="movie-section">
                <MovieRow
                    title="Popular Movies"
                    movies={movies}
                />
            </main>
        </div>
    )
}

export default Home;