import "./app.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Post from "./pages/Post";
import Navbar from "./components/Navbar";
import { useState, useEffect } from "react";

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("http://localhost:2000/auth/login/success", {
      method: "GET",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true,
      },
    })
    .then((res) => {
      if(res.status === 200) return res.json();
      throw new Error("authentication has been failed!");
    })
    .then((resObject) => setUser(resObject))
    .catch((err) => console.log(err));
  }, []);

  return (
    <BrowserRouter>
      <Navbar user={user}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={user? <Navigate to="/" /> : <Login />} />
        <Route path="/post/:id" element={user? <Post /> : <Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
