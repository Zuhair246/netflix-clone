import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";
import { log } from "firebase/firestore/pipelines";

function Home() {
    const navigate = useNavigate();
    
    const handlLogout = async() => {
        try {
            await signOut(auth);
            console.log("User logged out");
            navigate('/login');
        } catch (error) {
            console.error("Logout error: ", error);
        }
    }
    
    return (
        <div>
            <h1>Netflix Clone</h1>
            <h2>Welcome to Home page</h2>
            <button onClick={handlLogout}>Logout</button>
        </div>
    )
}

export default Home;