import { useEffect, useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";

import { getPopularMovies } from '../services/movieService';
import MovieCard from '../components/MovieCard';


function Home() {
    const navigate = useNavigate();

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
    
    const handleLogout = async() => {
        try {
            await signOut(auth);
            navigate('/login');
        } catch (error) {
            console.error("Logout error: ", error);
        }
    }

    if (loading) {
        return <h2>Loading movies...</h2>
    }

    if(error) {
        <h2>{error}</h2>
    }
    
    return (
        <div>
            <h1>Netflix Clone</h1>
            <button onClick={handleLogout}>Logout</button>
            <h2>Popular Movies</h2>

            <div>
                {
                    movies.map((movie) => (
                        <MovieCard
                            key={movie.id}
                            movie={movie}    
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default Home;