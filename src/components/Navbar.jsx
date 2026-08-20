import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";

function Navbar() {
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await signOut(auth);
            navigate('/login');
        } catch (error) {
            console.error("Logout error: ",error);
        }
    };

    return(
        <nav className="navbar">
            <div className="navbar-left">
                <h1 className="logo">NETFLIX</h1>

                <div className="nav-links">
                    <button onClick={() => navigate("/home")}>
                        Home
                    </button>
                    <button>Movies</button>
                    <button>TV Shows</button>
                    <button>My List</button>
                </div>
            </div>

            <button 
                className="logout-button"
                onClick={handleLogout}
                >
                    Logout
                </button>
        </nav>
    )
}

export default Navbar;