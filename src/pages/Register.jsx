import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";

function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleRegister = async (e) => {
        e.preventDefault();

        try {
            const userCredential = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );

            console.log("User created:", userCredential.user);
        } catch (error) {
            console.error("Registration error:", error);
        }
    };

    return (
        <div>
            <h1>Create Account</h1>

            <form onSubmit={handleRegister}>
                <div>
                    <label>Email: </label>
                    <input 
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        />
                </div>

                <div>
                    <label>Password: </label>
                    <input 
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                        />
                </div>

                <button type="submit">
                    Create Account
                </button>
            </form>
        </div>
    )
}

export default Register;