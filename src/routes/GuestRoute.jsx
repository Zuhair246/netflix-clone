import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function GuestRoute({ children }) {
    const { user, loading } = useAuth();

    if(loading) {
        return <h2>Loading...</h2>
    }

    if(user) {
        return <Navigate to="/home" replace />
    }

    return children;
}

export default GuestRoute;