import { Routes, Route } from "react-router-dom";

import Register from "./pages/register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import ProtectedRoute from "./routes/ProtectedRoute";
import GuestRoute from "./routes/GuestRoute";

function App() {

  return (
    <>
      <Routes>
        <Route path="/register" element={
          <GuestRoute>
            <Register />
          </GuestRoute>
          } />
        <Route path="/login" element={
          <GuestRoute>
            <Login />
          </GuestRoute> 
            } />
        <Route path="/home" element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
            }
           />
      </Routes>
    </>
  )
}

export default App
